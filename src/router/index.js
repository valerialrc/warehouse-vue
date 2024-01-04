import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WarehouseList from  '../views/WarehouseList.vue'
import WarehouseNew from  '../views/WarehouseNew.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/warehouses',
    name: 'warehouses',
    component: WarehouseList
  },
  {
    path: '/warehouses/new',
    name: 'new',
    component: WarehouseNew
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
