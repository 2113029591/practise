<template>

  <div class="container">
    <div class="aside">
      <div class="label">
        <p>资源管理平台</p>
      </div>
      <div class="aside-list">
        <ul>
          <li @click="to_Resources">资源管理</li>
          <li @click="to_Information">用户信息</li>
          <li @click="to_Back">返回</li>
          <li>首页</li>
          <li>首页</li>
        </ul>
      </div>
    </div>
    <div class="content">
      <Header></Header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Header from "../components/Main/Header"

export default {
  name: "Main",
  data: function () {
    return {}
  },
  methods: {
    to_Resources(){
      this.$router.push("/Main/ResourcesItem")
    },
    to_Information(){
      this.$router.push("/Main/UserInformation")
    },
    to_Back(){
      this.$router.push("/")
    }
  },
  components:{
    Header:Header,
  }
}
</script>

<style scoped>
.container{
  height: 100%;
  display: flex;
}
.aside{
  width:200px;
  height: 100%;
  background:#222d32 ;
}
.label{
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 25px;
  color: wheat;
}
ul{
  margin-top: 50px;
  list-style: none;
}
ul>li{
  height: 70px;
  color: wheat;
  font-size: 30px;
  text-align: center;
  line-height: 70px;
}
ul>li:hover{
  background: #141c1f;
}
.content{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>