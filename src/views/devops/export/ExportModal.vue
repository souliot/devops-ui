<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    :title="getTitle"
    @ok="handleSubmit"
    @cancel="closeFunc"
  >
    <ExportForm ref="formRef" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import ExportForm from './ExportForm.vue';
  import { addExport, editExport } from '/@/api/devops/export';

  export default defineComponent({
    name: 'ExportModal',
    components: { BasicModal, ExportForm },
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

      const getTitle = computed(() => (!unref(isUpdate) ? '新增监控节点' : '编辑监控节点'));

      async function handleSubmit() {
        try {
          const values = await formRef.value.validate();
          // 表单验证
          setModalProps({ confirmLoading: true });
          // TODO custom api
          try {
            if (unref(isUpdate)) {
              await editExport({ ...values, id: rowId.value });
            } else {
              await addExport(values);
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
