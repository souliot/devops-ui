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
  NodeIndex: 1,
  Port: '43010',
  CacheDir: './db/',
  Preload: true,
  PreloadDays: 7,
  MaxLoadDays: 10,
};
const defaultData3 = {
  HttpPort: 11110,
};
const defaultData4 = {};
const defaultData5 = {};
const defaultData6 = {};
const defaultData7 = {};
const defaultData10 = {};
const defaultData11 = {};
const defaultData12 = {};
const defaultData13 = {
  SearchNodeCount: 1,
};
const defaultData14 = {};
const defaultData15 = {};
const defaultData19 = {};
const defaultData20 = {};
const defaultData22 = {};
const defaultData24 = {
  HttpPort: 11113,
};
const defaultData100 = {
  HttpPort: 11113,
  HttpsPort: 11114,
};
const defaultData102 = {
  HttpPort: 11111,
};
