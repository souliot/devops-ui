import { defHttp } from '/@/utils/http/axios';

enum Api {
  BASIC_PATH = '/typSetting',
}

/**
 * @description: getTypSetting
 */
export const getTypSetting = (env: string, typ: string) => {
  return defHttp.get({
    url: `${Api.BASIC_PATH}/${env}/${typ}`,
  });
};

/**
 * @description: editTypSetting
 */
export const editTypSetting = (env: string, typ: string, data: any) => {
  return defHttp.put({
    url: Api.BASIC_PATH,
    data,
    params: { env, typ },
  });
};
