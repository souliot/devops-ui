import { FormSchema } from '/@/components/Table';

export const getSchema = (typ: string): FormSchema[] => {
  switch (typ) {
    case '2':
      return schemas2;
    case '3':
      return schemas3;
    case '4':
      return schemas4;
    case '5':
      return schemas5;
    case '6':
      return schemas6;
    case '7':
      return schemas7;
    case '10':
      return schemas10;
    case '11':
      return schemas11;
    case '12':
      return schemas12;
    case '13':
      return schemas13;
    case '14':
      return schemas14;
    case '15':
      return schemas15;
    case '19':
      return schemas19;
    case '20':
      return schemas20;
    case '22':
      return schemas22;
    case '24':
      return schemas24;
    case '100':
      return schemas100;
    case '102':
      return schemas102;
  }
  return [];
};

const schemas2: FormSchema[] = [
  {
    field: 'NodeIndex',
    component: 'InputNumber',
    label: '节点索引',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'Port',
    component: 'Input',
    label: '服务端口',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'CacheDir',
    component: 'Input',
    label: '存储路径',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'Preload',
    component: 'Switch',
    label: '是否预加载',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'PreloadDays',
    component: 'InputNumber',
    label: '预加载天数',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'MaxLoadDays',
    component: 'InputNumber',
    label: '最大缓存天数',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
];
const schemas3: FormSchema[] = [
  {
    field: 'HttpPort',
    component: 'InputNumber',
    label: '服务端口',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
];
const schemas4: FormSchema[] = [];
const schemas5: FormSchema[] = [];
const schemas6: FormSchema[] = [
  {
    field: 'DoEnabled',
    component: 'Switch',
    label: '是否启用',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'DoSnapType',
    component: 'InputNumber',
    label: '抓拍类型',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'TCPMasterNodePort',
    component: 'Input',
    label: '服务端口',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'DetectionSourceGetTime',
    component: 'InputNumber',
    label: '获取检测源间隔',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'NodeBalanceNo',
    component: 'Switch',
    label: '节点均衡',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'NodeBalanceCheck',
    component: 'InputNumber',
    label: '节点均衡间隔',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'DivertRun',
    component: 'Switch',
    label: '是否启动分流',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'DivertCheckTime',
    component: 'InputNumber',
    label: '分流巡查间隔',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'DivertPerSeqSize',
    component: 'InputNumber',
    label: '分流单序列大小',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'DivertValDo',
    component: 'InputNumber',
    label: '分流分界线',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'DivertFeatureChanMax',
    component: 'InputNumber',
    label: '分流内存上限',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'DivertEtcdKeepTime',
    component: 'InputNumber',
    label: '分流Etcd过期',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'DiskHDDUsedMax',
    component: 'InputNumber',
    label: '磁盘阈值上限',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'SeqFeatureChanMax',
    component: 'InputNumber',
    label: '内存序列上限',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'SeqUploadMultiWaitTime',
    component: 'InputNumber',
    label: '合并文件间隔',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'SeqUploadPath',
    component: 'Input',
    label: '文件缓存目录',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'SeqUploadReadTime',
    component: 'InputNumber',
    label: '上传读取间隔',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'SeqSeqPath',
    component: 'Input',
    label: '序列缓存目录',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'SeqSeqReadTime',
    component: 'InputNumber',
    label: '序列读取间隔',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'SeqSeqReadDelOldTime',
    component: 'InputNumber',
    label: '序列磁盘保留时间',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'GoPerGpuTaskExtractCount',
    component: 'InputNumber',
    label: '提取特征并发',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'GoPerGpuTaskZipCount',
    component: 'InputNumber',
    label: '合并文件并发',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'GoPerGpuTaskUploadCount',
    component: 'InputNumber',
    label: '上传或缓存并发',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'DebugSeqWaitExtractSleep',
    component: 'InputNumber',
    label: '序列待提取等待',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'DebugSeqExtractSleep',
    component: 'InputNumber',
    label: '序列提取等待',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'DebugSeqZipSleep',
    component: 'InputNumber',
    label: '序列打包等待',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'DebugSeqUploadSleep',
    component: 'InputNumber',
    label: '序列上传等待',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'DebugSeqZipExportImageDir',
    component: 'Input',
    label: '序列导出目录',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
];
const schemas7: FormSchema[] = [];
const schemas10: FormSchema[] = [];
const schemas11: FormSchema[] = [];
const schemas12: FormSchema[] = [];
const schemas13: FormSchema[] = [];
const schemas14: FormSchema[] = [];
const schemas15: FormSchema[] = [];
const schemas19: FormSchema[] = [];
const schemas20: FormSchema[] = [];
const schemas22: FormSchema[] = [];
const schemas24: FormSchema[] = [
  {
    field: 'HttpPort',
    component: 'InputNumber',
    label: '服务端口',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
];
const schemas100: FormSchema[] = [
  {
    field: 'HttpPort',
    component: 'InputNumber',
    label: '服务端口',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'HttpsPort',
    component: 'InputNumber',
    label: '授权端口',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
];
const schemas102: FormSchema[] = [
  {
    field: 'HttpPort',
    component: 'InputNumber',
    label: '服务端口',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
];
