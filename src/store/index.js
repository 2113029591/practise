import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        msg:"store的test"
    }
})

export default store