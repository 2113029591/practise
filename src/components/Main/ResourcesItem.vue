<template>
  <div class="res-container">
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
        <tr v-for="(person,index) in persons" :key="index">
          <td><input type="text" v-model="person.id"></td>
          <td><input type="text" v-model="person.itemName"></td>
          <td><input type="text" v-model="getNumber" ></td>
          <td><input type="text" v-model="person.inTime"></td>
          <td><input type="text" v-model="person.updateTime"></td>
          <td class="td-btn">
            <button>编辑</button>
            <button>删除</button>
          </td>
        </tr>
        <p>{{getNumber}}</p>
<!--        <tr>-->
<!--          <td><input type="text" value="1"></td>-->
<!--          <td><input type="text" value="1"></td>-->
<!--          <td><input type="text" value="1"></td>-->
<!--          <td><input type="text" value="1"></td>-->
<!--          <td><input type="text" value="1"></td>-->
<!--          <td class="td-btn">-->
<!--            <button>编辑</button>-->
<!--            <button>删除</button>-->
<!--          </td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--        <td><input type="text" value="1"></td>-->
<!--        <td><input type="text" value="1"></td>-->
<!--        <td><input type="text" value="1"></td>-->
<!--        <td><input type="text" value="1"></td>-->
<!--        <td><input type="text" value="1"></td>-->
<!--        <td class="td-btn">-->
<!--          <button>编辑</button>-->
<!--          <button>删除</button>-->
<!--        </td>-->
<!--      </tr>-->
<!--        <tr>-->
<!--          <td><input type="text" value="1"></td>-->
<!--          <td><input type="text" value="1"></td>-->
<!--          <td><input type="text" value="1"></td>-->
<!--          <td><input type="text" value="1"></td>-->
<!--          <td><input type="text" value="1"></td>-->
<!--          <td class="td-btn">-->
<!--            <button>编辑</button>-->
<!--            <button>删除</button>-->
<!--          </td>-->
<!--        </tr>-->
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResourcesItem",
  data:function (){
    return{

    }
  },
  computed:{
    persons:function (){
      return this.$store.state.persons
    },
    getNumber:{
      get(){
        return this.$store.state.persons.find(x=>x.onlyId=1).number
      },
      set(newNumber){
        this.$store.commit("getNumber",newNumber)
      }
    }
  }
}
</script>

<style scoped>
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