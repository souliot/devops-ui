import { dateUtil } from '/@/utils/dateUtil';
import { BasicColumn } from '/@/components/Table/src/types/table';

export const columns: BasicColumn[] = [
  {
    title: '节点类型',
    dataIndex: 'type',
    sorter: false,
    width: 80,
  },
  {
    title: '节点地址',
    dataIndex: 'address',
    sorter: false,
    width: 160,
  },
  {
    title: '环境名称',
    dataIndex: 'env',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 160,
    customRender: ({ text }: { text: any }) => {
      return text ? dateUtil(text * 1000).format('YYYY-MM-DD HH:mm:ss') : '';
    },
  },
];
