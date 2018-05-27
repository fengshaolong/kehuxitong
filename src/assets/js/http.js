

import axios from 'axios'
import * as auth from './auth'
import nprogress from 'nprogress'


import router from '../../router/index.js'

export const bxgAxios = axios.create({
  baseURL: 'http://api.circle.ink/v1/',
  timeout: 1000 * 60, // 请求超时时间，当超过 6000 毫秒没有响应就触发超时钩子
  headers: { 'X-Access-Token': auth.getToken() }
})

bxgAxios.interceptors.request.use(function (config) { // 如果请求成功，会先进入这里，然后调用你的 then
  // Do something before request is sent
  if (config.nprogress) {
    nprogress.start()
  }

  return config; // 执行玩自己的自定义逻辑之后，就可以放行通过
}, function (error) { // 如果请求本身错误，会先进入这里
  // Do something with request error
  return Promise.reject(error)
})

// 当你使用 bxgAxios 发起的请求收到响应的时候会先进入响应拦截器
// 执行完拦截器的代码之后才真的发起请求
bxgAxios.interceptors.response.use(function (response) { // 响应没有异常就会地调用这个函数
  // Do something with response data
  // console.log(response)
  nprogress.done()
  return response
}, function (error) { // 只有非 2xx 的状态码错误才会进入这个方法
  // 登陆失败的时候会进入这里，所以这里也要让 nprogress 停止
  nprogress.done()

  const config = error.config

  // 现在所有使用 axios 发起请求的代码一旦出错就会进入这里，进行统一的异常处理
  // 注意：这里的异常不是普通的程序错误，一定是 HTTP 状态码错误
  const status = error.response && error.response.status

  switch (status) {
    case 500:
      window.alert(config.res500Message || '服务器异常')
      break
    case 403:
      window.alert(config.res403Message || '没有权限')
      break
    case 404:
      // 404 只有可以选择两种方式
      // 方式一：跳转到一个 404 页面
      // 方式二：弹框：资源不存在
      // 默认弹框：资源不存在
      if (config.redirect404) {
        // 可以选择跳转到 404
        router.push('/not_found')
      } else {
        window.alert(config.res404Message || '不存在')
      }
      break
    case 401:
      window.alert(config.res401Message || '未授权')
      break
    default:
      break
  }

  // Do something with response error
  return Promise.reject(error)
})
// 1. 定义插件
// 2. 导入插件 Vue.use(MyPlugin)
export default {
  // 只要你 Vue.use(插件对象) Vue 就会自动调用 install 方法把 Vue 传进来
  install: function (Vue, options) {
    // 然后在入口实例中通过 Vue.use(插件对象) 你就会发现在组件实例中多了一个对象：$axios
    // 这里就是把成员直接添加到了 Vue 的原型对象中
    Vue.prototype.$http = bxgAxios
  }
}

