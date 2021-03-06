/** 路由器对象模块 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login/Login.vue' // 登录

import Home from '../pages/Home/Home.vue' // 主页组件
import Table from '../components/table/table.vue' // table模板

import KeyOne from '../pages/KeyOne/KeyOne.vue'
import KeyTwo from '../pages/KeyTwo/KeyTwo.vue'
import KeyThree from '../pages/KeyThree/KeyThree.vue'
import KeyFour from '../pages/KeyFour/KeyFour.vue'

// 声明使用插件
Vue.use(Router)

// /**
//  * 重写路由的push方法
//  * 解决，相同路由跳转时，报错，即就是重复触发了同一个路由报错问题
//  * /
// const routerPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//     return routerPush.call(this, location).catch(error => error)
// }

/* eslint-disable */
export default new Router({
    // 配置所有路由
    routes: [
        { // 默认路径
            path: '/',
            redirect: '/home/keyone'
        },
        { // 登录
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: 'table',
                    name: 'table',
                    component: Table
                },
                {
                    path: 'keyone',
                    name: 'KeyOne',
                    component: KeyOne
                },
                {
                    path: 'keytwo',
                    name: 'KeyTwo',
                    component: KeyTwo
                },
                {
                    path: 'keythree',
                    name: 'KeyThree',
                    component: KeyThree
                },
                {
                    path: 'keyfour',
                    name: 'KeyFour',
                    component: KeyFour
                }
            ]
        }
    ]
})
