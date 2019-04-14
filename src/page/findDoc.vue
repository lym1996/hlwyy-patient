<template>
    <div>
        <div class="height200">
            <b-img :src="zjyy" class="height200 width100pct magintop-1" />
        </div>
        <div class="width100pct bgcolor-f4f4f4">
            <div class="width1210 marginXauto  margintop20 bgcolor-white">
				<div class="clear marginleft30 marginright30 borderbottom">
					<span class="floatLeft lineheight40 color-333 bold fontsize16">就诊流程</span>
				</div>
				<div class="marginleft30 marginright30">
					<progressno :step="1"></progressno>
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
									请预约您要预约的医生
							</span>
                        </div>
                        <div class="padding20X paddingleft30 paddingright100 bgcolor-fafafa relative">
                            <button v-show="deptlist && deptlist.length > 7" v-b-toggle.collapse1 class="searchFold" @click="fold = !fold">
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
									<span :class="['chooseOption', {'curOption': isAllDept}]" @click="changeDept(-1)">全部</span>
									<span v-if="index<=7" v-for="(dept, index) in deptlist" :key="index" @click="changeDept(index)" v-html="dept.sectionName"
									:class="['chooseOption', {'curOption': dept.isChecked}]">
									</span>
									<b-collapse id="collapse1">
										<span v-if="index>7" v-for="(dept, index) in deptlist" :key="index" @click="changeDept(index)" v-html="dept.sectionName"
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
									<span v-for="(time, index) in datenoon" @click="changeDateType(index)" v-html="time.timeType==1?'上午':'下午'"
									:class="['chooseOption', {'curOption': time.isChecked}]" :key="index">
									</span>
								</div>
							</div>
                        </div>
                        <dochover :doclist="doclist" ></dochover>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import zjyy from '../assets/img/configImg/zjyybanner40c7c3.png'
import progressno from '../components/progressno'
import dochover from '../components/dochover'
import axion from '@/util/api.js'
const hospitalId = 123456
export default {
    components:{ progressno, dochover },
    data() {
        return {
            zjyy:zjyy,
            fold:true,
            isAllDept:true,
            isAllDate:true,
            isAllNoon:true,
            deptName:'',
            dateTime:'',
            timeType:'',
            dateTimeLong:'',
            deptlist:[],
            datelist:[
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
                    {
                    isChecked:false,
                    date:'04月21日',
                    dateLong:'2019-04-21'
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
        },//形参：科室名或者科室Id、排班日期、上午还是下午
        changeDept(index) {
            this.isAllDept = false
            this.deptlist && this.deptlist.forEach( obj => {
                obj.isChecked = false
            })
            if(index == -1) {
                this.isAllDept = true
                this.deptName = ''
            }else {
                this.deptlist[index].isChecked = true
                this.deptName = this.deptlist[index].sectionId
            }
            this.getScheduleList(this.deptName,this.dateTimeLong,this.timeType)
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
            }else {
                this.datelist[index].isChecked = true
                this.dateTime = this.datelist[index].date
                this.dateTimeLong = this.datelist[index].dateLong
            }
            this.getScheduleList(this.deptName,this.dateTimeLong,this.timeType)
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
            this.getScheduleList(this.deptName,this.dateTimeLong,this.timeType)
        }
    },
}
</script>