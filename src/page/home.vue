<template>
    <div>
        <!-- 轮播图 -->
        <div>
            <carousel></carousel>
        </div>
        <div class="width1210 marginXauto margintop20 border-color paddingX30 bgcolor-white">
            <div class="padding10X borderbottom lineheight20 clear">
                <p class="floatLeft paddingleft10 borderleft5-theme fontsize2 bold">足不出户，在线预约挂号</p>
            </div>
            <process></process>
        </div>
        <div class="width1210 marginXauto margintop10 clear">
            <div class="floatLeft paddingX20 bgcolor-white border-color" style="width: 290px;height: 285px">
                <div @click="wzmy" class="flex-align cursorPointer" style="height:141px;">
                    <img src="@/assets/img/configImg/wzmy40c7c3.png" alt="" height="84">
                    <span class="typeText">医生挂号</span>
                </div>
            </div>
            <div class="marginleft10 floatRight border-color bgcolor-white" style="width: 910px;height: 285px;">
                <!-- 找科室 -->
                <div class="marginX30 borderbottom lineheight40">
                    <span class="fontsize2 bold">找科室</span>
                    <span class="marginleft20 color-959595">请选择您要就诊的科室</span>
                    <span @click="gofindDept" class="floatRight theme-color-40c7c3 cursorPointer">
                        全部科室
                        <i class="marginleft10 icon-downArrow"></i>
                    </span>
                </div>
                <dept :deptlist="deptlist"></dept>
            </div>
        </div>
        <div class="width1210 marginXauto margintop10 marginbottom170 clear">
            <div class="floatLeft bgcolor-white border-color paddingX25" style="width: 290px;height:600px">
                <div>
                    <!-- 帮助中心 -->
                    <div class="borderbottom lineheight40 fontsize2 bold">
                        <span>帮助中心</span>
                    </div>
                    <helplist></helplist>
                </div>
            </div>
            <div class="marginleft10 floatRight border-color bgcolor-white" style="width: 910px;height: 600px;">
                <!-- 找医生 -->
                <div class="paddingX25 borderbottom lineheight40">
                    <span class="fontsize2 bold">找医生</span>
                    <span class="marginleft20 color-959595">请选择您要预约的医生</span>
                    <span @click="gofindDoc" class="floatRight cursorPointer theme-color-40c7c3">所有医生
                        <i class="marginleft10 icon-downArrow"></i>
                    </span>
                </div>
                <div class="padding10X paddingX30 bgcolor-fafafa">
                    <p class="color-fe9e20  bgcolor-fafafa paddingbottom15"></p>
                    <!-- 科室筛选-->
                    <div class="clear height25 lineheight25">
                        <div class="floatLeft">
                            <span class="paddingright15 borderright2 bold">科室筛选</span>
                        </div>
                        <div class="floatLeft width760 paddingleft10">
                            <span :class="['chooseOption', {'curOption': isAllDept}]" @click="changeDept(-1)">全部</span>
                            <span v-for="(dept,index) in deptlist" :key="index" @click="changeDept(index)" v-html="dept.sectionName"
                            :class="['chooseOption', {'curOption': dept.isChecked}]">
                            </span>
                        </div>
                    </div>
                    <!-- 就诊日期 -->
                    <div class="margintop10 clear height25 lineheight25">
                        <div class="floatLeft">
                            <span class="paddingright15 borderright2 bold">就诊日期</span>
                        </div>
                        <div class="floatLeft width760 paddingleft10">
                            <span :class="['chooseOption', {'curOption': isAllDate}]" @click="changeDateTime(-1)">全部</span>
                            <span v-for="(date,index) in datelist" :key="index" @click="changeDateTime(index)" v-html="date.date"
                            :class="['chooseOption', {'curOption': date.isChecked}]">
                            </span>
                        </div>
                    </div>
                    <!-- 就诊时段 -->
                    <div class="margintop10 clear height25 lineheight25">
                        <div class="floatLeft">
                            <span class="paddingright15 borderright2 bold">就诊时段</span>
                        </div>
                        <div class="floatLeft width760 paddingleft10">
                            <span :class="['chooseOption', {'curOption': isAllNoon}]" @click="changeDateType(-1)">全部</span>
                            <span v-for="(time,index) in datenoon" :key="index" @click="changeDateType(index)" v-html="time.timeType==1?'上午':(time.timeType==2?'下午':'晚上')"
                            :class="['chooseOption', {'curOption': time.isChecked}]">
                            </span>
                        </div>
                    </div>
                </div>
                <doc :doclist="doclist" :sectionId="deptName" :timeType="timeType" :date="dateTimeLong"></doc>
            </div>
        </div>
    </div>
