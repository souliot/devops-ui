<template>
  <div>
    <BasicTable @register="registerTable">
      <template #required="{ record }">
        <Switch
          checked-children="是"
          un-checked-children="否"
          v-model:checked="record.required"
          disabled
        />
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
    <PropertiesModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import { columns, getFromConfig } from './properties.data';
  import PropertiesModal from './PropertiesModal.vue';
  import { Switch } from 'ant-design-vue';

  import { getPropertiesList, delProperties } from '/@/api/pagoda/properties';
  // import { getComponentList } from '/@/api/pagoda/component';
  // import { ComponentInfo } from '/@/api/pagoda/model/componentModel';
  export default defineComponent({
    name: 'PropertiesIndex',
    components: {
      BasicTable,
      PropertiesModal,
      TableAction,
      Switch,
    },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload, updateTableDataRecord, getForm }] = useTable({
        api: getPropertiesList,
        searchInfo: {
          // meta_component_id: 1,
        },
        rowKey: 'id',
        bordered: true,
        showIndexColumn: true,
        showTableSetting: true,
        columns: columns,
        useSearchForm: true,
        formConfig: getFromConfig(),
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
        delProperties(record.id).then(() => {
          reload();
        });
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          const result = updateTableDataRecord(values.id, values);
          console.log(result);
        } else {
          reload();
        }
      }

      function getFormValues() {
        console.log(getForm().getFieldsValue());
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleReloadCurrent,
        getFormValues,
      };
    },
  });
</script>
