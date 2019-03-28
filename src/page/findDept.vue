<template>
    <div>
        <div class="height200">
            <b-img :src="zkmz" class="height200 width100pct magintop-1"/>
        </div>
        <div class="width100pct bgcolor-f4f4f4">
            <div class="width1210 marginXauto margintop20 bgcolor-white">
                <div class="clear marginleft30 marginright30 borderbottom">
                    <span class="floatLeft lineheight40 color-333 bold fontsize16">就诊流程</span>
                </div>
                <div class="marginleft30 marginright30">
                    <progressno></progressno>
                </div>
            </div>
        </div>
        <div class="width100pct bgcolor-f4f4f4 marginbottom170">
            <div class="width1210 marginXauto  margintop20 bgcolor-white">
                <div class="bgcolor-white  width1210  border-color">
                    <div>
                        <div class="marginleft30  borderbottom  marginright30">
                            <span class="lineheight40 color-333 bold fontsize16">预约医生</span>
							<span class="color-959595 marginleft20">
									请选择您要预约的医生
                            </span>
                        </div>
                        <div class="padding20X paddingleft30 paddingright100 bgcolor-fafafa relative">
                            <button v-show="deptlist && deptlist.length > 6" v-b-toggle.collapse1 class="searchFold" @click="fold = !fold">
									<i v-show="!fold" class="marginright5 theicon-uparrow"></i>
									<i v-show="fold" class="marginright5 theicon-uparrow rotate180"></i>
									<span class="switchfoldBtn">{{fold ? '展开' :'收起' }}</span>
							</button>
                            <p class="color-fe9e20  bgcolor-fafafa paddingbottom15"></p>
                            <!-- 科室筛选-->
                            <div class="clear lineheight25">
                                <div class="floatLeft">
                                    <span class="paddingright15 borderright2 bold">科室筛选</span>
                                </div>
                                <div class="floatLeft width990 paddingleft10">
									<span :class="['chooseOption', {'curOption': isAllDept}]" @click="changeDept(-1,-1)">全部</span>
									<span v-if="index<6" v-for="(dept, index) in deptlist" :key="index" @click="changeDept(index)" v-html="dept.deptName"
									:class="['chooseOption', {'curOption': dept.isChecked}]">
									</span>
									<b-collapse id="collapse1">
										<span v-if="index>=6" v-for="(dept, index) in deptlist" :key="index" @click="changeDept(index)" v-html="dept.deptName"
										:class="['chooseOption', {'curOption': dept.isChecked}]">
										</span>
									</b-collapse>
								</div>
                            </div>
                            <!-- 日期选择 -->
                            <div class="margintop10 clear lineheight25">
								<div class="floatLeft">
									<span class="paddingright15 borderright2 bold">就诊日期</span>
								</div>
								<div class="floatLeft width990 paddingleft10">
									<span :class="['chooseOption', {'curOption': isAllDate}]" @click="changeDateTime(-1)">全部</span>
									<span v-for="(date, index) in datelist" :key="index" @click="changeDateTime(index)" v-html="date.date"
									:class="['chooseOption', {'curOption': date.isChecked}]">
									</span>
								</div>
							</div>
                            <!-- 上下午选择 -->
                            <div class="margintop10 clear lineheight25">
								<div class="floatLeft">
									<span class="paddingright15 borderright2 bold">就诊时段</span>
								</div>
								<div class="floatLeft width990 paddingleft10">
									<span :class="['chooseOption', {'curOption': isAllNoon}]" @click="changeDateType(-1)">全部</span>
									<span v-for="(time, index) in datenoon" @click="changeDateType(index)" v-html="time.timeType==0?'上午':'下午'"
									:class="['chooseOption', {'curOption': time.isChecked}]" :key="index">
									</span>
								</div>
							</div>
                        </div>
                        <dochover :doclist="doclist"></dochover>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import zkmz from '../assets/img/configImg/zkmzbanner40c7c3.png'
