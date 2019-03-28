<template>
    <div class="bgcolor-white paddingbottom55 changePwd">
        <div class="clear">
            <span class="theme-color-40c7c3 fontsize18 bold marginleft30 floatLeft paddingtop15">就诊人列表</span>
            <el-button type="primary" class="marginright30 floatRight margintop15" @click="add">新增就诊人</el-button>
        </div>
        <div class="marginX30 margintop15">
            <el-row>
                <el-table :data="tabledata" border stripe tooltip-effect="dark" style="width:100%;">
                    <el-table-column prop="patName" label="姓名" align="center"></el-table-column>
                    <el-table-column prop="Idcard" label="身份证" align="center"></el-table-column>
                    <el-table-column prop="jzId" label="就诊卡号" align="center"></el-table-column>
                    <el-table-column prop="phone" label="手机号" align="center"></el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" @click="edit(scope.row)">编辑</el-button>
                            <el-button type="text" @click="delete(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
        </div>
        <el-dialog :title="title" :visible.sync="dialogShow" width="28%" >
            <form>
                <div class="formItem margintop20 flex-align">
                  <label class="formLabel"><i class="required">*</i>姓名</label>
                  <input v-model="patName" class="formInput" placeholder="请输入姓名">
                </div>
                <div class="formItem margintop20 flex-align">
                  <label class="formLabel"><i class="required">*</i>身份证</label>
                  <input v-model="Idcard" class="formInput" placeholder="请输入身份证号">
                </div>
                <div class="formItem margintop20 flex-align">
                  <label class="formLabel"><i class="required">*</i>手机号</label>
                  <input v-model="phone" class="formInput" placeholder="请输入手机号">
                </div>
                <div class="formItem margintop20 flex-align">
                  <label class="formLabel"><i class="required"></i>就诊卡号</label>
                  <input v-model="jzId" class="formInput" placeholder="请输入就诊卡号">
                </div>
                <button type="button" class="margintop40 marginleft160 theBtn width110" @click="save">保存</button>
            </form>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title:'',
            dialogShow:false,
            patName:'',
            Idcard:'',
            phone:'',
            jzId:'',
            tabledata:[{
                patName:'啊大大',
                Idcard:'15131313213233132132',
                jzId:'131313231',
                phone:'18898978789',
            },{
                patName:'啊大大',
                Idcard:'1231321236546544556465',
                jzId:'2312323321132',
                phone:'132131313',
            },{
                patName:'非凡哥',
                Idcard:'1321323231132132132132',
                jzId:'12312313213211',
                phone:'12132123312',
            }]
        }
    },
    mounted() {
        this.getList()
    },
    methods: {
        getList(){

        },
        add(){
            this.dialogShow = true
            this.title = '新增就诊人'
            this.patName = ''
            this.Idcard = ''
            this.phone = '',
            this.jzId = ''
        },
        edit(row){
            this.dialogShow = true
            this.title = '编辑就诊人'
            this.patName = row.patName
            this.Idcard = row.Idcard
            this.phone = row.phone
            this.jzId = row.jzId
        },
        delete(row){
            
        },
        save(){
            this.dialogShow = false
            console.log(this.patName,this.Idcard,this.phone,this.jzId)
        }
    },
}
</script>