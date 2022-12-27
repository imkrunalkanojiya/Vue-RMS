import {createWebHistory,createRouter} from "vue-router"

//screens
import HomeView from "./components/HomeView.vue"
import SignUpView from "./components/SignUpView.vue"
import LoginView from "./components/LoginView.vue"
import AddRestoView from "./components/AddRestoView.vue"
import UpdateRestoView from "./components/UpdateRestoView.vue"

const routes = [
    {
        path:"/",
        name:"HomeView",
        component:HomeView
    },
    {
        path:"/signup",
        name:"SignUpView",
        component:SignUpView
    },
    {
        path:"/signin",
        name:"LoginView",
        component:LoginView
    },
    {
        path:"/addresto",
        name:"AddRestoView",
        component:AddRestoView
    },
    {
        path:"/updateresto/:id",
        name:"UpdateRestoView",
        component:UpdateRestoView
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router