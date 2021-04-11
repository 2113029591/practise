<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="添加信息" name="first">
        <el-col :span="24" class="toolbar">
          <el-form :inline="true" :model="addOneBasicInfo">
            <div style="display: flex;justify-content: center">
              <el-form-item class="form-item">
                <el-input v-model="addOneBasicInfo.nameCode" placeholder="请输入物品编号" style="width: 14vw"></el-input>
              </el-form-item>
              <el-form-item class="form-item">
                <el-input v-model="addOneBasicInfo.manufacturer" placeholder="请输入厂商" style="width: 14vw"></el-input>
              </el-form-item>
              <el-form-item class="form-item">
                <el-input v-model="addOneBasicInfo.brand" placeholder="请输入名牌" style="width: 14vw"></el-input>
              </el-form-item><el-form-item class="form-item">
              <el-input v-model="addOneBasicInfo.model"  placeholder="请输入类型" style="width: 14vw"></el-input>
            </el-form-item>
              <el-form-item class="form-item">
                <el-button type="primary"  icon="el-icon-search" @click="addOneBasicInfo" >添加</el-button>
                <el-button type="primary" @click="clearAddOneBasicInfo">重置</el-button>
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
<!--    弹出框-->
    <el-dialog
        title="修改用户"
        :visible.sync="editDialogVisible"
        width="50%"
        @close="editDialogClosed">
      <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px">
        <el-form-item label="品牌名" prop="brand">
          <el-input v-model="editForm.brand"></el-input>
        </el-form-item>
        <el-form-item label="名称" prop="name">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="型号" prop="name">
          <el-input v-model="editForm.model"></el-input>
        </el-form-item>
        <el-form-item label="品牌" prop="name">
          <el-input v-model="editForm.manufacturer"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="name">
          <el-input v-model="editForm.nameCode"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-table
        :data="BasicInfoData"
        stripe
        style="width: 100%">
      <el-table-column prop="id" label="序号" width="180"></el-table-column>
      <el-table-column prop="brand" label="品牌名" width="180"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="model" label="型号"></el-table-column>
      <el-table-column prop="manufacturer" label="品牌"></el-table-column>
      <el-table-column prop="nameCode" label="物品编号"></el-table-column>
      <el-table-column  label="操作">
        <template slot-scope="scope">
        <el-button  type="text" size="small">查看</el-button>
        <el-button type="text" size="small" @click="showEditDialog(scope.row)">编辑</el-button>
          <el-button  type="text" size="small" @click="deleteOneBasicInfo(scope.row.nameCode)">删除</el-button>
        </template>
      </el-table-column>

<!--      <el-table-column prop="address" label="厂商"></el-table-column>-->
    </el-table>
  </div>
</template>

<script>
import {getBasicInfos,basicCreate,deleteBasicInfo} from "@/api/basicInfo";

export default {
name: "basicInfos",
  data() {
    return {
      editDialogVisible:false,
      editForm:[],
      editFormRules: {
        brand: [
          { required: true, message: '请输入品牌名', trigger: 'blur' },
          // { validator: checkEmail, trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          // { validator: checkMobile, trigger: 'blur' }
        ]
      },

      BasicInfoPage:{
        limit:5,
        page: 0,
      },

      activeName: 'first',
      BasicInfoData: [],

      addOneBasicInfo:{
        nameCode:null,
        manufacturer:null,
        brand:null,
        model:null,
      },
      emptyOneInfo:{
        nameCode:null,
        manufacturer:null,
        brand:null,
        model:null,
      }
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    showEditDialog(data){
      this.editDialogVisible = true,
          this.editForm=data
    },
    async getTotalInfos(BasicInfoPage){
      // getBasicInfos(BasicInfoPage).then(res=>{
      //   this.BasicInfoData=res.data.data.records
      //   console.log(res.data.data.records)
      // })
      try {
        let res = await Promise.all([a(), b(), c()])
        res[]
        console.log(res.data);
      } catch (e) {
        //
      }
    },
    editDialogClosed () {
      this.$refs.editFormRef.resetFields()
    },

    clearAddOneBasicInfo(){
      this.addOneBasicInfo=this.emptyOneInfo;
    },

    addBasicInfo(oneInfo){
      basicCreate(oneInfo).then(res=>{
        console.log(res.data)
      })
    },

    deleteOneBasicInfo(nameCode){
      deleteBasicInfo(nameCode).then(res=>{
        this.getTotalInfos(this.BasicInfoPage)
        console.log(res.data)
      })
    }

  },
  created:function (){
    setTimeout(()=>{
      this.getTotalInfos(this.BasicInfoPage)
      console.log(this.BasicInfoPage)
    })
  }
}
</script>

<style scoped>

</style>