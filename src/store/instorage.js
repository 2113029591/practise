import {instorageCreate} from "@/api/instorage";

const instorage={
    state:{

    },
    actions:{
        addInstorage({commit},instorageInfo){
            return new Promise((resolve, reject) => {
                instorageCreate(instorageInfo).then(res=>{
                    console.log(res.data.data)
                    resolve(res)
                }).catch(err=>{
                    console.log(err.response.data)
                    reject(err)
                })
            })
        }
    }
}

export  default  instorage;