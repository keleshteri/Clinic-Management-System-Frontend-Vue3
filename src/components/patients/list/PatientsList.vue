<template>
    <div class="p-grid crud-demo">
        <div class="p-col-12">
            <div class="card">
                <div v-if="error">
                    {{ error }}
                </div>
                <AsyncPatientsTable
                    v-else
                    :patients="patients"
                    :fields="fields"
                    @update:patientSelectedRows="updateSelectedPatients"
                    @update:patient="editPatient"
                    @delete:patient="deletePatient"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import Loading from '../../Loading.vue'
import usePatients from '../../../composables/patient/getPatients'

const AsyncPatientsTable = defineAsyncComponent({
    loader: () => import('./PatientsTable.vue'),
    loadingComponent: Loading,
    // errorComponent: ErrorComponent,
    timeout: 3000,
    delay: 200,
    suspensible: false,
})

export default {
    name: 'Patients',
    components: { AsyncPatientsTable },
    data() {
        return {
            fields: {
                id: {
                    header: 'ID',
                    field: 'id',
                    type: 'Number',
                    sortable: true,
                    class: '',
                    style: 'color:red',
                },
                fileNumber: {
                    header: 'fileNumber',
                    field: 'fileNumber',
                    type: 'String',
                    sortable: true,
                    class: '',
                    style: '',
                },
                firstName: {
                    header: 'First Name',
                    field: 'firstName',
                    type: 'String',
                    sortable: true,
                    class: '',
                    style: '',
                },
                lastName: {
                    header: 'Last Name',
                    field: 'lastName',
                    type: 'String',
                    sortable: true,
                    class: '',
                    style: '',
                },
                middleName: {
                    header: 'Middle Name',
                    field: 'middleName',
                    type: 'String',
                    sortable: true,
                    class: '',
                    style: '',
                },
                nationalId: {
                    header: 'national Id',
                    field: 'nationalId',
                    type: 'String',
                    sortable: true,
                    class: '',
                    style: '',
                },
                birthDate: {
                    header: 'birthDate',
                    field: 'birthDate',
                    type: 'Date',
                    sortable: true,
                    class: '',
                    style: '',
                },
                homeAddress: {
                    header: 'homeAddress',
                    field: 'homeAddress',
                    type: 'String',
                    sortable: true,
                    class: '',
                    style: '',
                },
                phoneNumber: {
                    header: 'phoneNumber',
                    field: 'phoneNumber',
                    type: 'String',
                    sortable: true,
                    class: '',
                    style: '',
                },
                createdAt: {
                    header: 'createdAt',
                    field: 'createdAt',
                    type: 'DateTime',
                    sortable: true,
                    class: '',
                    style: '',
                },
                updatedAt: {
                    header: 'updatedAt',
                    field: 'updatedAt',
                    sortable: true,
                    type: 'DateTime',
                    class: '',
                    style: '',
                },
                personalImage: {
                    header: 'Personal Image',
                    field: 'personalImage',
                    type: 'Image',
                    sortable: true,
                    class: '',
                    style: '',
                },
            },
        }
    },
    methods: {
        updateSelectedPatients(rows) {
            console.log('rows: ', { ...rows })
        },
        editPatient(patient) {
            console.log('button edit click: ', { ...patient })
        },
        deletePatient(patient) {
            console.log('button delete click: ', { ...patient })
        },
    },

    async setup() {
        const { patients, error, load } = usePatients()

        await load()
        return { patients, error }
        // const patients = ref(null)
        // const error = ref(null)

        // try {
        //     const patientsResponse = await fetch('/api/v1/patient')
        //     patients.value = await patientsResponse.json()
        // } catch (e) {
        //     error.value = e
        // }

        // return { patients, error }
    },
}
</script>
