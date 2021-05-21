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
                                :fields="schema.fields"
                                :data="patient"
                                :url="'/api/v1/patient/'+patient.id"
                                :rows="schema.rows"                                
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
import usePatient from '../../composables/patient/getPatient'
import PatientForm from '../generator/form/Form.vue'
import { useRoute } from 'vue-router'
export default {
    name: 'PatientEdit',
    props:['schema'],
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