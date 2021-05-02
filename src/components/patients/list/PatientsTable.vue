<template>
    <DataTable
        ref="dt"
        :value="patients"
        v-model:selection="selectedRows"
        dataKey="id"
        :paginator="true"
        :rows="10"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} patients"
        responsiveLayout="scroll"
    >
        <template #header>
            <div
                class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between"
            >
                <h5 class="p-m-0">Manage Patients</h5>
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText
                        v-model="filters['global']"
                        placeholder="Search..."
                    />
                </span>
            </div>
        </template>

        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
        <Column
            v-for="col of fields"
            :field="col.field"
            :header="col.header"
            :sortable="col.sortable"
            :key="col.field"
        >
            <template #body="slotProps" v-if="col.type != 'Image'">
                <span class="p-column-title">{{ col.header }}</span>
                <template></template>
                {{ slotProps.data[col.field] }}
            </template>
            <template #body="slotProps" v-else>
                <span class="p-column-title">{{ col.header }}</span>
                <img
                    :src="
                        'assets/layout/images/patient/' +
                        slotProps.data[col.field]
                    "
                    :alt="slotProps.data[col.field]"
                    class="patient-image"
                />
            </template>
        </Column>
        <Column>
            <template #body="slotProps">
                <Button
                    icon="pi pi-pencil"
                    class="p-button-rounded p-button-success p-mr-2"
                    @click="editPatient(slotProps.data)"
                />
                <Button
                    icon="pi pi-trash"
                    class="p-button-rounded p-button-warning"
                    @click="deletePatient(slotProps.data)"
                />
            </template>
        </Column>
    </DataTable>
</template>

<script>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
// import ColumnGroup from 'primevue/columngroup' //optional for column grouping
import Button from 'primevue/button'

export default {
    name: 'PatientsTable',
    // emits: ['update:patientSelectedRows'],
    components: { DataTable, Column, Button },
    props: {
        patients: Array,
        fields: Object,
    },
    data() {
        return {
            selectedRows: null,
            filters: {},
        }
    },
    methods: {
        editPatient(patient) {
            console.log('editPatient')
            this.$emit('update:patient', patient)
        },
        deletePatient(patient) {
            console.log('deletePatient')
            this.$emit('delete:patient', patient)
        },
    },
    watch: {
        selectedRows(newSelectedRows) {
            if (newSelectedRows) {
                console.log('i am here')
                console.log('SelectedRowsPatient' + { ...newSelectedRows })
                this.$emit('update:patientSelectedRows', newSelectedRows)
            }
        },
    },
}
</script>

<style></style>
