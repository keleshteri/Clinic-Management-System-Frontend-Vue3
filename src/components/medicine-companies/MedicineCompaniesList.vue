<template>
    <div class="p-mb-3 p-text-center">
        <Button class="p-button-lg" :label="` Create New ${label} `" @click="createNew" icon="pi pi-plus" />
    </div>
    <div v-if="error">
        {{ error }}
    </div>
    <AsyncTable
        v-else
        :fields ="schema.fields"
        :title="label"
        :data="bigData"
        @show:data="showData"
        @update:dataSelectedRows="updateSelectedData"
        @update:data="editTable"
        @delete:data="deleteTable"
            
    />
</template>
<script>
import { defineAsyncComponent } from 'vue'
import Loading from '../../components/Loading.vue'
import axios from 'axios'

const AsyncTable = defineAsyncComponent({
    loader: () => import('../../components/generator/table/Table.vue'),
    loadingComponent: Loading,
    // errorComponent: ErrorComponent,
    timeout: 3000,
    delay: 200,
    suspensible: false,
})

export default {
    name: 'MedicineCompaniesList',
    props:['schema'],
    components: { AsyncTable },
    error: null,
    data() {
        return {
            error: null,
            bigData: null,
            label: 'Medicine',
            createNewPath: '/medicine-companies/new',
            editName: 'MedicineCompaniesUpdate',
            deleteData: '/api/v1/medicine-companies/'          
        }
    },
    created() {
        this.getList();
    },
    methods: {
        async getList() {
            try {
                const response = await axios.get(`/api/v1/medicine/companies`)
                this.bigData = response.data                
            } catch (e) {
                console.log(e)
            }
            
        },
        createNew() {
            this.$router.push({ path: this.createNewPath })  
        },
        updateSelectedData(rows) {
            console.log('rows: ', { ...rows })
        },
        showData (data) {
            this.$emit('show:data', data);
        },
        editTable(data) {
            this.$router.push({
                name: this.editName,
                params: { id: data.id },
            })
        },
        async deleteTable(data) {
            let dataDelete = {...data}
            const response = await axios.delete(this.deleteData + dataDelete.id)
            for( let i = 0; i < this.bigData.length; i++){ 
    
                if ( this.bigData[i].id === dataDelete.id) { 
            
                    this.bigData.splice(i, 1); 
                }
            
            }
            alert(response.data.message)
        },
    }
}
</script>