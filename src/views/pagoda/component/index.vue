<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #version="{ record }">
        <Tag color="blue">
          {{ record.version }}
        </Tag>
      </template>
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 添加组件 </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑组件',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除此组件',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <ComponentModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import { columns } from './component.data';
  import ComponentModal from './ComponentModal.vue';
  import { Tag } from 'ant-design-vue';

  import { getComponentList, delComponent } from '/@/api/pagoda/component';
  export default defineComponent({
    name: 'ComponentIndex',
    components: { BasicTable, ComponentModal, TableAction, Tag },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        api: getComponentList,
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
        delComponent(record.id).then(() => {
          reload();
        });
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          updateTableDataRecord(values.id, values);
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
