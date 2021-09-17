import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/service',
  name: 'Service',
  component: LAYOUT,
  redirect: '/service/index',
  meta: {
    icon: 'ion:hardware-chip-outline',
    title: t('routes.devops.service.service'),
    orderNo: 12,
  },
  children: [
    {
      path: 'globalSetting',
      name: 'ServiceGlobalSetting',
      component: () => import('/@/views/devops/service/global-setting/index.vue'),
      meta: {
        title: t('routes.devops.service.globalSetting'),
        icon: 'ion:globe-outline',
        ignoreKeepAlive: true,
      },
    },
    {
      path: 'setting',
      name: 'ServiceSetting',
      component: () => import('/@/views/devops/service/typ-setting/index.vue'),
      meta: {
        title: t('routes.devops.service.setting'),
        icon: 'ion:color-wand-outline',
        ignoreKeepAlive: true,
      },
    },
    {
      path: 'index',
      name: 'ServiceIndex',
      component: () => import('/@/views/devops/service/list/index.vue'),
      meta: {
        title: t('routes.devops.service.list'),
        icon: 'ion:ios-cog-outline',
        ignoreKeepAlive: true,
      },
    },
  ],
};

export default dashboard;
