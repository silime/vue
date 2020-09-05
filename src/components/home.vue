<template>
<el-container>
  <el-header>
       <el-menu default-active="/welcome" class="el-menu-demo" mode="horizontal" router>
         <el-menu-item index="/welcome">主页</el-menu-item>
  <el-menu-item index="/user" icon="el-icon-user-solid">用户信息</el-menu-item>
  <el-menu-item index="/pay">充值中心</el-menu-item>
</el-menu>
  </el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
</el-container>
</template>

<script>
export default {
  data () {
    return {
      balance: 12
    }
  }

}
</script>

<style>

</style>
