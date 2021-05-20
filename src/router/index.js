import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Patients from '../views/Patients.vue'
import PatientsList from '../components/patients/PatientsList.vue'
import PatientCreate from '../components/patients/PatientCreate.vue'
import PatientEdit from '../components/patients/PatientEdit.vue'

// import PatientUploads from '../components/patients/uploads/PatientUploads.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        //meta: { layout: "empty" },
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
    {
        path: '/patients',
        component: Patients,
        name: 'Patients',
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
    //         {
    //             path: 'uploads/image/:id',
    //             name: 'PatientUploads',
    //             component: PatientUploads,
    //         },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
