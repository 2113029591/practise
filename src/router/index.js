import Vue from "vue"
import VueRouter from "vue-router"
import Login from "@/views/Login";
import Main from "@/views/Main";
import ResourcesItem from "@/components/Main/ResourcesItem";
import UserInformation from "@/components/Main/UserInformation";

Vue.use(VueRouter)

const routes=[
    {path:"/",redirect:"/Login"},
    {path: "/Login",component:Login},
    {
        path: "/Main",
        component: Main,
        redirect: "/Main/ResourcesItem",
        children:[
            {path:"ResourcesItem",component:ResourcesItem},
            {path: "UserInformation",component: UserInformation}
        ]
    }
]

const router=new VueRouter({
    routes,
})

export default router