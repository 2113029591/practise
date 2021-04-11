<template>

  <div class="container">
<!--    <div class="aside">-->
<!--      <div class="label">-->
<!--        <p>资源管理平台</p>-->
<!--      </div>-->
<!--      <div class="aside-list">-->
<!--        <ul>-->
<!--          <li @click="to_Resources">资源管理</li>-->
<!--          <li @click="to_Informations">用户信息总</li>-->
<!--          <li @click="to_personInformation">个人信息</li>-->
<!--          <li @click="to_BasicInfos">基本信息</li>-->
<!--          <li @click="to_Back">返回</li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->
    <el-aside>
<!--      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
<!--        <el-radio-button :label="false">展开</el-radio-button>-->
<!--        <el-radio-button :label="true">收起</el-radio-button>-->
<!--      </el-radio-group>-->
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" >
        <el-menu-item index="1" @click="to_Resources">
          <i class="el-icon-menu"></i>
          <span slot="title">项目资源</span>
        </el-menu-item>
        <el-menu-item index="2" @click="to_Informations">
          <i class="el-icon-menu" ></i>
          <span slot="title">用户总信息</span>
        </el-menu-item>
        <el-menu-item index="3" @click="to_personInformation">
          <i class="el-icon-document"></i>
          <span slot="title">个人信息</span>
        </el-menu-item>
        <el-menu-item index="4" @click="to_BasicInfos">
          <i class="el-icon-setting"></i>
          <span slot="title">物品基本信息</span>
        </el-menu-item>
        <el-menu-item index="5" @click="to_Back">
          <i class="el-icon-setting"></i>
          <span slot="title">退出登录</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <div class="content">
<!--      <Header></Header>-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Header from "../components/Main/Header"

export default {
  name: "Main",
  data: function () {
    return {
      isCollapse: true,
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    to_Resources(){
      this.$router.push("/Main/ResourcesItem")
    },
    to_Informations(){
      this.$router.push("/Main/UserInformations")
    },
    to_personInformation(){
      this.$router.push("/Main/personInformation")
    },
    to_Back(){
      this.$router.push("/")
    },
    to_BasicInfos(){
      this.$router.push("/Main/BasicInfos")
    }
  },
  components:{
    Header:Header,
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.container{
  height: 100%;
  display: flex;
}
.aside{
  height: 100%;
  margin-right: 20px;
}
el-menu{
}
.label{
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 25px;
  color: wheat;
}
router-view{
  height: 100%;
  background: white;
}
</style>