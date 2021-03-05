import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        persons:[
            {
                onlyId:1,
                id:1,
                itemName:"笔记本",
                number:99,
                inTime:Date.now(),
                updateTime:Date.now(),
            },
            {
                onlyId:2,
                id:2,
                itemName:"笔记本",
                number:88,
                inTime:Date.now(),
                updateTime:Date.now(),
            },
            {
                onlyId:3,
                id:3,
                itemName:"笔记本",
                number:77,
                inTime:Date.now(),
                updateTime:Date.now(),
            },
            {
                onlyId:4,
                id:4,
                itemName:"笔记本",
                number:66,
                inTime:Date.now(),
                updateTime:Date.now(),
            }
        ]
    },
    mutations:{
        getNumber(state,value){
            this.$store.state.persons.find(x=>x.onlyId=1).number=value
        }
    },
})

export default store