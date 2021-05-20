<template>
    <Suspense>
        <template #default>
            <router-view
                v-slot="{ Component, route }"
                :rows="rows"
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

import { required, email } from '@vuelidate/validators'
import { ref, onMounted } from 'vue'
export default {
    name:'Patients',
    data() {
        return {
            schema: {
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
                        },
                    fileNumber: {
                         label: 'fileNumber',
                         field: 'fileNumber',
                         fieldSize: 1,
                         fieldType: 'text',
                         editable: true,
                         creatable: true,
                         type: 'String',
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                     },
                    nationalId: {
                         label: 'national Id',
                         field: 'nationalId',
                         fieldSize: 1,
                         fieldType: 'text',
                         editable: true,
                         creatable: true,
                         type: 'String',
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                     },
                     gender: {
                         label: 'Gender',
                         field: 'gender',
                         fieldSize: 1,
                         fieldType: 'dropdown',
                         editable: true,
                         creatable: true,
                         options: [
                             { label: 'male', code: 1, name: 'MALE' },
                             { label: 'female', code: 2, name: 'FEMALE' },
                         ],
                         type: 'String',
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                     },
                     birthDate: {
                         label: 'birthDate',
                         field: 'birthDate',
                         fieldSize: 1,
                         fieldType: 'calendar',
                         editable: true,
                         creatable: true,
                         type: 'Date',
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                     },
                     firstName: {
                         label: 'First Name',
                         field: 'firstName',
                         ieldSize: 2,
                         fieldType: 'text',
                         editable: true,
                         creatable: true,
                         type: 'String',
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                     },
                     middleName: {
                         label: 'Middle Name',
                         field: 'middleName',
                         fieldSize: 2,
                         fieldType: 'text',
                         editable: true,
                         creatable: true,
                         type: 'String',
                         rules: {},
                         sortable: true,
                         class: '',
                         style: '',
                     },
                     lastName: {
                         label: 'Last Name',
                         field: 'lastName',
                         fieldSize: 2,
                         fieldType: 'text',
                         editable: true,
                         creatable: true,
                         type: 'String',
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                     },
                     email: {
                         label: 'Email',
                         field: 'email',
                         type: 'String',
                         fieldSize: 1,
                         fieldType: 'text',
                         editable: true,
                         creatable: true,
                         rules: { required, email },
                         sortable: true,
                         class: '',
                         style: '',
                     },
                     cellphoneNumber: {
                         label: 'cellphoneNumber',
                         field: 'cellphoneNumber',
                         fieldSize: 1,
                         fieldType: 'text',
                         editable: true,
                         creatable: true,
                         type: 'String',
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                     },
                     landlineNumberHome: {
                         label: 'landlineNumberHome',
                         field: 'landlineNumberHome',
                         fieldSize: 1,
                         fieldType: 'text',
                         editable: true,
                         creatable: true,
                         type: 'String',
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                     },
                     landlineNumberOffice: {
                         label: 'landlineNumberOffice',
                         field: 'landlineNumberOffice',
                         fieldSize: 1,
                         fieldType: 'text',
                         editable: true,
                         creatable: true,
                         type: 'String',
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                     },
                     homeAddress: {
                         label: 'homeAddress',
                         field: 'homeAddress',
                         fieldSize: 4,
                         fieldType: 'textarea',
                         editable: true,
                         creatable: true,
                         type: 'String',
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                     },
                     createdAt: {
                         label: 'createdAt',
                         field: 'createdAt',
                         type: 'DateTime',
                         rules: {},
                         sortable: true,
                         class: '',
                         style: '',
                     },
                     updatedAt: {
                         label: 'updatedAt',
                         field: 'updatedAt',
                         fieldSize: 1,
                         fieldType: 'text',
                         editable: false,
                         creatable: false,
                         rules: {},
                         sortable: true,
                         type: 'DateTime',
                         class: '',
                         style: '',
                     },
                },
                columns:['id','name'],
            }
        }
                
    },
    setup() {
        const genders = ref()

        onMounted(() => {
            fetch('/api/v1/gender/')
                .then((response) => response.json())
                .then((data) => {
                    genders.value = data
                })
        })

        return {
            genders,
        }
    },
}
</script>