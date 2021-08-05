/**
 * @description: Base interface parameters
 */
export interface BaseApiListModel<T extends any> {
  total: number;
  lists: T[];
}
