<template>
    <div class="changePwd">
        <div class="height200">
            <b-img :src="zjyy" class="height200 width100pct magintop-1" />
        </div>
        <div class="width100pct bgcolor-f4f4f4">
            <div class="width1210 marginXauto  margintop20 bgcolor-white">
                <div class="marginleft30 marginright30 borderbottom">
					<span class=" lineheight40 bold fontsize16 theme-color-40c7c3">就诊流程</span>
				</div>
				<div class="marginleft30 marginright30">
					<progressno :step="2"></progressno >
				</div>
            </div>
        </div>
        <div class="width100pct bgcolor-f4f4f4">
            <div class="width1210 marginXauto  margintop20 bgcolor-white marginbottom20">
                <div class="bgcolor-white  width1210  border-color">
                    <!-- 今日预约门诊 -->
                    <div>
                        <div class="marginleft30  borderbottom  marginright30">
							<span class="lineheight40 theme-color-40c7c3 bold fontsize16">今日预约门诊</span>
						</div>
                        <!-- 预约信息 -->
                        <div class="marginleft30  paddingtop20">
							<span class="inlineBlock width90 marginleft20 textAlignRight color-959595">科室：</span>
							<span class="marginleft20 inlineBlock width265">{{doctor.departName}}</span>
							<span class="color-959595">费用：</span>
							<span class="marginleft20 inlineBlock width265 color-fe9e20" >￥{{doctor.price}}</span>
							<span class="color-959595">门诊时间：</span>
							<span class="marginleft20 inlineBlock width150 marginright100">{{doctor.scheduleDate}}</span>
							<span class="color-959595 margintop30 inlineBlock marginbottom20 width50 textAlignRight  marginleft35">
								<span class="color-fe9e20">*</span>选择时间：
							</span>
							<span class="marginleft20">{{doctor.startTime}} ~ {{doctor.endTime}}</span>
						</div>
                        <!-- 填写信息 -->
                        <div class="marginleft30  borderbottom  marginright30">
                            <span class="lineheight40 theme-color-40c7c3 bold fontsize16">填写信息</span>
                        </div>
                        <div>
                            <div class="margintop20">
                                <span class="inlineBlock width90 marginleft20 textAlignRight">
									<i class="color-fe9e20">*</i>姓名：
								</span>
                                <b-form-input @change="patientInfoChange" v-model="patient.patName" type="text" class="height30 width280 inlineBlock borderRadius5"></b-form-input>
                                <b-button variant="variant" v-b-modal.modal-center class="theme-bgcolor-40c7c3 color-white width200 marginleft20" @click="openPatient">
										选择就诊人
								</b-button> 
                                <b-modal ref="myModalRef" id="modal-center" centered class="choosePerson clear">
									<div class="paddingtop20 paddingbottom15 paddingX25 borderbottom box-shadow clear lineheight35">
										<span class="fontsize16">选择就诊人</span>
										<button class="floatRight width110 btn commonSureBtn isplain" @click="addPerson">
											添加就诊人
										</button>
									</div>
									<b-form-group class="paddingX25">
										<b-form-radio-group id="radios2" v-model="radioSelected" name="radioSubComponent">
											<label v-for="(infor,index) in inforlist" :key="index" :for="'theradio' + index" @click="changePatient(infor)"
											class="borderbottom padding30X cursorPointer flex-align-spacebetween lineheight30">
												<div class="flex-spacebetween">
													<div class="width100 itemflex-00auto theme-color-40c7c3 fontsize18">{{infor.patName}}</div>
													<div>
														<p>身份证号：{{infor.idCard}}</p>
													</div>
												</div>
												<div class="marginleft20" style="height: 28px">
													<b-form-radio :value="index" :id="'theradio' + index" name="theradio"></b-form-radio>
												</div>
											</label>
										</b-form-radio-group>
									</b-form-group>
									<div class="margin25X textAlignCenter">
										<button class="width110 btn commonSureBtn" @click="chosePatient">确定</button>
										<button class="marginleft70 width110 btn commonCancelBtn" @click="closePatient">取消</button>
									</div>
								</b-modal>
                            </div>
                            <div class="margintop20">
                                <span class="inlineBlock width90 marginleft20 textAlignRight">
						            <i class="color-fe9e20">*</i>身份证号：
					            </span>
					            <b-form-input @change="patientInfoChange" v-model="patient.idCard" type="text" class="height30 width280 inlineBlock borderRadius5"></b-form-input>
                            </div>
                            <div class="margintop20">
				            	<span class="inlineBlock width90 marginleft20 textAlignRight">
				            		<i class="color-fe9e20">*</i>手机号：
				            	</span>
				            	<b-form-input @change="patientInfoChange" v-model="patient.phone" type="text" class="height30 width280 inlineBlock borderRadius5"></b-form-input>
				            </div>
                            <div class="margintop20">
				            	<span class="inlineBlock width90 marginleft20 textAlignRight">就诊卡号：</span>
				            	<b-form-input @change="patientInfoChange" v-model="patient.treatmentCard" type="text" class="height30 width280 inlineBlock borderRadius5"></b-form-input>
				            </div>
                            <div class="marginleft110 margintop20 marginbottom35">
		                    	<button class="minwidth110 btn commonSureBtn" @click="upAppointment">提交预约</button>
		                    	<button class="marginleft60 minwidth110 btn commonSureBtn isplain" @click="cancel">取消</button>
		                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog title="添加就诊人" :visible.sync="dialogShow" width="28%">
            <form>
                <div class="formItem margintop20 flex-align">
                  <label class="formLabel"><i class="required">*</i>姓名</label>
                  <input v-model="addPatient.patName" class="formInput" placeholder="请输入姓名"/>
                </div>
                <div class="formItem margintop20 flex-align">
                  <label class="formLabel"><i class="required">*</i>身份证</label>
                  <input v-model="addPatient.idcard" class="formInput" placeholder="请输入身份证号"/>
                </div>
                <div class="formItem margintop20 flex-align">
                  <label class="formLabel"><i class="required">*</i>手机号</label>
                  <input v-model="addPatient.phone" class="formInput" placeholder="请输入手机号"/>
                </div>
                <div class="formItem margintop20 flex-align">
                  <label class="formLabel"><i class="required"></i>就诊卡号</label>
                  <input v-model="addPatient.treatmentCard" class="formInput" placeholder="请输入就诊卡号"/>
                </div>
                <button type="button" class="margintop40 theBtn width110" style="margin-left:40%;" @click="save">保存</button>
            </form>
        </el-dialog>
    </div>
