<template>
    <div>
        <HeaderTop class="header">
            <span class="header_login" slot="right">
                <router-link to="/login" class="profile-link">
                    <span class="header_login_btn">退出</span>
                </router-link>
            </span>
        </HeaderTop>
        <KeyMain></KeyMain>
        <router-view class="main-box"></router-view>
    </div>
</template>

<script>
import KeyMain from '../../components/KeyMain/KeyMain.vue'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'

export default {
    components: {
        KeyMain,
        HeaderTop
    }
}
</script>

<style>
    .header{
        height: 60px;
        color: #fff;
    }
    .header_login{
        float: right;
    }
    .main-box{
        position: absolute;
        top: 60px;
        left: 200px;
        right: 0;
        bottom: 0;
        background-color: #F0F2F5;
    }
</style>