import progressno from '../components/progressno'
import dochover from '../components/dochover'
export default {
    components: { progressno, dochover },
    data() {
        return {
            zkmz:zkmz,
            fold:true,
            isAllDept:true,
            isAllDate:true,
            isAllNoon:true,
            deptName:'',
            dateTime:'',
            timeType:'',
            dateTimeLong:'',

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
                {
                    isChecked:false,
                    departmentLogo:'http://diagnose.zwjk.com/upload/2018/09/04/1536033947456.svg',
                    deptName:'乱七八糟科'
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
                        endTime:'12:00',
                        price:10
                    },{
                        doctorName:'爽肤水',
                        departmentName:'服务发给我',
                        level:'范围分为',
                        specialty:'违法未访问各位哥哥哥日格格热GV额度GV而过的GV反而GV额GV额GV额GV嗯嗯不好惹GV被告VB而GV额',
                        sourceNum:10,
                        scheduleDate:'3月18日',
                        startTime:'8:00',
                        endTime:'12:00',
                        price:10
                    },{
                        doctorName:'爽肤水',
                        departmentName:'服务发给我',
                        level:'范围分为',
                        specialty:'违法未访问各位哥哥哥日格格热GV额度GV而过的GV反而GV额GV额GV额GV嗯嗯不好惹GV被告VB而GV额',
                        sourceNum:10,
                        scheduleDate:'3月18日',
                        startTime:'8:00',
                        endTime:'12:00',
                        price:10
                    },{
                        doctorName:'爽肤水',
                        departmentName:'服务发给我',
                        level:'范围分为',
                        specialty:'违法未访问各位哥哥哥日格格热GV额度GV而过的GV反而GV额GV额GV额GV嗯嗯不好惹GV被告VB而GV额',
                        sourceNum:10,
                        scheduleDate:'3月18日',
                        startTime:'8:00',
                        endTime:'12:00',
                        price:10
                    },{
                        doctorName:'爽肤水',
                        departmentName:'服务发给我',
                        level:'范围分为',
                        specialty:'违法未访问各位哥哥哥日格格热GV额度GV而过的GV反而GV额GV额GV额GV嗯嗯不好惹GV被告VB而GV额',
                        sourceNum:10,
                        scheduleDate:'3月18日',
                        startTime:'8:00',
                        endTime:'12:00',
                        price:10
                    },{
                        doctorName:'爽肤水',
                        departmentName:'服务发给我',
                        level:'范围分为',
                        specialty:'违法未访问各位哥哥哥日格格热GV额度GV而过的GV反而GV额GV额GV额GV嗯嗯不好惹GV被告VB而GV额',
                        sourceNum:10,
                        scheduleDate:'3月18日',
                        startTime:'8:00',
                        endTime:'12:00',
                        price:10
                    },
                ],
        }
    },
    mounted() {
        let deptName = ''
        if(this.$route.query.deptName != undefined){
            deptName = this.$route.query.deptName
        }
        let index = null
        for(let i = 0;i<this.deptlist.length;i++) {
            if(deptName == this.deptlist[i].deptName) {
                index = i
                break;
            }else{
                index = -1
            }
        }
        this.changeDept(index)
        this.getScheduleList()
        
    },
    methods: {
        getScheduleList(){},//形参：科室名或者科室Id、排班日期、上午还是下午
        changeDept(index) {
            this.isAllDept = false
            this.deptlist && this.deptlist.forEach( obj => {
                obj.isChecked = false
            })
            if( index == -1) {
                this.isAllDept = true
                this.deptName = ''
            }else {
                this.deptlist[index].isChecked = true
                this.deptName = this.deptlist[index].deptName
            }
            this.getScheduleList()//记得改传参
            console.log('deptName',this.deptName)
            console.log('date',this.dateTime)
            console.log('type',this.timeType)
        },
        changeDateTime(index) {
            this.isAllDate = false
            this.datelist && this.datelist.forEach( obj => {
                obj.isChecked = false
            })
            if(index < 0 ) {
                this.isAllDate = true
                this.dateTime = ''
                this.dateTimeLong = ''
                this.getScheduleList()
            }else {
                this.datelist[index].isChecked = true
                this.dateTime = this.datelist[index].date
                this.dateTimeLong = this.datelist[index].dateLong
                this.getScheduleList()
            }
            console.log('deptName',this.deptName)
            console.log('date',this.dateTime)
            console.log('type',this.timeType)
        },
        changeDateType(index) {
            this.isAllNoon = false
            this.datenoon && this.datenoon.forEach( obj =>{
                obj.isChecked = false
            })
            if( index < 0) {
                this.isAllNoon = true
                this.timeType = ''
            } else {
                this.datenoon[index].isChecked = true
                this.timeType = this.datenoon[index].timeType
            }
            console.log('deptName',this.deptName)
            console.log('date',this.dateTime)
            console.log('type',this.timeType)
            this.getScheduleList()
        }
    },
}
</script>