</template>
<script>
import carousel from '../components/carousel'
import process from '../components/process'
import dept from '../components/dept'
import helplist from '../components/helplist'
import doc from "../components/doc";
import axion from '@/util/api.js'
const hospitalId = 123456
export default {
    components: { carousel, process, dept, helplist, doc },
    data() {
        return {
            deptlist:[],
            datelist:[
                {
                    isChecked:false,
                    date:'04月14日',
                    dateLong:'2019-04-14'
                    },
                {
                    isChecked:false,
                    date:'04月15日',
                    dateLong:'2019-04-15'
                    },
                {
                    isChecked:false,
                    date:'04月16日',
                    dateLong:'2019-04-16'
                    },
                {
                    isChecked:false,
                   date: '04月17日',
                   dateLong:'2019-04-17'
                    },
                {
                    isChecked:false,
                    date:'04月18日',
                    dateLong:'2019-04-18'
                    },
                {
                    isChecked:false,
                    date:'04月19日',
                    dateLong:'2019-04-19'
                    },
                {   
                    isChecked:false,
                    date:'04月20日',
                    dateLong:'2019-04-20'
                    },
                ],
                
                datenoon:[
                    {
                        isChecked:false,
                        timeType:1
                    },{
                        isChecked:false,
                        timeType:2
                    }
                ],
                doclist:[],
            isAllDept:true,
            isAllDate:true,
            isAllNoon:true,
            deptName:'',
            dateTime:'',
            timeType:'',
            dateTimeLong:'',
        }
    },
    mounted() {
        this.getDept()
    },
    methods: {
        getDept(){
            axion.getDept(hospitalId).then( res => {
                if(res.data.retCode == 0) {
                    for(let i = 0;i<res.data.param.length;i++) {
                        res.data.param[i].isChecked = false
                    }
                    this.deptlist = res.data.param
                    this.getScheduleList(this.deptName,this.dateTimeLong,this.timeType)
                }
            })
        },
        getScheduleList(deptId,date,timeType){
            this.doclist = []
            console.log('deptId',deptId,'|','date',date,'|','timeType',timeType)
            if(deptId == '' && date == ''){
                let param = {
                    sectionId:0,
                    type:2
                }
                axion.getWeekSchdule(param.sectionId,param.type).then( res => {
                    if(res.data.retCode == 0) {
                        if(timeType == 1 ){
                            this.doclist = res.data.param.amList
                        }else if(timeType == 2) {
                            this.doclist = res.data.param.pmList
                        }else {
                            let a = res.data.param.amList.concat(res.data.param.pmList)
                            this.doclist = a
                        }
                        
                    }
                })
            }else if (deptId == '' && date != ''){
                let param = {
                    sectionId:0,
                    type:2
                }
                axion.getWeekSchdule(param.sectionId,param.type).then( res => {
                    if(res.data.retCode == 0) {
                        if(timeType == '') {
                            for(let i= 0;i<res.data.param.amList.length;i++){
                                if(date == res.data.param.amList[i].registionDate){
                                    this.doclist.push(res.data.param.amList[i])
                                }
                            }
                            for(let i= 0;i<res.data.param.pmList.length;i++){
                                if(date == res.data.param.pmList[i].registionDate){
                                    this.doclist.push(res.data.param.pmList[i])
                                }
                            }
                            
                        }else if(timeType == 1 ){
                            for(let i= 0;i<res.data.param.amList.length;i++){
                                if(date == res.data.param.amList[i].registionDate){
                                    this.doclist.push(res.data.param.amList[i])
                                }
                            }
                        }else if(timeType == 2) {
                            for(let i= 0;i<res.data.param.pmList.length;i++){
                                if(date == res.data.param.pmList[i].registionDate){
                                    this.doclist.push(res.data.param.pmList[i])
                                }
                            }
                        }
                        
                    }
                })
            }else if(deptId != '' && date == '') {
                let param = {
                    sectionId:0,
                    type:2
                }
                axion.getWeekSchdule(param.sectionId,param.type).then( res => {
                    if(res.data.retCode == 0) {
                        if(timeType == '') {
                            for(let i= 0;i<res.data.param.amList.length;i++){
                                if(deptId == res.data.param.amList[i].sectionId){
                                    this.doclist.push(res.data.param.amList[i])
                                }
                            }
                            for(let i= 0;i<res.data.param.pmList.length;i++){
                                if(deptId == res.data.param.pmList[i].sectionId){
                                    this.doclist.push(res.data.param.pmList[i])
                                }
                            }
                        }else if(timeType == 1) {
                            for(let i= 0;i<res.data.param.amList.length;i++){
                                if(deptId == res.data.param.amList[i].sectionId){
                                    this.doclist.push(res.data.param.amList[i])
                                }
                            }
                        }else if(timeType == 2) {
                            for(let i= 0;i<res.data.param.pmList.length;i++){
                                if(deptId == res.data.param.pmList[i].sectionId){
                                    this.doclist.push(res.data.param.pmList[i])
                                }
                            }
                        }
                        console.log(this.doclist)
                    }
                })
            }else if(deptId != '' && date != ''){
                let param = {
                    sectionId:deptId,
                    timeType:timeType,
                    date:date
                }
                let param2 = {
                    sectionId:0,
                    type:2
                }
                if(timeType == ''){
                    axion.getWeekSchdule(param2.sectionId,param2.type).then( res => {
                        if(res.data.retCode == 0) {
                            for(let i= 0;i<res.data.param.amList.length;i++){
                                if(deptId == res.data.param.amList[i].sectionId && date == res.data.param.pmList[i].registionDate){
                                    this.doclist.push(res.data.param.amList[i])
                                }
                            }
                            for(let i= 0;i<res.data.param.pmList.length;i++){
                                if(deptId == res.data.param.pmList[i].sectionId && date == res.data.param.pmList[i].registionDate){
                                    this.doclist.push(res.data.param.pmList[i])
                                }
                            }
                        }
                    })
                }else if(timeType != '') {
                    axion.getDaySchdule(param.sectionId,param.timeType,param.date).then( res => {
                        if(res.data.retCode == 0) {
                            this.doclist = res.data.param.schedulingList
                        }
                    })
                }
            }
        },
        changeDept(index){
            this.isAllDept = false
            // this.isAllDate = true
            // this.isAllNoon = true
            this.deptlist.forEach(obj => {
                obj.isChecked = false
            })
            if(index < 0) {
                this.isAllDept = true
                this.deptName = ''
            }else {
                this.deptlist[index].isChecked = true
                this.deptName = this.deptlist[index].sectionId
            }
            this.getScheduleList(this.deptName,this.dateTimeLong,this.timeType)//查询该科室排班
        },
        changeDateTime(index){
            this.isAllDate = false
            // this.isAllNoon = true
            this.datelist.forEach(obj => {
                obj.isChecked = false
            })
            if(index < 0) {
                this.isAllDate = true
                this.dateTime = '' //形如 3月08日
                this.dateTimeLong = '' //形如 2019-03-08
            }else {
                this.datelist[index].isChecked = true
                this.dateTime = this.datelist[index].date
                this.dateTimeLong = this.datelist[index].dateLong
            }
            this.getScheduleList(this.deptName,this.dateTimeLong,this.timeType)
        },
        changeDateType(index){
            this.isAllNoon = false
            this.datenoon.forEach( obj => {
                obj.isChecked = false
            })
            if(index < 0) {
                this.isAllNoon = true
                this.timeType = ''
            } else {
                this.datenoon[index].isChecked = true
                this.timeType = this.datenoon[index].timeType
            }
            this.getScheduleList(this.deptName,this.dateTimeLong,this.timeType)
        },
        wzmy(){
            this.$router.push({ path:'findDoc'})
        },
        gofindDept(){
            this.$router.push({ path:'findDept'})
        },
        gofindDoc(){
            this.$router.push({ path:'findDoc'})
        }
    },
}
</script>
<style lang="scss" scoped>
.typeText{
    margin-left: 44px;
        font-size: 21px;
        font-weight: bold;
        color:#40c7c3;
        &.dark {
            color: #999;
        }
}
</style>
