<template>
    <div class="bgcolor-white paddingbottom55">
        <div class="margintop15">
            <span class="theme-color-40c7c3 fontsize18 bold marginleft30 marginbottom15">预约记录</span>
        </div>
        <div class="marginX30 margintop30">
            <el-row>
                <el-table :data="tabledata" border stripe tooltip-effect="dark" style="width:100%;">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left"  class="table">
                                <el-form-item label="患者姓名">
                                    <span>{{props.row.theName}}</span>
                                </el-form-item>
                                <el-form-item label="科室">
                                    <span>{{props.row.sectionName}}</span>
                                </el-form-item>
                                <el-form-item label="医生">
                                    <span>{{props.row.doctorName}}</span>
                                </el-form-item>
                                <el-form-item label="预约日期">
                                    <span>{{props.row.registionDate}}</span>
                                </el-form-item>
                                <el-form-item label="就诊时间">
                                    <span>{{props.row.startTime}}~{{props.row.endTime}}</span>
                                </el-form-item>
                                <el-form-item label="挂号状态">
                                    <span>{{props.row.registionStatus}}</span>
                                </el-form-item>
                            </el-form>
                            <div v-show="props.row.registionStatus == '待支付'">
                                <el-button type="primary" @click="gotoPay">去支付</el-button>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="theName" label="患者姓名" align="center"></el-table-column>
                    <el-table-column prop="sectionName" label="科室" align="center"></el-table-column>
                    <el-table-column prop="doctorName" label="医生" align="center"></el-table-column>
                    <el-table-column prop="registionDate" label="预约日期" align="center"></el-table-column>
                    <el-table-column prop="registionStatus" label="挂号状态" align="center"></el-table-column>
                </el-table>
            </el-row>
        </div>
    </div>
</template>
<script>
import axion from '@/util/api.js'
export default {
    data() {
        return {
            token:localStorage.getItem('user_token'),
            patientId:[],
            tabledata:[]
        }
    },
    mounted() {
        this.getPatient()
    },
    methods: {
        getPatient(){
            this.tabledata = []
            axion.getPatient(this.token,0).then( res => {
                if(res.data.retCode == 0) {
                    for(let i = 0;i<res.data.param.length;i++) {
                        this.patientId.push(res.data.param[i].id)
                        this.getInformation(res.data.param[i].id)
                    }
                }
            })
        },
        getInformation(id) {
            let param = {
                token:this.token,
                patientId:id,
                type:0
            }
            axion.registionList(param).then( res => {
                if(res.data.retCode == 0) {
                    for(let i = 0;i<res.data.param.length;i++) {
                        if(res.data.param[i].registionStatus == 2) {
                            res.data.param[i].registionStatus = '挂号成功'
                        }
                        this.tabledata.push(res.data.param[i])
                    }
                    
                }
            })
        },
        gotoPay(){
            this.$router.push({ path:'/pay' , query:{}})
        }
    },
    beforeRouteEnter (to, from, next) {
        let token = localStorage.getItem('user_token')
        if(token == null){
            // this.$message.warning('请先登录账号')
            // this.$router.push('/')
        }
        next( vm => {
            if(token == null) {
                vm.$router.push('/')
                vm.$message.warning('请先登陆账号')
            }
        }

        );
    }
}
</script>