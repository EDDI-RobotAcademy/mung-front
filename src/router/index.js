import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/views/HomeView";
import NaverLogin from "@/views/Sociallogin/NaverLogin";
import GoogleLogin from "@/views/Sociallogin/GoogleLogin";
import AuthToken from "@/views/Sociallogin/AuthToken";
import SignUpPage from "@/views/profile/MemberProfileRegPage";
import MemberProfileRegPage from "@/views/profile/MemberProfileRegPage";
import PetProfileRegPage from "@/views/profile/PetProfileRegPage";


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
    path: "/login/token",
    name: "AuthToken",
    component: AuthToken
  },
  {
    path: "/google",
    name: "GoogleLogin",
    component: GoogleLogin
  },
  {
    path: "/member-profile-reg-page",
    name: "MemberProfileRegPage",
    component: MemberProfileRegPage
  },
  {
    path: "/pet-profile-reg-page",
    name: "PetProfileRegPage",
    component: PetProfileRegPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
