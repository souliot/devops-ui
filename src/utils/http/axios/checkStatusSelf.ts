import type { ErrorMessageMode } from '/#/axios';
import { useMessage } from '/@/hooks/web/useMessage';
import { useI18n } from '/@/hooks/web/useI18n';
import type { Result } from '/#/axios';
// import router from '/@/router';
// import { PageEnum } from '/@/enums/pageEnum';
import { ResultEnum, ResultCodeEnum } from '/@/enums/httpEnum';
import { useUserStoreWithOut } from '/@/store/modules/user';
import projectSetting from '/@/settings/projectSetting';
import { SessionTimeoutProcessingEnum } from '/@/enums/appEnum';

const { createMessage, createErrorModal } = useMessage();
// const error = createMessage.error!;
const stp = projectSetting.sessionTimeoutProcessing;

export function checkStatusSelf(
  data: Result,
  errorMessageMode: ErrorMessageMode = 'message'
): void {
  const { t } = useI18n();
  const userStore = useUserStoreWithOut();
  let errMessage = '';

  switch (data.status) {
    case ResultEnum.USERERR:
      errMessage = data.message;
      if (data.code == ResultCodeEnum.TOKENEXP) {
        if (stp === SessionTimeoutProcessingEnum.PAGE_COVERAGE) {
          userStore.setToken(undefined);
          userStore.setSessionTimeout(true);
        } else {
          userStore.logoutNoRequest(true);
        }
      }
      break;
    default:
      errMessage = data.message;
  }

  if (errMessage) {
    if (errorMessageMode === 'modal') {
      createErrorModal({ title: t('sys.api.errorTip'), content: errMessage });
    } else if (errorMessageMode === 'message') {
      createMessage.error(errMessage);
    }
  }
}
