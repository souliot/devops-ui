import { FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export const columns: BasicColumn[] = [
  {
    title: '组件名',
    dataIndex: 'name',
    width: 180,
  },
  {
    title: '组件版本',
    dataIndex: 'version',
    width: 260,
    slots: { customRender: 'version' },
  },
  {
    title: '备注',
    dataIndex: 'description',
  },
];

export const componentFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '组件名',
    component: 'Input',
    // helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    required: true,
  },
  {
    field: 'version',
    label: '组件版本',
    component: 'Input',
    required: true,
  },
  {
    field: 'description',
    label: '备注',
    component: 'InputTextArea',
  },
];
