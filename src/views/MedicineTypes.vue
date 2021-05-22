<template>
    <Suspense>
        <template #default>
            <router-view
                v-slot="{ Component, route }"
                :schema="schema"
            >
                <component
                    :is="Component"
                    :key="route.meta.usePathKey ? route.path : undefined"
                />
            </router-view>
        </template>
        <template #fallback> Loading... </template>
    </Suspense>
</template>
<script>
import { required } from '@vuelidate/validators'
export default {
    name:'MedicineTypes',
    data() {
        return {
            schema: {
                rows: [
                    ['code', 'name']

                ],
                fields:{
                     id: {
                         label: "ID",
                         field: "id",
                         type: "input",
						 inputType: "text",
                         width: "3%",
                         sortable: true,
                         isKey: true,
                         rules: {},
                         readonly: true,
                         featured: false,
                         disabled: true,
                         class: '',
                         style: 'color:red',
                         hidden: false,
                         showBtn:{
                                    show:false,
                                    edit:true,
                                    Delete: true
                                }
                        },
                     code: {
                         label: 'Code',
                         field: 'code',
                         type: 'String',
                         fieldSize: 1,
                         fieldType: 'text',
                         editable: true,
                         creatable: true,
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                         hidden: false,
                    },
                    name: {
                         label: 'Name',
                         field: 'name',
                         type: 'String',
                         fieldSize: 1,
                         fieldType: 'text',
                         editable: true,
                         creatable: true,
                         rules: { required },
                         sortable: true,
                         class: '',
                         style: '',
                         hidden: false,
                    },                    
                }
            }
        }
                
    },
  
}
</script>