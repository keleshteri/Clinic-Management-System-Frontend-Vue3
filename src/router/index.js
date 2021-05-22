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
import MedicineCompanies from '../views/MedicineCompanies.vue'
import MedicineCompaniesList from '../components/medicine-companies/MedicineCompaniesList.vue'
import MedicineCompaniesCreate from '../components/medicine-companies/MedicineCompaniesCreate.vue'
import MedicineCompaniesEdit from '../components/medicine-companies/MedicineCompaniesEdit.vue'

import MedicineTypes from '../views/MedicineTypes.vue'
import MedicineTypesList from '../components/medicine-types/MedicineTypesList.vue'
import MedicineTypesCreate from '../components/medicine-types/MedicineTypesCreate.vue'
import MedicineTypesEdit from '../components/medicine-types/MedicineTypesEdit.vue'

import Quantities from '../views/Quantities.vue'
import QuantitiesList from '../components/quantities/QuantitiesList.vue'
import QuantitiesCreate from '../components/quantities/QuantitiesCreate.vue'
import QuantitiesEdit from '../components/quantities/QuantitiesEdit.vue'

import UnitsMeasurements from '../views/UnitsMeasurements.vue'
import UnitsMeasurementsList from '../components/units-measurements/UnitsMeasurementsList.vue'
import UnitsMeasurementsCreate from '../components/units-measurements/UnitsMeasurementsCreate.vue'
import UnitsMeasurementsEdit from '../components/units-measurements/UnitsMeasurementsEdit.vue'

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
                name: 'MedicineList',
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
    {
        path: '/medicine-companies',
        name: 'MedicineCompanies',
        component:MedicineCompanies,
        children:[
            {
                path:'',
                name: 'MedicineCompaniesList',
                component:MedicineCompaniesList,
            },
            {
                path: 'new',
                name: 'MedicineCompaniesNew',
                component: MedicineCompaniesCreate,
            },
            {
                path: 'update/:id',
                name: 'MedicineCompaniesUpdate',
                component: MedicineCompaniesEdit,
            },
        ]

    },
    {
        path: '/medicine-types',
        name: 'MedicineTypes',
        component:MedicineTypes,
        children:[
            {
                path:'',
                name: 'MedicineTypesList',
                component:MedicineTypesList,
            },
            {
                path: 'new',
                name: 'MedicineTypesNew',
                component: MedicineTypesCreate,
            },
            {
                path: 'update/:id',
                name: 'MedicineTypesUpdate',
                component: MedicineTypesEdit,
            },
        ]

    },
    {
        path: '/quantities',
        name: 'Quantities',
        component:Quantities,
        children:[
            {
                path:'',
                name: 'QuantitiesList',
                component:QuantitiesList,
            },
            {
                path: 'new',
                name: 'QuantitiesNew',
                component: QuantitiesCreate,
            },
            {
                path: 'update/:id',
                name: 'QuantitiesUpdate',
                component: QuantitiesEdit,
            },
        ]

    },
    {
        path: '/units-measurements',
        name: 'UnitsMeasurements',
        component:UnitsMeasurements,
        children:[
            {
                path:'',
                name: 'UnitsMeasurementsList',
                component:UnitsMeasurementsList,
            },
            {
                path: 'new',
                name: 'UnitsMeasurementsNew',
                component: UnitsMeasurementsCreate,
            },
            {
                path: 'update/:id',
                name: 'UnitsMeasurementsUpdate',
                component: UnitsMeasurementsEdit,
            },
        ]

    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
