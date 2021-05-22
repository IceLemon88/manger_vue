<template>
    <!-- 登录 -->
    <div class="logins">
        <div class="main">
            <div class="logo_box">
                <div class="logo_img">
                    <img :src="imgUrl1">
                </div>
                <h3>用户登录</h3>
                <form class="logo_form">
                    <div class="logo_main">
                        <ul>
                            <li>
                                <span>
                                    <img :src="userImg">
                                    <input id="loginUser" class="username" type="text" placeholder="用户名">
                                </span>
                                <div class="r_error">
                                    <span class="error_msg" id="loginUserTip">用户名不能为空</span>
                                </div>
                            </li>
                            <li>
                                <span>
                                    <img :src="passwordImg">
                                    <input id="loginPsd" class="password" type="password" placeholder="密码">
                                </span>
                                <div class="r_error">
                                    <span class="error_msg" id="loginPsdTip">密码不能为空</span>
                                </div>
                            </li>
                            <li>
                                <!-- <button type="submit" class="loginBtn" id="loginBtn" @click="goTo('/home/keyone')"> -->
                                <button type="submit" class="loginBtn" id="loginBtn" @click="goTo">
                                    <span>登录</span>
                                </button>
                                <button type="reset" class="resetBtn" id="resetBtn">
                                    <span>重置</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgUrl1: require("../../common/img/logo.png"),
                userImg: require("../../common/img/loginUser.png"),
                passwordImg: require("../../common/img/loginPassword.png"),
                name: '', //用户名
                pwd: '', //密码
                alertShow: false, //是否显示警告框
            }
        },
        methods: { //方法
            // 点击方法——模块跳转
            // goTo(path) {
            //     this.$router.replace(path);
            // }
            goTo: function () {
                this.$router.push({path: '/home/keyone'});
            }
        }
    }
</script>

<style>
    /* 引用通用样式方法 */
    @import "../../common/css/commonStyle.css";
    @import "./css/login.css";

</style>
