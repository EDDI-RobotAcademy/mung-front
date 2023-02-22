import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/views/HomeView";
import NaverLogin from "@/views/login/NaverLogin";
import NaverLoginAccess from "@/views/login/NaverLoginAccess";
import GoogleLogin from "@/views/login/GoogleLogin";


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component : HomeView
  },
  {
    path: "/login",
    name: "login",
    component: NaverLogin
  },
  {
    path: "/login/naver",
    name: "NaverLogin",
    component: NaverLoginAccess
  },
  {
    path: "/google",
    name: "GoogleLogin",
    component: GoogleLogin
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
