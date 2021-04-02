import { createRouter, createWebHashHistory } from 'vue-router'
import Home from 'views/home/home'
import Cart from 'views/cart/cart'
import Category from 'views/category/category'
import Profile from 'views/profile/profile'
import Detail from 'views/detail/detail'

const routes = [{
  path:'/',
  redirect:'/home'
},
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path:'/detail/:id',
    name:'Detail',
    component:Detail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
