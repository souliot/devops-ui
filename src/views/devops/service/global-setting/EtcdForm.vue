<template>
  <Form ref="formRef" :model="formState" v-bind="formItemLayoutWithOutLabel" :rules="formRules">
    <template v-for="(item, index) in formState.EtcdAddress" :key="index">
      <FormItem
        v-bind="index === 0 ? formItemLayout : formItemLayoutWithOutLabel"
        :label="index === 0 ? 'Etcd地址' : ''"
        :name="'item_' + index"
      >
        <a-input
          v-model:value="formState.EtcdAddress[index]"
          placeholder="请输入Etcd地址"
          :name="'item_' + index"
          style="width: calc(100% - 30px); margin-right: 8px"
        />
        <MinusCircleOutlined
          v-if="formState.EtcdAddress.length > 1"
          class="dynamic-delete-button"
          :disabled="formState.EtcdAddress.length === 1"
          @click="removeItem(item)"
        />
      </FormItem>
    </template>
    <FormItem v-bind="formItemLayoutWithOutLabel">
      <a-button type="dashed" @click="addItem">
        <PlusOutlined />
        添加Etcd节点
      </a-button>
    </FormItem>
  </Form>
</template>

<script lang="ts">
  import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
  import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
  import { Form } from 'ant-design-vue';
  import { UnwrapRef, reactive, ref, defineComponent } from 'vue';
  import { GlobalSettingInfo } from '/@/api/devops/model/globalSettingModel';

  export default defineComponent({
    name: 'EtcdForm',
    components: { MinusCircleOutlined, PlusOutlined, Form, FormItem: Form.Item },
    setup() {
      const formRef = ref();
      const width = '80px';
      const formItemLayout = {
        labelCol: {
          style: {
            width,
          },
        },
        wrapperCol: {
          style: { width: `calc(100% - ${width})` },
          xs: { span: 24 },
        },
      };
      const formItemLayoutOther = {
        labelCol: {
          style: {
            width,
          },
        },
        wrapperCol: {
          style: { width: `calc(100% - ${width})` },
          xs: { span: 24 },
        },
      };
      const formItemLayoutWithOutLabel = {
        wrapperCol: {
          style: { width: `calc(100% - ${width})`, marginLeft: width },
          xs: { span: 24 },
        },
      };
      const formState: UnwrapRef<GlobalSettingInfo> = reactive({
        SnapExpireDays: 90,
        DbAddress: [],
        EtcdAddress: [''],
        RedisAddress: [],
      });

      const formRules = {};

      const dyRules = [
        {
          required: true,
          message: 'Etcd地址不能为空！',
          trigger: 'change',
          validator: function (rule) {
            const index = rule.field.slice(5);
            return new Promise((resolve, reject) => {
              if (formState.EtcdAddress.length <= 0 || formState.EtcdAddress[index] == '') {
                reject(rule.message);
              }
              resolve('success');
            });
          },
        },
      ];

      formState.EtcdAddress.forEach((_, index) => {
        formRules['item_' + index] = dyRules;
      });

      const validate = (): Promise<GlobalSettingInfo> => {
        return new Promise((resolve, reject) => {
          formRef.value
            .validate()
            .then(() => {
              resolve(formState);
            })
            .catch((error: ValidateErrorEntity<GlobalSettingInfo>) => {
              reject(error);
            });
        });
      };
      const setFieldsValue = (data: GlobalSettingInfo) => {
        formState.EtcdAddress = data.EtcdAddress;
      };
      const resetForm = () => {
        formRef.value.resetFields();
        formState.EtcdAddress = [''];
      };
      const removeItem = (item: string) => {
        let index = formState.EtcdAddress.indexOf(item);
        if (index !== -1) {
          formState.EtcdAddress.splice(index, 1);
        }
      };
      const addItem = () => {
        if (!formState.EtcdAddress) {
          formState.EtcdAddress = [];
        }
        formState.EtcdAddress.push('');
        formRules['item_' + (formState.EtcdAddress.length - 1)] = dyRules;
      };

      return {
        formRef,
        formState,
        formRules,
        formItemLayout,
        formItemLayoutOther,
        formItemLayoutWithOutLabel,
        setFieldsValue,
        resetForm,
        validate,
        removeItem,
        addItem,
      };
    },
  });
</script>
