import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from "./parentsComponents/HomeComponent.vue"
import GoogleMap from "./parentsComponents/MapsComponents.vue";
import ChatPage from "./parentsComponents/ChatComponent.vue";

const routes = [{
        path: "/", 
        name: "home", 
        component: HomeComponent
    }, 
    {
        path:"/Maps", 
        name:"maps", 
        component: GoogleMap
    }, 
    {
        path: "/chatPage",
        name: "chat", 
        component: ChatPage
    }
]


const router = createRouter({
    history:createWebHistory(), 
    routes,
})

export default router