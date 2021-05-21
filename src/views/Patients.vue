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
                         hidden: false,
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
                         hidden: false,
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
                         hidden: false,
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
                         optionsValue:'name',
                         optionsLabel:'name',
                         type: 'String',
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                         hidden: false,
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
                         hidden: false,
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
                         hidden: false,
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
                         hidden: false,
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
                         hidden: false,
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
                         hidden: false,
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
                         hidden: false,
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
                         hidden: false,
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
                         hidden: false,
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
                         hidden: false,
                     },
                     createdAt: {
                         label: 'createdAt',
                         field: 'createdAt',
                         type: 'DateTime',
                         rules: {},
                         sortable: true,
                         class: '',
                         style: '',
                         hidden: true,
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
                         hidden: true,
                     },
                },
                rows: [
                        ['fileNumber', 'nationalId', 'gender', 'birthDate'],
                        ['firstName', 'middleName', 'lastName'],
                        [
                            'cellphoneNumber',
                            'landlineNumberHome',
                            'landlineNumberOffice',
                            'email',
                        ],
                        ['homeAddress'],
                      ],
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