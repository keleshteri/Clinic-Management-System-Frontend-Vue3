<template>
    <div class="p-grid crud-demo">
        <div class="p-col-12">
            <div class="card">
                <div v-if="error">
                    {{ error }}
                </div>
                <AsyncPatientsTable
                    v-else
                    :fields ="schema.fields"
                    :rows="patients"
                    max-height="300px"
                >
                <template v-slot:table-actions>
                   <h1>table-actions</h1>
                     <button
                class="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-500 focus:outline-none"
              >
                New
              </button>
                </template>
                <template v-slot:table-actions-bottom>
                  <h1>table-actions-bottom</h1>
                </template>
            
                </AsyncPatientsTable>
            </div>
        </div>
    </div>
</template>
<script>
// import Table from '../../components/generator/table/Table.vue'
// import Table from '../../components/generator/good-table/Table.vue'
import { defineAsyncComponent } from 'vue'
import Loading from '../../components/Loading.vue'
import usePatients from '../../composables/patient/getPatients'

const AsyncPatientsTable = defineAsyncComponent({
    loader: () => import('../../components/generator/good-table/Table.vue'),
    loadingComponent: Loading,
    // errorComponent: ErrorComponent,
    timeout: 3000,
    delay: 200,
    suspensible: false,
})

export default {
    name:'PatientsList',
    props:['schema'],
    components:{AsyncPatientsTable},
    data(){return{     
        rows:[
               {
                 id:1,
                 name:"John",
                //  age:20
               },
                {
                 id:2,
                 name:"ffff",
                //  age:50
               },
 
            ],

    }},
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