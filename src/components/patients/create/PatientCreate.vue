<template>
    <div>
        <div>
            <div class="card">
                <h5 class="p-text-center">Register</h5>
                {{ genders }}
                <PatientForm
                    :fields="fields"
                    :patient="{}"
                    :rows="rows"
                ></PatientForm>
            </div>
        </div>
    </div>
</template>

<script>
import PatientForm from '../PatientForm.vue'
export default {
    name: 'PatientCreate',
    components: { PatientForm },
    props: {
        // patient: { type: Object, required: true },
        fields: { type: Object, required: true },
        rows: { type: Array, required: true },
    },
}
</script>
