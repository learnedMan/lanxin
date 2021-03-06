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
        meta: { title: '首页', icon: 'dashboard', affix: true }
      },
      {
        path: 'admin',
        component: () => import('@/views/dashboard/user/index'),
        hidden: true,
        name: 'Admin',
        meta: { title: '账号管理', icon: 'admin' }
      },
      {
        path: 'preview',
        component: () => import('@/views/dashboard/preview/index'),
        hidden: true,
        name: 'Preview',
        meta: { title: '预览' }
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
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = [
  {
    path: '/dataCharts',
    component: Layout,
    redirect: '/dataCharts/charts',
    permission: 'dataCharts.manage',
    name: 'DataCharts',
    meta: {
      title: '数据驾驶舱',
      icon: 'chart'
    },
    children: [
      {
        path: 'charts',
        component: () => import('@/views/dashboard/charts'),
        permission: 'dataCharts.charts',
        name: 'Charts',
        meta: { title: '数据驾驶舱' },
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
      title: '内容管理',
      icon: 'clipboard'
    },
    children: [
      {
        path: 'seeSection',
        // component: () => import('@/views/content/seeSection'),
        component: seeSectionTemplate,
        name: 'SeeSection',
        permission: 'content.news.list',
        meta: { title: '栏目数据',keepAlive: true }
      },
      {
        path: 'projectManage',
        component: () => import('@/views/content/projectManage/index'),
        name: 'ProjectManage',
        permission: 'content.topic',
        //allow: true, // 不管是否有子路由  只要有权限就显示
        meta: { title: '专题管理' },
        /*redirect: '/content/projectManage/projectLists',
        children: [
          {
            path: 'projectLists',
            component: () => import('@/views/workbench/projectManage/lists'),
            name: 'ProjectLists',
            hidden: true,
            meta: { title: '专题管理列表' }
          },
          {
            path: 'projectDetail/:id',
            component: () => import('@/views/workbench/projectManage/detail'),
            name: 'ProjectDetail',
            hidden: true,
            meta: { title: '子专题', noView: true }
          },
        ]*/
      },
      {
        path: 'mediaAssets',
       // component: () => import('@/views/content/index'), // Parent router-view  MediaAssetsMange
        component: MediaAssetsMange,
        name: 'MediaAssets',
        permission: 'content.script.manage',
        meta: { title: '稿件管理' },
        redirect: '/content/mediaAssets/all-media',
        children: [
          {
            path: 'all-media',
            // component: () => import('@/views/content/mediaAssets/all-media'),
            component: allMediaTemplate,
            name: 'All-media',
            permission: 'content.script.list',
            meta: { title: '所有稿件',keepAlive: true } //需要缓存
          },
          {
            path: 'my',
            // component: () => import('@/views/content/mediaAssets/my'),
            component: MyTemplate,
            name: 'My',
            permission: 'content.script.list',
            meta: { title: '我的稿件',keepAlive: true }
          },
          {
            path: 'labelManage',
            component: () => import('@/views/content/mediaAssets/labelManage'),
            name: 'LabelManage',
            permission: 'content.tag',
            meta: { title: '标签管理' }
          },
          {
            path: 'recycleBox',
            component: () => import('@/views/content/mediaAssets/recycleBox'),
            name: 'RecycleBox',
            permission: 'content.news.list',
            meta: { title: '回收站' }
          },
          {
            path: 'watch-column',
            component: () => import('@/views/content/mediaAssets/watch-column'),
            hidden: true,
            name: 'Watch-column',
            meta: { title: '查看栏目', noCache: true }
          },
          {
            path: 'add-media',
            component: () => import('@/views/content/mediaAssets/add-media'),
            hidden: true,
            name: 'Add-media',
            meta: { title: '编辑内容', noCache: true }
          }
        ]
      },
      {
        path: 'publicSentiment',
        // component: () => import('@/views/content/index'),
        component: MediaAssetsMange,
        name: 'publicSentiment',
        permission: 'content.collect.manage',
        meta: { title: '舆情大数据' },
        redirect: '/content/publicSentiment/collect-list',
        children: [
          {
            path: 'collect-list',
            component: () => import('@/views/content/publicSentiment/collect-list'),
            name: 'collect-list',
            permission: 'content.collect.list',
            meta: { title: '采集管理' }
          },
          {
            path: 'collect-article',
            // component: () => import('@/views/content/publicSentiment/collect-article'),
            component: collectarticleTemplate,
            name: 'collect-article',
            permission: 'content.collect.article',
            meta: { title: '采集文章管理', keepAlive: true}
          },
          {
            path: 'watch-column',
            component: () => import('@/views/content/publicSentiment/watch-column'),
            hidden: true,
            name: 'Watch-column',
            meta: { title: '查看栏目', noCache: true }
          },
        ]
      },
      {
        path: 'studio',
        component: () => import('@/views/content/operamanage/studio/index'),
        name: 'Studio',
        permission: 'content.broadcast.manage',
        meta: { title: '直播间管理' },
        redirect: '/operaManage/studio/studioList',
        children: [
          {
            path: 'studioList',
            component: () => import('@/views/content/operamanage/studio/studioList/index'),
            name: 'StudioList',
            permission: 'content.broadcast.list',
            meta: { title: '直播间列表' }
          },
          {
            path: 'waterManage',
            component: () => import('@/views/content/operamanage/studio/waterManage'),
            hidden:true,
            name: 'WaterManage',
            meta: { title: '平台流水管理' }
          },
          {
            path: 'accountManage',
            component: () => import('@/views/content/operamanage/studio/accountManage'),
            hidden:true,
            name: 'AccountManage',
            meta: { title: '平台账号管理' }
          }
        ]
      },
      {
        path: 'column',
        component: () => import('@/views/content/manage/architec/column'),
        name: 'Column',
        permission: 'content.channel.manage',
        meta: { title: '栏目管理' }
      },
      {
        path: 'radioTVIndex',
        component: () => import('@/views/content/radioTV/radioTVIndex'), // Parent router-view
        name: 'RadioTVIndex',
        permission: 'content.tr.manage',
        meta: { title: '广电管理' }
      },
      {
        path: 'mediaArticle',
        component: () => import('@/views/content/collect-article'), 
        name: 'MediaArticle',
        permission: 'content.article',
        meta: { title: '多媒体稿件' }
      },
      {
        path: 'mediaRepository',
        component: () => import('@/views/content/index'), // Parent router-view
        name: 'MediaRepository',
        permission: 'content.resource_repo.manage',
        meta: { title: '媒体库' },
        redirect: '/content/mediaRepository/allResources',
        children: [
          {
            path: 'allResources',
            component: () => import('@/views/content/mediaRepository/allResources'),
            name: 'AllResources',
            permission: 'content.resource_repo.resource.list_all',
            meta: { title: '全部图片' }
          },
          {
            path: 'myResources',
            component: () => import('@/views/content/mediaRepository/myResources'),
            name: 'MyResources',
            permission: 'content.resource_repo.resource.list',
            meta: { title: '我的图片' }
          },
          {
            path: 'videoManage',
            component: () => import('@/views/content/mediaRepository/videoManage'),
            name: 'videoManage',
            permission: 'content.resource_repo.video.manage',
            meta: { title: '视频管理' }
          },
          {
            path: 'classmanage',
            component: () => import('@/views/content/mediaRepository/classmanage'),
            name: 'Classmanage',
            permission: 'content.resource_repo.category.manage',
            meta: { title: '(媒体库)分类管理' }
          },
          {
            path: 'videoClassify',
            component: () => import('@/views/content/mediaRepository/videoClassify'),
            name: 'VideoClassify',
            permission: 'content.resource_repo.category.video',
            meta: { title: '蓝云视频分类' }
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
      title: '工作台',
      icon: 'component'
    },
    children: [
      {
        path: 'reviewNews',
        component: () => import('@/views/workbench/reviewNews/index'),
        name: 'ReviewNews',
        permission: 'work_space.review_news',
        meta: { title: '新闻审核' }
      },
      {
        path: 'commentVerify',
        component: () => import('@/views/workbench/commentVerify/index'), // Parent router-view
        name: 'CommentVerify',
        permission: 'work_space.review_comment',
        meta: { title: '评论审核' }
      },
      {
        path: 'gossip',
        component: () => import('@/views/workbench/gossip/index'),
        name: 'Gossip',
        permission: 'work_space.review_tip-off',
        meta: { title: '爆料审核' }
      },
      {
        path: 'posts',
        component: () => import('@/views/workbench/posts/index'),
        name: 'Posts',
        permission: 'work_space.review_posts',
        meta: { title: '帖子审核' }
      },
      {
        path: 'userFeedback',
        component: () => import('@/views/workbench/userFeedback/index'),
        name: 'UserFeedback',
        permission: 'work_space.review_feedback',
        meta: { title: '用户反馈' }
      },
      {
        path: 'report',
        component: () => import('@/views/workbench/report/index'),
        name: 'Report',
        permission: 'work_space.review_report',
        meta: { title: '举报处理' }
      },
      {
        path: 'rejectReasons',
        component: () => import('@/views/workbench/rejectReasons'),
        name: 'RejectReasons',
        permission: 'work_space.refuse_reason',
        meta: { title: '审核拒绝原因' }
      },
      {
        path: 'log',
        component: () => import('@/views/workbench/log'),
        name: 'Log',
        permission: 'work_space.log',
        meta: { title: '操作日志' }
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
      title: '运营管理',
      icon: 'table'
    },
    children: [
      {
        path: 'events',
        component: () => import('@/views/operamanage/events'),
        name: 'Events',
        defaultShow: true,
        meta: { title: '报名' },
      },
      {
        path: 'vote',
        component: () => import('@/views/operamanage/vote'),
        name: 'Vote',
        defaultShow: true,
        meta: { title: '投票' },
      },
      {
        path: 'lottery_group',
        component: () => import('@/views/operamanage/lottery_group'),
        name: 'Lottery_group',
        defaultShow: true,
        meta: { title: '抽奖' },
      },
      {
        path: 'answer',
        component: () => import('@/views/operamanage/answer/index'),
        name: 'Answer',
        // permission: 'operation.answer',
        defaultShow: true,
        meta: { title: '答题管理' },
        redirect: '/operaManage/answer/question',
        children: [
          {
            path: 'question',
            component: () => import('@/views/operamanage/answer/question'),
            name: 'Question',
            // permission: 'operation.answer.question',
            defaultShow: true,
            meta: { title: '题库管理' }
          },
          {
            path: 'examination',
            component: () => import('@/views/operamanage/answer/examination'),
            name: 'Examination',
            // permission: 'operation.answer.examination',
            defaultShow: true,
            meta: { title: '试卷管理' }
          }
        ]
      },
      {
        path: 'community',
        component: () => import('@/views/operamanage/community/index'),
        name: 'Community',
        permission: 'operation.community',
        meta: { title: '社区管理' },
        redirect: '/operaManage/community/classmanage',
        children: [
          {
            path: 'classmanage',
            component: () => import('@/views/operamanage/community/classmanage/index'),
            name: 'Classmanage',
            permission: 'operation.classmanage.community',
            meta: { title: '分类管理' }
          },
          {
            path: 'topic',
            component: () => import('@/views/operamanage/community/topic/index'),
            name: 'Topic',
            permission: 'operation.topic.community',
            meta: { title: '话题管理' }
          }
        ]
      },
      {
        path: 'advertPush',
        component: () => import('@/views/operamanage/advertPush/index'),
        name: 'AdvertPush',
        permission: 'operation.manage',
        meta: { title: '广告推送' },
        redirect: '/operaManage/advertPush/advertList',
        children: [
          {
            path: 'advertList',
            component: () => import('@/views/operamanage/advertPush/advertList/index'),
            name: 'AdvertList',
            permission: 'operation.ad.manage',
            meta: { title: '广告管理' }
          },
          {
            path: 'push',
            component: () => import('@/views/operamanage/advertPush/push'),
            name: 'Push',
            permission: 'operation.push.manage',
            meta: { title: '推送管理' }
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
      title: '管理中心',
      icon: 'user'
    },
    children: [
      {
        path: 'architec',
        component: () => import('@/views/manage/index'), // Parent router-view
        name: 'Architec',
        permission: 'system.manage',
        meta: { title: '架构管理' },
        redirect: '/manage/architec/architec-site',
        children: [
          {
            path: 'architec-site',
            component: () => import('@/views/manage/architec/architec-site'),
            name: 'Architec-site',
            roles: ['Maintainer', 'Administrator', 'Admin'],
            // permission: 'system.site.manage',
            meta: { title: '站点管理' }
          },
          {
            path: 'channel-info',
            component: () => import('@/views/manage/architec/channel-info'),
            name: 'Channel-info',
            roles: ['Maintainer', 'Administrator', 'Admin'],
            permission: 'system.channelInfo.manage',
            meta: { title: '租户信息' }
          },
          {
            path: 'product',
            component: () => import('@/views/manage/architec/product'),
            name: 'Product',
            permission: 'system.product.manage',
            meta: { title: '产品管理' }
          },
          {
            path: 'template-manage',
            component: () => import('@/views/manage/architec/template-manage'),
            name: 'Template-manage',
            roles: ['Administrator', 'Admin'],
            permission: 'system.template.manage',
            meta: { title: '模板管理' }
          },
          {
            path: 'synchronized-parame',
            component: () => import('@/views/manage/architec/synchronized-parame'),
            name: 'Synchronized-parame',
            permission: 'system.synchronized.manage',
            meta: { title: '同步参数' }
          }
        ]
      },
      {
        path: 'staff',
        component: () => import('@/views/manage/index'), // Parent router-view
        name: 'Staff',
        permission: 'system.staff.manage',
        meta: { title: '员工管理' },
        redirect: '/manage/staff/staff-list',
        children: [
          {
            path: 'staff-list',
            component: () => import('@/views/manage/staff/staff-list'),
            name: 'Staff-list',
            permission: 'system.staff.manage',
            meta: { title: '员工列表' }
          },
          {
            path: 'staff-department',
            component: () => import('@/views/manage/staff/staff-department'),
            name: 'Staff-department',
            permission: 'system.staff.manage',
            meta: { title: '部门管理' }
          },
          {
            path: 'staff-jurisdiction',
            component: () => import('@/views/manage/staff/staff-jurisdiction'),
            name: 'Staff-jurisdiction',
            roles: ['Administrator'],
            permission: 'system.jurisdiction.manage',
            meta: { title: '权限管理' }
          },
          {
            path: 'staff-role',
            component: () => import('@/views/manage/staff/staff-role'),
            name: 'Staff-role',
            roles: ['Maintainer', 'Administrator', 'Admin'],
            permission: 'system.staffRole.manage',
            meta: { title: '角色管理' }
          }
        ]
      },
      {
        path: 'user',
        component: () => import('@/views/manage/index'), // Parent router-view
        name: 'User',
        permission: 'system.user.manage',
        meta: { title: '用户管理' },
        redirect: '/manage/user/user-list',
        children: [
          {
            path: 'user-list',
            component: () => import('@/views/manage/user/user-list/index'),
            name: 'User-list',
            permission: 'system.user.list',
            meta: { title: '用户列表' }
          },
          {
            path: 'query-list',
            component: () => import('@/views/manage/user/user-list/query-list'),
            name: 'Query-list',
            permission: 'system.user.queryList',
            meta: { title: '邀请量查询' }
          },
          {
            path: 'secret-manage',
            component: () => import('@/views/manage/user/secret-manage'),
            name: 'Secret-manage',
            permission: 'system.product.manage',
            meta: { title: '秘钥管理' }
          },
          {
            path: 'blacklist',
            component: () => import('@/views/manage/user/blacklist'),
            name: 'Blacklist',
            permission: 'system.user.blacklist',
            meta: { title: '禁言名单' }
          },
          {
            path: 'convention',
            component: () => import('@/views/manage/user/convention'),
            name: 'Convention',
            permission: 'system.user.reward_points',
            meta: { title: '常规积分规则' }
          },
          {
            path: 'sign-integral',
            component: () => import('@/views/manage/user/sign-integral'),
            name: 'sign-integral',
            permission: 'system.user.signIntegral',
            meta: { title: '签到积分规则' }
          },
          {
            path: 'behavior-manage',
            component: () => import('@/views/manage/user/behavior-manage'),
            name: 'Behavior-manage',
            roles: ['Maintainer', 'Administrator', 'Admin'],
            meta: { title: '积分行为管理' }
          }
        ]
      },
      {
        path: 'system',
        component: () => import('@/views/manage/index'), // Parent router-view
        name: 'System',
        permission: 'system.settings.manage',
        meta: { title: '系统设置' },
        redirect: '/manage/system/system-sensitword',
        children: [
          {
            path: 'app-menu',
            component: () => import('@/views/manage/architec/app-menu'),
            name: 'App-menu',
            permission: 'system.settings.user_cente',
            meta: { title: 'APP用户中心菜单' }
          },
          {
            path: 'system-sensitword',
            component: () => import('@/views/manage/system/system-sensitword'),
            name: 'System-sensitword',
            permission: 'system.settings.sensitive_word',
            meta: { title: '敏感词管理' }
          },
          {
            path: 'system-whiteList',
            component: () => import('@/views/manage/system/system-whiteList'),
            name: 'System-whiteList',
            permission: 'system.settings.sensitive_word_white_list',
            meta: { title: '敏感词白名单' }
          },
          {
            path: 'mbhmealmange',
            component: () => import('@/views/manage/system/mbhmealmange'),
            name: 'Mbhmealmange',
            permission: 'templatify.combo.manage',
            meta: { title: '模板化套餐发布' }
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
      title: '模板化',
      icon: 'list'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/mbh/index'), // Parent router-view
        name: 'index',
        permission: 'templatify.product.manage',
        meta: { title: '产品管理' }
      },
      {
        path: 'productstylelist',
        component: () => import('@/views/mbh/productstylelist'), // Parent router-view
        name: 'productstylelist',
        meta: { title: '产品样式列表', noCache: true },
        hidden: true
      },
      {
        path: 'catalog',
        component: () => import('@/views/mbh/catalog'), // Parent router-view
        name: 'catalog',
        permission: 'templatify.channel.manage',
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
        meta: { title: '套餐详情', noCache: true },
        hidden: true
      },
      {
        path: 'stylelist',
        component: () => import('@/views/mbh/stylelist'), // Parent router-view
        name: 'stylelist',
        permission: 'templatify.style.manage',
        meta: { title: '基础样式列表' }
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
      title: '统计及报表',
      icon: 'form'
    },
    children: [
      {
        path: 'statistics',
        component: () => import('@/views/report/statistics'),
        permission: 'statistics.news',
        name: 'Statistics',
        meta: { title: '发稿统计' },
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
      title: '稿费系统',
      icon: 'excel'
    },
    children: [
      {
        path: 'article',
        component: () => import('@/views/payment/article'),
        permission: 'payment.article',
        name: 'Article',
        meta: { title: '稿费系统' },
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
      title: '考核统计',
      icon: 'chart'
    },
    children: [
      {
        path: 'companyManage',
        component: () => import('@/views/checkdata/companyManage'),
        permission: 'checkdata.manage.companyManage',
        name: 'CompanyManage',
        meta: { title: '单位管理' },
      },
      {
        path: 'companyCheckData',
        component: () => import('@/views/checkdata/companyCheckData'),
        permission: 'checkdata.manage.companyCheckData',
        name: 'CompanyCheckData',
        meta: { title: '单位考核统计' },
      },
      {
        path: 'personCheckData',
        component: () => import('@/views/checkdata/personCheckData'),
        permission: 'checkdata.manage.personCheckData',
        name: 'PersonCheckData',
        meta: { title: '人员考核统计' },
      },
    ]
  },
  // {
  //   path: '/radioTV/index',
  //   component: Layout,
  //   redirect: 'radioTVIndex',
  //   name: 'RadioTV',
  //   meta: {
  //     title: '广电管理',
  //     icon: 'example'
  //   },
  //   children: [
  //     {
  //       path: 'radioTVIndex',
  //       component: () => import('@/views/radioTV/radioTVIndex'), // Parent router-view
  //       name: 'RadioTVIndex',
  //       meta: { title: '广电管理' }
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
