<template>
  <div class="header-container">
    <ul>
      <li>消息</li>
      <li>消息</li>
      <li>消息</li>
      <li class="user-name-header">用户名</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  data:function (){
    return{
    }
  }
}
</script>

<style scoped>
.header-container{
  margin-top: 10px;
  margin-bottom: 15px;
  height: 40px;
  background: white;
}
ul{
  list-style: none;
  height: 40px;
  display: flex;
  justify-content: flex-end;
}
ul>li{
  width: 80px;
  text-align: center;
  align-self: center;
}
.user-name-header{
  margin-left: 30px;
}
</style>