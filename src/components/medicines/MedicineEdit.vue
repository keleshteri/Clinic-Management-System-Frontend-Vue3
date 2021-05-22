<template>
     <div class="p-grid crud-demo">
        <div class="p-col-12">
            <div class="p-pb-4">
                <Button label="Back To List" @click="$router.push({ path: '/medicines' })" icon="pi pi-angle-left" />
            </div>
            <div class="card">
                <div v-if="error">
                    {{ error }}
                </div>
                <div v-else>
                    <div v-if="bigData" >
                        <div class="card">
                            <h5 class="p-text-center">Update</h5>
                            <Form
                                :fields="schema.fields"
                                :data="bigData"
                                :url="'/api/v1/medicines/' + bigData.id"
                                :rows="schema.rows"                                
                                :edit="true"
                            ></Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios' 
// import usebigData from '../../composables/ApiCalls'
import Form from '../generator/form/Form.vue'
// import { useRoute } from 'vue-router'
export default {
    name: 'MedicineEdit',
    props:['schema'],
    components: { Form },
    data() {
        return {
            error: null,
            bigData: null
        }
    },
    created(){
        this.getData();
    },
    methods: {
        async getData() {
            try {
                const response = await axios.get('/api/v1/medicines/' + this.$route.params.id)
                this.bigData = response.data
            }catch (e) {
                this.error = e.message
            }
            
        }
    }
    // setup() {
    //     const route = useRoute()
    //     const options = {
    //         method: 'get',
    //         // data: state,//JSON.stringify(state),
    //         url: '/api/v1/medicine/' + route.params.id
    //     }
    //     const { bigData, error, load } = usebigData(options)

    //     await load()
    //     return { bigData, error }
    // },
}
</script>