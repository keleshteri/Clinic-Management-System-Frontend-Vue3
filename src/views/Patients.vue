<template>
    <h1>Patients</h1>

    <Suspense>
        <template #default>
            <router-view
                v-slot="{ Component, route }"
                :rows="rows"
                :fields="fields"
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
    name: 'Patients',
    data() {
        return {
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
            fields: {
                id: {
                    header: 'ID',
                    field: 'id',
                    fieldSize: 1,
                    fieldType: 'text',
                    editable: false,
                    creatable: false,
                    type: 'Number',
                    rules: {},
                    sortable: true,
                    class: '',
                    style: 'color:red',
                },
                fileNumber: {
                    header: 'fileNumber',
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
                    header: 'national Id',
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
                    header: 'Gender',
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
                    header: 'birthDate',
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
                    header: 'First Name',
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
                    header: 'Middle Name',
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
                    header: 'Last Name',
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
                    header: 'Email',
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
                    header: 'cellphoneNumber',
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
                    header: 'landlineNumberHome',
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
                    header: 'landlineNumberOffice',
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
                    header: 'homeAddress',
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
                    header: 'createdAt',
                    field: 'createdAt',
                    type: 'DateTime',
                    rules: {},
                    sortable: true,
                    class: '',
                    style: '',
                },
                updatedAt: {
                    header: 'updatedAt',
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
