<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="userList" :stripe="true" :border="true">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="username" label="用户名称"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column prop="role_name" label="角色"></el-table-column>
      <el-table-column prop="mg_state" label="状态">
        <template slot-scope="scope">
          <!-- scope.row 可以取到当前一行的数据 -->
          <!-- {{ scope.row }} -->
<!--          <el-switch v-model="scope.row.mg_state" @change="userStateChange(scope.row)">-->
<!--          </el-switch>-->
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <!-- 修改按钮 -->
          <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
          <!-- 删除按钮 -->
          <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
          <!-- 分配角色按钮 -->
          <el-tooltip  effect="dark" content="分配角色" placement="top" :enterable="false">
            <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "user-information",
  data:function (){
    return{
      isShow:true,
      userList: [],
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