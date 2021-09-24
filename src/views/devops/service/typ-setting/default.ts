export const getDefaultData = (typ: string) => {
  switch (typ) {
    case '2':
      return defaultData2;
    case '3':
      return defaultData3;
    case '4':
      return defaultData4;
    case '5':
      return defaultData5;
    case '6':
      return defaultData6;
    case '7':
      return defaultData7;
    case '10':
      return defaultData10;
    case '11':
      return defaultData11;
    case '12':
      return defaultData12;
    case '13':
      return defaultData13;
    case '14':
      return defaultData14;
    case '15':
      return defaultData15;
    case '19':
      return defaultData19;
    case '20':
      return defaultData20;
    case '22':
      return defaultData22;
    case '24':
      return defaultData24;
    case '100':
      return defaultData100;
    case '102':
      return defaultData102;
  }
  return [];
};

const defaultData2 = {
  AllowArchive: false,
  ArchiveDays: 10,
  ArchiveSetFaceThd: 0.3,
  ArchiveSetGaitThd: 0.7,
  ArchiveSetMergeFaceThd: 0.5,
  ArchiveSetMergeGaitThd: 0.7,
  ArchiveSetMergeReidThd: 0.7,
  ArchiveSetReidThd: 0.7,
  FaceThd: 0.3,
  GaitThd: 0.7,
  ProposalFaceThd: 0.3,
  RecogFaceThd: 0.3,
  ReidThd: 0.75,
  SearchInterval: 20,
  SearchNodeCount: 1,
  SearchZone: 1000,
};
const defaultData3 = {
  AppName: 'businessserver',
  CopyRequestBody: false,
  EnableAdmin: false,
  EnableDocs: false,
  FailRetryCount: 3,
  MasterSchedulerThreshold: 60,
  RunMode: 'dev',
};
const defaultData4 = {};
const defaultData5 = {};
const defaultData6 = {
  AMDDetectionCount: 20,
  ARMDetectionCount: 7,
  NXDetectionCount: 5,
  CameraJump: 3,
  MaxCacheCount: 10000,
  MaxMultipleCount: 30,
  MinMultipleCount: 0,
  SnapDetectionCount: 30,
  VideoJump: 1,
  SwitchStopCollectFailedSeq: false,
};
const defaultData7 = {};
const defaultData10 = {};
const defaultData11 = {};
const defaultData12 = {};
const defaultData13 = {};
const defaultData14 = {};
const defaultData15 = {};
const defaultData19 = {};
const defaultData20 = {};
const defaultData22 = {};
const defaultData24 = {
  AppName: 'featrueCollect',
  CopyRequestBody: false,
  EnableAdmin: false,
  EnableDocs: false,
  RunMode: 'dev',
};
const defaultData100 = {
  AppName: 'settingservice',
  RunMode: 'dev',
};
const defaultData102 = {
  AppName: 'videomanager',
  CopyRequestBody: false,
  EnableAdmin: false,
  EnableDocs: false,
  RunMode: 'dev',
  RetryCount: 3,
  HangUpWaitTime: 5,
};
