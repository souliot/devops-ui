import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const sys: AppRouteModule = {
  path: '/sys',
  name: 'Sys',
  component: LAYOUT,
  redirect: '/sys/host',
  meta: {
    orderNo: 10,
    icon: 'ion:construct-outline',
    title: t('routes.pagoda.sys.sys'),
  },
  children: [
    {
      path: 'host',
      name: 'HostIndex',
      component: () => import('/@/views/pagoda/host/index.vue'),
      meta: {
        // affix: true,
        ignoreKeepAlive: true,
        title: t('routes.pagoda.sys.host'),
        icon: 'ion:business-outline',
      },
    },
    {
      path: 'component',
      name: 'ComponentIndex',
      component: () => import('/@/views/pagoda/component/index.vue'),
      meta: {
        // affix: true,
        ignoreKeepAlive: true,
        title: t('routes.pagoda.sys.component'),
        icon: 'ion:extension-puzzle-outline',
      },
    },
    {
      path: 'properties',
      name: 'CPropertiesIndex',
      component: () => import('/@/views/pagoda/properties/index.vue'),
      meta: {
        // affix: true,
        ignoreKeepAlive: true,
        title: t('routes.pagoda.sys.properties'),
        icon: 'ion:document-text-outline',
      },
    },
  ],
};

export default sys;
