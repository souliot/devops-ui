import { BaseApiListModel } from './baseModel';
import { BasicPageParams } from '/@/api/model/baseModel';

/**
 * @description: User interface parameters
 */

export type UserListGetResultModel = BaseApiListModel<UserInfo>;
export type UserParams = BasicPageParams;

export interface UserInfo {
  id: string;
  username: string;
  realName?: string;
  password?: string;
  createTime?: string;
}
