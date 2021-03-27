import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        component: Dashboard,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: "Overview" */ '../views/Restaurants.vue')
            },
            {
                path: 'profile',
                component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router