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
// import { required, email } from '@vuelidate/validators'
export default {
    name:'Patients',
    data() {
        return {
            schema: {
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
                                    show:true,
                                    edit:true,
                                    Delete: true
                                }
                        },
                },
                rows: [ ],
            }
        }
                
    },
  
}
</script>