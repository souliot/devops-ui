import { FormSchema } from '/@/components/Form';

export const headerSchemas: FormSchema[] = [
  {
    field: `env`,
    label: `环境`,
    component: 'Select',
    slot: 'envSlot',
    colProps: {
      xl: 8,
      xxl: 8,
    },
  },
];

export const schemas: FormSchema[] = [
  {
    field: 'SnapExpireDays',
    component: 'Input',
    label: '过期天数',
    componentProps: {
      type: 'number',
    },
    required: true,
    colProps: {
      xl: 4,
      xxl: 4,
    },
  },
  {
    field: 'GateWay',
    component: 'Input',
    label: '网关地址',
    required: true,
    colProps: {
      xl: 10,
      xxl: 10,
    },
  },
  {
    field: 'StreamAddress',
    component: 'Input',
    label: '推流地址',
    required: true,
    colProps: {
      xl: 10,
      xxl: 10,
    },
  },
  {
    field: 'MqServer',
    component: 'Input',
    label: 'MQ地址',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'ClickAddress',
    component: 'Input',
    label: 'CH地址',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
];
