import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/movie/index'
// import detail from '@/components/movie/detail'
// import query from '@/components/movie/query'
// import login from '@/components/movie/login'
// import vip from '@/components/movie/vip'
// import vipBuy from '@/components/movie/vipBuy'
// import record from '@/components/movie/record'
// import personal from '@/components/movie/personal'
// import community from '@/components/movie/community'
// import communityIndex from '@/components/movie/components-community/index'
// import communityWrite from '@/components/movie/components-community/write'
// import communityDetail from '@/components/movie/components-community/detail'
// import communityMyDocument from '@/components/movie/components-community/myDocument'

import store from '@/store'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      // component: index
      component:resolve=>require(['@/components/movie/index'],resolve)
    },
    {
      path: '/detail/:id',
      component:resolve=>require(['@/components/movie/detail'],resolve)
      // beforeEnter: (to, from, next) => {
      //   const saveRecordId = store._actions.saveRecordId[0]
      //   saveRecordId(to.params.id)
      //   next()
      // }
    },
    {
      path: '/query',
      component:resolve=>require(['@/components/movie/query'],resolve)
    },
    {
      path: '/query/:name',
      component:resolve=>require(['@/components/movie/query'],resolve)
    },
    {
      path: '/login',
      component:resolve=>require(['@/components/movie/login'],resolve)
    },
    {
      path: '/vipBuy',
      component:resolve=>require(['@/components/movie/vipBuy'],resolve)
    },
    {
      path: '/vip',
      component:resolve=>require(['@/components/movie/vip'],resolve)
    },
    {
      path: '/record',
      component:resolve=>require(['@/components/movie/record'],resolve)
    },
    {
      path: '/personal',
      component:resolve=>require(['@/components/movie/personal'],resolve)
    },
    {
      path: '/community',
      component:resolve=>require(['@/components/movie/community'],resolve),
      // beforeEnter: (to, from, next) => {
      //   let account = sessionStorage.getItem('account')
      //   // next()
      // },
      children:[
        {path:'',component:resolve=>require(['@/components/movie/components-community/index'],resolve)},
        {path:'write',component:resolve=>require(['@/components/movie/components-community/write'],resolve)},
        {path:'detail/:id',component:resolve=>require(['@/components/movie/components-community/detail'],resolve)},
        {path:'myDocument',component:resolve=>require(['@/components/movie/components-community/myDocument'],resolve)},
        {path:'searchDocument',component:resolve=>require(['@/components/movie/components-community/myDocument'],resolve)}
      ]
    }
  ]
})
