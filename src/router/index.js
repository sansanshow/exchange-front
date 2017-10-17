import Vue from 'vue'
import store from '../mixin/store'
import Router from 'vue-router'
import Main from '@/views/main'
const Index = () => import('@/views/index')
const Sign = () => import('@/views/sign')
const Trade = () => import('@/views/trade/trading')
// import Index from '@/views/index'
// import Sign from '@/views/sign'
// import Trade from '@/views/trade/trading'

import fundsIndex from '@/views/funds/fundsIndex'
import fundsTotal from '@/views/funds/fundsTotal'
import fundsRecharge from '@/views/funds/fundsRecharge'
import fundsDeposit from '@/views/funds/fundsDeposit'
import fundsDetail from '@/views/funds/fundsDetail'
import fundsAudit from '@/views/funds/fundsAudit'

import userIndex from '@/views/user/userIndex'
import userSafePolicy from '@/views/user/userSafePolicy'
import userSecurity from '@/views/user/userSecurity'
import securityGoogle from '@/views/user/userSecurityGoogle'
import securityMobile from '@/views/user/userSecurityMobile'
import securityResetPwd from '@/views/user/userSecurityResetPwd'
import securityFundPwd from '@/views/user/userSecurityFundPwd'
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
        title:'交易中心',
        requireAuth: true
      }
    },
    // 资产
    { 
      path: '/funds', 
      name: 'funds',
      component: fundsIndex,
      meta: {
        title:'资金管理',
        requireAuth: true
      },
      children:[
        {
          path: '',
          component: fundsTotal,
          name: 'fundsTotal',
          meta: {
            title:'资金管理',
            requireAuth: true
          }
        },
        {
          path: 'total',
          component: fundsTotal,
          name: 'fundsTotal',
          meta: {
            title:'资金管理',
            requireAuth: true
          }
        },
        {
          path: 'reacharge',
          component: fundsRecharge,
          name: 'fundsRecharge',
          meta: {
            title:'充值',
            requireAuth: true
          }
        },
        {
          path: 'deposit',
          component: fundsDeposit,
          name: 'fundsDeposit',
          meta: {
            title:'提现',
            requireAuth: true
          }

        },
        {
          path: 'detail',
          component: fundsDetail,
          name: 'fundsDetail',
          meta: {
            title:'账单明细',
            requireAuth: true
          }

        },
        {
          path: 'audit',
          component: fundsAudit,
          name: 'fundsAudit',
          meta: {
            title:'资产审计',
            requireAuth: true
          }

        },
      ]
    },
    // 个人中心
    { 
      path: '/user', 
      name: 'userIndex',
      component: userIndex,
      meta: {
        title:'个人中心',
        requireAuth: true
      },
      children:[
        {
          path: '',
          component: userSecurity,
          name: 'userSecurity',
          meta: {
            title:'安全中心',
            requireAuth: true
          }
        },
        // 安全中心
        {
          path: 'security',
          component: userSecurity,
          name: 'userSecurity',
          meta: {
            title:'安全中心',
            requireAuth: true
          }
        },
        {
          path: 'policy',
          component: userSafePolicy,
          name: 'userSafePolicy',
          meta: {
            title:'安全策略',
            requireAuth: true
          }
        },
        {
          path: 'identity',
          component: userIdentity,
          name: 'userIdentity',
          meta: {
            title:'身份认证',
            requireAuth: true
          }
        },
        {
          path: 'security/google',
          component: securityGoogle,
          name: 'securityGoogle',
          meta: {
            title:'安全中心-谷歌认证',
            requireAuth: true
          }
        },
        {
          path: 'security/mobile',
          component: securityMobile,
          name: 'securityMobile',
          meta: {
            title:'安全中心-绑定手机',
            requireAuth: true
          }
        },
        {
          path: 'security/pwd',
          component: securityResetPwd,
          name: 'securityResetPwd',
          meta: {
            title:'安全中心-重置密码',
            requireAuth: true
          }
        },
        {
          path: 'security/fundpwd',
          component: securityFundPwd,
          name: 'securityFundPwd',
          meta: {
            title:'安全中心-资金密码',
            requireAuth: true
          }
        },
        
        {
          path: 'notify',
          component: userNotify,
          name: 'userNotify',
          meta: {
            title:'通知设置',
            requireAuth: true
          }

        },
        {
          path: 'account',
          component: userAccount,
          name: 'userAccount',
          meta: {
            title:'账户管理',
            requireAuth: true
          }

        }
      ]
    },
  ]
})
//路由跳转钱操作
router.beforeEach((to, form, next) => {
  window.scrollTo(0, 0);
  if(to.meta.title){
    document.title = to.meta.title;
  }
  // 登录过滤
  if(to.meta.requireAuth && store.getStore('userInfo') == null){
    // if(store.getStore('userInfo') == null){
      next({ path: "/login", query: {path: to.fullPath}});
      return;
    // }
  }
  // next({ name: "login", query: { path: to.fullPath } });
  // console.log('---filter--'+to.meta.title || '');
  next();
})
export default router;