<template>
  <el-container>
    <el-header>
      <el-row :gutter="40">
  <el-col :span="6">
    <div class="header_text">
        <img src="../assets/logo.png" alt="图片" class="logo">
        <span class="aaa">啦啦啦</span>
    </div>
  </el-col>
  <el-col :span="10">
      <el-input placeholder="请输入内容">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
  </el-col>
  <el-col :span="2">
    <el-popover
    placement="top-start"
    width="200"
    trigger="hover">
    <div>
      <el-form label-width="0px" class="login_form">
                <el-form-item prop="username">
                    <el-input prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                 <el-form-item prop="password">
                    <el-input  prefix-icon="el-icon-lock" type="password"></el-input>
                </el-form-item>
                <el-form-item class="btn">
                <el-button type="primary">登录</el-button>
                <el-button type="info">注册</el-button>
            </el-form-item>
            </el-form>
    </div>
    <el-button slot="reference" icon="el-icon-user-solid"></el-button>
  </el-popover>
    </el-col>
    <el-col :span="2">
    <el-button type="text">充值</el-button>
    </el-col>
</el-row>
    </el-header>
  <el-main>
<el-menu class="el-menu-demo" mode="horizontal" >
  <el-menu-item index="1">
    <el-popover
    placement="top-start"
    width="200"
    trigger="hover">
    <div>
      余额qqqqqqqqqqqqqqqqqqq
    </div>
    <el-button slot="reference" icon="el-icon-user-solid"></el-button>
  </el-popover>
  </el-menu-item>
</el-menu>
  </el-main>
</el-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo{
  width: 40px;
  height: 40px;
}
.el-row{
    padding: 10px;
    widows: 100%;
}
.header_text{
  display: flex;
  align-items: center;
}
.aaa{
  margin-left: 15px;
}
</style>
