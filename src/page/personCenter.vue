<template>
    <div>
        <div class="height200">
            <b-img :src="grzx" class="height200 width100pct magintop-1"/>
        </div>
        <div class="width100pct bgcolor-f4f4f4 margintop20">
            <div class="clear marginXauto width1210">
                <div class="floatLeft bgcolor-white border-color">
                    <p class="width180 height45 theme-color-40c7c3 fontsize18 bold paddingleft40 lineheight45">个人中心</p>
                    <ul>
                        <li v-for="(data,index) in datalist" :key="index" @click="hoverClick(index)"
                        :class="['personlist', {'personlistActive': index==hoverborder1}]">
                            <router-link :to="data.url" class="inlineBlock width100pct height100pct">
                                <span class="personlistcon">{{data.content}}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="floatRight width1010 marginbottom55 border-color bgcolor-white">
                    <router-view ></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import grzx from '../assets/img/configImg/grzxbanner40c7c3.png'
export default {
    data() {
        return {
           grzx:grzx, 
           hoverborder1:0,
           datalist:[{
               url:'/personCenter/menRecord',
               content:'预约列表',
           },{
               url:'/personCenter/patientList',
               content:'就诊人列表',
           },{
               url:'/personCenter/changePwd',
               content:'修改密码',
           }]
        }
    },
    mounted() {
        this.hoverClick()
    },
    methods: {
        load:function(data) {
        },
        hoverClick(index) {
            if('/personCenter/menRecord' == this.$route.path) {
                this.hoverborder1 = 0
            } else if ('/personCenter/patientList' == this.$route.path) {
                this.hoverborder1 = 1
            } else if ('/personCenter/changePwd' == this.$route.path) {
                this.hoverborder1 = 2
            }
        }
    },
    watch: {
        '$route.path'(){
            this.hoverClick()
        }
    },
}
</script>