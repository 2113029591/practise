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
        <tr>
          <td><input type="text" value="1"></td>
          <td><input type="text" value="1"></td>
          <td><input type="text" value="1"></td>
          <td><input type="text" value="1"></td>
          <td><input type="text" value="1"></td>
          <td class="td-btn">
            <button>编辑</button>
            <button>删除</button>
          </td>
        </tr>
        <tr>
          <td><input type="text" value="1"></td>
          <td><input type="text" value="1"></td>
          <td><input type="text" value="1"></td>
          <td><input type="text" value="1"></td>
          <td><input type="text" value="1"></td>
          <td class="td-btn">
            <button>编辑</button>
            <button>删除</button>
          </td>
        </tr>
        <tr>
        <td><input type="text" value="1"></td>
        <td><input type="text" value="1"></td>
        <td><input type="text" value="1"></td>
        <td><input type="text" value="1"></td>
        <td><input type="text" value="1"></td>
        <td class="td-btn">
          <button>编辑</button>
          <button>删除</button>
        </td>
      </tr>
        <tr>
          <td><input type="text" value="1"></td>
          <td><input type="text" value="1"></td>
          <td><input type="text" value="1"></td>
          <td><input type="text" value="1"></td>
          <td><input type="text" value="1"></td>
          <td class="td-btn">
            <button>编辑</button>
            <button>删除</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResourcesItem"
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