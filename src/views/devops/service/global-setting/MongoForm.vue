<template>
  <Form ref="formRef" :model="formState" v-bind="formItemLayoutWithOutLabel" :rules="formRules">
    <template v-for="(item, index) in formState.DbAddress" :key="index">
      <FormItem
        v-bind="index === 0 ? formItemLayout : formItemLayoutWithOutLabel"
        :label="index === 0 ? 'MongoDB' : ''"
        :name="'item_' + index"
      >
        <a-input
          v-model:value="formState.DbAddress[index]"
          placeholder="请输入Mongo地址"
          :name="'item_' + index"
          style="width: calc(100% - 30px); margin-right: 8px"
        />
        <MinusCircleOutlined
          v-if="formState.DbAddress.length > 1"
          class="dynamic-delete-button"
          :disabled="formState.DbAddress.length === 1"
          @click="removeItem(item)"
        />
      </FormItem>
    </template>
    <FormItem v-bind="formItemLayoutWithOutLabel">
      <a-button type="dashed" @click="addItem">
        <PlusOutlined />
        添加Mongo节点
      </a-button>
    </FormItem>
    <Row>
      <Col :xl="8" :xxl="8">
        <FormItem v-bind="formItemLayoutOther" label="数据库" name="DbName">
          <a-input v-model:value="formState.DbName" placeholder="请输入数据库信息" name="DbName" />
        </FormItem>
      </Col>
      <Col :xl="8" :xxl="8">
        <FormItem v-bind="formItemLayoutOther" label="用户名" name="UserName">
          <a-input
            v-model:value="formState.UserName"
            placeholder="请输入用户名信息"
            name="UserName"
          />
        </FormItem>
      </Col>
      <Col :xl="8" :xxl="8">
        <FormItem v-bind="formItemLayoutOther" label="用户密码" name="Password">
          <a-input
            v-model:value="formState.Password"
            placeholder="请输入用户密码信息"
            name="Password"
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
    name: 'MongoForm',
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
        DbAddress: [''],
        EtcdAddress: [],
        RedisAddress: [],
        DbName: 'Darwin-XYY',
      });

      const formRules = {
        DbName: [
          {
            required: true,
            message: '数据库名称不能为空！',
            trigger: 'change',
          },
        ],
      };

      const dyRules = [
        {
          required: true,
          message: 'Mongo地址不能为空！',
          trigger: 'change',
          validator: function (rule) {
            const index = rule.field.slice(5);
            return new Promise((resolve, reject) => {
              if (formState.DbAddress.length <= 0 || formState.DbAddress[index] == '') {
                reject(rule.message);
              }
              resolve('success');
            });
          },
        },
      ];

      formState.DbAddress.forEach((_, index) => {
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
        formState.DbAddress = data.DbAddress;
        formState.DbName = data.DbName;
        formState.UserName = data.UserName;
        formState.Password = data.Password;
      };
      const resetForm = () => {
        formRef.value.resetFields();
        formState.DbAddress = [''];
        formState.DbName = 'Darwin-XYY';
        formState.UserName = '';
        formState.Password = '';
      };
      const removeItem = (item: string) => {
        let index = formState.DbAddress.indexOf(item);
        if (index !== -1) {
          formState.DbAddress.splice(index, 1);
        }
      };
      const addItem = () => {
        if (!formState.DbAddress) {
          formState.DbAddress = [];
        }
        formState.DbAddress.push('');
        formRules['item_' + (formState.DbAddress.length - 1)] = dyRules;
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
