<template>
  <div class="res-container">

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="添加信息" name="first">
        <el-col :span="24" class="toolbar">
        <el-form :inline="true">
          <div style="display: flex;justify-content: center">
            <el-form-item class="form-item">
              <el-input  placeholder="请输入位置" style="width: 14vw"></el-input>
            </el-form-item>
            <el-form-item class="form-item">
              <el-input  placeholder="请输入商品类型" style="width: 14vw"></el-input>
            </el-form-item>
            <el-form-item class="form-item">
              <el-input  placeholder="请输入商品状态" style="width: 14vw"></el-input>
            </el-form-item><el-form-item class="form-item">
            <el-input  placeholder="请输入商品单位" style="width: 14vw"></el-input>
          </el-form-item>
            <el-form-item class="form-item">
              <el-button type="primary"  icon="el-icon-search">添加</el-button>
              <el-button type="primary" >重置</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-col>
      </el-tab-pane>
      <el-tab-pane label="查询信息" name="second">
        <el-col :span="24" class="toolbar">
        <el-form :inline="true">
          <div style="display: flex;justify-content: center">
            <el-form-item class="form-item">
              <el-input  placeholder="根据名称查询" style="width: 14vw"></el-input>
            </el-form-item>
            <el-form-item class="form-item">
              <el-input  placeholder="根据数量查询" style="width: 14vw"></el-input>
            </el-form-item>
            <el-form-item class="form-item">
              <el-input  placeholder="根据位置查询" style="width: 14vw"></el-input>
            </el-form-item><el-form-item class="form-item">
            <el-input  placeholder="根据类别查询" style="width: 14vw"></el-input>
          </el-form-item>
            <el-form-item class="form-item">
              <el-button type="primary"  icon="el-icon-search">查询</el-button>
              <el-button type="primary" >重置</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-col>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
        title="修改用户"
        :visible.sync="editDialogVisible"
        width="50%">
      <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px">
        <el-form-item label="名称">
          <el-input v-model="editForm.thingsInfo" disabled></el-input>
        </el-form-item>
        <el-form-item label="位置" prop="email">
          <el-input v-model="editForm.location"></el-input>
        </el-form-item>
        <el-form-item label="数量" prop="mobile">
          <el-input v-model="editForm.count" disabled></el-input>
        </el-form-item>
        <el-form-item label="类别" prop="mobile">
          <el-input v-model="editForm.type"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="mobile">
          <el-input v-model="editForm.state"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <div>
      <el-table :data="totalWarehouseInfos" border style="width:80%">
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="thingsInfo" label="名称"></el-table-column>
        <el-table-column prop="location" label="位置"></el-table-column>
        <el-table-column prop="count" label="数量"></el-table-column>
        <el-table-column prop="type" label="类别"></el-table-column>
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column  label="操作">
          <template slot-scope="scope">
            <el-button  type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="showEditDialog(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <button @click="test">测试</button>
      <button @click="addWarehouse()">添加库存表</button>
      <div class="block">
        <span class="demonstration">页数较少时的效果</span>
        <el-pagination
            layout="prev, pager, next"
            :total="50">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>


import {warehouseGetInfos} from "@/api/warehouse";

export default {
  name: "ResourcesItem",
  data: function () {
    return {
      editDialogVisible:false,
      editForm:[],
      editFormRules: {
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          // { validator: checkEmail, trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          // { validator: checkMobile, trigger: 'blur' }
        ]
      },
      activeName: 'first',
      //maxOnlyId:用来记录唯一的id值作为key
      maxOnlyId: 4,
      //totalNumber:用来记录总共的记录数量，作为编号输入
      totalNumber: 4,
      isAddDisplay: false,
      isQueryDisplay: false,
      isShow: true,
      person: {
        itemName: "",
        number: "",
        isDisabled: true
      },
      totalWarehouseInfos:[],
      warehouseInfo:{
        limit:5,
        page: 0,
      },
      oneWarehouseInfo:{

      },
      instorageInfo:{
        purchaser:2,
        channel:"银泰",
        count:2,
        notes:"备注",
      }
    }
  },
  computed: {},
  methods: {
    showEditDialog(data){
      this.editDialogVisible = true,
          this.editForm=data
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    edit(onlyId) {
      this.persons.find(x => x.onlyId == onlyId).isDisabled
          = !this.persons.find(x => x.onlyId == onlyId).isDisabled

    },
    del(onlyId) {
      let index = this.persons.findIndex(x => {
        if (x.onlyId == onlyId) {
          return true
        }
      })
      this.persons.splice(index, 1)
    },
    add() {
      this.person.inTime = Date.now()
      this.person.updateTime = Date.now()
      this.maxOnlyId++;
      this.person.onlyId = this.maxOnlyId
      this.totalNumber++;
      this.person.id = this.totalNumber;
      this.persons.push(this.person)
      this.person = {
        itemName: "",
        number: "",
        isDisabled: true
      }
    },

  changeAddDisplay() {
    this.isAddDisplay = true
    this.isQueryDisplay = !this.isAddDisplay
  },
  changQueryDisplay() {
    this.isQueryDisplay = true
    this.isAddDisplay = !this.isQueryDisplay
  },
  cancelAction() {
    this.isAddDisplay = false
    this.isQueryDisplay = false
  },
  test() {
    this.$store.dispatch('addInstorage',this.instorageInfo).then(res=>{
      console.log(res.data.data)
    })
  },
  addWarehouse(){
      //oneWarehouseInfo在数据在传的时候可能会出错，拼写的原因，还有，测试数据被我删了，现在还没有，之后补充
      this.$store.dispatch('addWarehouse',this.oneWarehouseInfo).then(res=>{
        console.log(res.data)
      }).catch(err=>{
        console.log(err.response.data)
      })
  },
    getTotalWarehouse(warehouseInfo){
      warehouseGetInfos(warehouseInfo).then(res=>{
        this.totalWarehouseInfos=res.data.data.records
        console.log(res.data,this.totalWarehouseInfos)
      })
    }
},
  created:function (){
    setTimeout(()=>{
      this.getTotalWarehouse(this.warehouseInfo)
      console.log(this.totalWarehouseInfos)
    })
}
}
</script>

<style scoped>
.change-box{
  width: 100%;
  /*height: 100px;*/
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
.change-input-box p{
  line-height: 60px;
}
.change-input-box input{
  align-self: center;
  width: 100px;
  height: 35px;
}
.change-input-box button{
  width: 100px;
  height: 35px;
  align-self: center;
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