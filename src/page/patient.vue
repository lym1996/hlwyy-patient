<template>
    <div class="bgcolor-white paddingbottom55 changePwd">
        <div class="clear">
            <span class="theme-color-40c7c3 fontsize18 bold marginleft30 floatLeft paddingtop15">就诊人列表</span>
            <el-button type="primary" class="marginright30 floatRight margintop15" @click="add">新增就诊人</el-button>
        </div>
        <div class="marginX30 margintop15">
            <el-row>
                <el-table :data="tabledata" border stripe tooltip-effect="dark" style="width:100%;">
                    <el-table-column prop="theName" label="姓名" align="center"></el-table-column>
                    <el-table-column prop="cardId" label="身份证" align="center"></el-table-column>
                    <el-table-column prop="patientCard" label="就诊卡号" align="center"></el-table-column>
                    <el-table-column prop="patientPhone" label="手机号" align="center"></el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" @click="edit(scope.row)">编辑</el-button>
                            <el-button type="text" @click="isDelete(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
        </div>
        <el-dialog :title="title" :visible.sync="dialogShow" width="28%" >
            <form>
                <div class="formItem margintop20 flex-align">
                  <label class="formLabel"><i class="required">*</i>姓名</label>
                  <input v-model="theName" class="formInput" placeholder="请输入姓名">
                </div>
                <div class="formItem margintop20 flex-align">
                  <label class="formLabel"><i class="required">*</i>身份证</label>
                  <input v-model="cardId" class="formInput" placeholder="请输入身份证号">
                </div>
                <div class="formItem margintop20 flex-align">
                  <label class="formLabel"><i class="required">*</i>手机号</label>
                  <input v-model="patientPhone" class="formInput" placeholder="请输入手机号">
                </div>
                <div class="formItem margintop20 flex-align">
                  <label class="formLabel"><i class="required"></i>就诊卡号</label>
                  <input v-model="patientCard" class="formInput" placeholder="请输入就诊卡号">
                </div>
                <button type="button" class="margintop40 marginleft160 theBtn width110" @click="save">保存</button>
            </form>
        </el-dialog>
    </div>
</template>
<script>
import axion from '@/util/api.js'
const hospitalId = 123456
export default {
    data() {
        return {
            token:localStorage.getItem('user_token'),
            title:'',
            dialogShow:false,
            theName:'',
            cardId:'',
            patientPhone:'',
            patientCard:'',
            patientId:'',
            type:0,
            tabledata:[]
        }
    },
    mounted() {
        this.getPatient()
    },
    methods: {
        getPatient(){
            axion.getPatient(this.token,0).then( res => {
                if(res.data.retCode == 0) {
                    this.tabledata = res.data.param
                }
            })
        },
        add(){
            this.type = 1
            this.dialogShow = true
            this.title = '新增就诊人'
            this.theName = ''
            this.cardId = ''
            this.patientPhone = '',
            this.patientCard = ''
        },
        edit(row){
            this.type = 2
            this.dialogShow = true
            this.title = '编辑就诊人'
            this.patientId = row.id
            this.theName = row.theName
            this.cardId = row.cardId
            this.patientPhone = row.patientPhone
            this.patientCard = row.patientCard
        },
        isDelete(row){
            this.patientId = row.id
            const h = this.$createElement;
                this.$msgbox({
                    title: "删除确认",
                    message: h("p", null, [
                        h("p",{style: "line-height:22px"}, "是否删除所选就诊人")
                    ]),
                    showCancelButton: true,
                    confirmButtonText:"确定",
                    cancelButtonText:"取消",
                    beforeClose: (action, instance, done) => {
                        if(action === "confirm") {
                            this.delete();//调删除接口
                            done();
                            instance.confirmButtonLoading = false;
                        }else {
                            done();
                        }
                    }
                }).then(action => {
                    action = '删除成功';
                    this.$message.success(action)
                })
        },
        delete(){
            let param = {
                patientId:this.patientId,
                token:this.token,
                type:0
            }
            axion.deletePatient(param).then(res => {
                if(res.data.retCode == 0) {
                   this.getPatient()
                }else {
                        this.$message.warning('删除失败')
                }
            })
        },
        save(){
            let param = {
                id:this.patientId,
                theName:this.theName,
                cardId:this.cardId,
                patientCard:this.patientCard,
                patientPhone:this.patientPhone,
                token:this.token,
                type:0
            }
            if(this.type == 2) {
                axion.editPatient(param).then( res =>{
                    if(res.data.retCode == 0) {
                        this.getPatient()
                        this.$message.success('保存就诊人成功')
                    }else {
                        this.$message.warning('保存失败')
                    }
                    this.dialogShow = false
                })
            }else if( this.type == 1) {
                axion.addPatient(param).then(res => {
                    if(res.data.retCode == 0) {
                        this.getPatient()
                        this.$message.success('保存就诊人成功')
                    }else {
                        this.$message.warning('保存失败')
                    }
                    this.dialogShow = false
                })
            }
        }
    },
}
</script>