<template>
  <Form ref="formRef" :model="formState" v-bind="formItemLayoutWithOutLabel" :rules="formRules">
    <FormItem v-bind="formItemLayout" label="节点类型" name="type">
      <a-input
        v-model:value="formState.type"
        placeholder="请输入节点类型"
        style="width: 60%; margin-right: 8px"
        name="type"
      />
    </FormItem>
    <FormItem v-bind="formItemLayout" label="节点地址" name="address">
      <a-input
        v-model:value="formState.address"
        placeholder="请输入节点地址"
        style="width: 60%; margin-right: 8px"
        name="address"
      />
    </FormItem>
    <FormItem v-bind="formItemLayout" label="环境名称" name="env">
      <a-input
        v-model:value="formState.env"
        placeholder="请输入环境名称"
        style="width: 60%; margin-right: 8px"
        name="env"
      />
    </FormItem>
  </Form>
</template>

<script lang="ts">
  import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
  import { Form, FormItem } from 'ant-design-vue';
  import { UnwrapRef, reactive, ref, defineComponent } from 'vue';
  import { ExportInfo } from '/@/api/devops/model/exportModel';

  export default defineComponent({
    name: 'ExportForm',
    components: { Form, FormItem },
    setup() {
      const formRef = ref();
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 },
        },
      };
      const formItemLayoutWithOutLabel = {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 },
        },
      };
      const formState: UnwrapRef<ExportInfo> = reactive({
        id: '',
        type: '',
        address: '',
        env: '',
      });

      const formRules = {
        type: [
          {
            required: true,
            message: '节点类型不能为空！',
            trigger: 'change',
          },
        ],
        address: [
          {
            required: true,
            message: '节点地址不能为空！',
            trigger: 'change',
          },
        ],
      };

      const validate = (): Promise<ExportInfo> => {
        return new Promise((resolve, reject) => {
          formRef.value
            .validate()
            .then(() => {
              resolve(formState);
            })
            .catch((error: ValidateErrorEntity<ExportInfo>) => {
              reject(error);
            });
        });
      };
      const setFieldsValue = (record: ExportInfo) => {
        formState.id = record.id;
        formState.env = record.env;
        formState.type = record.type;
        formState.address = record.address;
      };
      const resetForm = () => {
        formRef.value.resetFields();
        formState.id = '';
        formState.env = '';
        formState.type = '';
        formState.address = '';
      };

      return {
        formRef,
        formState,
        formRules,
        formItemLayout,
        formItemLayoutWithOutLabel,
        setFieldsValue,
        resetForm,
        validate,
      };
    },
  });
</script>

<style scoped></style>
