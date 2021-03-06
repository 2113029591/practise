<template>
  <div class="res-container">
    <div class="change-box">
      <div class="change-btn">
        <div class="btn">添加</div>
        <div class="btn">查询</div>
      </div>
      <div class="change-input-box">
        <p>物品名称</p>
        <input type="text">
        <p>物品数量</p>
        <input type="text">
        <button>添加</button>
      </div>
    </div>
    <div>
      <table>
        <thead>
        <th>序号</th>
        <th>物品名称</th>
        <th>物品数量</th>
        <th>入库时间</th>
        <th>最后更新时间</th>
        <th>操作</th>
        </thead>
        <tr v-for="(person) in persons" :key="person.onlyId">
          <td><input type="text" v-model="person.id" :disabled="person.isDisabled" @keyup.enter="edit(person.onlyId)"></td>
          <td><input type="text" v-model="person.itemName" :disabled="person.isDisabled" @keyup.enter="edit(person.onlyId)"></td>
          <td><input type="text" v-model="person.number" :disabled="person.isDisabled" @keyup.enter="edit(person.onlyId)"></td>
          <td><input type="text" v-model="person.inTime" :disabled="true"></td>
          <td><input type="text" v-model="person.updateTime" :disabled="true"></td>
          <td class="td-btn">
            <button @click="edit(person.onlyId)">编辑</button>
            <button @click="del(person.onlyId)">删除</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResourcesItem",
  data:function (){
    return{
      isShow:true,
      persons:[
        {
          onlyId:1,
          id:1,
          itemName:"笔记本",
          number:99,
          inTime:Date.now(),
          updateTime:Date.now(),
          isDisabled:true
        },
        {
          onlyId:2,
          id:2,
          itemName:"笔记本",
          number:88,
          inTime:Date.now(),
          updateTime:Date.now(),
          isDisabled:true
        },
        {
          onlyId:3,
          id:3,
          itemName:"笔记本",
          number:77,
          inTime:Date.now(),
          updateTime:Date.now(),
          isDisabled:true
        },
        {
          onlyId:4,
          id:4,
          itemName:"笔记本",
          number:66,
          inTime:Date.now(),
          updateTime:Date.now(),
          isDisabled:true
        }
      ]
    }
  },
  computed:{},
  methods:{
    edit(onlyId){
      this.persons.find(x=>x.onlyId==onlyId).isDisabled
          =!this.persons.find(x=>x.onlyId==onlyId).isDisabled
    },
    del(onlyId){
      let index=this.persons.findIndex(x=>{
        if(x.onlyId==onlyId){
          return true
        }
      })
      this.persons.splice(index,1)
    }
  }
}
</script>

<style scoped>
.change-box{
  width: 100%;
  height: 100px;
  background: skyblue;
}
.change-btn{
  display: flex;
}
.change-box .change-btn .btn{
  height: 30px;
  width: 80px;
  background: red;
  text-align: center;
  line-height: 30px;
  margin-right: 10px;
}
.change-input-box{
  height:60px;
  background: gray;
  display: flex;
  justify-content: center;
}
.change-input-box input{
  align-self: center;
  width: 100px;
  height: 35px;
}
.res-container{
  background: white;
  height: 90%;
  width: 100%;
}
thead{
  background: gray;
  width: 100%;
}
table{
  width: 100%;
}
td{
  height: 25px;
  box-sizing: border-box;
}
th{
}
input{
  height: 20px;
  width: 100%;
  text-align: center;
}
.td-btn{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.td-btn button{
  height: 25px;
  width: 50px;
}
</style>