<template>
    <Suspense>
        <template #default>
            <router-view
                v-slot="{ Component, route }"
                :schema="schema"
            >
                <component
                    :is="Component"
                    :key="route.meta.usePathKey ? route.path : undefined"
                />
            </router-view>
        </template>
        <template #fallback> Loading... </template>
    </Suspense>
</template>
<script>
import { required } from '@vuelidate/validators'
import axios from 'axios'
export default {
    name:'MedicineProduct',
    data() {
        return {
            schema: {
                rows: [
                    ['medicine', 'type', 'company', 'units'],
                    ['code', 'dose', 'name']

                ],
                fields:{
                     id: {
                         label: "ID",
                         field: "id",
                         type: "input",
						 inputType: "text",
                         width: "3%",
                         sortable: true,
                         isKey: true,
                         rules: {},
                         readonly: true,
                         featured: false,
                         disabled: true,
                         class: '',
                         style: 'color:red',
                         hidden: false,
                         showBtn:{
                                show:false,
                                edit:true,
                                Delete: true
                            }
                        },
                    name: {
                         label: 'Product Name',
                         field: 'name',
                         type: 'String',
                         fieldSize: 1,
                         fieldType: 'text',
                         editable: true,
                         creatable: true,
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                         hidden: false,
                    },
                    medicine: {
                         label: 'Drug Name',
                         field: 'medicine',
                         type: 'String',
                         fieldSize: 1,
                         fieldType: 'dropdown',
                         options: null,
                         optionsValue: 'id',
                         optionsLabel: 'name',
                         editable: true,
                         creatable: true,
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                         hidden: false,
                    },
                    type: {
                         label: 'Drug Type',
                         field: 'type',
                         type: 'String',
                         fieldSize: 1,
                         fieldType: 'dropdown',
                         options: null,
                         optionsValue: 'id',
                         optionsLabel: 'name',
                         editable: true,
                         creatable: true,
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                         hidden: false,
                    },
                    company: {
                         label: 'Drug Company',
                         field: 'company',
                         type: 'String',
                         fieldSize: 1,
                         fieldType: 'dropdown',
                         options: null,
                         optionsValue: 'id',
                         optionsLabel: 'name',
                         editable: true,
                         creatable: true,
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                         hidden: false,
                    },
                    units: {
                         label: 'Dose Units',
                         field: 'units',
                         type: 'String',
                         fieldSize: 1,
                         fieldType: 'dropdown',
                         options: null,
                         optionsValue: 'id',
                         optionsLabel: 'name',
                         editable: true,
                         creatable: true,
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                         hidden: false,
                    },
                    dose: {
                         label: 'Dose',
                         field: 'dose',
                         type: 'String',
                         fieldSize: 1,
                         fieldType: 'text',
                         editable: true,
                         creatable: true,
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                         hidden: false,
                    },
                    code: {
                         label: 'Code',
                         field: 'code',
                         type: 'String',
                         fieldSize: 1,
                         fieldType: 'text',
                         editable: true,
                         creatable: true,
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                         hidden: false,
                    },
                    
                                   
                }
            }
        }
                
    },
    created () {
        this.getMedicinesOptions()
        this.getTypesOptions () 
        this.getMedicineCompanyOptions()
        this.getUnitsMeasurementOptions()
    },
    methods: {
        async getMedicinesOptions () { 
            try {
                const response = await axios.get('/api/v1/medicines')
                this.schema.fields.medicine.options = response.data
            }catch (e) {
                console.log(e)
            }
        },
        async getTypesOptions () { 
            try {
                const response = await axios.get('/api/v1/medicine/types')
                this.schema.fields.type.options = response.data
            }catch (e) {
                console.log(e)
            }
        },
        async getMedicineCompanyOptions () { 
            try {
                const response = await axios.get('/api/v1/medicine/companies')
                this.schema.fields.company.options = response.data
            }catch (e) {
                console.log(e)
            }
        },
        async getUnitsMeasurementOptions () { 
            try {
                const response = await axios.get('/api/v1/units/measurements')
                this.schema.fields.units.options = response.data
            }catch (e) {
                console.log(e)
            }
        }
    }
  
}
</script>