<template>
  <PageWrapper title="服务配置" contentClass="service-setting">
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
        <template #typSlot="{ model, field }">
          <Select
            v-model:value="model[field]"
            placeholder="请选择服务类型"
            :options="ServiceType"
            @change="typChange"
            allowClear
          />
        </template>
      </BasicForm>
    </template>

    <a-card :bordered="false" size="small">
      <BasicForm v-show="typ != undefined && len != 0" @register="register" />
      <Empty v-if="typ == undefined || len == 0" description="暂无配置项" />
    </a-card>
    <template #rightFooter>
      <a-button type="primary" @click="submitAll"> 保存 </a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form';
  import { getSchema, headerSchemas } from './data';
  import { getDefaultData } from './default';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Select, Empty, message } from 'ant-design-vue';
  import { ServiceType } from '/@/api/devops/model/serviceModel';
  import { EnvListGetResultModel } from '/@/api/devops/model/envModel';
  import { getEnvList } from '/@/api/devops/env';
  import { getTypSetting, editTypSetting } from '/@/api/devops/typ-setting';
  export default defineComponent({
    name: 'SettingIndex',
    components: {
      Select,
      SelectOption: Select.Option,
      BasicForm,
      PageWrapper,
      [Card.name]: Card,
      Empty,
    },
    setup() {
      let env = '';
      let version = 0;
      const typ = ref();
      const len = ref(0);
      const [registerHeader] = useForm({
        labelWidth: 40,
        schemas: headerSchemas,
        showActionButtonGroup: false,
      });

      const [register, { validate, resetSchema, setFieldsValue, resetFields }] = useForm({
        labelWidth: 140,
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

      onMounted(() => {});

      async function submitAll() {
        try {
          const [values] = await Promise.all([validate()]);
          if (checkBasic()) {
            editTypSetting(env, typ.value, {
              Version: version,
              Data: values,
            }).then(() => {
              message.success('更新配置成功！');
            });
          }
        } catch (error) {}
      }
      function checkBasic() {
        if (env == '' || !typ.value || typ.value == '') {
          return false;
        }
        return true;
      }

      function envChange(e) {
        if (e == undefined) {
          env = '';
          return;
        }
        env = envList.value.lists[e].name;
        if (typ.value && typ.value != '') {
          updateData();
        }
      }

      function typChange(e) {
        if (e == undefined) {
          return;
        }
        typ.value = e;
        if (!env || env == '') {
          message.error('请选择服务环境');
          return;
        }
        updateData();
      }

      function updateData() {
        const schemas = getSchema(typ.value);
        if (!schemas || schemas.length == 0) {
          len.value = 0;
          return;
        } else {
          len.value = schemas.length;
        }
        resetSchema(schemas);
        resetFields();
        getTypSetting(env, typ.value)
          .then((res) => {
            if (res.Data) {
              version = res.Version;
              setFieldsValue(res.Data);
            } else {
              message.warning('服务暂未配置！');
              setFieldsValue(getDefaultData(typ.value));
            }
          })
          .catch(() => {
            setFieldsValue(getDefaultData(typ.value));
          });
      }

      return {
        typ,
        len,
        envList,
        getEnvList,
        envChange,
        registerHeader,
        register,
        submitAll,
        typChange,
        ServiceType,
      };
    },
  });
</script>

<style lang="less">
  .service-setting {
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
