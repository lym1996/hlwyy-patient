<template>
    <div>
        <!-- 登录模块 -->
        <logo></logo>
        <!-- 导航栏 -->
        <nav-list></nav-list>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import logo from '../components/logo'
import navList from '../components/nav'
export default {
    components: { logo, navList },
    data() {
        return {
            
        }
    },
}
</script>