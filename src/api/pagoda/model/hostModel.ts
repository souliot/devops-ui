import { BaseApiListModel } from './baseModel';
import { BasicPageParams } from '/@/api/model/baseModel';

/**
 * @description: Host interface parameters
 */

export type HostListGetResultModel = BaseApiListModel<HostInfo>;
export type HostParams = BasicPageParams;

export interface HostInfo {
  id: number;
  hostname: string;
  ip: string;
  user: string;
  passwd: string;
  root_passwd: string;
  description: string;
}
