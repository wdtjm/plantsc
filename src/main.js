import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VJstree from 'vue-jstree'
import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts';
import request from "@/js/request";
import axios from 'axios'
import eventBus from '@/js/EventBus';

//配置后端的访问地址
axios.defaults.baseURL = process.env.VUE_APP_API

Vue.prototype.$request = request
Vue.prototype.$scatterdata = {}
Vue.prototype.$treedata = {}
Vue.prototype.$loading = {
  'loading':false
}
Vue.prototype.$eventBus=eventBus


Vue.use(ElementUI,VJstree);
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

