import { defHttp } from '/@/utils/http/axios';
import { ExportParams, ExportListGetResultModel, ExportInfo } from './model/exportModel';

enum Api {
  BASIC_PATH = '/export',
}

/**
 * @description: getExportList
 */
export const getExportList = (params?: ExportParams) => {
  return defHttp.get<ExportListGetResultModel>({
    url: Api.BASIC_PATH,
    params,
  });
};

/**
 * @description: addExport
 */
export const addExport = (data: ExportInfo) => {
  return defHttp.post<ExportInfo>({
    url: Api.BASIC_PATH,
    data,
  });
};

/**
 * @description: delExport
 */
export const delExport = (id: number) => {
  return defHttp.delete({
    url: `${Api.BASIC_PATH}/${id}`,
  });
};

/**
 * @description: editExport
 */
export const editExport = (data: ExportInfo) => {
  return defHttp.put<ExportInfo>({
    url: Api.BASIC_PATH,
    data,
  });
};
