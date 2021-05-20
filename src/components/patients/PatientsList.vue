<template>
    <h1>list of Patients</h1>
    <Table
    :columnList="schema.columns"
    :fields ="schema.fields"
    :rows="rows"
  max-height="300px"
    ></Table>
    {{ schema.fields }}
</template>
<script>
// import Table from '../../components/generator/table/Table.vue'
import Table from '../../components/generator/good-table/Table.vue'
export default {
    name:'PatientsList',
    props:['schema'],
    components:{Table},
    data(){return{
      // columns:{
      //     name:{
      //       label: 'Name',
      //       field: 'name',
      //     }
      //   },
       
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

    }}
    
}
</script>