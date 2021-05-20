<template>
    <h1>list of Patients</h1>
    <AutoTable></AutoTable>
</template>
<script>
import AutoTable from '../components/table-generator/AutoTable.vue'
export default {
    name:'PatientsList',
    components:{AutoTable}
    
}
</script>