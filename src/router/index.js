import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      },
      {
        path: 'admin',
        component: () => import('@/views/dashboard/user/index'),
        hidden: true,
        name: 'Admin',
        meta: { title: '账号管理', icon: 'admin' }
      }
    ]
  },

  {
    path: '/workbench',
    component: Layout,
    redirect: '/workbench/commentVerify',
    name: 'Workbench',
    meta: {
      title: '工作台',
      icon: 'component'
    },
    children: [
      {
        path: 'commentVerify',
        component: () => import('@/views/workbench/commentVerify/index'), // Parent router-view
        name: 'CommentVerify',
        meta: { title: '评论审核' }
      },
      {
        path: 'reviewNews',
        component: () => import('@/views/workbench/reviewNews/index'),
        name: 'ReviewNews',
        meta: { title: '新闻审核' }
      },
      {
        path: 'gossip',
        component: () => import('@/views/workbench/gossip/index'),
        name: 'Gossip',
        meta: { title: '爆料审核' }
      },
      {
        path: 'rejectReasons',
        component: () => import('@/views/workbench/rejectReasons'),
        name: 'RejectReasons',
        meta: { title: '审核拒绝原因' }
      },
      {
        path: 'userFeedback',
        component: () => import('@/views/workbench/userFeedback/index'),
        name: 'UserFeedback',
        meta: { title: '用户反馈' }
      },
      {
        path: 'report',
        component: () => import('@/views/workbench/report/index'),
        name: 'Report',
        meta: { title: '举报处理' }
      },
      {
        path: 'seeSection',
        component: () => import('@/views/workbench/seeSection'),
        name: 'SeeSection',
        meta: { title: '栏目查看' }
      }
    ]
  },
  {
    path: '/content',
    component: Layout,
    redirect: '/content/mediaAssets/all-media',
    name: 'Content',
    meta: {
      title: '内容管理',
      icon: 'component'
    },
    children: [
      {
        path: 'mediaAssets',
        component: () => import('@/views/content/index'), // Parent router-view
        name: 'MediaAssets',
        meta: { title: '稿件管理' },
        alwaysShow: true,
        redirect: '/content/mediaAssets/all-media',
        children: [
          {
            path: 'all-media',
            component: () => import('@/views/content/mediaAssets/all-media'),
            name: 'All-media',
            meta: { title: '所有稿件' }
          },
          {
            path: 'watch-column',
            component: () => import('@/views/content/mediaAssets/watch-column'),
            hidden: true,
            name: 'Watch-column',
            meta: { title: '查看栏目' }
          },
          {
            path: 'add-media',
            component: () => import('@/views/content/mediaAssets/add-media'),
            hidden: true,
            name: 'Add-media',
            meta: { title: '编辑内容' }
          },
          {
            path: 'labelManage',
            component: () => import('@/views/content/mediaAssets/labelManage'),
            name: 'LabelManage',
            meta: { title: '标签管理' }
          },
          {
            path: 'my',
            component: () => import('@/views/content/mediaAssets/my'),
            name: 'My',
            meta: { title: '我的稿件' }
          },
          {
            path: 'recycleBox',
            component: () => import('@/views/content/mediaAssets/recycleBox'),
            name: 'RecycleBox',
            meta: { title: '回收站' }
          }
        ]
      },
      {
        path: 'mediaRepository',
        component: () => import('@/views/content/index'), // Parent router-view
        name: 'MediaRepository',
        meta: { title: '媒体库' },
        alwaysShow: true,
        redirect: '/content/mediaRepository/allResources',
        children: [
          {
            path: 'allResources',
            component: () => import('@/views/content/mediaRepository/allResources'),
            name: 'AllResources',
            meta: { title: '全部图片' }
          },
          {
            path: 'myResources',
            component: () => import('@/views/content/mediaRepository/myResources'),
            name: 'MyResources',
            meta: { title: '我的图片' }
          },
          {
            path: 'classmanage',
            component: () => import('@/views/content/mediaRepository/classmanage'),
            name: 'Classmanage',
            meta: { title: '(媒体库)分类管理' }
          }
        ]
      }
    ]
  },
  {
    path: '/manage',
    component: Layout,
    redirect: '/manage/architec/architec-site',
    name: 'Manage',
    meta: {
      title: '管理中心',
      icon: 'component'
    },
    children: [
      {
        path: 'architec',
        component: () => import('@/views/manage/index'), // Parent router-view
        name: 'Architec',
        meta: { title: '架构管理' },
        alwaysShow: true,
        redirect: '/manage/architec/architec-site',
        children: [
          {
            path: 'architec-site',
            component: () => import('@/views/manage/architec/architec-site'),
            name: 'Architec-site',
            meta: { title: '站点管理' }
          },
          {
            path: 'channel-info',
            component: () => import('@/views/manage/architec/channel-info'),
            name: 'Channel-info',
            meta: { title: '频道信息' }
          },
          {
            path: 'product',
            component: () => import('@/views/manage/architec/product'),
            name: 'Product',
            meta: { title: '产品管理' }
          },
          {
            path: 'column',
            component: () => import('@/views/manage/architec/column'),
            name: 'Column',
            meta: { title: '栏目管理' }
          },
          {
            path: 'app-menu',
            component: () => import('@/views/manage/architec/app-menu'),
            name: 'App-menu',
            meta: { title: 'APP用户中心菜单' }
          }
        ]
      },
      {
        path: 'staff',
        component: () => import('@/views/manage/index'), // Parent router-view
        name: 'Staff',
        meta: { title: '员工管理' },
        alwaysShow: true,
        redirect: '/manage/staff/staff-list',
        children: [
          {
            path: 'staff-list',
            component: () => import('@/views/manage/staff/staff-list'),
            name: 'Staff-list',
            meta: { title: '员工列表' }
          },
          {
            path: 'staff-jurisdiction',
            component: () => import('@/views/manage/staff/staff-jurisdiction'),
            name: 'Staff-jurisdiction',
            meta: { title: '权限管理' }
          },
          {
            path: 'staff-role',
            component: () => import('@/views/manage/staff/staff-role'),
            name: 'Staff-role',
            meta: { title: '角色管理' }
          }
        ]
      },
      {
        path: 'user',
        component: () => import('@/views/manage/index'), // Parent router-view
        name: 'User',
        meta: { title: '用户管理' },
        alwaysShow: true,
        redirect: '/manage/user/user-list',
        children: [
          {
            path: 'user-list',
            component: () => import('@/views/manage/user/user-list/index'),
            name: 'User-list',
            meta: { title: '用户列表' }
          },
          {
            path: 'blacklist',
            component: () => import('@/views/manage/user/blacklist'),
            name: 'Blacklist',
            meta: { title: '黑名单' }
          },
          {
            path: 'convention',
            component: () => import('@/views/manage/user/convention'),
            name: 'Convention',
            meta: { title: '常规积分规则' }
          }
        ]
      },
      {
        path: 'system',
        component: () => import('@/views/manage/index'), // Parent router-view
        name: 'System',
        meta: { title: '系统设置' },
        alwaysShow: true,
        redirect: '/manage/system/system-sensitword',
        children: [
          {
            path: 'system-sensitword',
            component: () => import('@/views/manage/system/system-sensitword'),
            name: 'System-sensitword',
            meta: { title: '敏感词管理' }
          },
          {
            path: 'system-whiteList',
            component: () => import('@/views/manage/system/system-whiteList'),
            name: 'System-whiteList',
            meta: { title: '敏感词白名单' }
          }
        ]
      }
    ]
  },
  {
    path: '/radioTV/index',
    component: Layout,
    redirect: 'radioTVIndex',
    name: 'RadioTV',
    meta: {
      title: '广电管理',
      icon: 'component'
    },
    children: [
      {
        path: 'radioTVIndex',
        component: () => import('@/views/radioTV/radioTVIndex'), // Parent router-view
        name: 'RadioTVIndex',
        meta: { title: '广电管理' }
      }
    ]
  },
  {
    path: '/operaManage',
    component: Layout,
    name: 'OperaManage',
    redirect: '/operaManage/studio/studioList',
    meta: {
      title: '运营管理',
      icon: 'component'
    },
    children: [
      {
        path: 'studio',
        component: () => import('@/views/operamanage/studio/index'),
        name: 'Studio',
        meta: { title: '直播间管理' },
        alwaysShow: true,
        redirect: '/operaManage/studio/studioList',
        children: [
          {
            path: 'studioList',
            component: () => import('@/views/operamanage/studio/studioList/index'),
            name: 'StudioList',
            meta: { title: '直播间列表' }
          },
          {
            path: 'waterManage',
            component: () => import('@/views/operamanage/studio/waterManage'),
            name: 'WaterManage',
            meta: { title: '平台流水管理' }
          },
          {
            path: 'accountManage',
            component: () => import('@/views/operamanage/studio/accountManage'),
            name: 'AccountManage',
            meta: { title: '平台账号管理' }
          }
        ]
      }
    ]
  },
  {
    path: '/mbh',
    component: Layout,
    redirect: '/mbh/index',
    name: 'MBH',
    meta: {
      title: '模板化',
      icon: 'component'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/mbh/index'), // Parent router-view
        name: 'index',
        meta: { title: '产品管理' }
      },
      {
        path: 'productstylelist',
        component: () => import('@/views/mbh/productstylelist'), // Parent router-view
        name: 'productstylelist',
        meta: { title: '产品样式列表' },
        hidden: true
      },
      {
        path: 'catalog',
        component: () => import('@/views/mbh/catalog'), // Parent router-view
        name: 'catalog',
        meta: { title: '栏目管理' }
      },
      {
        path: 'setmeal',
        component: () => import('@/views/mbh/setmeal'), // Parent router-view
        name: 'setmeal',
        meta: { title: '套餐管理' },
        hidden: true
      },
      {
        path: 'setmealDetails',
        component: () => import('@/views/mbh/setmealDetails'), // Parent router-view
        name: 'setmealDetails',
        meta: { title: '套餐详情' },
        hidden: true
      },
      {
        path: 'stylelist',
        component: () => import('@/views/mbh/stylelist'), // Parent router-view
        name: 'stylelist',
        meta: { title: '基础样式列表' }
      }
    ]
  }

  // {
  //   path: '/documentation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: 'Documentation', icon: 'documentation', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: 'Guide', icon: 'guide', noCache: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/profile',
  //   component: Layout,
  //   redirect: '/profile/index',
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/profile/index'),
  //       name: 'Profile',
  //       meta: { title: 'Profile', icon: 'user', noCache: true }
  //     }
  //   ]
  // }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = [
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
