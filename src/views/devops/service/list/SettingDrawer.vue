<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    width="500px"
    @ok="handleSubmit"
    class="setting-drawer"
  >
    <template #title>
      <span class="font-bold">{{ getTitle }}: </span>
      <TypographyText type="secondary" class="text-xs"> {{ record.Address }}</TypographyText>
    </template>

    <Empty v-if="len == 0" description="暂无配置项" />
    <BasicForm v-show="len != 0" @register="registerForm" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref, reactive, UnwrapRef } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { getSchema } from './setting.data';
  import { getDefaultData } from './setting.default';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { TypographyText, Empty, message } from 'ant-design-vue';
  import { getAppSetting, editAppSetting } from '/@/api/devops/app-setting';
  interface ITitle {
    Typ: string;
    Address: string;
    Env: string;
    Id: string;
  }

  export default defineComponent({
    name: 'SettingDrawer',
    components: { BasicDrawer, BasicForm, TypographyText, Empty },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      let version = 0;
      const isUpdate = ref(true);
      const len = ref(0);
      const [registerForm, { resetFields, setFieldsValue, validate, resetSchema }] = useForm({
        labelWidth: 120,
        showActionButtonGroup: false,
      });
      var record: UnwrapRef<ITitle> = reactive({
        Typ: '',
        Address: '',
        Id: '',
        Env: '',
      });
      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields();
        setDrawerProps({ confirmLoading: false });

        isUpdate.value = !!data?.isUpdate;
        record.Address = data?.record.Address;
        record.Typ = data?.record.Typ;
        record.Env = data?.record.Env;
        record.Id = data?.record.Id;

        const schemas = getSchema(record.Typ);
        if (!schemas || schemas.length == 0) {
          len.value = 0;
          return;
        } else {
          len.value = schemas.length;
        }
        resetSchema(schemas);
        if (unref(isUpdate)) {
          getAppSetting(record.Env, record.Typ, record.Id)
            .then((res) => {
              if (res.Data) {
                version = res.Version;
                setFieldsValue(res.Data);
              } else {
                message.warning('服务暂未配置！');
                setFieldsValue(getDefaultData(record.Typ));
              }
            })
            .catch(() => {
              setFieldsValue(getDefaultData(record.Typ));
            });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增配置' : '编辑配置'));

      async function handleSubmit() {
        if (len.value <= 0) {
          closeDrawer();
          return;
        }
        try {
          const values = await validate();
          console.log(values);
          setDrawerProps({ confirmLoading: true });
          // TODO custom api
          editAppSetting(record.Env, record.Typ, record.Id, {
            Version: version,
            Data: values,
          }).then(() => {
            message.success('更新配置成功！');
          });
          closeDrawer();
          emit('success');
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      return {
        len,
        registerDrawer,
        registerForm,
        getTitle,
        record,
        handleSubmit,
      };
    },
  });
</script>

<style lang="less">
  .service-drawer {
    padding-bottom: 50px;
  }
</style>
