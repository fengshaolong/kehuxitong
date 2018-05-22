// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import Echarts from 'echarts';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import './assets/jquery-2.1.4.js';
// import './assets/echarts.min.js';
import './style/index.css'
import './assets/css/longin.css'

Vue.prototype.$echarts = echarts ;
Vue.use(ElementUI);
Vue.use(Echarts);
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'

})
