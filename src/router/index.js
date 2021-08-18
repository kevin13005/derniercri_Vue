import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'articles',
    component: () => import(/* webpackChunkName: "about" */ '../views/Articles.vue')
  },
  {
    path: '/:slug/:date',
    name: 'details',
    component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
