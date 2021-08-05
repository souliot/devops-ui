import { defHttp } from '/@/utils/http/axios';
import {
  ComponentParams,
  ComponentListGetResultModel,
  ComponentInfo,
} from './model/componentModel';

enum Api {
  COMPONENT_BASIC = '/component',
}

/**
 * @description: getComponentInfo
 */
export const getComponentList = (params: ComponentParams) => {
  return defHttp.get<ComponentListGetResultModel>({
    url: Api.COMPONENT_BASIC,
    params,
  });
};

/**
 * @description: addComponent
 */
export const addComponent = (data: ComponentInfo) => {
  return defHttp.post<ComponentInfo>({
    url: Api.COMPONENT_BASIC,
    data,
  });
};

/**
 * @description: delComponent
 */
export const delComponent = (id: number) => {
  return defHttp.delete({
    url: `${Api.COMPONENT_BASIC}/${id}`,
  });
};

/**
 * @description: editComponent
 */
export const editComponent = (data: ComponentInfo) => {
  return defHttp.put<ComponentInfo>({
    url: Api.COMPONENT_BASIC,
    data,
  });
};
