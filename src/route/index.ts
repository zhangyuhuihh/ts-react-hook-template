import { lazy } from 'react'
/**
 * 菜单路由
 * name: 路由对应的名称
 * role: 路由对应的权限名称
 * component: 路由对应的组件
 * path: 路由对应的path(子路由的path需加上对应所有父级的path)
 * icon: 图标
 * redirect: 决定此路由是否是大菜单，以跳转到对应的子路由
 * children: 大菜单，子路由
 * hidden: 是否隐藏(true隐藏，默认打开)
 */
export const RouteConfig: Array<RouteCellObj> = [
  {
    name: '首页',
    path: '/Dashboard',
    component: lazy(() => import('../views/test/Dashboard')),
    role: '首页权限',
    icon: 'home',
  },
  {
    name: '活动管理',
    path: '/activitiesManage',
    component: lazy(() => import('@/views/activitiesManage')),
    role: '活动管理',
    icon: 'home',
  },
  {
    name: '品牌管理',
    path: '/brandManage',
    role: '品牌管理',
    icon: 'reconciliation',
    children: [
      {
        name: '品牌管理',
        path: '/brandManage/brand',
        role: '品牌管理',
        icon: 'reconciliation',
        component: lazy(() => import('@/views/brandManage/brand')),
      },
      {
        name: '商品管理',
        path: '/brandManage/shopManage',
        role: '商品管理',
        icon: 'reconciliation',
        component: lazy(() => import('@/views/brandManage/shopManage')),
      },
    ],
  },
  {
    name: '营销管理',
    path: '/marketingManage',
    role: '营销管理',
    icon: 'reconciliation',
    children: [
      {
        name: '优质品牌',
        path: '/marketingManage/superiorBrand',
        role: '优质品牌',
        icon: 'reconciliation',
        component: lazy(() => import('@/views/marketingManage/superiorBrand')),
      },
      {
        name: '优质商品',
        path: '/marketingManage/superiorShop',
        role: '优质品牌',
        icon: 'reconciliation',
        component: lazy(() => import('@/views/marketingManage/superiorShop')),
      },
      {
        name: '热销商品',
        path: '/marketingManage/hotGoods',
        role: '优质品牌',
        icon: 'reconciliation',
        component: lazy(() => import('@/views/marketingManage/hotGoods')),
      },
    ],
  },
  {
    name: '精品馆信息管理',
    path: '/messageManage',
    role: '精品馆信息管理',
    icon: 'reconciliation',
    children: [
      {
        name: 'banner设置',
        path: '/messageManage/bannerSet',
        role: 'banner设置',
        icon: 'reconciliation',
        component: lazy(() => import('@/views/messageManage/bannerSet')),
      },
      {
        name: '精品馆基础信息',
        path: '/messageManage/basicInfo',
        role: '精品馆基础信息',
        icon: 'reconciliation',
        component: lazy(() => import('@/views/messageManage/basicInfo')),
      },
      {
        name: '馆内位置布局',
        path: '/messageManage/position',
        role: '馆内位置布局',
        icon: 'reconciliation',
        component: lazy(() => import('@/views/messageManage/position')),
      },
    ],
  },
  {
    name: '行业动态管理',
    path: '/dynamicManage',
    role: '行业动态管理',
    icon: 'reconciliation',
    component: lazy(() => import('@/views/dynamicManage')),
  },
  {
    name: '404',
    path: '/404',
    component: lazy(() => import('@/components/NoMatch')),
    hidden: true,
  },
]
