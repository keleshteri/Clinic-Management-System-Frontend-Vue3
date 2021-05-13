import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Patients from '../views/Patients.vue'
import PatientsList from '../components/patients/list/PatientsList.vue'
import PatientEdit from '../components/patients/edit/PatientEdit.vue'
import PatientCreate from '../components/patients/create/PatientCreate.vue'
import PatientUploads from '../components/patients/uploads/PatientUploads.vue'

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
        component: Patients,
        children: [
            {
                path: '',
                component: PatientsList,
            },
            {
                path: 'new',
                name: 'PatientNew',
                component: PatientCreate,
            },
            {
                path: 'update/:id',
                name: 'PatientUpdate',
                component: PatientEdit,
            },
            {
                path: 'uploads/image/:id',
                name: 'PatientUploads',
                component: PatientUploads,
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
