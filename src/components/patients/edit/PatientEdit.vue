<template>
    <div class="p-grid crud-demo">
        <div class="p-col-12">
            <div class="card">
                <div v-if="error">
                    {{ error }}
                </div>
                <div v-else>
                    <div>
                        <div class="card">
                            <h5 class="p-text-center">Update</h5>
                            <PatientForm
                                :patient="patient"
                                :fields="fields"
                                :rows="rows"
                                :edit="true"
                            ></PatientForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import usePatient from '../../../composables/patient/getPatient'
import PatientForm from '../PatientForm.vue'
import { useRoute } from 'vue-router'
export default {
    name: 'PatientEdit',
    props: ['fields', 'rows'],
    components: { PatientForm },
    data() {
        return {}
    },
    async setup() {
        const route = useRoute()
        const patient_id = route.params.id
        const { patient, error, load } = usePatient(patient_id)

        await load()
        return { patient, error }
    },
}
</script>
