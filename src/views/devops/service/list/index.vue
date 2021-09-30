<template>
  <div>
    <BasicTable @register="registerTable" @edit-end="handleEditEnd" @edit-cancel="handleEditCancel">
      <template #status="{ record }">
        <Tag v-if="record.IsOnline && (!record.Status || record.Status == 0)" color="#87d068"
          >在线</Tag
        >
        <Tag v-if="record.IsOnline && record.Status == 1" color="#2db7f5">挂起</Tag>
        <Tag v-if="!record.IsOnline" color="#f50">离线</Tag>
      </template>
      <template #metrics="{ record }">
        <Tag v-if="record.MetricsType" color="#87d068">启用</Tag>
        <Tag v-if="!record.MetricsType" color="#f50">禁用</Tag>
      </template>
      <template #address="{ record }">
        <a-button v-if="record.MetricsType" type="link" @click="metrics(record.Address)">{{
          record.Address
        }}</a-button>
        <text v-if="!record.MetricsType">{{ record.Address }}</text>
      </template>
      <template #outAddress="{ record }">
        <a-button v-if="record.MetricsType" type="link" @click="metrics(record.OutAddress)">{{
          record.OutAddress
        }}</a-button>
        <text v-if="!record.MetricsType" type="link">{{ record.OutAddress }}</text>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEditSetting.bind(null, record),
              tooltip: '修改服务配置',
            },
            {
              icon: 'ion:document-text-outline',
              onClick: handleLogger.bind(null, record),
              tooltip: '查看服务日志',
            },
            {
              icon: 'ion:ios-refresh',
              onClick: handleController.bind(null, record),
              tooltip: '重启服务',
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除此服务',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <SettingDrawer @register="registerDrawer" @success="handleSuccess" />
    <LoggerModal @register="registerModal" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { columns, getFormConfig } from './data';
  import { Tag, message } from 'ant-design-vue';
  import { useDrawer } from '/@/components/Drawer';
  import { useModal } from '/@/components/Modal';
  import { getServiceList, delService, setOutAddress } from '/@/api/devops/service';
  import { controller } from '/@/api/devops/controller';
  import SettingDrawer from './SettingDrawer.vue';
  import LoggerModal from './LoggerModal.vue';

  export default defineComponent({
    name: 'ServiceIndex',
    components: { BasicTable, TableAction, SettingDrawer, Tag, LoggerModal },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload }] = useTable({
        api: getServiceList,
        rowKey: (record) => {
          return record.Env + '_' + record.Typ + '_' + record.Id;
        },
        bordered: true,
        showIndexColumn: true,
        showTableSetting: true,
        useSearchForm: true,
        formConfig: getFormConfig(),
        columns: columns,
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      function handleReloadCurrent() {
        reload();
      }

      function handleDelete(record: Recordable) {
        delService(record.Env, record.Path, record.Typ, record.Id).then(() => {
          reload();
        });
      }
      function handleController(record: Recordable) {
        controller(record.Env, record.Id).then(() => {
          message.success('发送重启命令成功！');
        });
      }

      function metrics(addr: string) {
        window.open('http://' + addr + '/metrics', 'metrics');
      }

      function handleSuccess() {}

      function handleEditEnd({ record, value }: Recordable) {
        setOutAddress(record.Env, record.Id, value);
      }

      function handleEditCancel() {
        console.log('cancel');
      }
      const [registerModal, { openModal, setModalProps }] = useModal();

      function handleLogger(record: Recordable) {
        setModalProps({
          width: 1024,
          height: 600,
          minHeight: 600,
          showOkBtn: false,
          showCancelBtn: false,
          footer: null,
        });
        openModal(true, {
          record,
          isUpdate: false,
        });
      }

      function handleEditSetting(record: Recordable) {
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }

      return {
        metrics,
        registerTable,
        handleDelete,
        handleLogger,
        handleSuccess,
        handleReloadCurrent,
        handleEditEnd,
        handleEditCancel,
        handleEditSetting,
        handleController,
        registerDrawer,
        registerModal,
      };
    },
  });
</script>
