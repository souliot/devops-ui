<template>
  <Form ref="formRef" :model="formState" v-bind="formItemLayoutWithOutLabel" :rules="formRules">
    <FormItem v-bind="formItemLayout" label="名称" name="jobName">
      <a-input
        v-model:value="formState.jobName"
        placeholder="请输入任务名称"
        style="width: 60%; margin-right: 8px"
        name="jobName"
      />
    </FormItem>
    <FormItem v-bind="formItemLayout" label="协议类型" name="scheme">
      <Select
        v-model:value="formState.scheme"
        name="scheme"
        placeholder="请输入协议类型"
        style="width: 60%; margin-right: 8px"
      >
        <SelectOption value="http">http</SelectOption>
        <SelectOption value="https">https</SelectOption>
      </Select>
    </FormItem>
    <FormItem v-bind="formItemLayout" label="配置类型" name="configsType">
      <Select
        v-model:value="formState.configsType"
        name="configsType"
        placeholder="请输入配置类型"
        style="width: 60%; margin-right: 8px"
      >
        <SelectOption value="http">http</SelectOption>
        <SelectOption value="static">static</SelectOption>
      </Select>
    </FormItem>
    <FormItem
      v-if="formState.configsType == 'http'"
      v-bind="formItemLayout"
      label="接口地址"
      name="url"
    >
      <a-input
        v-model:value="formState.url"
        placeholder="请输入接口地址"
        style="width: 60%; margin-right: 8px"
        name="url"
      />
    </FormItem>
    <template v-if="formState.configsType == 'static'">
      <template v-for="(item, index) in formState.targets" :key="index">
        <FormItem
          v-bind="index === 0 ? formItemLayout : formItemLayoutWithOutLabel"
          :label="index === 0 ? '采集目标' : ''"
          :name="'item_' + index"
        >
          <a-input
            v-model:value="formState.targets[index]"
            placeholder="请输入采集目标"
            :name="'item_' + index"
            style="width: 60%; margin-right: 8px"
          />
          <MinusCircleOutlined
            v-if="formState.targets.length > 1"
            class="dynamic-delete-button"
            :disabled="formState.targets.length === 1"
            @click="removeItem(item)"
          />
        </FormItem>
      </template>
      <FormItem v-bind="formItemLayoutWithOutLabel">
        <a-button type="dashed" style="width: 60%" @click="addItem">
          <PlusOutlined />
          添加Etcd节点
        </a-button>
      </FormItem>
    </template>
    <FormItem v-bind="formItemLayout" label="采集路径" name="metricsPath">
      <a-input
        v-model:value="formState.metricsPath"
        placeholder="请输入采集路径"
        style="width: 60%; margin-right: 8px"
        name="metricsPath"
      />
    </FormItem>
  </Form>
</template>

<script lang="ts">
  import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
  import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
  import { Form, Select } from 'ant-design-vue';
  import { UnwrapRef, reactive, ref, defineComponent } from 'vue';
  import { PromJobInfo } from '/@/api/devops/model/promJobModel';

  export default defineComponent({
    name: 'PromJobForm',
    components: {
      MinusCircleOutlined,
      PlusOutlined,
      Form,
      FormItem: Form.Item,
      Select,
      SelectOption: Select.Option,
    },
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
      const formState: UnwrapRef<PromJobInfo> = reactive({
        id: '',
        jobName: '',
        scheme: 'http',
        metricsPath: '/metrics',
        configsType: 'static',
        targets: [''],
        url: '',
      });

      const formRules = {
        jobName: [
          {
            required: true,
            message: '任务名称不能为空！',
            trigger: 'change',
          },
        ],
        scheme: [
          {
            required: true,
            message: '协议类型不能为空！',
            trigger: 'change',
          },
        ],
        configsType: [
          {
            required: true,
            message: '配置类型不能为空！',
            trigger: 'change',
          },
        ],
        metricsPath: [
          {
            required: true,
            message: '采集路径不能为空！',
            trigger: 'change',
          },
        ],
        url: [
          {
            required: true,
            message: '接口地址不能为空！',
            trigger: 'change',
            validator: function (rule, value) {
              return new Promise((resolve, reject) => {
                if (formState.configsType == 'static') {
                  resolve('success');
                  return;
                }
                if (value == '') {
                  reject(rule.message);
                }
                resolve('success');
              });
            },
          },
        ],
      };

      const dyRules = [
        {
          required: true,
          message: 'Etcd地址不能为空！',
          trigger: 'change',
          validator: function (rule) {
            const index = rule.field.slice(5);
            return new Promise((resolve, reject) => {
              if (formState.configsType == 'http') {
                resolve('success');
              }
              if (formState.targets.length <= 0 || formState.targets[index] == '') {
                reject(rule.message);
              }
              resolve('success');
            });
          },
        },
      ];
      if (formState.configsType == 'static') {
        formState.targets.forEach((_, index) => {
          formRules['item_' + index] = dyRules;
        });
      }

      const validate = (): Promise<PromJobInfo> => {
        return new Promise((resolve, reject) => {
          formRef.value
            .validate()
            .then(() => {
              resolve(formState);
            })
            .catch((error: ValidateErrorEntity<PromJobInfo>) => {
              reject(error);
            });
        });
      };
      const setFieldsValue = (record: PromJobInfo) => {
        formState.id = record.id;
        formState.jobName = record.jobName;
        formState.metricsPath = record.metricsPath;
        formState.scheme = record.scheme;
        formState.configsType = record.configsType;
        formState.targets = record.targets;
        formState.url = record.url;
      };
      const resetForm = () => {
        formRef.value.resetFields();
        formState.id = '';
        formState.jobName = '';
        formState.scheme = 'http';
        formState.metricsPath = '/metrics';
        formState.configsType = 'static';
        formState.targets = [];
        formState.url = '';
      };
      const removeItem = (item: string) => {
        let index = formState.targets.indexOf(item);
        if (index !== -1) {
          formState.targets.splice(index, 1);
        }
      };
      const addItem = () => {
        if (!formState.targets) {
          formState.targets = [];
        }
        formState.targets.push('');
        formRules['item_' + (formState.targets.length - 1)] = dyRules;
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
        removeItem,
        addItem,
      };
    },
  });
</script>

<style scoped></style>
