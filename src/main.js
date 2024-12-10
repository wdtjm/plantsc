import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* import VJstree from 'vue-jstree' */
import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts';
import request from "@/js/request";
import axios from 'axios'
import eventBus from '@/js/EventBus';
import locale from 'element-ui/lib/locale/lang/en'
import JsonExcel from 'vue-json-excel';// 导出Excel文件组件

Vue.component('downloadExcel', JsonExcel)

//配置后端的访问地址
axios.defaults.baseURL = process.env.VUE_APP_API

Vue.prototype.$request = request
Vue.prototype.$scatterdata = {}
Vue.prototype.$treedata = {}
Vue.prototype.$loading = {
  'loading':false
}
Vue.prototype.$eventBus=eventBus
Vue.prototype.$marker={
  "name":null,
  "species":null,
  
}

Vue.use(ElementUI,{ locale });
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

