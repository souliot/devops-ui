import { defHttp } from '/@/utils/http/axios';
import {
  PropertiesParams,
  PropertiesListGetResultModel,
  PropertiesInfo,
} from './model/propertiesModel';

enum Api {
  PROPERTIES_BASIC = '/properties',
}

/**
 * @description: getPropertiesInfo
 */
export const getPropertiesList = (params: PropertiesParams) => {
  return defHttp.get<PropertiesListGetResultModel>({
    url: Api.PROPERTIES_BASIC,
    params,
  });
};

/**
 * @description: addProperties
 */
export const addProperties = (data: PropertiesInfo) => {
  return defHttp.post<PropertiesInfo>({
    url: Api.PROPERTIES_BASIC,
    data,
  });
};

/**
 * @description: delProperties
 */
export const delProperties = (id: number) => {
  return defHttp.delete({
    url: `${Api.PROPERTIES_BASIC}/${id}`,
  });
};

/**
 * @description: editProperties
 */
export const editProperties = (data: PropertiesInfo) => {
  return defHttp.put<PropertiesInfo>({
    url: Api.PROPERTIES_BASIC,
    data,
  });
};
