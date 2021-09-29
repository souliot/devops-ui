import { defHttp } from '/@/utils/http/axios';
import { HostListGetResultModel } from './model/hostModel';

enum Api {
  BASIC_PATH = '/metricsProm/hostinfo',
}

/**
 * @description: getHostList
 */
export const getHostList = () => {
  return defHttp.get<HostListGetResultModel>({
    url: Api.BASIC_PATH,
  });
};
