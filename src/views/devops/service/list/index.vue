<template>
  <div>
    <BasicTable @register="registerTable" @edit-end="handleEditEnd" @edit-cancel="handleEditCancel">
      <template #status="{ record }">
        <a-tag v-if="record.Status" color="#87d068">在线</a-tag>
        <a-tag v-if="!record.Status" color="#f50">离线</a-tag>
      </template>
      <template #metrics="{ record }">
        <a-tag v-if="record.MetricsType" color="#87d068">启用</a-tag>
        <a-tag v-if="!record.MetricsType" color="#f50">禁用</a-tag>
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
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { columns, getFormConfig } from './data';
  import { Tag } from 'ant-design-vue';
  import { useDrawer } from '/@/components/Drawer';
  import { getServiceList, delService, setOutAddress } from '/@/api/devops/service';
  import SettingDrawer from './SettingDrawer.vue';
  export default defineComponent({
    name: 'ServiceIndex',
    components: { BasicTable, TableAction, [Tag.name]: Tag, SettingDrawer },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload }] = useTable({
        api: getServiceList,
        rowKey: 'Id',
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
        handleSuccess,
        handleReloadCurrent,
        handleEditEnd,
        handleEditCancel,
        handleEditSetting,
        registerDrawer,
      };
    },
  });
</script>
