<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @cancel="closeFunc">
    <ScrollContainer class="mt-4">
      <ul>
        <template v-for="(item, index) in state.recordList" :key="index">
          <li class="p-2">
            <Tag color="#2db7f5">{{ index + 1 }}</Tag>
            {{ item }}
          </li>
        </template>
      </ul>
    </ScrollContainer>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, computed, reactive, watchEffect } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { ScrollContainer } from '/@/components/Container';
  import { useWebSocket } from '@vueuse/core';
  import { Tag } from 'ant-design-vue';

  export default defineComponent({
    name: 'LoggerModal',
    components: { BasicModal, Tag, ScrollContainer },
    emits: ['success', 'register'],
    setup() {
      let ws_close;
      const [registerModal, { setModalProps }] = useModalInner(async (m_data) => {
        // 重置form数据
        setModalProps({ confirmLoading: false, maskClosable: false });
        const instance = m_data.record.Address;
        const typ = m_data.record.Typ;
        const ip = instance.split(':')[0];
        const server = 'ws://' + ip + ':8890/v1/logs?instance=' + instance + '&typ=' + typ;
        console.log(server);
        const { data, open, close } = useWebSocket(server, {
          autoReconnect: false,
          heartbeat: {
            message: 'ping',
            interval: 60 * 1000,
          },
          immediate: false,
          onConnected: () => {
            console.log('connected');
          },
          onDisconnected: () => {
            console.log('disconnected');
            state.recordList = [];
          },
        });
        watchEffect(() => {
          if (data.value) {
            try {
              const res = JSON.parse(data.value);
              state.recordList.push(res);
            } catch (error) {
              state.recordList.push({
                res: data.value,
              });
            }
          }
        });
        ws_close = close;
        open();
      });

      const getTitle = computed(() => '服务日志');

      const state = reactive({
        recordList: [] as { res: string }[],
      });

      const closeFunc = () => {
        ws_close();
        state.recordList = [];
        console.log(state.recordList);
      };

      return { registerModal, getTitle, state, closeFunc };
    },
  });
</script>
