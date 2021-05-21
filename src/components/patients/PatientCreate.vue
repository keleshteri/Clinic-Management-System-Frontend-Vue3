<template>
       <div>
        <div>
            <div class="card">
                <h5 class="p-text-center">Patient</h5>
                <PatientForm
                    :fields="schema.fields"
                    :data="{}"
                     
                    url="/api/v1/patient/"
                    :rows="schema.rows"
                ></PatientForm>
            </div>
        </div>
    </div>
</template>
<script>
import PatientForm from '../generator/form/Form.vue'
export default {
     name: 'PatientCreate',
     components:{ PatientForm },
     props:['schema'],
     
}
</script>