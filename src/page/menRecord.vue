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
                    <el-table-column prop="patName" label="患者姓名" align="center"></el-table-column>
                    <el-table-column prop="deptName" label="科室" align="center"></el-table-column>
                    <el-table-column prop="docName" label="医生" align="center"></el-table-column>
                    <el-table-column prop="scheduleDate" label="预约时间" align="center"></el-table-column>
                    <el-table-column prop="statue" label="状态" align="center"></el-table-column>
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
                label:'挂号成功'
            },{
                value:2,
                label:'待支付'
            },{
                value:3,
                label:'支付超时'
            }],
            tabledata:[{
                patName:'实打实',
                deptName:'的服务费',
                docName:' 范文芳',
                scheduleDate:'2019-03-15',
                statue:'十大'
            },{
                patName:'发送',
                deptName:' 打 我的',
                docName:' 我的钱多',
                scheduleDate:'2019-03-13',
                statue:' 打啊'
            },{
                patName:' 问过违反',
                deptName:'肥 个人个',
                docNmae:'肥为个',
                scheduleDate:'2019-03-20',
                statue:'问过'
            }]
        }
    },
}
</script>