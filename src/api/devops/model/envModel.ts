import { BaseApiListModel } from './baseModel';
import { BasicPageParams } from '/@/api/model/baseModel';

/**
 * @description: Env interface parameters
 */

export type EnvListGetResultModel = BaseApiListModel<EnvInfo>;
export type EnvParams = BasicPageParams;

export interface EnvInfo {
  id: string;
  name: string;
  etcdEndpoints: string[];
  desc: string;
  createTime?: string;
}
