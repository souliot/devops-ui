import { DescItem } from '/@/components/Description/index';
import { getValueFormat, formattedValueToString } from '/@/utils/dataValue/valueFormats';

export const schema: DescItem[] = [
  {
    field: 'CPUCount',
    label: 'CPU数量',
  },
  {
    field: 'CPUPercent',
    label: 'CPU使用率',
    render: (curVal) => {
      if (curVal) {
        return `${curVal} %`;
      }
      return '未知';
    },
  },
  {
    field: 'MemPercent',
    label: '内存%',
    render: (curVal) => {
      if (curVal) {
        return `${curVal} %`;
      }
      return '未知';
    },
  },
  {
    field: 'DiskPercent',
    label: '磁盘%',
    render: (curVal) => {
      if (curVal) {
        return `${curVal} %`;
      }
      return '未知';
    },
  },
  {
    field: 'Temp',
    label: '温度',
    render: (curVal) => {
      if (curVal) {
        return `${curVal} ℃`;
      }
      return '未知';
    },
  },
  {
    field: 'Fds',
    label: '文件句柄',
  },
  {
    field: 'MemTotal',
    label: '内存总量',
    render: (curVal) => {
      if (curVal) {
        return formattedValueToString(getValueFormat('bytes')(curVal, 2));
      }
      return '未知';
    },
  },
  {
    field: 'DiskTotal',
    label: '磁盘总量',
    render: (curVal) => {
      if (curVal) {
        return formattedValueToString(getValueFormat('bytes')(curVal, 2));
      }
      return '未知';
    },
  },
  {
    field: 'MemFree',
    label: '内存空闲',
    render: (curVal) => {
      if (curVal) {
        return formattedValueToString(getValueFormat('bytes')(curVal, 2));
      }
      return '未知';
    },
  },
  {
    field: 'DiskFree',
    label: '内存空闲',
    render: (curVal) => {
      if (curVal) {
        return formattedValueToString(getValueFormat('bytes')(curVal, 2));
      }
      return '未知';
    },
  },
  {
    field: 'MemUsed',
    label: '内存已用',
    render: (curVal) => {
      if (curVal) {
        return formattedValueToString(getValueFormat('bytes')(curVal, 2));
      }
      return '未知';
    },
  },
  {
    field: 'DiskUsed',
    label: '磁盘已用',
    render: (curVal) => {
      if (curVal) {
        return formattedValueToString(getValueFormat('bytes')(curVal, 2));
      }
      return '未知';
    },
  },
  {
    field: 'MemAvailable',
    label: '内存可用',
    render: (curVal) => {
      if (curVal) {
        return formattedValueToString(getValueFormat('bytes')(curVal, 2));
      }
      return '未知';
    },
  },
  {
    field: 'DiskInodesPercent',
    label: '磁盘IN%',
    render: (curVal) => {
      if (curVal) {
        return `${curVal} %`;
      }
      return '未知';
    },
  },
  {
    field: 'DiskIOReadRate',
    label: '磁盘读',
    render: (curVal) => {
      if (!curVal) {
        curVal = 0;
      }
      return formattedValueToString(getValueFormat('Bps')(curVal, 2));
    },
  },
  {
    field: 'NetIOReadRate',
    label: '网络接收',
    render: (curVal) => {
      if (!curVal) {
        curVal = 0;
      }
      return formattedValueToString(getValueFormat('Bps')(curVal, 2));
    },
  },
  {
    field: 'DiskIOWriteRate',
    label: '磁盘写',
    render: (curVal) => {
      if (!curVal) {
        curVal = 0;
      }
      return formattedValueToString(getValueFormat('Bps')(curVal, 2));
    },
  },
  {
    field: 'NetIOWriteRate',
    label: '网络发送',
    render: (curVal) => {
      if (!curVal) {
        curVal = 0;
      }
      return formattedValueToString(getValueFormat('Bps')(curVal, 2));
    },
  },
];
