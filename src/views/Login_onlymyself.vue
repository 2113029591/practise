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
            <input type="text" :placeholder="inputUsername" v-model="userLoginMess.account">
          </li>
          <li>
            <img src="../assets/person.png" alt="">
            <input type="password" :placeholder="inputPassword" v-model="userLoginMess.password">
          </li>
        </ul>
      </div>
      <div class="btn">
        <button @click="to_Login">登录</button>
        <button>注册</button>
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
      userLoginMess:{
        account:"",
        password:"",
      }

    }
  },
  methods:{
    to_Login(){
      // this.$axios.post("/api/user/login",{
      //   account:this.userLoginMess.account,
      //   password:this.userLoginMess.password,
      // },{
      //   timeout:1000,
      // }).then(res=>{
      //   //判断是否登录成功
      //   if (res.data.code==0 && res.status==200){
      //     //获得后端返回的token
      //     // console.log(window.localStorage.getItem('data'))
      //     this.$store.state.token=res.data.data
      //     // console.log(window.localStorage);
      //     this.$router.push("/Main")
      //   }
      // }).catch(err=>{
      //   //登录失败，具体什么原因失败暂时不写，后续补充
      //   console.log(err.response.data)
      //   this.$router.push('/')
      // })

      this.$store.dispatch('actionLogin',this.userLoginMess).then(res=>{
        console.log("request")
        if(res.data.code==0&& res.status==200){
          this.$router.push("/Main");
        }
      }).catch(err=>{
        console.log(err.response.data)
        this.$router.push('/')
      })
    },
    sign_up(){
      this.$axios.post("/api/user/create",{
        account:"uer02",
        password:"123456",
        realname:"hhh",
        phone:"22222222",
        position:"北京",
        type:3,
      },{
        timeout:1000
      })
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