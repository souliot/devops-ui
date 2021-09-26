import { dateUtil } from '/@/utils/dateUtil';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '登录名',
    dataIndex: 'username',
    width: 180,
  },
  {
    title: '用户姓名',
    dataIndex: 'realName',
    width: 180,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 200,
    customRender: ({ text }: { text: any }) => {
      return text ? dateUtil(text * 1000).format('YYYY-MM-DD HH:mm:ss') : '';
    },
  },
];

export const schemas: FormSchema[] = [
  {
    field: 'username',
    component: 'Input',
    label: '登录名',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'password',
    label: '密码',
    component: 'InputPassword',
    required: true,
    ifShow: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'realName',
    component: 'Input',
    label: '真实姓名',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
];
