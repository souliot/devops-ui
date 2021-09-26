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
    defaultValue: true,
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
const schemas4: FormSchema[] = [
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
];
const schemas5: FormSchema[] = [];
const schemas6: FormSchema[] = [
  {
    field: 'Enabled',
    component: 'Switch',
    label: '是否启用',
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'SnapType',
    component: 'InputNumber',
    label: '抓拍类型',
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'SnapSourceTypes',
    component: 'Select',
    label: '检索类型',
    componentProps: {
      mode: 'tags',
    },
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'EtcdEndpoints',
    component: 'Select',
    label: 'Etcd地址',
    show: false,
    componentProps: {
      mode: 'tags',
    },
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'MasterNodePort',
    component: 'Input',
    label: '服务端口',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'FilePort',
    component: 'Input',
    label: '文件服务端口',
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
    field: '',
    component: 'Divider',
    label: '',
  },
  {
    field: 'BalanceNo',
    component: 'Switch',
    label: '取消节点均衡',
    required: true,
    defaultValue: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'BalanceCheckTime',
    component: 'InputNumber',
    label: '节点均衡间隔',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: '',
    component: 'Divider',
    label: '',
  },
  {
    field: 'DivertRun',
    component: 'Switch',
    label: '是否启动分流',
    defaultValue: false,
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
    field: 'PerSeqSize',
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
    field: 'EtcdKeepTime',
    component: 'InputNumber',
    label: '分流Etcd过期',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: '',
    component: 'Divider',
    label: '',
  },
  {
    field: 'FeatureChanMax',
    component: 'InputNumber',
    label: '内存序列上限',
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'UploadMultiWaitTime',
    component: 'InputNumber',
    label: '合并文件间隔',
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'WaitUploadPath',
    component: 'Input',
    label: '文件缓存目录',
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'WaitUploadReadTime',
    component: 'InputNumber',
    label: '上传读取间隔',
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'WaitExtractPath',
    component: 'Input',
    label: '序列缓存目录',
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'WaitExtractReadTime',
    component: 'InputNumber',
    label: '序列读取间隔',
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'WaitExtractReadDelOldTime',
    component: 'InputNumber',
    label: '序列磁盘保留时间',
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'PerGpuTaskExtractCount',
    component: 'InputNumber',
    label: '提取特征并发',
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'PerGpuTaskZipCount',
    component: 'InputNumber',
    label: '合并文件并发',
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'PerGpuTaskUploadCount',
    component: 'InputNumber',
    label: '上传或缓存并发',
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'GPUList',
    component: 'Select',
    label: '指定GPU',
    componentProps: {
      mode: 'tags',
    },
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'SeqWaitExtractSleep',
    component: 'InputNumber',
    label: '序列待提取等待',
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'SeqExtractSleep',
    component: 'InputNumber',
    label: '序列提取等待',
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'SeqZipSleep',
    component: 'InputNumber',
    label: '序列打包等待',
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'SeqUploadSleep',
    component: 'InputNumber',
    label: '序列上传等待',
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'SeqZipExportImageDir',
    component: 'Input',
    label: '序列导出目录',
    show: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
];
const schemas7: FormSchema[] = [
  {
    field: 'nodeid',
    component: 'Input',
    label: '节点ID',
    dynamicDisabled: true,
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'clusterid',
    component: 'Input',
    label: '集群ID',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'appname',
    component: 'Input',
    label: '服务名称',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'httpport',
    component: 'InputNumber',
    label: '服务端口',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'diskthreshold',
    component: 'InputNumber',
    label: '磁盘阈值',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'minioendpoints',
    component: 'Select',
    label: 'Minio地址',
    componentProps: {
      mode: 'tags',
    },
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'accesskeyid',
    component: 'Input',
    label: 'Minio用户名',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'secretaccesskey',
    component: 'Input',
    label: 'Minio密码',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'ssl',
    component: 'Switch',
    label: 'MinioSSL',
    componentProps: {
      checked: true,
    },
    defaultValue: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'cron',
    component: 'Input',
    label: '定时任务',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'uploadpoolsize',
    component: 'InputNumber',
    label: '上传文件并发',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'delpoolsize',
    component: 'InputNumber',
    label: '删除文件并发',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'loglevel',
    component: 'InputNumber',
    label: '日志级别',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'logpath',
    component: 'Input',
    label: '日志路径',
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'localip',
    component: 'Input',
    label: '本地ip地址',
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'runmode',
    component: 'Select',
    label: '运行模式',
    componentProps: {
      options: [
        {
          key: 'dev',
          value: 'dev',
          label: 'dev',
        },
        {
          key: 'prod',
          value: 'prod',
          label: 'prod',
        },
      ],
    },
    required: true,
    colProps: {
      sm: 6,
      xl: 6,
      xxl: 6,
    },
  },
  {
    field: 'copyrequestbody',
    component: 'Switch',
    label: 'CopyBody',
    componentProps: {
      checked: true,
    },
    defaultValue: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'autorender',
    component: 'Switch',
    label: '模板渲染',
    componentProps: {
      checked: true,
    },
    defaultValue: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
];
const schemas10: FormSchema[] = [];
const schemas11: FormSchema[] = [];
const schemas12: FormSchema[] = [
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
];
const schemas13: FormSchema[] = [
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
];
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
