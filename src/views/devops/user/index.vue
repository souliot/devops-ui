<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 添加用户 </a-button>
      </template>
      <template #etcdEndpoints="{ record }">
        <a-tag v-for="(item, index) in record.etcdEndpoints" :key="index">{{ item }}</a-tag>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑用户',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ion:ios-unlocked-outline',
              tooltip: '重置密码',
              popConfirm: {
                title: '是否重置密码',
                confirm: handleResetPassword.bind(null, record),
              },
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除此用户',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <UserModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import UserModal from './UserModal.vue';
  import { columns } from './data';
  import { Tag } from 'ant-design-vue';
  import { getUserList, delUser, restPassword } from '/@/api/devops/user';
  import { UserInfo } from '/@/api/devops/model/userModel';
  export default defineComponent({
    name: 'UserIndex',
    components: { BasicTable, UserModal, TableAction, [Tag.name]: Tag },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        api: getUserList,
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
        delUser(record.id).then(() => {
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

      function handleResetPassword(record: Recordable) {
        const user: UserInfo = {
          id: record.id,
          username: record.username,
          password: '1',
        };
        restPassword(user);
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleReloadCurrent,
        handleResetPassword,
      };
    },
  });
</script>
