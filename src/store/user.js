import {login} from "@/api/loginAndRegister";
import {setToken} from "@/utils/auth";
import {modifyUserInfo} from "@/api/user";

const user={
    state:{
        userInfo:{},
    },
    mutations:{
        set_userInfo(userInfo){
            this.$store.state.userInfo=userInfo
        }
    },
    actions:{
        actionLogin({commit},userInfo){
            return new Promise((resolve,reject)=>{
                login(userInfo).then(res=>{
                    let token=res.data.data
                    // commit('SET_TOKEN',token);
                    setToken(token)
                    resolve(res);
                }).catch(err=>{
                    reject(err);
                })
            })
        },
        modifyUserInfo({commit},UserInfo){
            return new Promise((resolve) => {
                modifyUserInfo(UserInfo).then(res=>{
                    commit('set_userInfo',res.data.data)
                    resolve(res)
                })
            })
        }
    }
}
export default user