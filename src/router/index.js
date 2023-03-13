import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView';
import NaverLogin from '@/views/login/NaverLogin';
import GoogleLogin from '@/views/login/GoogleLogin';
import WalkingDogBoardView from '@/views/walkingDog/WalkingDogBoardView';
import SignUpView from '@/views/signup/SignUpView';
import MungWikiRegPage from '@/views/mungWiki/MungWikiRegPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: NaverLogin,
  },
  {
    path: '/google',
    name: 'GoogleLogin',
    component: GoogleLogin,
  },
  {
    path: '/walking-dog',
    name: 'WalkingDog',
    component: WalkingDogBoardView,
  },
  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView,
  },
  {
    path: '/mung-wiki',
    name: 'MungWikiRegPage',
    component: MungWikiRegPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
