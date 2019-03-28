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
                            <span v-for="(dept,index) in deptlist" :key="index" @click="changeDept(index)" v-html="dept.deptName"
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
                            <span v-for="(time,index) in datenoon" :key="index" @click="changeDateType(index)" v-html="time.timeType==0?'上午':(time.timeType==1?'下午':'晚上')"
                            :class="['chooseOption', {'curOption': time.isChecked}]">
                            </span>
                        </div>
                    </div>
                </div>
                <doc :doclist="doclist"></doc>
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
export default {
    components: { carousel, process, dept, helplist, doc },
    data() {
        return {
            deptlist:[
                {   
                    isChecked:false,
                    departmentLogo:'http://diagnose.zwjk.com/upload/2018/09/04/1536037595623.svg',
                    deptName:'精神卫生科'
                },
                {   
                    isChecked:false,
                    departmentLogo:'http://diagnose.zwjk.com/upload/2018/09/04/1536037607099.svg',
                    deptName:'内分泌科'
                },
                {   
                    isChecked:false,
                    departmentLogo:'http://diagnose.zwjk.com/upload/2018/09/04/1536037659796.svg',
                    deptName:'肾脏科'
                },
                {   
                    isChecked:false,
                    departmentLogo:'http://diagnose.zwjk.com/upload/2018/09/04/1536037576766.svg ',
                    deptName:'呼吸内科'
                },
                {
                    isChecked:false,
                    departmentLogo:'http://diagnose.zwjk.com/upload/2018/09/04/1536037637256.svg',
                    deptName:'神经内科'
                },
                {
                    isChecked:false,
                    departmentLogo:'http://diagnose.zwjk.com/upload/2018/09/04/1536033947456.svg',
                    deptName:'心血管内科'
                },
            ],
            datelist:[
                {   
                    isChecked:false,
                    date:'03月27日',
                    dateLong:'2019-03-27'
                    },
                {
                    isChecked:false,
                    date:'03月28日',
                    dateLong:'2019-03-28'
                    },
                {
                    isChecked:false,
                    date:'03月29日',
                    dateLong:'2019-03-29'
                    },
                {
                    isChecked:false,
                    date:'03月30日',
                    dateLong:'2019-03-30'
                    },
                {
                    isChecked:false,
                   date: '03月31日',
                   dateLong:'2019-03-31'
                    },
                {
                    isChecked:false,
                    date:'04月01日',
                    dateLong:'2019-04-01'
                    },
                {
                    isChecked:false,
                    date:'04月02日',
                    dateLong:'2019-04-02'
                    }
                ],
                datenoon:[
                    {
                        isChecked:false,
                        timeType:0
                    },{
                        isChecked:false,
                        timeType:1
                    }
                ],
                doclist:[
                    {
                        doctorName:'爽肤水',
                        departmentName:'服务发给我',
                        level:'范围分为',
                        specialty:'违法未访问各位哥哥哥日格格热GV额度GV而过的GV反而GV额GV额GV额GV嗯嗯不好惹GV被告VB而GV额',
                        sourceNum:10,
                        scheduleDate:'3月18日',
                        startTime:'8:00',
                        endTime:'12:00'
                    },{
                        doctorName:'爽肤水',
                        departmentName:'服务发给我',
                        level:'范围分为',
                        specialty:'违法未访问各位哥哥哥日格格热GV额度GV而过的GV反而GV额GV额GV额GV嗯嗯不好惹GV被告VB而GV额',
                        sourceNum:10,
                        scheduleDate:'3月18日',
                        startTime:'8:00',
                        endTime:'12:00'
                    },{
                        doctorName:'爽肤水',
                        departmentName:'服务发给我',
                        level:'范围分为',
                        specialty:'违法未访问各位哥哥哥日格格热GV额度GV而过的GV反而GV额GV额GV额GV嗯嗯不好惹GV被告VB而GV额',
                        sourceNum:10,
                        scheduleDate:'3月18日',
                        startTime:'8:00',
                        endTime:'12:00'
                    },{
                        doctorName:'爽肤水',
                        departmentName:'服务发给我',
                        level:'范围分为',
                        specialty:'违法未访问各位哥哥哥日格格热GV额度GV而过的GV反而GV额GV额GV额GV嗯嗯不好惹GV被告VB而GV额',
                        sourceNum:10,
                        scheduleDate:'3月18日',
                        startTime:'8:00',
                        endTime:'12:00'
                    },
                ],
            isAllDept:true,
            isAllDate:true,
            isAllNoon:true,
            deptName:'',
            dateTime:'',
            timeType:'',
            dateTimeLong:'',
        }
    },
    methods: {
        getScheduleList(){},//形参：科室名或者科室Id、排班日期、上午还是下午
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
                this.deptName = this.deptlist[index].deptName
            }
            console.log('deptName',this.deptName)
            console.log('dateTime',this.dateTime)
            console.log('timeType',this.timeType)
            this.getScheduleList()//查询该科室排班
        },
        changeDateTime(index){
            this.isAllDate = false
            // this.isAllNoon = true
            this.datelist.forEach(obj => {
                obj.isChecked = false
            })
            if(index < 0) {
                this.isAllDate = true
                this.dateTime = '' //行如 3月08日
                this.dateTimeLong = '' //形如 2019-03-08
                this.getScheduleList()
            }else {
                this.datelist[index].isChecked = true
                this.dateTime = this.datelist[index].date
                this.dateTimeLong = this.datelist[index].dateLong
                this.getScheduleList()
            }
            console.log('deptName',this.deptName)
            console.log('dateTime',this.dateTime)
            console.log('timeType',this.timeType)
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
            this.getScheduleList()
            console.log('deptName',this.deptName)
            console.log('dateTime',this.dateTime)
            console.log('timeType',this.timeType)
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
