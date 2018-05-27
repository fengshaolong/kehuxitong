import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import HelloWorld from '@/components/HelloWorld'

import Login from '../components/login/login'

import CategoryFirst from '../components/categoryFirst/categoryFirst'

import CategorySecond from '../components/categorySecond/categorySecond'
import Header from '../components/header/header'
import Fenjidaoheng from '../components/fenjidaoheng/fenjidaoheng'
import Xiala from '../components/xiala/xiala'
import Foter from '../components/foter/foter'
import Tupian from '../components/tupian/tupian'

import NoFound from '../components/no-found/no-found'



Vue.use(Router),
Vue.use(VueAxios, axios)

export default new Router({
  linkActiveClass: 'active',
  mode:'history',
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      component: Login
    },
    {
      path: '/login',
      // name: 'HelloWorld',
      component: Login
    },
    {
      path: '/categoryFirst',
      // name: 'HelloWorld',
      component: CategoryFirst,
      children: [
        {
          path: '/header',
          component: Header,
          meta: { requiresAuth: true }
        },
        {
          path: '/fenjidaoheng',
          component: Fenjidaoheng,
          meta: { requiresAuth: true }
        },
      ]
    },
    {
      path: '/categorySecond',
      // name: 'HelloWorld',
      component: CategorySecond,
      children: [
        {
          path: '/header',
          component: Header,
          meta: { requiresAuth: true }
        },
        {
          path: '/fenjidaoheng',
          component: Fenjidaoheng,
          meta: { requiresAuth: true }
        },
        {
          path: '/tupian',
          component: Tupian,
          meta: { requiresAuth: true }
        },
        {
          path: '/xiala',
          component: Xiala,
          meta: { requiresAuth: true }
        },
        {
          path: '/foter',
          component: Foter,
          meta: { requiresAuth: true }
        },
      ]
    },
    {
      path: 'no_found',
      component: NoFound
    },
  ]
})


