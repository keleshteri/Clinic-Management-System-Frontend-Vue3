<template>
    <DataTable
        ref="dt"
        :value="data"
        v-model:selection="selectedRows"
        dataKey="id"
        :paginator="true"
        :rows="10"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} data"
        responsiveLayout="scroll"
    >
        <template #header>
            <div
                class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between"
            >
                <h5 class="p-m-0">{{ title }}</h5>
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
            :header="col.label"
            :sortable="col.sortable"
            :key="col.field"
        >   
            <template #body="slotProps" v-if="col.type === 'Image'">
                <span class="p-column-title">{{ col.label }}</span>
                <img
                    :src="slotProps.data[col.field]"
                    :alt="slotProps.data[col.field]"
                    class="avatar"
                />
            </template>
            <template #body="slotProps" v-else-if="col.type === 'Link'">
                <span class="p-column-title">{{ col.type }}</span>
                <template></template>
                <Button
                :label="col.label"
                :class="col.class"
                @click="$router.push(`${col.link}${slotProps.data[col.field]}`)"
                />
            </template>
            <template #body="slotProps" v-else>
                <span class="p-column-title">{{ col.label }}</span>
                <template></template>
                {{ slotProps.data[col.field] }}
            </template>
        </Column>
        <Column>
            <template #body="slotProps">
                <Button
                    v-show="fields.id.showBtn.show"
                    icon="pi pi-eye"
                    class="p-button-rounded p-button-success p-mr-2"
                    @click="showTable(slotProps.data)"
                />
                <Button
                    v-show="fields.id.showBtn.edit"
                    icon="pi pi-pencil"
                    class="p-button-rounded p-button-warning p-mr-2"
                    @click="editTable(slotProps.data)"
                />
                <Button
                    v-show="fields.id.showBtn.Delete"
                    icon="pi pi-trash"
                    class="p-button-rounded p-button-danger"
                    @click="deleteTable(slotProps.data)"
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
    name: 'Table',
    // emits: ['update:dataelectedRows'],
    components: { DataTable, Column, Button },
    props: {
        data: Array,
        fields: Object,
        title: String
    },
    data() {
        return {
            selectedRows: null,
            filters: {},
        }
    },
    methods: {
        showTable(data) {
            console.log('showdata')
            this.$emit('show:data', data)
        },
        editTable(data) {
            console.log('editdata')
            this.$emit('update:data', data)
        },
        deleteTable(data) {
            console.log('deletedata')
            this.$emit('delete:data', data)
        },
    },
    watch: {
        selectedRows(newSelectedRows) {
            if (newSelectedRows) {
                console.log('i am here')
                console.log('SelectedRowsData' + { ...newSelectedRows })
                this.$emit('update:dataSelectedRows', newSelectedRows)
            }
        },
    },
}
</script>

<style>
.avatar {
    height: 60px;
    width: 60px;
}
</style>