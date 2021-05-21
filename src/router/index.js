import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Patients from '../views/Patients.vue'
import PatientsList from '../components/patients/PatientsList.vue'
import PatientCreate from '../components/patients/PatientCreate.vue'
import PatientEdit from '../components/patients/PatientEdit.vue'
//Medicines
import Medicines from '../views/Medicines.vue'
import MedicineList from '../components/medicines/MedicineList.vue'
import MedicineCreate from '../components/medicines/MedicineCreate.vue'
import MedicineEdit from '../components/medicines/MedicineEdit.vue'
// import PatientUploads from '../components/patients/uploads/PatientUploads.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        //meta: { layout: "empty" },
    },
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
    {
        path: '/medicines',
        name: 'Medicines',
        component:Medicines,
        children:[
            {
                path:'',
                component:MedicineList,
            },
            {
                path: 'new',
                name: 'MedicineNew',
                component: MedicineCreate,
            },
            {
                path: 'update/:id',
                name: 'MedicineUpdate',
                component: MedicineEdit,
            },
        ]

    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
