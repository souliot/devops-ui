<template>
  <Form ref="formRef" :model="formState" v-bind="formItemLayoutWithOutLabel" :rules="formRules">
    <FormItem v-bind="formItemLayout" label="名称" name="name">
      <a-input
        v-model:value="formState.name"
        placeholder="请输入环境名称"
        style="width: 60%; margin-right: 8px"
        name="name"
      />
    </FormItem>
    <template v-for="(etcd, index) in formState.etcdEndpoints" :key="index">
      <FormItem
        v-bind="index === 0 ? formItemLayout : formItemLayoutWithOutLabel"
        :label="index === 0 ? 'Etcd地址' : ''"
        :name="'etcd_' + index"
      >
        <a-input
          v-model:value="formState.etcdEndpoints[index]"
          placeholder="请输入Etcd地址"
          :name="'etcd_' + index"
          style="width: 60%; margin-right: 8px"
        />
        <MinusCircleOutlined
          v-if="formState.etcdEndpoints.length > 1"
          class="dynamic-delete-button"
          :disabled="formState.etcdEndpoints.length === 1"
          @click="removeEtcd(etcd)"
        />
      </FormItem>
    </template>
    <FormItem v-bind="formItemLayoutWithOutLabel">
      <a-button type="dashed" style="width: 60%" @click="addEtcd">
        <PlusOutlined />
        添加Etcd节点
      </a-button>
    </FormItem>
    <FormItem v-bind="formItemLayout" label="备注" name="desc">
      <a-input
        v-model:value="formState.desc"
        placeholder="请输入备注信息"
        style="width: 60%; margin-right: 8px"
        name="desc"
      />
    </FormItem>
  </Form>
</template>

<script lang="ts">
  import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
  import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
  import { Form, FormItem } from 'ant-design-vue';
  import { UnwrapRef, reactive, ref, defineComponent } from 'vue';
  import { EnvInfo } from '/@/api/devops/model/envModel';

  export default defineComponent({
    name: 'EnvForm',
    components: { MinusCircleOutlined, PlusOutlined, Form, FormItem },
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
      const formState: UnwrapRef<EnvInfo> = reactive({
        id: '',
        name: '',
        etcdEndpoints: [''],
        desc: '',
      });

      const formRules = {
        name: [
          {
            required: true,
            message: '环境名称不能为空！',
            trigger: 'change',
          },
        ],
      };

      const etcdRules = [
        {
          required: true,
          message: 'Etcd地址不能为空！',
          trigger: 'change',
          validator: function (rule) {
            const index = rule.field.slice(5);
            return new Promise((resolve, reject) => {
              if (formState.etcdEndpoints.length <= 0 || formState.etcdEndpoints[index] == '') {
                reject(rule.message);
              }
              resolve('success');
            });
          },
        },
      ];

      formState.etcdEndpoints.forEach((_, index) => {
        formRules['etcd_' + index] = etcdRules;
      });

      const validate = (): Promise<EnvInfo> => {
        return new Promise((resolve, reject) => {
          formRef.value
            .validate()
            .then(() => {
              resolve(formState);
            })
            .catch((error: ValidateErrorEntity<EnvInfo>) => {
              reject(error);
            });
        });
      };
      const setFieldsValue = (env: EnvInfo) => {
        formState.id = env.id;
        formState.name = env.name;
        formState.etcdEndpoints = env.etcdEndpoints;
        formState.desc = env.desc;
      };
      const resetForm = () => {
        formRef.value.resetFields();
        formState.id = '';
        formState.name = '';
        formState.desc = '';
        formState.etcdEndpoints = [''];
      };
      const removeEtcd = (item: string) => {
        let index = formState.etcdEndpoints.indexOf(item);
        if (index !== -1) {
          formState.etcdEndpoints.splice(index, 1);
        }
      };
      const addEtcd = () => {
        formState.etcdEndpoints.push('');
        formRules['etcd_' + (formState.etcdEndpoints.length - 1)] = etcdRules;
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
        removeEtcd,
        addEtcd,
      };
    },
  });
</script>

<style scoped></style>
