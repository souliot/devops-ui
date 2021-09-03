import { BaseApiListModel } from './baseModel';
import { BasicPageParams } from '/@/api/model/baseModel';

/**
 * @description: PromJob interface parameters
 */

export type PromJobListGetResultModel = BaseApiListModel<PromJobInfo>;
export type PromJobParams = BasicPageParams;

export interface PromJobInfo {
  id: string;
  jobName: string;
  metricsPath: string;
  scheme: string;
  configsType: string;
  targets: string[];
  url?: string;
  createTime?: string;
}
