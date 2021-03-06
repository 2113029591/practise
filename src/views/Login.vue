<template>
  <div class="login-container">
    <div class="login-box">
      <div class="label">
        <p>登录</p>
      </div>
      <div class="system-name">
        <p>资源管理平台</p>
      </div>
      <div class="input-section">
        <ul>
          <li>
            <img src="../assets/person.png" alt="">
            <input type="text" :placeholder="inputUsername">
          </li>
          <li>
            <img src="../assets/person.png" alt="">
            <input type="password" :placeholder="inputPassword">
          </li>
        </ul>
      </div>
      <div class="btn">
        <button @click="to_Login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data:function (){
    return{
      inputUsername:"请输入账号",
      inputPassword:"请输入密码",
    }
  },
  methods:{
    to_Login(){
      this.$router.push("/Main")
    }
  }
}
</script>

<style scoped>
.login-container{
  display: flex;
  height: 100%;
  justify-content: center;
}
.login-box{
  background: skyblue;
  width: 400px;
  height: 500px;
  border: 1px solid red;
  box-sizing: border-box;
  align-self: center;
}
.label{
  font-size: 50px;
  text-align: center;
}
.system-name{
  font-size: 20px;
  text-align: center;
  text-align: center;
  margin-top:10px;
}
ul{
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
img{
  width: 35px;
  height: 35px;
}
li{
  margin:10px auto;
  display: flex;
  width: 205px;
}
input{
  border: 0px;
}
.btn{
  width: 100px;
  margin: 20px auto 0px auto;
}
.btn>button{
  width: 100px;
  height: 30px;
}
</style>