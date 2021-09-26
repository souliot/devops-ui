import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/host',
  name: 'Host',
  component: LAYOUT,
  redirect: '/host/index',
  meta: {
    hideMenu: true,
    hideChildrenInMenu: true,
    icon: 'ion:business-outline',
    title: t('routes.devops.host.host'),
    orderNo: 11,
  },
  children: [
    {
      path: 'index',
      name: 'HostIndex',
      component: () => import('/@/views/sys/about/index.vue'),
      meta: {
        title: t('routes.devops.host.host'),
        icon: 'ion:business-outline',
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;
