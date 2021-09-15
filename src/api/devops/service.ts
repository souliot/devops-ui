import { defHttp } from '/@/utils/http/axios';
import { ServiceListGetResultModel, ServiceRequest } from './model/serviceModel';

enum Api {
  BASIC_PATH = '/service',
}

/**
 * @description: getServiceList
 */
export const getServiceList = (params?: ServiceRequest) => {
  return defHttp.get<ServiceListGetResultModel>({
    url: `${Api.BASIC_PATH}/all`,
    params,
  });
};

/**
 * @description: delService
 */
export const delService = (env: string, path: string, typ: string, id: string) => {
  return defHttp.delete({
    url: `${Api.BASIC_PATH}/${env}/${path}/${typ}/${id}`,
  });
};

/**
 * @description: delService
 */
export const setOutAddress = (env: string, id: string, outAddress: string) => {
  return defHttp.put({
    url: `${Api.BASIC_PATH}/outAddress`,
    data: {
      env,
      id,
      outAddress,
    },
  });
};
