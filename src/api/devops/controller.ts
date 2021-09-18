import { defHttp } from '/@/utils/http/axios';

enum Api {
  BASIC_PATH = '/controller',
}

/**
 * @description: controller
 */
export const controller = (env: string, id: string) => {
  return defHttp.put({
    url: Api.BASIC_PATH,
    data: { env, id },
  });
};
