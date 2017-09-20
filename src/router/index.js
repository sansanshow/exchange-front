import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main'
import Index from '@/views/index'
import Sign from '@/views/sign'
import Trade from '@/views/trade/trading'

import fundsIndex from '@/views/funds/fundsIndex'
import fundsTotal from '@/views/funds/fundsTotal'
import fundsRecharge from '@/views/funds/fundsRecharge'
import fundsDeposit from '@/views/funds/fundsDeposit'
import fundsDetail from '@/views/funds/fundsDetail'
import fundsAudit from '@/views/funds/fundsAudit'

import userIndex from '@/views/user/userIndex'
import userSecurity from '@/views/user/userSecurity'
import userIdentity from '@/views/user/userIdentity'
import userNotify from '@/views/user/userNotify'
import userAccount from '@/views/user/userAccount'


Vue.use(Router)
let router = new Router({
  routes: [
    // 首页
    { 
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title:'首页'
      }
    },
    // 注册登录 
    { 
      path: '/sign/:type', 
      component: Sign,
      meta: {
        title: '登录'
      }
    },
    // 注册 --alias
    {
      path: '/sign/reg', 
      component: Sign,
      alias: '/register',
      meta: {
        title:'注册'
      }
    },
    // 登录 --alias
    { 
      path: '/sign/login', 
      component: Sign,
      alias: '/login',
      meta: {
        title:'登录'
      }
    },
    // 交易中心
    { 
      path: '/trading', 
      name: 'trade',
      component: Trade,
      alias: '/trade',
      meta: {
        title:'交易中心'
      }
    },
    // 资产
    { 
      path: '/funds', 
      name: 'funds',
      component: fundsIndex,
      meta: {
        title:'资金管理'
      },
      children:[
        {
          path: '',
          component: fundsTotal,
          name: 'fundsTotal',
          meta: {
            title:'资金管理'
          }
        },
        {
          path: 'reacharge',
          component: fundsRecharge,
          name: 'fundsRecharge',
          meta: {
            title:'充值'
          }
        },
        {
          path: 'deposit',
          component: fundsDeposit,
          name: 'fundsDeposit',
          meta: {
            title:'提现'
          }

        },
        {
          path: 'detail',
          component: fundsDetail,
          name: 'fundsDetail',
          meta: {
            title:'账单明细'
          }

        },
        {
          path: 'audit',
          component: fundsAudit,
          name: 'fundsAudit',
          meta: {
            title:'资产审计'
          }

        },
      ]
    },
    // 个人中心
    { 
      path: '/user', 
      name: 'user',
      component: fundsIndex,
      meta: {
        title:'个人中心'
      },
      children:[
        {
          path: '',
          component: userSecurity,
          name: 'userSecurity',
          meta: {
            title:'安全中心'
          }
        },
        {
          path: 'security',
          component: userSecurity,
          name: 'userSecurity',
          meta: {
            title:'安全中心'
          }
        },
        {
          path: 'identity',
          component: userIdentity,
          name: 'userIdentity',
          meta: {
            title:'身份认证'
          }
        },
        {
          path: 'notify',
          component: userNotify,
          name: 'userNotify',
          meta: {
            title:'通知设置'
          }

        },
        {
          path: 'account',
          component: userAccount,
          name: 'userAccount',
          meta: {
            title:'账户管理'
          }

        }
      ]
    },
  ]
})
//路由跳转钱操作
router.beforeEach((to, form, next) => {
  // 登录过滤
      // next({ name: "login", query: { path: to.fullPath } });
      console.log('---filter--'+to.meta.title || '');
      if(to.meta.title){
        document.title = to.meta.title;
      }
      next();
})
export default router;