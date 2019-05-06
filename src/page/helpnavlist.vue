<template>
    <div>
        <div class="height200">
            <b-img :src="bzzxImg" class="height200" style="width:100%;margin-top:-1px;"/>
        </div>
        <div class="width100pct bgcolor-f4f4f4 margintop20" style="margin-bottom:92px;">
            <div class="clear marginXauto width1210">
                <div class="floatLeft bgcolor-white border-color">
                    <p class="width140 height45 theme-color-40c7c3 fontsize18 bold marginleft40 lineheight45">帮助中心</p>
                    <ul>
                        <li @click="helplist(type,index)" v-for="(type,index) in typeList" :key="index" 
                            :class="['personlist', 'bgcolor-white', 'width180', 'height45', 'lineheight45', 'fontsize16', 'bordertop', 'cursorPointer', {'selected': type.classflag}]">
                            <span :class="['inlinBlock', 'marginleft40', 'color-333', 'personlistcon', {'selected-text': type.classflag}]" style="width:100%;height:100%">
                                <span>{{type.typeName}}</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="floatLeft marginleft15 marginbottom55  width1010 clear">
                    <div class="bgcolor-white border-color paddingbottom40">
                        <p class="borderbottom width950 height45 lineheight45  marginleft30 marginright30 fontsize18 bold">{{title}}</p>
                        <div class="marginleft30 marginright30 margintop30 fontsize14">
                            <p class="marginbottom20 color-333"></p>
                            <div class="color-666" v-if="id == 0">
                                <span>请在完成挂号后及时支付相应费用，支付完成后请携带就诊相关材料按照预约的时间及时到指定的科室医生下进行就诊，超过预约时间则会使预约过期，无法就诊。</span>
                            </div>
                            <div class="color-666" v-if="id == 1">
                                <h4>1.医院预约挂号</h4><br>
                                <h5>1.1PC端用户</h5><br>
                                <h6>通过浏览器（IE11以上）访问首页</h6><br>
                                <h4>2.注册登录</h4><br>
                                <h5>2.1使用手机号注册</h5><br>
                                <img src="../assets/img/registion.png" width="80%" height="500"><br>
                                <h5>2.2使用手机号登录</h5><br>
                                <img src="../assets/img/login.png" width="80%" height="500"><br>
                                <h4>3.个人中心</h4><br>
                                <h5>3.1就诊人管理：</h5><br>
                                <h6>添加就诊人信息，带*的为必填项，信息填写无误后点击确认添加</h6><br>
                                <img src="../assets/img/patient.png" alt="" width="80%" height="500"><br>
                                <h5>3.2预约列表：</h5><br>
                                <h6>挂号成功后可以在预约列表里看预约记录</h6><br>
                                <img src="../assets/img/helprecord.png" alt="" width="80%" height="500"><br>
                                <h4>4.门诊挂号</h4><br>
                                <h6>首先要选择需要挂号的科室，或直接选择医生点击预约挂号</h6><br>
                                <img src="../assets/img/selectDept.png" alt="" width="80%" height="500"><br>
                                <div style="margin-left:380px;">图：选择科室</div><br>
                                <img src="../assets/img/selectDoc.png" alt="" width="80%" height="500"><br>
                                <div style="margin-left:380px;">图：选择医生</div><br>
                                <h6>选择就诊人，填写详细的病情信息,带*的为必填项，填写无误后点击提交</h6><br>
                                <img src="../assets/img/tianxie.png" alt="" width="80%" height="500"><br>
                                <h6>点击“选择就诊人”可选择相应就诊人，也可在此添加新的就诊人或添加多位就诊人</h6>                               
                                <img src="../assets/img/pay.png" alt=""  width="80%" height="500"><br>
                                <h6>完成支付即可预约成功</h6><br>
                            </div>
                            <div class="color-666" v-if="id == 2">
                                <span>预约必须提前一天预约，当天不可预约。</span>
                            </div>
                            <div class="color-666" v-if="id == 3">
                                <span>一切账号问题请联系管理员：18868342816</span>
                            </div>
                            <div class="color-666" v-if="id == 4">
                                <span>就诊后的一切其他费用请到医院窗口缴纳，本网站只提供预约服务，一切解释权归医院所有。</span>
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import bzzxImg from '../assets/img/configImg/bzzxbanner40c7c3.png'
export default {
    data() {
        return {
            classflag:false,
            bzzxImg:bzzxImg,
            id:null,
            title:'预约挂号问题',
            typeList:[
                {
                    id:0,
                    classflag:true,
                    typeName:'预约挂号问题',
                },{
                    id:1,
                    classflag:false,
                    typeName:'使用指南',
                },{
                    id:2,
                    classflag:false,
                    typeName:'服务条款',
                },{
                    id:3,
                    classflag:false,
                    typeName:'账号相关问题',
                },{
                    id:4,
                    classflag:false,
                    typeName:'其他问题',
                }
            ]
        }
    },
    mounted() {
        if(this.$route.query.id == undefined){
            this.id = 0
        }else{
            this.id = this.$route.query.id
        }
        
        for(let i = 0; i<this.typeList.length; i++) {
            if(this.typeList[i].id == this.id){
                this.title = this.typeList[i].typeName
                this.typeList[i].classflag = true
            }else {
                this.typeList[i].classflag = false
            }
        }
    },
    methods: {
        helplist(type,index){
            this.typeList[index].classflag = true
            for(let i=0; i<this.typeList.length; i++) {
                if(i != index) {
                    this.typeList[i].classflag = false
                }
            }
            this.id = type.id
            this.title = type.typeName
        }
    },
}
</script>
<style scoped>
	.selected{
		background: #40c7c3;
	}
    .selected-text{
        color: #FFF;
    }
</style>