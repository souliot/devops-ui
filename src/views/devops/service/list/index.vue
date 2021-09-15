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
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { columns, getFormConfig } from './data';
  import { Tag } from 'ant-design-vue';
  import { getServiceList, delService, setOutAddress } from '/@/api/devops/service';
  export default defineComponent({
    name: 'ServiceIndex',
    components: { BasicTable, TableAction, [Tag.name]: Tag },
    setup() {
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

      function handleSuccess({ isUpdate }) {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          // updateTableDataRecord(values.id, values);
          reload();
        } else {
          reload();
        }
      }

      function handleEditEnd({ record, value }: Recordable) {
        setOutAddress(record.Env, record.Id, value);
      }

      function handleEditCancel() {
        console.log('cancel');
      }

      return {
        metrics,
        registerTable,
        handleDelete,
        handleSuccess,
        handleReloadCurrent,
        handleEditEnd,
        handleEditCancel,
      };
    },
  });
</script>
