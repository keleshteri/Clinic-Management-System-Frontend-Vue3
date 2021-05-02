import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/patients',
        name: 'Patients',
        component: () => import('../views/patients/PatientList.vue'),
    },
    {
        path: '/patients/create',
        name: 'PatientCreate',
        component: () => import('../views/patients/PatientCreate.vue'),
    },
    {
        path: '/patients/edit/:id',
        name: 'PatientEdit',
        component: () => import('../views/patients/PatientEdit.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
