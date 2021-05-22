<template>
       <div>
        <div class="p-pb-4">
            <Button label="Back To List" @click="$router.push({ path: '/quantities' })" icon="pi pi-angle-left" iconPos="letf" />
        </div>
        <div class="content-section implementation p-fluid">
            <div class="card">
                <h5 class="p-text-center">Quantities add</h5>
                <Form
                    :fields="schema.fields"
                    :data="{}"
                     
                    url="/api/v1/quantities"
                    :rows="schema.rows"
                ></Form>
            </div>
        </div>
    </div>
</template>
<script>
import Form from '../generator/form/Form.vue'
export default {
     name: 'QuantitiesCreate',
     components:{ Form },
     props:['schema'],
     
}
</script>