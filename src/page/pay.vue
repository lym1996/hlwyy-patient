<template>
    <div>
        <div class="height200">
            <b-img :src="zjyy" class="height200 width100pct magintop-1"/>
        </div>
        <div class="width100pct bgcolor-f4f4f4">
            <div class="width1210 marginXauto  margintop20 bgcolor-white">
                <div class="marginleft30 marginright30 borderbottom">
					<span class=" lineheight40 bold fontsize16 theme-color-40c7c3">就诊流程</span>
				</div>
				<div class="marginleft30 marginright30">
					<progressno :step="3"></progressno >
				</div>
            </div>
        </div>
        <div class="width100pct bgcolor-f4f4f4">
            <div class="width1210 marginXauto  margintop20 bgcolor-white marginbottom20">
                <div class="bgcolor-white  width1210  border-color">
                    <!-- 预约信息以及二维码 -->
                    <div>
                        <div class="marginleft30  borderbottom  marginright30">
                            <span class="lineheight40 theme-color-40c7c3 bold fontsize16">预约信息</span>
                        </div>
                        <div class="clear margintop20 marginleft200 marginright30 marginbottom20">
                            <div class="floatLeft fontsize16">
                                <div class="marginleft20 marginbottom20">
                                    <span class="width90 textAlignRight ">预约号：</span>
                                    <span class="marginleft20 width265 color-959595">{{order.number}}</span>
                                </div>
                                <div class="marginleft20 marginbottom20">
                                    <span class="width90 textAlignRight ">姓名：</span>
                                    <span class="marginleft20 width265 color-959595">{{order.patName}}</span>
                                </div>
                                <div class="marginleft20 marginbottom20">
                                    <span class="width90 textAlignRight ">手机号：</span>
                                    <span class="marginleft20 width265 color-959595">{{order.phone}}</span>
                                </div>
                                <div class="marginleft20 marginbottom20">
                                    <span class="width90 textAlignRight ">就诊卡号：</span>
                                    <span class="marginleft20 width265 color-959595">{{order.treatmentCard}}</span>
                                </div>
                                <div class="marginleft20 marginbottom20">
                                    <span class="width90 textAlignRight ">就诊科室：</span>
                                    <span class="marginleft20 width265 color-959595">{{order.departName}}</span>
                                </div>
                                <div class="marginleft20 marginbottom20">
                                    <span class="width90 textAlignRight ">门诊时间：</span>
                                    <span class="marginleft20 width265 color-959595">{{order.scheduleDate}}</span>
                                </div>
                                <div class="marginleft20 marginbottom20">
                                    <span class="width90 textAlignRight ">选择时间：</span>
                                    <span class="marginleft20 width265 color-959595">{{order.startTime}} ~ {{order.endTime}}</span>
                                </div>
                            </div>
                            <div class="floatLeft marginleft200 margintop10">
                                <!-- 未支付时 --> 
                                <div class="marginleft100" v-if="payStatue == 0">
                                    <div class="marginleft105 fontsize16 marginbottom20">
                                        支付费用：
                                        <span class="color-fe9e20">￥{{order.price}}</span>
                                    </div>
                                    <div class="marginleft80">
                                        <img :src="qrcode" alt="" width="160" height="160">
                                    </div>
                                    <div class="fontsize30 margintop10" style="color:red;">
                                        <span>请在</span>
                                        <span style="font-size:40px;" >20分钟</span>
                                        <span>内完成支付</span>
                                    </div>
                                </div>
                                <!-- 支付成功 -->  
                                <div class="marginleft100 margintop75" v-if="payStatue == 1">
                                    <img :src="zfcg" alt="" style="vertical-align: middle;">
                                    <span class="fontsize30" style="color:#7fb80e;vertical-align: middle;">支付成功</span><span class="fontsize30" style="vertical-align: middle;">,</span>
                                    <span class="fontsize30" style="color:red;vertical-align: middle;">{{second}}</span><span class="fontsize30" style="vertical-align: middle;">秒后返回首页！</span>
                                    <div class="marginleft150 margintop30">
                                        <el-button type="text" @click="backHome"><i class="el-icon-ts-back"></i>返回首页</el-button>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import zjyy from '../assets/img/configImg/zjyybanner40c7c3.png'
import qrcode from '../assets/img/qrCode.png'
import zfcg from '../assets/img/UI-May18/icon-success.png'
import progressno from '../components/progressno'
import { setInterval, clearInterval } from 'timers';
export default {
    components: { progressno },
    data() {
        return {
            zjyy:zjyy,
            qrcode:qrcode,
            zfcg:zfcg,
            payStatue:0,
            minute:20,
            second:60,
            secondback:5,
            order:{
                number:11111111111111,
                patName:'阿达是的',
                phone:'1321321123',
                treatmentCard:'4123133',
                departName:'就看见',
                price:'10',
                scheduleDate:'2019-03-09',
                startTime:'08:00',
                endTime:'12:00',

            }
        }
    },
    mounted() {
        this.afterPay()
        this.beforePay()
    },
    methods: {
        beforePay(){//20分钟倒计时
            if(this.payStatue == 0) {
                let timer = setInterval(() => {
                    
                },1000)
            }
        },
        //到时候方法替换为接口支付完成后 
        afterPay(){
            if(this.payStatue == 1) {
                this.secondback = 5
                let timer = setInterval(() => {
                    this.secondback = this.secondback - 1;
                    if(this.secondback == 0) {
                        clearInterval(timer)
                        this.$router.push({path:'home'})
                    }
                },1000)
            }
        },
        backHome(){
            this.$router.push({ path:'home'})
        }
    },
}
</script>