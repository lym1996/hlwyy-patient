<template>
    <div class="bgcolor-white paddingbottom55">
        <div class="margintop15">
            <span class="theme-color-40c7c3 fontsize18 bold marginleft30 marginbottom15">预约记录</span>
        </div>
        <div class="margintop20 marginleft30">
            <el-select v-model="statue">
                <el-option v-for="item in status" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-button class="marginleft20" type="primary">查询</el-button>
        </div>
        <div class="marginX30 margintop30">
            <el-row>
                <el-table :data="tabledata" border stripe tooltip-effect="dark" style="width:100%;">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left"  class="table">
                                <el-form-item label="预约单号">
                                    <span>{{props.row.orderId}}</span>
                                </el-form-item>
                                <el-form-item label="患者姓名">
                                    <span>{{props.row.patName}}</span>
                                </el-form-item>
                                <el-form-item label="科室">
                                    <span>{{props.row.deptName}}</span>
                                </el-form-item>
                                <el-form-item label="医生">
                                    <span>{{props.row.docName}}</span>
                                </el-form-item>
                                <el-form-item label="预约时间">
                                    <span>{{props.row.scheduleDate}}</span>
                                </el-form-item>
                                <el-form-item label="订单状态">
                                    <span>{{props.row.statue}}</span>
                                </el-form-item>
                            </el-form>
                            <div v-show="props.row.statue == '待支付'">
                                <el-button type="primary" @click="gotoPay">去支付</el-button>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="orderId" label="预约单号" align="center"></el-table-column>
                    <el-table-column prop="patName" label="患者姓名" align="center"></el-table-column>
                    <el-table-column prop="deptName" label="科室" align="center"></el-table-column>
                    <el-table-column prop="docName" label="医生" align="center"></el-table-column>
                    <el-table-column prop="scheduleDate" label="预约时间" align="center"></el-table-column>
                    <el-table-column prop="statue" label="订单状态" align="center"></el-table-column>
                </el-table>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            statue:'',
            status:[{
                value:0,
                label:'全部'
            },{
                value:1,
                label:'支付成功'
            },{
                value:2,
                label:'待支付'
            },{
                value:3,
                label:'支付超时'
            }],
            tabledata:[{
                orderId:'131321321',
                patName:'实打实',
                deptName:'的服务费',
                docName:' 范文芳',
                scheduleDate:'2019-03-15',
                statue:'支付成功'
            },{
                orderId:'131321321',
                patName:'发送',
                deptName:' 打 我的',
                docName:' 我的钱多',
                scheduleDate:'2019-03-13',
                statue:'待支付'
            },{
                orderId:'131321321',
                patName:' 问过违反',
                deptName:'肥 个人个',
                docNmae:'肥为个',
                scheduleDate:'2019-03-20',
                statue:'支付超时'
            }]
        }
    },
    methods: {
        gotoPay(){
            this.$router.push({ path:'/pay' , query:{}})
        }
    },
}
</script>