import { defHttp } from '/@/utils/http/axios';
import { PromJobParams, PromJobListGetResultModel, PromJobInfo } from './model/promJobModel';

enum Api {
  BASIC_PATH = '/promjob',
}

/**
 * @description: getPromJobList
 */
export const getPromJobList = (params?: PromJobParams) => {
  return defHttp.get<PromJobListGetResultModel>({
    url: Api.BASIC_PATH,
    params,
  });
};

/**
 * @description: addPromJob
 */
export const addPromJob = (data: PromJobInfo) => {
  return defHttp.post<PromJobInfo>({
    url: Api.BASIC_PATH,
    data,
  });
};

/**
 * @description: delPromJob
 */
export const delPromJob = (id: string) => {
  return defHttp.delete({
    url: `${Api.BASIC_PATH}/${id}`,
  });
};

/**
 * @description: editPromJob
 */
export const editPromJob = (data: PromJobInfo) => {
  return defHttp.put<PromJobInfo>({
    url: Api.BASIC_PATH,
    data,
  });
};
