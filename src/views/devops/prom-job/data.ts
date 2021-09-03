import moment from 'moment';
import { BasicColumn } from '/@/components/Table/src/types/table';

export const columns: BasicColumn[] = [
  {
    title: '任务名称',
    dataIndex: 'jobName',
    width: 120,
  },
  {
    title: '协议类型',
    dataIndex: 'scheme',
    sorter: false,
    width: 80,
  },
  {
    title: '配置类型',
    dataIndex: 'configsType',
    sorter: false,
    width: 80,
  },
  {
    title: '接口地址',
    dataIndex: 'url',
    sorter: false,
    width: 360,
    slots: { customRender: 'array' },
  },
  // {
  //   title: '采集目标',
  //   dataIndex: 'targets',
  //   sorter: false,
  //   width: 200,
  //   slots: { customRender: 'array' },
  // },
  {
    title: '采集路径',
    dataIndex: 'metricsPath',
    sorter: false,
    width: 200,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 160,
    customRender: ({ text }: { text: any }) => {
      return text ? moment(text * 1000).format('YYYY-MM-DD HH:mm:ss') : '';
    },
  },
];
