<template>
    <div class="width100pct">
        <div class="marginXauto width1210 clear margintop30 marginbottom30">
            <img src="http://diagnose.zwjk.com/upload/2018/06/08/1528430211913.png" class="floatLeft" height="60">
            <div class="floatRight lineheight40">
				<span v-if="isLogin">
					<span class="color-cacaca">您好，{{name}}</span>
					<button type="button" class="marginleft10 btn commonTextBtn fontsize0" style="margin-top: -5px" @click="logout">退出</button>
				</span>
				<span v-else>
					<button type="button" class="btn commonTextBtn fontsize0 login" style="margin-top: -5px" @click="loginshow(0)">您好，请登录</button>
					<button type="button" class="btn commonTextBtn fontsize0" style="margin-top: -5px" @click="loginshow(1)">注册</button>
				</span>
			</div>
            <b-modal id="modal-login" ref="modalLogin" centered class="choosePerson clear">
				<login v-if="!ifLogin" :tabIndex="tabIndex" @switchTab="switchTab" @close="loginhide"></login>
			</b-modal>
        </div>
    </div>
</template>
<script>
    import login from '../components/login'
import { setTimeout } from 'timers';
export default {
    components:{ login },
    data() {
        return {
            name:localStorage.getItem('phone'),
            isLogin:localStorage.getItem('isLogin'),//控制用户名 从Item里取登录标识，如果是1就false，其他就是true
            ifLogin:false,//控制登录组件
            tabIndex:''
        }
    },
    mounted() {
        
    },
    methods: {
        loginshow(index){
            this.tabIndex = index
            this.ifLogin = false
            setTimeout(() => {
                this.ifLogin = false
            })
            this.$refs.modalLogin.show()
        },
        loginhide(){
            this.$refs.modalLogin.hide()
        },
        switchTab(index) {
            this.tabIndex = index
        },
        logout() {
            //调退出接口 if 成功 sessionStorage.removeItem
            localStorage.removeItem('phone');
            localStorage.removeItem('isLogin')
            this.$router.push({ path:'/home'})
            this.$router.go(0)
        },
        // loginByToken(){
        //     //登录接口 sessionStorage.setItem
        // }
    },
}
</script>