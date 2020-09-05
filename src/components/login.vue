<template>
    <div class="login-container">
        <div class="login_box" v-if="!abc">
            <div class="avatar_box">
                <img src="../assets/1.png" alt="">
            </div>
            <el-form ref="loginformref" :model="loginform" :rules="loginformrules" label-width="0px" class="login_form">
                <el-form-item prop="username">
                    <el-input v-model="loginform.username" prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                 <el-form-item prop="password">
                    <el-input v-model="loginform.password" prefix-icon="el-icon-lock" type="password"></el-input>
                </el-form-item>
                <el-form-item class="btn">
                <el-button type="primary" @click="login">登录</el-button>
                <el-button type="info" @click="abc=!abc">注册</el-button>
            </el-form-item>
            </el-form>
        </div>
        <div class="sign_box" v-else >
          <el-form ref="signformref" :model="signform" :rules="loginformrules" label-width="0px" class="sign_form">
                <el-form-item prop="username">
                    <el-input v-model="signform.username" prefix-icon="el-icon-user-solid" placeholder="账号"></el-input>
                </el-form-item>
                 <el-form-item prop="password">
                    <el-input v-model="signform.password" prefix-icon="el-icon-lock" type="password" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item prop="email">
                    <el-input v-model="signform.email" prefix-icon="el-icon-box" placeholder="邮箱"></el-input>
                </el-form-item>
                <el-form-item prop="mobile">
                    <el-input v-model="signform.mobile" prefix-icon="el-icon-mobile-phone" placeholder="手机号码"></el-input>
                </el-form-item>
                <el-form-item class="btn">
                <el-button type="primary" @click="sign">注册</el-button>
                <el-button type="info" @click="abc=!abc">取消</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      loginform: {
        username: 'admin',
        password: '123456'
      },
      signform: {
        username: '1234',
        password: '1234',
        email: '',
        mobile: ''
      },
      abc: false,
      loginformrules: {
        username: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 14, message: '长度在 6 到 14 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginformref.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.loginform)
        if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
        this.$message.success(res.meta.msg)
        window.sessionStorage.setItem('token', res.data.token)
        this.$router.push('/home')
      })
    },
    async sign () {
      // eslint-disable-next-line no-unused-vars
      const { data: result } = await this.$http.post('users', this.signform)
      if (result.meta.status !== 201) return this.$message.error(result.meta.msg)
      this.$message.success(result.meta.msg)
      this.abc = false
      console.log(result)
    }
  }
}
</script>

<style lang="less" scoped>
.login-container{
   background-color: antiquewhitea;
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: aliceblue;
    border-radius: 15px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 1px;
    .avatar_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #eee;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
}
.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
.sign_box{
    width: 450px;
    height: 300px;
    background-color: aliceblue;
    border-radius: 15px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 1px;
}
.sign_form{
  position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0px 20px;
    height: 100%;
    box-sizing: border-box;
}
.btn{
    display: flex;
    justify-content: flex-end;
}
</style>

<style>

/* .el-input__inner{
    background-color: #ffffff00!important;
    border:0!important;
    border-radius: 0!important;
    color: #fff!important;
    display: block!important;
    outline: 0!important;
    border-bottom: 1px solid rgb(199, 191, 219)!important;
}
.el-button--primary {
  background-color: #ffffff00!important;
}
.el-button--info {
  background-color: #ffffff00!important;
} */

</style>
