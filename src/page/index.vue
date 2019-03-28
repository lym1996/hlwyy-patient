<template>
    <div>
        <!-- 登录模块 -->
        <logo></logo>
        <!-- 导航栏 -->
        <div class="width100pct height45 theme-bgcolor-40c7c3">
            <nav-list></nav-list>
        </div>
        <div>
            <router-view></router-view>
        </div>
        <!-- 友情链接 -->
        <div class="theme-bgcolor-40c7c3 height220" style="width:100%;">
            <friendlink></friendlink>
        </div>
    </div>
</template>
<script>
import logo from '../components/logo'
import navList from '../components/nav'
import friendlink from '../components/friendlink'
export default {
    components: { logo, navList, friendlink },
    data() {
        return {
            
        }
    },
}
</script>