<template>
    <div class="homeDoclist clear">
        <div class="dept" v-if="doclist.length == 0">
            <img :src="nodoc" style="margin-top: 100px">
        </div>
        <div v-for="(doc,index) in doclist" :key="index" class="doclist lineheight20 color-666">
            <img src="../assets/img/defaultDoctor.png" class="margintop30 docphoto" width="80" height="80">
            <p v-html="doc.doctorName" class="margintop10 paddingX15 lineEllipsis theme-color-40c7c3"></p>
            <section class="relative">
                <p class="margintop10 paddingX15 fontsize-1 lineEllipsis">
                    <span v-html="!!doc.sectionName?doc.sectionName:''"></span>
                    <i v-if="!!doc.sectionName && !!doc.linchuangTitle" class="marginX5">|</i>
                    <span v-html="!!doc.linchuangTitle?doc.linchuangTitle:''"></span>
                </p>
                <div class="margin20X borderbottom-dashed"></div>
                <div class="paddingX15 limited-2 fontsize-1 height40 textAlignLeft">
                    擅长：
                    <span v-html="doc.specialty">{{doc.specialty?doc.specialty:'暂无简介'}}</span>
                    <el-scrollbar v-show="!!doc.specialty" wrap-class="goodatMask" class="goodatMask" style="bottom:66px;top:-66px;">
                        <p><i class="marginright10 theicon-docGoodat"></i>擅长</p>
                        <p class="margintop5 marginleft20" v-html="doc.specialty">{{doc.specialty}}</p>
                    </el-scrollbar>
                </div>
                <span v-if="doc.registionNum > 0" v-html="doc.registionDate+'|'+doc.startTime+'~'+doc.endTime" @click="gofillInfor(doc)" class="margin20X docyy"></span>
                <span v-else class="margin20X docyy">暂无号源</span>
            </section>
        </div>
    </div>
</template>
<script>
import nodoc from '../assets/img/nodoc.png'
export default {
    data() {
        return {
            nodoc:nodoc
        }
    },
    methods: {
        gofillInfor(doc) {
            this.$router.push({ path:'fillInfor', query: {sectionId:this.sectionId,timeType:this.timeType,date:this.date}})
        }
    },
    props:["doclist"]
}
</script>