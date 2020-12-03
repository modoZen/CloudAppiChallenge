import Vue from 'vue'
import VueRouter from 'vue-router'
import userIndex from '../views/UserIndex.vue'
import About from '../views/About.vue'
import userCreate from '../views/CreateOrUpdate.vue'
import userUpdate from '../views/CreateOrUpdate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'userIndex', component: userIndex
  },
  {
    path: '/About', name: 'About', component: About
  },
  {
    path: '/Create', name: 'UserCreate', component: userCreate
  },
  {
    path: '/Update/:id', name: 'UserUpdate', component: userUpdate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
