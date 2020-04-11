import Vue from 'vue'
import VueRouter from 'vue-router'
//安装VueRouter
Vue.use(VueRouter)

const CateGory = () => import('views/category/CateGory')
const Home = () => import('views/home/Home')
const Profile = () => import('views/profile/Profile')
const ShopCart = () => import('views/shopcart/ShopCart')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: CateGory
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcart',
    component: ShopCart
  }
]
//创建VueRouter对象
const router = new VueRouter({
  routes,
  base: process.env.BASE_URL,
  mode: 'history'
})
export default router
