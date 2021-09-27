import { BaseApiListModel } from './baseModel';

/**
 * @description: Service interface parameters
 */

export type ServiceListGetResultModel = BaseApiListModel<ServiceInfo>;

export interface ServiceInfo {
  Id: string;
  Env: string;
  Path: string;
  Typ: string;
  Version: string;
  Address: string;
  OutAddress: string;
  Ext?: string;
}

export interface ServiceRequest {
  id: string;
  env: string;
  path: string;
  type: string;
  metricsType: string;
}

export const getServiceName = (typ: string): string => {
  const name = serviceMap.get(typ);
  if (name && name != '') {
    return name;
  }
  return typ;
};

export const ServiceType = [
  {
    key: '2',
    value: '2',
    label: '比对服务',
  },
  {
    key: '3',
    value: '3',
    label: '业务服务',
  },
  {
    key: '4',
    value: '4',
    label: '报警服务',
  },
  {
    key: '5',
    value: '5',
    label: '通信服务',
  },
  {
    key: '6',
    value: '6',
    label: '主控',
  },
  {
    key: '7',
    value: '7',
    label: '文件服务',
  },
  {
    key: '10',
    value: '10',
    label: '采集服务',
  },
  {
    key: '11',
    value: '11',
    label: '主控分流服务',
  },
  {
    key: '12',
    value: '12',
    label: '底库服务',
  },
  {
    key: '13',
    value: '13',
    label: '检索分发服务',
  },
  {
    key: '14',
    value: '14',
    label: 'Rtmp服务器',
  },
  {
    key: '15',
    value: '15',
    label: '涉案视频库服务',
  },
  {
    key: '19',
    value: '19',
    label: '数据备份服务',
  },
  {
    key: '20',
    value: '20',
    label: '国标服务',
  },
  {
    key: '22',
    value: '22',
    label: '自己建库服务',
  },
  {
    key: '24',
    value: '24',
    label: '特征存储',
  },
  {
    key: '100',
    value: '100',
    label: '配置授权服务',
  },
  {
    key: '102',
    value: '102',
    label: '检测源调度服务',
  },
  {
    key: '700',
    value: '700',
    label: '日志采集服务',
  },
];

const serviceMap = new Map();
function initServiceMap() {
  ServiceType.forEach((v) => {
    serviceMap.set(v.key, v.label);
  });
}
initServiceMap();
