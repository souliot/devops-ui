import { BaseApiListModel } from './baseModel';
import { BasicPageParams } from '/@/api/model/baseModel';

/**
 * @description: Export interface parameters
 */

export type ExportListGetResultModel = BaseApiListModel<ExportInfo>;
export type ExportParams = BasicPageParams;

export interface ExportInfo {
  id: string;
  type: string;
  address: string;
  env?: string;
}
