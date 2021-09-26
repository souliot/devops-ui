<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    :title="getTitle"
    @ok="handleSubmit"
    @cancel="closeFunc"
  >
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { addUser, editUser } from '/@/api/devops/user';
  import { schemas } from './data';

  export default defineComponent({
    name: 'UserModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');
      const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
        labelWidth: 80,
        schemas: schemas,
        showActionButtonGroup: false,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        // 重置form数据
        setModalProps({ confirmLoading: false, maskClosable: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          rowId.value = data.record.id;
          // 初始化form数据
          setFieldsValue({
            ...data.record,
          });
        }
        updateSchema([
          {
            field: 'password',
            ifShow: !unref(isUpdate),
          },
        ]);
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增用户' : '编辑用户'));

      async function handleSubmit() {
        try {
          const values = await validate();
          // 表单验证
          setModalProps({ confirmLoading: true });
          // TODO custom api
          try {
            if (unref(isUpdate)) {
              await editUser({ ...values, id: rowId.value });
            } else {
              await addUser(values);
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
        resetFields();
      };

      return { registerModal, getTitle, handleSubmit, closeFunc, registerForm };
    },
  });
</script>
