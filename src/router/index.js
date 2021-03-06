import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

import MediaAssetsMange  from '@/views/content/index'

import allMediaTemplate  from '@/views/content/mediaAssets/all-media'

import MyTemplate  from '@/views/content/mediaAssets/my'

import collectarticleTemplate  from '@/views/content/publicSentiment/collect-article'

import seeSectionTemplate  from '@/views/content/seeSection'



/* Router Modules */

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * defaultShow: true               if set true, will always show the root menu
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
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
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
        meta: { title: '??????', icon: 'dashboard', affix: true }
      },
      {
        path: 'admin',
        component: () => import('@/views/dashboard/user/index'),
        hidden: true,
        name: 'Admin',
        meta: { title: '????????????', icon: 'admin' }
      },
      {
        path: 'preview',
        component: () => import('@/views/dashboard/preview/index'),
        hidden: true,
        name: 'Preview',
        meta: { title: '??????' }
      }
    ]
  },
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
 * ?????????????????????????????????????????????
 */
export const asyncRoutes = [
  {
    path: '/dataCharts',
    component: Layout,
    redirect: '/dataCharts/charts',
    permission: 'dataCharts.manage',
    name: 'DataCharts',
    meta: {
      title: '???????????????',
      icon: 'chart'
    },
    children: [
      {
        path: 'charts',
        component: () => import('@/views/dashboard/charts'),
        permission: 'dataCharts.charts',
        name: 'Charts',
        meta: { title: '???????????????' },
      },
    ]
  },
  {
    path: '/content',
    component: Layout,
    redirect: '/content/mediaAssets/all-media',
    name: 'Content',
    permission: 'content.manage',
    meta: {
      title: '????????????',
      icon: 'clipboard'
    },
    children: [
      {
        path: 'seeSection',
        // component: () => import('@/views/content/seeSection'),
        component: seeSectionTemplate,
        name: 'SeeSection',
        permission: 'content.news.list',
        meta: { title: '????????????',keepAlive: true }
      },
      {
        path: 'projectManage',
        component: () => import('@/views/content/projectManage/index'),
        name: 'ProjectManage',
        permission: 'content.topic',
        //allow: true, // ????????????????????????  ????????????????????????
        meta: { title: '????????????' },
        /*redirect: '/content/projectManage/projectLists',
        children: [
          {
            path: 'projectLists',
            component: () => import('@/views/workbench/projectManage/lists'),
            name: 'ProjectLists',
            hidden: true,
            meta: { title: '??????????????????' }
          },
          {
            path: 'projectDetail/:id',
            component: () => import('@/views/workbench/projectManage/detail'),
            name: 'ProjectDetail',
            hidden: true,
            meta: { title: '?????????', noView: true }
          },
        ]*/
      },
      {
        path: 'mediaAssets',
       // component: () => import('@/views/content/index'), // Parent router-view  MediaAssetsMange
        component: MediaAssetsMange,
        name: 'MediaAssets',
        permission: 'content.script.manage',
        meta: { title: '????????????' },
        redirect: '/content/mediaAssets/all-media',
        children: [
          {
            path: 'all-media',
            // component: () => import('@/views/content/mediaAssets/all-media'),
            component: allMediaTemplate,
            name: 'All-media',
            permission: 'content.script.list',
            meta: { title: '????????????',keepAlive: true } //????????????
          },
          {
            path: 'my',
            // component: () => import('@/views/content/mediaAssets/my'),
            component: MyTemplate,
            name: 'My',
            permission: 'content.script.list',
            meta: { title: '????????????',keepAlive: true }
          },
          {
            path: 'labelManage',
            component: () => import('@/views/content/mediaAssets/labelManage'),
            name: 'LabelManage',
            permission: 'content.tag',
            meta: { title: '????????????' }
          },
          {
            path: 'recycleBox',
            component: () => import('@/views/content/mediaAssets/recycleBox'),
            name: 'RecycleBox',
            permission: 'content.news.list',
            meta: { title: '?????????' }
          },
          {
            path: 'watch-column',
            component: () => import('@/views/content/mediaAssets/watch-column'),
            hidden: true,
            name: 'Watch-column',
            meta: { title: '????????????', noCache: true }
          },
          {
            path: 'add-media',
            component: () => import('@/views/content/mediaAssets/add-media'),
            hidden: true,
            name: 'Add-media',
            meta: { title: '????????????', noCache: true }
          }
        ]
      },
      {
        path: 'publicSentiment',
        // component: () => import('@/views/content/index'),
        component: MediaAssetsMange,
        name: 'publicSentiment',
        permission: 'content.collect.manage',
        meta: { title: '???????????????' },
        redirect: '/content/publicSentiment/collect-list',
        children: [
          {
            path: 'collect-list',
            component: () => import('@/views/content/publicSentiment/collect-list'),
            name: 'collect-list',
            permission: 'content.collect.list',
            meta: { title: '????????????' }
          },
          {
            path: 'collect-article',
            // component: () => import('@/views/content/publicSentiment/collect-article'),
            component: collectarticleTemplate,
            name: 'collect-article',
            permission: 'content.collect.article',
            meta: { title: '??????????????????', keepAlive: true}
          },
          {
            path: 'watch-column',
            component: () => import('@/views/content/publicSentiment/watch-column'),
            hidden: true,
            name: 'Watch-column',
            meta: { title: '????????????', noCache: true }
          },
        ]
      },
      {
        path: 'studio',
        component: () => import('@/views/content/operamanage/studio/index'),
        name: 'Studio',
        permission: 'content.broadcast.manage',
        meta: { title: '???????????????' },
        redirect: '/operaManage/studio/studioList',
        children: [
          {
            path: 'studioList',
            component: () => import('@/views/content/operamanage/studio/studioList/index'),
            name: 'StudioList',
            permission: 'content.broadcast.list',
            meta: { title: '???????????????' }
          },
          {
            path: 'waterManage',
            component: () => import('@/views/content/operamanage/studio/waterManage'),
            hidden:true,
            name: 'WaterManage',
            meta: { title: '??????????????????' }
          },
          {
            path: 'accountManage',
            component: () => import('@/views/content/operamanage/studio/accountManage'),
            hidden:true,
            name: 'AccountManage',
            meta: { title: '??????????????????' }
          }
        ]
      },
      {
        path: 'column',
        component: () => import('@/views/content/manage/architec/column'),
        name: 'Column',
        permission: 'content.channel.manage',
        meta: { title: '????????????' }
      },
      {
        path: 'radioTVIndex',
        component: () => import('@/views/content/radioTV/radioTVIndex'), // Parent router-view
        name: 'RadioTVIndex',
        permission: 'content.tr.manage',
        meta: { title: '????????????' }
      },
      {
        path: 'mediaArticle',
        component: () => import('@/views/content/collect-article'), 
        name: 'MediaArticle',
        permission: 'content.article',
        meta: { title: '???????????????' }
      },
      {
        path: 'mediaRepository',
        component: () => import('@/views/content/index'), // Parent router-view
        name: 'MediaRepository',
        permission: 'content.resource_repo.manage',
        meta: { title: '?????????' },
        redirect: '/content/mediaRepository/allResources',
        children: [
          {
            path: 'allResources',
            component: () => import('@/views/content/mediaRepository/allResources'),
            name: 'AllResources',
            permission: 'content.resource_repo.resource.list_all',
            meta: { title: '????????????' }
          },
          {
            path: 'myResources',
            component: () => import('@/views/content/mediaRepository/myResources'),
            name: 'MyResources',
            permission: 'content.resource_repo.resource.list',
            meta: { title: '????????????' }
          },
          {
            path: 'videoManage',
            component: () => import('@/views/content/mediaRepository/videoManage'),
            name: 'videoManage',
            permission: 'content.resource_repo.video.manage',
            meta: { title: '????????????' }
          },
          {
            path: 'classmanage',
            component: () => import('@/views/content/mediaRepository/classmanage'),
            name: 'Classmanage',
            permission: 'content.resource_repo.category.manage',
            meta: { title: '(?????????)????????????' }
          },
          {
            path: 'videoClassify',
            component: () => import('@/views/content/mediaRepository/videoClassify'),
            name: 'VideoClassify',
            permission: 'content.resource_repo.category.video',
            meta: { title: '??????????????????' }
          }
        ]
      }
    ]
  },
  {
    path: '/workbench',
    component: Layout,
    redirect: '/workbench/commentVerify',
    name: 'Workbench',
    permission: 'work_space.manage',
    meta: {
      title: '?????????',
      icon: 'component'
    },
    children: [
      {
        path: 'reviewNews',
        component: () => import('@/views/workbench/reviewNews/index'),
        name: 'ReviewNews',
        permission: 'work_space.review_news',
        meta: { title: '????????????' }
      },
      {
        path: 'commentVerify',
        component: () => import('@/views/workbench/commentVerify/index'), // Parent router-view
        name: 'CommentVerify',
        permission: 'work_space.review_comment',
        meta: { title: '????????????' }
      },
      {
        path: 'gossip',
        component: () => import('@/views/workbench/gossip/index'),
        name: 'Gossip',
        permission: 'work_space.review_tip-off',
        meta: { title: '????????????' }
      },
      {
        path: 'posts',
        component: () => import('@/views/workbench/posts/index'),
        name: 'Posts',
        permission: 'work_space.review_posts',
        meta: { title: '????????????' }
      },
      {
        path: 'userFeedback',
        component: () => import('@/views/workbench/userFeedback/index'),
        name: 'UserFeedback',
        permission: 'work_space.review_feedback',
        meta: { title: '????????????' }
      },
      {
        path: 'report',
        component: () => import('@/views/workbench/report/index'),
        name: 'Report',
        permission: 'work_space.review_report',
        meta: { title: '????????????' }
      },
      {
        path: 'rejectReasons',
        component: () => import('@/views/workbench/rejectReasons'),
        name: 'RejectReasons',
        permission: 'work_space.refuse_reason',
        meta: { title: '??????????????????' }
      },
      {
        path: 'log',
        component: () => import('@/views/workbench/log'),
        name: 'Log',
        permission: 'work_space.log',
        meta: { title: '????????????' }
      }
    ]
  },
  {
    path: '/operaManage',
    component: Layout,
    name: 'OperaManage',
    permission: 'operation.manage',
    redirect: '/operaManage/studio/studioList',
    meta: {
      title: '????????????',
      icon: 'table'
    },
    children: [
      {
        path: 'events',
        component: () => import('@/views/operamanage/events'),
        name: 'Events',
        defaultShow: true,
        meta: { title: '??????' },
      },
      {
        path: 'vote',
        component: () => import('@/views/operamanage/vote'),
        name: 'Vote',
        defaultShow: true,
        meta: { title: '??????' },
      },
      {
        path: 'lottery_group',
        component: () => import('@/views/operamanage/lottery_group'),
        name: 'Lottery_group',
        defaultShow: true,
        meta: { title: '??????' },
      },
      {
        path: 'answer',
        component: () => import('@/views/operamanage/answer/index'),
        name: 'Answer',
        // permission: 'operation.answer',
        defaultShow: true,
        meta: { title: '????????????' },
        redirect: '/operaManage/answer/question',
        children: [
          {
            path: 'question',
            component: () => import('@/views/operamanage/answer/question'),
            name: 'Question',
            // permission: 'operation.answer.question',
            defaultShow: true,
            meta: { title: '????????????' }
          },
          {
            path: 'examination',
            component: () => import('@/views/operamanage/answer/examination'),
            name: 'Examination',
            // permission: 'operation.answer.examination',
            defaultShow: true,
            meta: { title: '????????????' }
          }
        ]
      },
      {
        path: 'community',
        component: () => import('@/views/operamanage/community/index'),
        name: 'Community',
        permission: 'operation.community',
        meta: { title: '????????????' },
        redirect: '/operaManage/community/classmanage',
        children: [
          {
            path: 'classmanage',
            component: () => import('@/views/operamanage/community/classmanage/index'),
            name: 'Classmanage',
            permission: 'operation.classmanage.community',
            meta: { title: '????????????' }
          },
          {
            path: 'topic',
            component: () => import('@/views/operamanage/community/topic/index'),
            name: 'Topic',
            permission: 'operation.topic.community',
            meta: { title: '????????????' }
          }
        ]
      },
      {
        path: 'advertPush',
        component: () => import('@/views/operamanage/advertPush/index'),
        name: 'AdvertPush',
        permission: 'operation.manage',
        meta: { title: '????????????' },
        redirect: '/operaManage/advertPush/advertList',
        children: [
          {
            path: 'advertList',
            component: () => import('@/views/operamanage/advertPush/advertList/index'),
            name: 'AdvertList',
            permission: 'operation.ad.manage',
            meta: { title: '????????????' }
          },
          {
            path: 'push',
            component: () => import('@/views/operamanage/advertPush/push'),
            name: 'Push',
            permission: 'operation.push.manage',
            meta: { title: '????????????' }
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
    permission: 'system.manage',
    meta: {
      title: '????????????',
      icon: 'user'
    },
    children: [
      {
        path: 'architec',
        component: () => import('@/views/manage/index'), // Parent router-view
        name: 'Architec',
        permission: 'system.manage',
        meta: { title: '????????????' },
        redirect: '/manage/architec/architec-site',
        children: [
          {
            path: 'architec-site',
            component: () => import('@/views/manage/architec/architec-site'),
            name: 'Architec-site',
            roles: ['Maintainer', 'Administrator', 'Admin'],
            // permission: 'system.site.manage',
            meta: { title: '????????????' }
          },
          {
            path: 'channel-info',
            component: () => import('@/views/manage/architec/channel-info'),
            name: 'Channel-info',
            roles: ['Maintainer', 'Administrator', 'Admin'],
            permission: 'system.channelInfo.manage',
            meta: { title: '????????????' }
          },
          {
            path: 'product',
            component: () => import('@/views/manage/architec/product'),
            name: 'Product',
            permission: 'system.product.manage',
            meta: { title: '????????????' }
          },
          {
            path: 'template-manage',
            component: () => import('@/views/manage/architec/template-manage'),
            name: 'Template-manage',
            roles: ['Administrator', 'Admin'],
            permission: 'system.template.manage',
            meta: { title: '????????????' }
          },
          {
            path: 'synchronized-parame',
            component: () => import('@/views/manage/architec/synchronized-parame'),
            name: 'Synchronized-parame',
            permission: 'system.synchronized.manage',
            meta: { title: '????????????' }
          }
        ]
      },
      {
        path: 'staff',
        component: () => import('@/views/manage/index'), // Parent router-view
        name: 'Staff',
        permission: 'system.staff.manage',
        meta: { title: '????????????' },
        redirect: '/manage/staff/staff-list',
        children: [
          {
            path: 'staff-list',
            component: () => import('@/views/manage/staff/staff-list'),
            name: 'Staff-list',
            permission: 'system.staff.manage',
            meta: { title: '????????????' }
          },
          {
            path: 'staff-department',
            component: () => import('@/views/manage/staff/staff-department'),
            name: 'Staff-department',
            permission: 'system.staff.manage',
            meta: { title: '????????????' }
          },
          {
            path: 'staff-jurisdiction',
            component: () => import('@/views/manage/staff/staff-jurisdiction'),
            name: 'Staff-jurisdiction',
            roles: ['Administrator'],
            permission: 'system.jurisdiction.manage',
            meta: { title: '????????????' }
          },
          {
            path: 'staff-role',
            component: () => import('@/views/manage/staff/staff-role'),
            name: 'Staff-role',
            roles: ['Maintainer', 'Administrator', 'Admin'],
            permission: 'system.staffRole.manage',
            meta: { title: '????????????' }
          }
        ]
      },
      {
        path: 'user',
        component: () => import('@/views/manage/index'), // Parent router-view
        name: 'User',
        permission: 'system.user.manage',
        meta: { title: '????????????' },
        redirect: '/manage/user/user-list',
        children: [
          {
            path: 'user-list',
            component: () => import('@/views/manage/user/user-list/index'),
            name: 'User-list',
            permission: 'system.user.list',
            meta: { title: '????????????' }
          },
          {
            path: 'query-list',
            component: () => import('@/views/manage/user/user-list/query-list'),
            name: 'Query-list',
            permission: 'system.user.queryList',
            meta: { title: '???????????????' }
          },
          {
            path: 'secret-manage',
            component: () => import('@/views/manage/user/secret-manage'),
            name: 'Secret-manage',
            permission: 'system.product.manage',
            meta: { title: '????????????' }
          },
          {
            path: 'blacklist',
            component: () => import('@/views/manage/user/blacklist'),
            name: 'Blacklist',
            permission: 'system.user.blacklist',
            meta: { title: '????????????' }
          },
          {
            path: 'convention',
            component: () => import('@/views/manage/user/convention'),
            name: 'Convention',
            permission: 'system.user.reward_points',
            meta: { title: '??????????????????' }
          },
          {
            path: 'sign-integral',
            component: () => import('@/views/manage/user/sign-integral'),
            name: 'sign-integral',
            permission: 'system.user.signIntegral',
            meta: { title: '??????????????????' }
          },
          {
            path: 'behavior-manage',
            component: () => import('@/views/manage/user/behavior-manage'),
            name: 'Behavior-manage',
            roles: ['Maintainer', 'Administrator', 'Admin'],
            meta: { title: '??????????????????' }
          }
        ]
      },
      {
        path: 'system',
        component: () => import('@/views/manage/index'), // Parent router-view
        name: 'System',
        permission: 'system.settings.manage',
        meta: { title: '????????????' },
        redirect: '/manage/system/system-sensitword',
        children: [
          {
            path: 'app-menu',
            component: () => import('@/views/manage/architec/app-menu'),
            name: 'App-menu',
            permission: 'system.settings.user_cente',
            meta: { title: 'APP??????????????????' }
          },
          {
            path: 'system-sensitword',
            component: () => import('@/views/manage/system/system-sensitword'),
            name: 'System-sensitword',
            permission: 'system.settings.sensitive_word',
            meta: { title: '???????????????' }
          },
          {
            path: 'system-whiteList',
            component: () => import('@/views/manage/system/system-whiteList'),
            name: 'System-whiteList',
            permission: 'system.settings.sensitive_word_white_list',
            meta: { title: '??????????????????' }
          },
          {
            path: 'mbhmealmange',
            component: () => import('@/views/manage/system/mbhmealmange'),
            name: 'Mbhmealmange',
            permission: 'templatify.combo.manage',
            meta: { title: '?????????????????????' }
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
    roles: ['Administrator', 'Admin'],
    meta: {
      title: '?????????',
      icon: 'list'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/mbh/index'), // Parent router-view
        name: 'index',
        permission: 'templatify.product.manage',
        meta: { title: '????????????' }
      },
      {
        path: 'productstylelist',
        component: () => import('@/views/mbh/productstylelist'), // Parent router-view
        name: 'productstylelist',
        meta: { title: '??????????????????', noCache: true },
        hidden: true
      },
      {
        path: 'catalog',
        component: () => import('@/views/mbh/catalog'), // Parent router-view
        name: 'catalog',
        permission: 'templatify.channel.manage',
        meta: { title: '????????????' }
      },
      {
        path: 'setmeal',
        component: () => import('@/views/mbh/setmeal'), // Parent router-view
        name: 'setmeal',
        meta: { title: '????????????' },
        hidden: true
      },
      {
        path: 'setmealDetails',
        component: () => import('@/views/mbh/setmealDetails'), // Parent router-view
        name: 'setmealDetails',
        meta: { title: '????????????', noCache: true },
        hidden: true
      },
      {
        path: 'stylelist',
        component: () => import('@/views/mbh/stylelist'), // Parent router-view
        name: 'stylelist',
        permission: 'templatify.style.manage',
        meta: { title: '??????????????????' }
      }
    ]
  },
  {
    path: '/report',
    component: Layout,
    redirect: '/report/statistics',
    permission: 'statistics.manage',
    name: 'Report',
    meta: {
      title: '???????????????',
      icon: 'form'
    },
    children: [
      {
        path: 'statistics',
        component: () => import('@/views/report/statistics'),
        permission: 'statistics.news',
        name: 'Statistics',
        meta: { title: '????????????' },
      },
    ]
  },
  {
    path: '/payment',
    component: Layout,
    redirect: '/payment/article',
    permission: 'payment.manage',
    name: 'Payment',
    meta: {
      title: '????????????',
      icon: 'excel'
    },
    children: [
      {
        path: 'article',
        component: () => import('@/views/payment/article'),
        permission: 'payment.article',
        name: 'Article',
        meta: { title: '????????????' },
      },
    ]
  },
  {
    path: '/checkdata',
    component: Layout,
    redirect: '/checkdata/companyManage',
    permission: 'checkdata.manage',
    name: 'Checkdata',
    meta: {
      title: '????????????',
      icon: 'chart'
    },
    children: [
      {
        path: 'companyManage',
        component: () => import('@/views/checkdata/companyManage'),
        permission: 'checkdata.manage.companyManage',
        name: 'CompanyManage',
        meta: { title: '????????????' },
      },
      {
        path: 'companyCheckData',
        component: () => import('@/views/checkdata/companyCheckData'),
        permission: 'checkdata.manage.companyCheckData',
        name: 'CompanyCheckData',
        meta: { title: '??????????????????' },
      },
      {
        path: 'personCheckData',
        component: () => import('@/views/checkdata/personCheckData'),
        permission: 'checkdata.manage.personCheckData',
        name: 'PersonCheckData',
        meta: { title: '??????????????????' },
      },
    ]
  },
  // {
  //   path: '/radioTV/index',
  //   component: Layout,
  //   redirect: 'radioTVIndex',
  //   name: 'RadioTV',
  //   meta: {
  //     title: '????????????',
  //     icon: 'example'
  //   },
  //   children: [
  //     {
  //       path: 'radioTVIndex',
  //       component: () => import('@/views/radioTV/radioTVIndex'), // Parent router-view
  //       name: 'RadioTVIndex',
  //       meta: { title: '????????????' }
  //     }
  //   ]
  // },

]

export const defaultRoutes = [
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  //mode: 'hash', // require service support
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
