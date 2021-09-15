import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { getEnvList } from '/@/api/devops/env';
import { ServiceType } from '/@/api/devops/model/serviceModel';

export const columns: BasicColumn[] = [
  {
    title: '环境',
    dataIndex: 'Env',
    width: 120,
  },
  {
    title: '集群',
    dataIndex: 'Path',
    width: 180,
  },
  {
    title: '类型',
    dataIndex: 'Typ',
    width: 100,
  },
  {
    title: '地址',
    dataIndex: 'Address',
    width: 180,
    slots: { customRender: 'address' },
  },
  {
    title: '外网地址',
    dataIndex: 'OutAddress',
    width: 180,
    edit: true,
    // slots: { customRender: 'outAddress' },
  },
  {
    title: '版本',
    dataIndex: 'Version',
    width: 120,
  },
  {
    title: '是否在线',
    dataIndex: 'Status',
    width: 120,
    slots: { customRender: 'status' },
  },
  {
    title: '是否监控',
    dataIndex: 'MetricsType',
    width: 120,
    slots: { customRender: 'metrics' },
  },
];

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `env`,
        label: `环境`,
        component: 'ApiSelect',
        componentProps: {
          api: getEnvList,
          resultField: 'lists',
          labelField: 'name',
          valueField: 'name',
        },
        colProps: {
          xl: 6,
          xxl: 6,
        },
      },
      {
        field: `type`,
        label: `服务类型`,
        component: 'Select',
        componentProps: {
          options: ServiceType,
        },
        colProps: {
          xl: 6,
          xxl: 6,
        },
      },
    ],
  };
}
