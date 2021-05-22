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
import axios from 'axios'
export default {
    name:'UnitsMeasurements',
    data() {
        return {
            schema: {
                rows: [
                    ['quantity_id', 'name'], ['description']

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
                    quantity_id: {
                         label: 'quantity',
                         field: 'quantity_id',
                         type: 'String',
                         fieldSize: 1,
                         fieldType: 'dropdown',
                         options: null,
                         optionsValue: 'id',
                         optionsLabel: 'name',
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
                    description: {
                         label: 'Description',
                         field: 'description',
                         type: 'String',
                         fieldSize: 1,
                         fieldType: 'textarea',
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
    created () {
        this.getOptions()
    },
    methods: {
        async getOptions () { 
            try {
                const response = await axios.get('/api/v1/quantities')
                this.schema.fields.quantity_id.options = response.data
            }catch (e) {
                console.log(e)
            }
        }
    }
  
}
</script>