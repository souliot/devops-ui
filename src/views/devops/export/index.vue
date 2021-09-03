<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 添加监控节点 </a-button>
      </template>
      <template #array="{ record }">
        <template v-if="record.configsType == 'static'">
          <a-tag v-for="(item, index) in record.targets" :key="index">{{ item }}</a-tag>
        </template>
        <template v-if="record.configsType == 'http'">
          <a-tag color="#87d068">{{ record.url }}</a-tag>
        </template>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑监控节点',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除此监控节点',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <ExportModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import ExportModal from './ExportModal.vue';
  import { columns } from './data';
  import { Tag } from 'ant-design-vue';
  import { getExportList, delExport } from '/@/api/devops/export';
  export default defineComponent({
    name: 'ExportIndex',
    components: { BasicTable, ExportModal, TableAction, [Tag.name]: Tag },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        api: getExportList,
        rowKey: 'id',
        bordered: true,
        showIndexColumn: true,
        showTableSetting: true,
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

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        delExport(record.id).then(() => {
          reload();
        });
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

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleReloadCurrent,
      };
    },
  });
</script>
