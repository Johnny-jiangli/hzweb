import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import DevicePage from '../views/DevicePage'
import SiteTable from '../components/siteTable'



Vue.use(Router)
export default new Router({
  // mode:history,
  routes: [
    {
      path:'/devicepage',
      component:DevicePage
    },
    {
      path:'/index',
      component:SiteTable
    }
  ]
})
