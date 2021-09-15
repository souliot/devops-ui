import { defHttp } from '/@/utils/http/axios';
import { GlobalSettingInfo } from './model/globalSettingModel';

enum Api {
  BASIC_PATH = '/globalSetting',
}

/**
 * @description: getGlobalSetting
 */
export const getGlobalSetting = (env: string) => {
  return defHttp.get<GlobalSettingInfo>({
    url: `${Api.BASIC_PATH}/${env}`,
  });
};

/**
 * @description: editGlobalSetting
 */
export const editGlobalSetting = (env: string, data: GlobalSettingInfo) => {
  return defHttp.put({
    url: Api.BASIC_PATH,
    data,
    params: { env },
  });
};
