import { dateUtil } from '/@/utils/dateUtil';
import { BasicColumn } from '/@/components/Table/src/types/table';

export const columns: BasicColumn[] = [
  {
    title: '环境名',
    dataIndex: 'name',
    width: 180,
  },
  {
    title: 'Etcd地址',
    dataIndex: 'etcdEndpoints',
    sorter: false,
    width: 200,
    slots: { customRender: 'etcdEndpoints' },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 200,
    customRender: ({ text }: { text: any }) => {
      return text ? dateUtil(text * 1000).format('YYYY-MM-DD HH:mm:ss') : '';
    },
  },
  {
    title: '备注',
    dataIndex: 'desc',
    ellipsis: true,
  },
];
