import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import axios from "axios"
import "../src/plugins/element"

Vue.config.productionTip = false
Vue.prototype.$axios=axios  //全局注册，使用方法为this.$axios
axios.baseURL=process.env.VUE_APP_URL

// // http request拦截器 添加一个请求拦截器
// axios.interceptors.request.use(function (config){
//   let token=window.localStorage.getItem("accessToken")
//   if(token){
//     config.headers.accessToken=token;//将token放到请求头发送给服务器
//     return config;
//     //这里经常搭配token使用，将token值配置到tokenkey中，将tokenkey放在请求头中
//     // config.headers['accessToken'] = Token;
//   }
// },function (error){
//   return Promise.reject(error)
// })

new Vue({
  router,
  store:store,
  render: h => h(App),
}).$mount('#app')
