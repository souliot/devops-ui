<template>
  <Form ref="formRef" :model="formState" v-bind="formItemLayoutWithOutLabel" :rules="formRules">
    <template v-for="(item, index) in formState.RedisAddress" :key="index">
      <FormItem
        v-bind="index === 0 ? formItemLayout : formItemLayoutWithOutLabel"
        :label="index === 0 ? 'RedisDB' : ''"
        :name="'item_' + index"
      >
        <a-input
          v-model:value="formState.RedisAddress[index]"
          placeholder="请输入Redis地址"
          :name="'item_' + index"
          style="width: calc(100% - 30px); margin-right: 8px"
        />
        <MinusCircleOutlined
          v-if="formState.RedisAddress.length > 1"
          class="dynamic-delete-button"
          :disabled="formState.RedisAddress.length === 1"
          @click="removeItem(item)"
        />
      </FormItem>
    </template>
    <FormItem v-bind="formItemLayoutWithOutLabel">
      <a-button type="dashed" @click="addItem">
        <PlusOutlined />
        添加Redis节点
      </a-button>
    </FormItem>
    <Row>
      <Col :xl="8" :xxl="8">
        <FormItem v-bind="formItemLayoutOther" label="数据库" name="RedisDB">
          <a-input
            v-model:value="formState.RedisDB"
            placeholder="请输入数据库信息"
            name="RedisDB"
            type="number"
          />
        </FormItem>
      </Col>
      <Col :xl="8" :xxl="8">
        <FormItem v-bind="formItemLayoutOther" label="密码" name="RedisPassword">
          <a-input
            v-model:value="formState.RedisPassword"
            placeholder="请输入数据库密码"
            name="RedisPassword"
          />
        </FormItem>
      </Col>
    </Row>
  </Form>
</template>

<script lang="ts">
  import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
  import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
  import { Form, Row, Col } from 'ant-design-vue';
  import { UnwrapRef, reactive, ref, defineComponent } from 'vue';
  import { GlobalSettingInfo } from '/@/api/devops/model/globalSettingModel';

  export default defineComponent({
    name: 'RedisForm',
    components: { MinusCircleOutlined, PlusOutlined, Form, FormItem: Form.Item, Row, Col },
    setup() {
      const formRef = ref();
      let width = '80px';
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
        EtcdAddress: [],
        RedisAddress: [''],
        RedisDB: 9,
      });

      const formRules = {
        RedisDB: [
          {
            required: true,
            type: 'any',
            message: '数据库名称不能为空！',
            trigger: 'change',
          },
        ],
      };

      const dyRules = [
        {
          required: true,
          message: 'Redis地址不能为空！',
          trigger: 'change',
          validator: function (rule) {
            const index = rule.field.slice(5);
            return new Promise((resolve, reject) => {
              if (formState.RedisAddress.length <= 0 || formState.RedisAddress[index] == '') {
                reject(rule.message);
              }
              resolve('success');
            });
          },
        },
      ];

      formState.RedisAddress.forEach((_, index) => {
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
        formState.RedisAddress = data.RedisAddress;
        formState.RedisPassword = data.RedisPassword;
        formState.RedisDB = data.RedisDB;
      };
      const resetForm = () => {
        formRef.value.resetFields();
        formState.RedisAddress = [''];
        formState.RedisPassword = '';
        formState.RedisDB = 9;
      };
      const removeItem = (item: string) => {
        let index = formState.RedisAddress.indexOf(item);
        if (index !== -1) {
          formState.RedisAddress.splice(index, 1);
        }
      };
      const addItem = () => {
        if (!formState.RedisAddress) {
          formState.RedisAddress = [];
        }
        formState.RedisAddress.push('');
        formRules['item_' + (formState.RedisAddress.length - 1)] = dyRules;
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
