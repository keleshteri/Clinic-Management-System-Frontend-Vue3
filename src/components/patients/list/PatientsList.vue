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
                    @idCard:patient="idCardPatient"
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
    props: {
        // patient: { type: Object, required: true },
        fields: { type: Object, required: true },
        rows: { type: Array, required: true },
    },
    data() {
        return {}
    },
    methods: {
        updateSelectedPatients(rows) {
            console.log('rows: ', { ...rows })
        },
        editPatient(patient) {
            console.log('button edit click: ', { ...patient })
            this.$router.push({
                name: 'PatientUpdate',
                params: { id: patient.id },
            })
        },
        deletePatient(patient) {
            console.log('button delete click: ', { ...patient })
        },
        idCardPatient(patient) {
            console.log('button idCardPatient click: ', { ...patient })
            this.$router.push({
                name: 'PatientUploads',
                params: { id: patient.id },
            })
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
