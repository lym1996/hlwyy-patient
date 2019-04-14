<template>
    <div class="width1210 dovHoverlist">
        <div v-if="haveDoc" class="paddingtop10 paddingbottom30 clear">
            <div v-for="(doc,index) in doclist" :key="index" class="doclist lineheight20 color-666" style="height: 335px;">
                <img src="../assets/img/defaultDoctor.png" alt="" class="margintop15 docphoto" width="80" height="80">
                <p v-html="doc.doctorName" class="margintop10 paddingX15 lineEllipsis theme-color-40c7c3"></p>
                <section class="relative">
                    <p class="margintop5 paddingX15 fontsize-1 lineEllipsis">
                        <span v-html="!!doc.sectionName?doc.sectionName:''"></span>
                        <i v-if="!!doc.sectionName && doc.linchuangTitle" class="marginX5">|</i>
                        <span v-html="!!doc.linchuangTitle?doc.linchuangTitle:''"></span>
                    </p>
                    <p class="margintop10 paddingX15 fontsize-1">
                        <span v-html="doc.registionDate+'|'+doc.startTime+'~'+doc.endTime"></span>
                        <span class="marginleft15 color-fe9e20 bold">￥{{doc.regitionPrice}}</span>
                    </p>
                    <div class="margin15X borderbottom-dashed"></div>
                    <div class="paddingX15 limited-2 fontsize-1 height40 textAlignLeft">
                        擅长
                        <span v-html="doc.specialty">{{doc.specialty?doc.specialty:'暂无简介'}}</span>
                        <el-scrollbar v-show="!!doc.specialty" wrap-class="goodatMask" class="goodatMask" style="bottom:66px;top:-66px;">
                        <p><i class="marginright10 theicon-docGoodat"></i>擅长</p>
                        <p class="margintop5 marginleft20" v-html="doc.specialty">{{doc.specialty}}</p>
                    </el-scrollbar>
                    </div>
                    <span v-if="doc.registionNum > 0" @click="gofillInfor(doc)" class="margin15X docyy" style="padding:0px 105px;">预约</span>
                    <span v-else class="margin15X docyy">暂无号源</span>
                </section>
            </div>
        </div>
        <div v-else class="paddingtop80 paddingbottom80 textAlignCenter">
            <img src="../assets/img/nodoc.png" alt="" width="200">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            haveDoc:true
        }
    },
    props: ["doclist"],
    watch: {
        doclist() {
            if(this.doclist.length > 0) {
                this.haveDoc = true
            } else {
                this.haveDoc = false
            }
        }
    },
    methods: {
        gofillInfor(doc){
            this.$router.push({ path:'fillInfor' , query:{sectionName:doc.sectionName,price:doc.regitionPrice,date:doc.registionDate,startTime:doc.startTime,endTime:doc.endTime,scheduleId:doc.registionDoctorScheduling} })
        },
    },
}
</script>