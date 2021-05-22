/* 入口JS */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import Routers from 'vue-router'

Vue.config.productionTip = false

// /**
//  * 重写路由的push方法
//  * 解决，相同路由跳转时，报错，即就是重复触发了同一个路由报错问题
//  * /
const routerPush = Routers.prototype.push
Routers.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error);
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
