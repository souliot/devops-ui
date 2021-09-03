import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const sys: AppRouteModule = {
  path: '/sys',
  name: 'Sys',
  component: LAYOUT,
  redirect: '/sys/env',
  meta: {
    orderNo: 10,
    icon: 'ion:construct-outline',
    title: t('routes.devops.sys.sys'),
  },
  children: [
    {
      path: 'env',
      name: 'EnvIndex',
      component: () => import('/@/views/devops/env/index.vue'),
      meta: {
        // affix: true,
        ignoreKeepAlive: true,
        title: t('routes.devops.sys.env'),
        icon: 'ion:business-outline',
      },
    },
    {
      path: 'prom-job',
      name: 'PromJobIndex',
      component: () => import('/@/views/devops/prom-job/index.vue'),
      meta: {
        // affix: true,
        ignoreKeepAlive: true,
        title: t('routes.devops.sys.promJob'),
        icon: 'ion:business-outline',
      },
    },
    {
      path: 'export',
      name: 'ExportIndex',
      component: () => import('/@/views/devops/export/index.vue'),
      meta: {
        // affix: true,
        ignoreKeepAlive: true,
        title: t('routes.devops.sys.export'),
        icon: 'ion:business-outline',
      },
    },
  ],
};

export default sys;
