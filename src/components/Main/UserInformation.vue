<template>
  <div class="user-container">
    <div class="information">
      <ul>
        <li class="item">
          <div class="text">
            <p>信息 :</p>
          </div>
          <input type="text" :disabled="isShow">
        </li>
        <li class="item">
          <div class="text">
            <p>信息 :</p>
          </div>
          <input type="text" :disabled="isShow">
        </li><li class="item">
        <div class="text">
          <p>信息 :</p>
        </div>
        <input type="text" :disabled="isShow">
      </li><li class="item">
        <div class="text">
          <p>信息 :</p>
        </div>
        <input type="text" :disabled="isShow">
      </li><li class="item">
        <div class="text">
          <p>信息 :</p>
        </div>
        <input type="text" :disabled="isShow">
      </li>
      </ul>
      <div class="btn">
        <button @click="isChange">修改信息</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-information",
  data:function (){
    return{
      isShow:true,
    }
  },
  methods:{
    isChange(){
      this.isShow=!this.isShow
    }
  }
}
</script>

<style scoped>
.user-container{
  width: 100%;
  height:90%;
  background: white;
}
.information{
  width: 400px;
  position: relative;
  left: 15%;
  top: 15%;

}
.item{
  margin-top: 20px;
  display: flex;
  width: 350px;
}
input{
  width: 200px;
}
.text{
  font-size: 30px;
  margin-right: 20px;
  margin-left: 20px;
}
.btn button{
  width: 100px;
  height: 40px;
  font-size: 15px;
  position: relative;
  left: 150px;
  margin-top: 20px;
}
</style>