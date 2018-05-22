import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../components/login/login'
import CategoryFirst from '../components/categoryFirst/categoryFirst'
import CategorySecond from '../components/categorySecond/categorySecond'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      component: Login
    },
    {
      path: '/categoryFirst',
      // name: 'HelloWorld',
      component: CategoryFirst
    },
    {
      path: '/categorySecond',
      // name: 'HelloWorld',
      component: CategorySecond
    }
  ]
})


