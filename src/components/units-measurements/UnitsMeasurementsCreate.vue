<template>
       <div>
        <div class="p-pb-4">
            <Button label="Back To List" @click="$router.push({ path: '/units-measurements' })" icon="pi pi-angle-left" iconPos="letf" />
        </div>
        <div class="content-section implementation p-fluid">
            <div class="card">
                <h5 class="p-text-center">Units Measurements add</h5>
                <Form
                    :fields="schema.fields"
                    :data="{}"
                     
                    url="/api/v1/units/measurements"
                    :rows="schema.rows"
                ></Form>
            </div>
        </div>
    </div>
</template>
<script>
import Form from '../generator/form/Form.vue'
export default {
     name: 'UnitsMeasurementsCreate',
     components:{ Form },
     props:['schema'],
     
}
</script>