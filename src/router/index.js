//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
//需要使用插件
Vue.use(VueRouter)

//引入路由组件
import Home from "@/pages/Home"
import Search from "@/pages/Search"
import Register from "@/pages/Register"
import Login from "@/pages/Login"
//配置路由
export default new VueRouter({
    //配置路由
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{
                show:true
            }
        },
        {
            path:"/search/:keyworld",
            component:Search,
            name:"search",
            meta:{
                show:true
            }
        },
        {
            path:"/register",
            component:Register,
            meta:{
                show:false
            }
        },
        {
            path:"/login",
            component:Login,
            meta:{
                show:false
            }
        },
        {
            path:"*",
            redirect:"/home"
        }
    ]
})