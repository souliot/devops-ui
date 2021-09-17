import { defHttp } from '/@/utils/http/axios';

enum Api {
  BASIC_PATH = '/appSetting',
}

/**
 * @description: getAppSetting
 */
export const getAppSetting = (env: string, typ: string, id: string) => {
  return defHttp.get({
    url: `${Api.BASIC_PATH}/${env}/${typ}/${id}`,
  });
};

/**
 * @description: editAppSetting
 */
export const editAppSetting = (env: string, typ: string, id: string, data: any) => {
  return defHttp.put({
    url: Api.BASIC_PATH,
    data,
    params: { env, typ, id },
  });
};
