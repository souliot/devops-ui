<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    :title="getTitle"
    @ok="handleSubmit"
    @cancel="closeFunc"
  >
    <!-- <EnvForm :etcdEndpoints="etcdEndpoints"></EnvForm> -->
    <EnvForm ref="formRef" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import EnvForm from './EnvForm.vue';
  import { addEnv, editEnv } from '/@/api/devops/env';

  export default defineComponent({
    name: 'EnvModal',
    components: { BasicModal, EnvForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');
      const formRef = ref();
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        formRef.value.resetForm();
        // 重置form数据
        setModalProps({ confirmLoading: false, maskClosable: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          rowId.value = data.record.id;
          // 初始化form数据
          formRef.value.setFieldsValue(data.record);
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增环境' : '编辑环境'));

      async function handleSubmit() {
        try {
          const values = await formRef.value.validate();
          // 表单验证
          setModalProps({ confirmLoading: true });
          // TODO custom api
          try {
            if (unref(isUpdate)) {
              await editEnv({ ...values, id: rowId.value });
            } else {
              await addEnv(values);
            }
          } catch (error) {
            return;
          }

          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        } catch (error) {
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }
      const closeFunc = () => {
        formRef.value.resetForm();
      };

      return { formRef, registerModal, getTitle, handleSubmit, closeFunc };
    },
  });
</script>
