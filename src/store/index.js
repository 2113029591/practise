import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        msg:"test",

    },
    mutations:{
        updateMessage(state,value){
            state.msg=value;
        },
    },
})

export default store