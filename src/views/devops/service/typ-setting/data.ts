import { FormSchema } from '/@/components/Form';

export const headerSchemas: FormSchema[] = [
  {
    field: `env`,
    label: `环境`,
    component: 'Select',
    slot: 'envSlot',
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: `typ`,
    label: `服务`,
    component: 'Select',
    slot: 'typSlot',
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
];

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
    field: 'SearchNodeCount',
    component: 'InputNumber',
    label: '节点数量',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: '',
    component: 'Divider',
    label: '',
  },
  {
    field: 'ProposalFaceThd',
    component: 'InputNumber',
    label: '初选人脸阈值',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: 'RecogFaceThd',
    component: 'InputNumber',
    label: '精选人脸阈值',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: '',
    component: 'Divider',
    label: '',
  },
  {
    field: 'SearchZone',
    component: 'InputNumber',
    label: '检索范围',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: 'SearchInterval',
    component: 'InputNumber',
    label: '检索时间跨度',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: '',
    component: 'Divider',
    label: '',
  },
  {
    field: 'GaitThd',
    component: 'InputNumber',
    label: '找帮手步态阈值',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: 'ReidThd',
    component: 'InputNumber',
    label: '找帮手reid阈值',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: 'FaceThd',
    component: 'InputNumber',
    label: '找帮手人脸阈值',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: '',
    component: 'Divider',
    label: '',
  },
  {
    field: 'AllowArchive',
    component: 'Switch',
    label: '是否启动归档',
    required: true,
    defaultValue: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'ArchiveDays',
    component: 'InputNumber',
    label: '最长归档天数',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: 'ArchiveSetGaitThd',
    component: 'InputNumber',
    label: '归档步态阈值',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: 'ArchiveSetReidThd',
    component: 'InputNumber',
    label: '归档reid阈值',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: 'ArchiveSetFaceThd',
    component: 'InputNumber',
    label: '归档人脸阈值',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: 'ArchiveSetMergeGaitThd',
    component: 'InputNumber',
    label: '归档合并步态阈值',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: 'ArchiveSetMergeReidThd',
    component: 'InputNumber',
    label: '归档合并reid阈值',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: 'ArchiveSetMergeFaceThd',
    component: 'InputNumber',
    label: '归档合并人脸阈值',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
];
const schemas3: FormSchema[] = [
  {
    field: 'AppName',
    component: 'Input',
    label: '服务名称',
    componentProps: {},
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'FailRetryCount',
    component: 'InputNumber',
    label: '重检次数',
    componentProps: {
      type: 'number',
    },
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'MasterSchedulerThreshold',
    component: 'InputNumber',
    label: '调度阈值',
    componentProps: {
      type: 'number',
    },
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'RunMode',
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
    field: 'CopyRequestBody',
    component: 'Switch',
    label: 'CopyBody',
    defaultValue: false,
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'EnableDocs',
    component: 'Switch',
    label: '开启文档',
    required: true,
    defaultValue: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'EnableAdmin',
    component: 'Switch',
    label: '开启Admin',
    defaultValue: false,
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
  // {
  //   field: 'MinMultipleCount',
  //   component: 'InputNumber',
  //   label: '最小合并数',
  //   required: true,
  //   colProps: {
  //     sm: 8,
  //     xl: 8,
  //     xxl: 8,
  //   },
  // },
  {
    field: 'MaxMultipleCount',
    component: 'InputNumber',
    label: '最大合并数',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: 'MaxCacheCount',
    component: 'InputNumber',
    label: '最大缓存数',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: '',
    component: 'Divider',
    label: '',
  },
  {
    field: 'ARMDetectionCount',
    component: 'InputNumber',
    label: 'ARM最大路数',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: 'AMDDetectionCount',
    component: 'InputNumber',
    label: 'AMD最大路数',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: 'NXDetectionCount',
    component: 'InputNumber',
    label: 'NX最大路数',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: 'SnapDetectionCount',
    component: 'InputNumber',
    label: '抓拍机最大路数',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: '',
    component: 'Divider',
    label: '',
  },
  {
    field: 'VideoJump',
    component: 'InputNumber',
    label: '视频跳帧',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: 'CameraJump',
    component: 'InputNumber',
    label: '摄像机跳帧',
    required: true,
    colProps: {
      sm: 8,
      xl: 8,
      xxl: 8,
    },
  },
  {
    field: '',
    component: 'Divider',
    label: '',
  },
  {
    field: 'SwitchStopCollectFailedSeq',
    component: 'Switch',
    label: '停止收集失败序列',
    required: true,
    defaultValue: false,
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
    field: 'AppName',
    component: 'Input',
    label: '服务名称',
    componentProps: {},
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'RunMode',
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
    field: 'CopyRequestBody',
    component: 'Switch',
    label: 'CopyBody',
    defaultValue: false,
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'EnableDocs',
    component: 'Switch',
    label: '开启文档',
    required: true,
    defaultValue: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'EnableAdmin',
    component: 'Switch',
    label: '开启Admin',
    required: true,
    defaultValue: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
];
const schemas100: FormSchema[] = [
  {
    field: 'AppName',
    component: 'Input',
    label: '服务名称',
    componentProps: {},
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'RunMode',
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
];
const schemas102: FormSchema[] = [
  {
    field: 'AppName',
    component: 'Input',
    label: '服务名称',
    componentProps: {},
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'RetryCount',
    component: 'InputNumber',
    label: '挂起失败次数',
    componentProps: {
      type: 'number',
    },
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'HangUpWaitTime',
    component: 'InputNumber',
    label: '重检等待时间',
    componentProps: {
      type: 'number',
    },
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'RunMode',
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
    field: 'CopyRequestBody',
    component: 'Switch',
    label: 'CopyBody',
    defaultValue: false,
    required: true,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'EnableDocs',
    component: 'Switch',
    label: '开启文档',
    required: true,
    defaultValue: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
  {
    field: 'EnableAdmin',
    component: 'Switch',
    label: '开启Admin',
    required: true,
    defaultValue: false,
    colProps: {
      xl: 24,
      xxl: 24,
    },
  },
];
