<template>
    <Suspense>
        <template #default>
            <Patients></Patients>
        </template>
        <template #callback> loading..... </template>
    </Suspense>
</template>

<script>
import Patients from '../../components/patients/list/PatientsList.vue'
export default {
    name: 'PatientList',
    components: { Patients },
}
</script>