</template>
<script>
import zjyy from '../assets/img/configImg/zjyybanner40c7c3.png'
import progressno from '../components/progressno'
export default {
    components: { progressno },
    data() {
        return {
            zjyy:zjyy,
            radioSelected:'',
            dialogShow:false,
            doctor: {
                departName:'随便什么科',
                price:10,
                scheduleDate:'2019-03-09',
                startTime:'08:00',
                endTime:'12:00'
            },
            patient:{
                patName:'',
                idCard:'',
                phone:'',
                treatmentCard:''
            },
            addPatient:{
                patName:'',
                idCard:'',
                phone:'',
                treatmentCard:''
            },
            gdPatient:{},//过度就诊人选择
            inforlist:[//就诊人列表
                {
                    patName:'dadad',
                    idCard:'123123123123231',
                    phone:'18868342816',
                    treatmentCard:'6545645645656'
                },{
                    patName:'eqeqe',
                    idCard:'123123123123231',
                    phone:'18868342816',
                    treatmentCard:'6545645645656'
                },{
                    patName:'qeqeqe',
                    idCard:'123123123123231',
                    phone:'18868342816',
                    treatmentCard:'6545645645656'
                }
            ]
        }
    },
    mounted() {
        this.getPatient()
    },
    methods: {
        getPatient(){

        },
        patientInfoChange(){},
        openPatient(){//选择就诊人
            if(this.patient.patName == '' || this.patient.idCard == '' || this.patient.patName == '' || this.patient.treatmentCard == '') {
                this.radioSelected = ''
            }
        },
        changePatient(patient){//勾选就诊人
            this.gdPatient = patient
            console.log('111',this.gdPatient)
        },
        closePatient(){//关闭就诊人选择界面
            this.gdPatient = {}
            this.$refs.myModalRef.hide()
            this.patient.patName = ''
            this.patient.idCard = ''
            this.patient.phone = ''
            this.patient.treatmentCard = ''
            console.log('333',this.gdPatient)
        },
        chosePatient(){//选择就诊人确定
            this.patient = this.gdPatient
            this.$refs.myModalRef.hide()
            console.log('222',this.patient)
        },
        addPerson(){//打开新增就诊人界面
            this.dialogShow = true
            this.$refs.myModalRef.hide()
        },
        save(){//保存新增就诊人
            this.dialogShow = false
            this.getPatient()
            this.$refs.myModalRef.show()
        },
        upAppointment(){//提交预约
            //成功后跳转
            this.$router.push({ path:'pay' , query:{} })//传预约订单信息
        },
        cancel(){//取消预约
            this.$router.push({ path:'home'})
        },
    },
}
</script>