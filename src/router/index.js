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
        component: () => import('../views/Patients.vue'),
        children: [
            {
                path: '',
                component: import(
                    '../components/patients/list/PatientsList.vue'
                ),
            },
            {
                path: 'create',
                component: import(
                    '../components/patients/create/PatientCreate.vue'
                ),
            },
            {
                path: '/edit/:id',
                name: 'PatientEdit',
                component: () =>
                    import('../components/patients/edit/PatientEdit.vue'),
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
