import { BaseApiListModel } from './baseModel';
import { BasicPageParams } from '/@/api/model/baseModel';

/**
 * @description: Component interface parameters
 */

export type ComponentListGetResultModel = BaseApiListModel<ComponentInfo>;
export type ComponentParams = BasicPageParams;

export interface ComponentInfo {
  id: number;
  name: string;
  version: string;
  description: string;
}
