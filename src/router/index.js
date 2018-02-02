import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import update from '@/components/update'
import index from '@/components/movie/index'
import detail from '@/components/movie/detail'
import query from '@/components/movie/query'
import login from '@/components/movie/login'
import vip from '@/components/movie/vip'
import vipBuy from '@/components/movie/vipBuy'
import record from '@/components/movie/record'
import personal from '@/components/movie/personal'
import community from '@/components/movie/community'
import communityIndex from '@/components/movie/components-community/index'
import communityWrite from '@/components/movie/components-community/write'
import communityDetail from '@/components/movie/components-community/detail'
import communityMyDocument from '@/components/movie/components-community/myDocument'

import store from '@/store'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/detail/:id',
      component: detail
      // beforeEnter: (to, from, next) => {
      //   const saveRecordId = store._actions.saveRecordId[0]
      //   saveRecordId(to.params.id)
      //   next()
      // }
    },
    {
      path: '/query',
      component: query
    },
    {
      path: '/query/:name',
      component: query
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/vipBuy',
      component: vipBuy
    },
    {
      path: '/vip',
      component: vip
    },
    {
      path: '/record',
      component: record
    },
    {
      path: '/personal',
      component:personal,
    },
    {
      path: '/community',
      component:community,
      // beforeEnter: (to, from, next) => {
      //   let account = sessionStorage.getItem('account')
      //   // next()
      // },
      children:[
        {path:'',component:communityIndex},
        {path:'write',component:communityWrite},
        {path:'detail/:id',component:communityDetail},
        {path:'myDocument',component:communityMyDocument},
        {path:'searchDocument',component:communityMyDocument}
      ]
    }
  ]
})
