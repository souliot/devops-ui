import { defHttp } from '/@/utils/http/axios';
import { EnvParams, EnvListGetResultModel, EnvInfo } from './model/envModel';

enum Api {
  BASIC_PATH = '/env',
}

/**
 * @description: getEnvList
 */
export const getEnvList = (params: EnvParams) => {
  return defHttp.get<EnvListGetResultModel>({
    url: Api.BASIC_PATH,
    params,
  });
};

/**
 * @description: addEnv
 */
export const addEnv = (data: EnvInfo) => {
  return defHttp.post<EnvInfo>({
    url: Api.BASIC_PATH,
    data,
  });
};

/**
 * @description: delEnv
 */
export const delEnv = (id: number) => {
  return defHttp.delete({
    url: `${Api.BASIC_PATH}/${id}`,
  });
};

/**
 * @description: editEnv
 */
export const editEnv = (data: EnvInfo) => {
  return defHttp.put<EnvInfo>({
    url: Api.BASIC_PATH,
    data,
  });
};
