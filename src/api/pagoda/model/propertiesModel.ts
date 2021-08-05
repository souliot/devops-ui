import { BaseApiListModel } from './baseModel';
import { ComponentInfo } from './componentModel';
import { BasicPageParams } from '/@/api/model/baseModel';

/**
 * @description: Properties interface parameters
 */

export type PropertiesListGetResultModel = BaseApiListModel<PropertiesInfo>;
export type PropertiesParams = BasicPageParams & {
  meta_component_id: number;
};

export interface PropertiesInfo {
  id: number;
  variable: string;
  label: string;
  type: string;
  description: string;
  default: string;
  required: boolean;
  meta_component: ComponentInfo;
}
