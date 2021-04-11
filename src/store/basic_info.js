import {basicCreate} from "@/api/basicInfo";

const basic_info={
    state:{
        //待定
        basic_item:[
        ],
        one_item:{
            //自增
            basic_id:"",
            //物品编码
            nameCode:"",
            //厂商
            manufacturer:"",
            //品牌
            brand:"",
            //类型
            model:"",
        }
    },
    mutations:{
        //有问题，待研究
        // addBasicInfo(state,basic_test){
        //     this.$axios.post("/api/basic-info/create",{
        //         nameCode: basic_test.nameCode,
        //         manufacturer:basic_test.manufacturer,
        //         brand:basic_test.brand,
        //         model:basic_test.model,
        //     },{
        //         timeout:1000,
        //     }).then(res=>{
        //         console.log(res.data);
        //     })
        // }
    },
    actions:{
        addBasicInfo({commit},basicInfo) {
            return new Promise((resolve,reject)=>{
                basicCreate(basicInfo).then(res=>{
                    console.log(res.data.data);
                    resolve(res);
                }).catch(err=>{
                    reject(err)
                })
            })
        }
    }
}

export default basic_info