import {warehouseCreate, warehouseGetInfos} from "@/api/warehouse";

const warehouse_item={
    state:{
        // warehouseId:"",
        // basicInfoId:"",
        // instorageId:"",
        // location:"",
        // count:"",
        // specification:"",
        // SN:"",
        // remarks:"",
        totalWarehouseInfos:null,
    },
    mutations: {

    },
    actions:{
        addWarehouse({commit},warehouseInfo){
            return new Promise((resolve, reject) => {
                warehouseCreate(warehouseInfo).then(res=>{
                    console.log(res.data.data);
                    resolve(res)
                }).catch(err=>{
                    console.log(err.response.data);
                    reject(err)
                })
            })
        },
        // getWarehouseInfos({commit},WarehouseInfo){
        //     return new Promise((resolve) => {
        //         warehouseGetInfos(WarehouseInfo).then(res=>{
        //             this.$store.state.totalWarehouseInfos=res.data.records
        //             resolve(res)
        //         })
        //     })
        // }
    }
}

export default warehouse_item