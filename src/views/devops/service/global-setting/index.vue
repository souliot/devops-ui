<template>
  <PageWrapper title="全局配置" contentClass="global-setting">
    <template #leftFooter>
      <BasicForm @register="registerHeader">
        <template #envSlot="{ model, field }">
          <Select
            v-model:value="model[field]"
            placeholder="请选择环境"
            @change="envChange"
            allowClear
          >
            <SelectOption v-for="(item, index) in envList.lists" :key="index" :value="index">
              {{ item.name }}
            </SelectOption>
          </Select>
        </template>
      </BasicForm>
    </template>

    <a-card title="基础配置" :bordered="false" size="small">
      <BasicForm @register="register" />
    </a-card>
    <a-card title="MongoDB" :bordered="false" size="small" class="!mt-5">
      <MongoForm ref="mongoRef" />
    </a-card>
    <a-card title="Redis" :bordered="false" size="small" class="!mt-5">
      <RedisForm ref="redisRef" />
    </a-card>
    <a-card title="Etcd" :bordered="false" size="small" class="!mt-5">
      <EtcdForm ref="etcdRef" />
    </a-card>
    <template #rightFooter>
      <a-button type="primary" @click="submitAll"> 保存 </a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form';
  import { schemas, headerSchemas } from './data';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Select, message } from 'ant-design-vue';
  import MongoForm from './MongoForm.vue';
  import RedisForm from './RedisForm.vue';
  import EtcdForm from './EtcdForm.vue';
  import { getEnvList } from '/@/api/devops/env';
  import { getGlobalSetting, editGlobalSetting } from '/@/api/devops/global-setting';
  import { EnvListGetResultModel } from '/@/api/devops/model/envModel';
  export default defineComponent({
    name: 'GlobalSettingIndex',
    components: {
      Select,
      SelectOption: Select.Option,
      BasicForm,
      PageWrapper,
      [Card.name]: Card,
      MongoForm,
      RedisForm,
      EtcdForm,
    },
    setup() {
      let env = '';
      const mongoRef = ref();
      const redisRef = ref();
      const etcdRef = ref();
      const [registerHeader] = useForm({
        labelWidth: 40,
        schemas: headerSchemas,
        showActionButtonGroup: false,
      });

      const [register, { validate, setFieldsValue, resetFields }] = useForm({
        labelWidth: 80,
        schemas: schemas,
        showActionButtonGroup: false,
      });

      const envList = ref<EnvListGetResultModel>({
        total: 0,
        lists: [],
      });

      onMounted(() => {
        getEnvList().then((res) => {
          envList.value = res;
        });
      });

      async function submitAll() {
        try {
          const [values, mongoValues, redisValues, etcdValues] = await Promise.all([
            validate(),
            mongoRef.value.validate(),
            redisRef.value.validate(),
            etcdRef.value.validate(),
          ]);
          values.DbAddress = mongoValues.DbAddress;
          values.DbName = mongoValues.DbName;
          values.UserName = mongoValues.UserName;
          values.Password = mongoValues.Password;
          values.RedisAddress = redisValues.RedisAddress;
          values.RedisPassword = redisValues.RedisPassword;
          values.RedisDB = parseInt(redisValues.RedisDB);
          values.EtcdAddress = etcdValues.EtcdAddress;
          values.SnapExpireDays = parseInt(values.SnapExpireDays);
          editGlobalSetting(env, values).then(() => {
            message.success('修改全局配置成功！');
          });
        } catch (error) {}
      }

      function resetAll(etcd) {
        mongoRef.value.resetForm();
        redisRef.value.resetForm();
        etcdRef.value.setFieldsValue({
          EtcdAddress: etcd,
        });
        resetFields();
        setFieldsValue({
          SnapExpireDays: 90,
        });
      }

      function envChange(e) {
        if (e == undefined) {
          resetAll(['']);
          return;
        }
        env = envList.value.lists[e].name;
        getGlobalSetting(envList.value.lists[e].name)
          .then((res) => {
            setFieldsValue(res);
            mongoRef.value.setFieldsValue(res);
            redisRef.value.setFieldsValue(res);
            etcdRef.value.setFieldsValue(res);
          })
          .catch(() => {
            resetAll(envList.value.lists[e].etcdEndpoints);
          });
      }

      return {
        envList,
        mongoRef,
        redisRef,
        etcdRef,
        registerHeader,
        register,
        submitAll,
        envChange,
      };
    },
  });
</script>

<style lang="less">
  .global-setting {
    padding-bottom: 50px;

    .ant-form-item {
      &-label > label::after {
        content: '';
        margin: 0 6px 0 2px;
      }
    }
  }

  .vben-page-footer__left .vben-basic-form .ant-form-item:not(.ant-form-item-with-help) {
    margin-bottom: 0;
  }
</style>
