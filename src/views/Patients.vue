<template>
    <Suspense>
        <template #default>
            <router-view
                v-slot="{ Component, route }"
                :rows="rows"
                :fields="fields"
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

import { required, email } from '@vuelidate/validators'
import { ref, onMounted } from 'vue'
export default {
    name:'Patients',
    components:{AutoTable},
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
                        },
                },
            }
        }
                
    },
    setup() {
        const genders = ref()

        onMounted(() => {
            fetch('/api/v1/gender/')
                .then((response) => response.json())
                .then((data) => {
                    genders.value = data
                })
        })

        return {
            genders,
        }
    },
}
</script>