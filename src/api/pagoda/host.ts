import { defHttp } from '/@/utils/http/axios';
import { HostParams, HostListGetResultModel, HostInfo } from './model/hostModel';

enum Api {
  HOST_BASIC = '/host',
}

/**
 * @description: getHostInfo
 */
export const getHostList = (params: HostParams) => {
  return defHttp.get<HostListGetResultModel>({
    url: Api.HOST_BASIC,
    params,
  });
};

/**
 * @description: addHost
 */
export const addHost = (data: HostInfo) => {
  return defHttp.post<HostInfo>({
    url: Api.HOST_BASIC,
    data,
  });
};

/**
 * @description: delHost
 */
export const delHost = (id: number) => {
  return defHttp.delete({
    url: `${Api.HOST_BASIC}/${id}`,
  });
};

/**
 * @description: editHost
 */
export const editHost = (data: HostInfo) => {
  return defHttp.put<HostInfo>({
    url: Api.HOST_BASIC,
    data,
  });
};
