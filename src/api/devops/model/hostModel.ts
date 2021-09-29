import { BaseApiListModel } from './baseModel';

/**
 * @description: Host interface parameters
 */

export type HostListGetResultModel = BaseApiListModel<HostInfo>;

export interface HostInfo {
  Host: string;
  Fds?: number;
  Temp?: number;
  CPUCount?: number;
  CPUPercent?: number;
}
