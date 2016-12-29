// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import { Col, Row, Button, ButtonGroup, Loading, Message } from 'element-ui'

// 安装全局 element-ui 组件
Vue.use(Col)
Vue.use(Row)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Loading)
console.log(Message);
// Vue.prototype.$message = Message;
// Message.error("错了哦，这是一条错误消息")

// 启用路由
Vue.use(VueRouter);
const router = new VueRouter({
  routes
})

new Vue({
  ...App,
  router
}).$mount("#app")
