import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home.vue";
import User from "@/views/User/User.vue";
import Mall from "@/views/Mall/Mall.vue";
import Login from "@/views/Login/Login.vue";
import Other1 from "@/views/Mall/Other/other1.vue";
import Other2 from "@/views/Mall/Other/other2.vue";
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: "/login",
            component: Login,
        },
        { path: "/home", component: Home },
        {
            path: "/user",
            component: User,
        },
        {
            path: "/mall",
            component: Mall,
        },
        {
            path: "/other1",
            component: Other1,
        },
        {
            path: "/other2",
            component: Other2,
        },
    ],
});

export default router;