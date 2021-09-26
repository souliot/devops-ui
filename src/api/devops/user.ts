import { defHttp } from '/@/utils/http/axios';
import { UserParams, UserListGetResultModel, UserInfo } from './model/userModel';

enum Api {
  BASIC_PATH = '/user',
}

/**
 * @description: getUserList
 */
export const getUserList = (params?: UserParams) => {
  return defHttp.get<UserListGetResultModel>({
    url: Api.BASIC_PATH,
    params,
  });
};

/**
 * @description: addUser
 */
export const addUser = (data: UserInfo) => {
  return defHttp.post<UserInfo>({
    url: Api.BASIC_PATH,
    data,
  });
};

/**
 * @description: delUser
 */
export const delUser = (id: number) => {
  return defHttp.delete({
    url: `${Api.BASIC_PATH}/${id}`,
  });
};

/**
 * @description: editUser
 */
export const editUser = (data: UserInfo) => {
  return defHttp.put<UserInfo>({
    url: Api.BASIC_PATH,
    data,
  });
};

/**
 * @description: restPassword
 */
export const restPassword = (data: UserInfo) => {
  return defHttp.put<UserInfo>({
    url: `${Api.BASIC_PATH}/password`,
    data,
  });
};
