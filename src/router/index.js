import Vue from "vue"
import VueRouter from "vue-router"
// import Login_onlymyself from "@/views/Login_onlymyself";
import Login_test from "@/views/Login_test";
import Main from "@/views/Main";
import ResourcesItem from "@/components/Main/ResourcesItem";
import UserInformations from "@/components/Main/UserInformations";
import BasicInfos from "@/components/Main/BasicInfos";
import personInformation from "@/components/Main/personInformation";

Vue.use(VueRouter)

const routes=[
    {path:"/",redirect:"/Login"},
    {path: "/Login",component:Login_test},
    {
        path: "/Main",
        component: Main,
        redirect: "/Main/ResourcesItem",
        children:[
            {path:"ResourcesItem",component:ResourcesItem},
            {path: "UserInformations",component: UserInformations},
            {path: "BasicInfos",component: BasicInfos},
            {path: "personInformation",component: personInformation},
        ]
    }
]

const router=new VueRouter({
    routes,
})

export default router