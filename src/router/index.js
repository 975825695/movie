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
    }
  ]
})
