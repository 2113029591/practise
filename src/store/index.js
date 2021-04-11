import Vue from "vue"
import Vuex from "vuex"
import basic_info from "@/store/basic_info";
import user from "@/store/user";
import instorage from "@/store/instorage";
import warehouse_item from "@/store/warehouse_item";
Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        token:"",
    },
    getters:{
    },
    mutations:{
        updateMessage(state,value){
            state.msg=value;
        },
    },
    modules:{
        basic_info,
        user,
        instorage,
        warehouse_item,
    }
})

export default store