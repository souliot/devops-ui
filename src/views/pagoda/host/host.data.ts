import { FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export const columns: BasicColumn[] = [
  {
    title: '主机名',
    dataIndex: 'hostname',
    width: 180,
  },
  {
    title: 'IP',
    dataIndex: 'ip',
    sorter: true,
    width: 200,
  },
  {
    title: '用户名',
    dataIndex: 'user',
    width: 200,
  },
  {
    title: '描述',
    dataIndex: 'description',
    ellipsis: true,
  },
];

export const hostFormSchema: FormSchema[] = [
  {
    field: 'hostname',
    label: '主机名',
    component: 'Input',
    // helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    required: true,
  },
  {
    field: 'ip',
    label: 'IP',
    component: 'Input',
    required: true,
    rules: [
      {
        required: true,
        validator: async (_, value) => {
          const isIP = new RegExp(
            /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/
          );
          if (!isIP.test(value)) {
            return Promise.reject('请输入正确的IP地址！');
          }
          return Promise.resolve();
        },
      },
    ],
  },
  {
    field: 'user',
    label: '用户名',
    component: 'Input',
    required: true,
  },
  {
    field: 'passwd',
    label: '用户密码',
    component: 'InputPassword',
    required: true,
  },
  {
    field: 'root_passwd',
    label: 'ROOT密码',
    component: 'InputPassword',
    required: true,
  },
  {
    field: 'description',
    label: '备注',
    component: 'InputTextArea',
  },
];
