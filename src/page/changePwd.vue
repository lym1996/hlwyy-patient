<template>
  <div class="changePwd paddingX30" style="min-height: 406px">
    <div class="personCenterTitle borderbottom1">
      <span class="title">修改密码</span>
    </div>
    <form>
      <div class="formItem margintop25 flex-align">
        <label class="formLabel">手机号</label>
        <span class="formSpan">{{phone}}</span>
      </div>
      <div class="formItem margintop20 flex-align">
        <label class="formLabel"><i class="required">*</i>原密码</label>
        <input v-model="oldPwd" class="formInput" placeholder="请输入原密码">
      </div>
      <div class="formItem margintop20 flex-align">
        <label class="formLabel"><i class="required">*</i>新密码</label>
        <input v-model="newPwd" type="password" class="formInput" placeholder="请输入新密码">
        <span class="marginleft20 color-999">*由6位以上数字、字母、特殊字符组成，至少两种以上组合</span>
      </div>
      <div class="formItem margintop20 flex-align">
        <label class="formLabel"><i class="required">*</i>确认密码</label>
        <input v-model="newPwdAgain" type="password" class="formInput" placeholder="再次输入新密码">
      </div>
      <button type="button" class="margintop40 marginleft180 theBtn width110" @click="updataPwd">保存</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
			phone: 'XXXXXXXX',
            oldPwd: '',
            newPwd: '',
            newPwdAgain: '',
    }
  },
  methods:{
    updataPwd(){
      if(this.oldPwd == '' || this.newPwd == '' || this.newPwdAgain == ''){
        this.$message({
          type: 'warning',
          message:"密码不能为空！"
        });
        return;
      }
      if(this.newPwd != this.newPwdAgain){
      this.$message({
        type: 'warning',
        message:"两次输入密码不一致，请核对后输入！"
       });
        return;
      }
      let newPwdreg = /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-zA-Z]|[0-9]){6,}$/;
      if(!newPwdreg.test(this.newPwd)) {
        this.$message({
          type: 'warning',
          message: "密码过于简单，请重新填写！"
        });
        return;
      }
      //调改密码接口
    }
  }
}
</script>