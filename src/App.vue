<template>
    <app-layout>
        <Toast />
        <router-view />
    </app-layout>
</template>

<script>
import AppLayout from './layouts/AppLayout.vue'
import Toast from 'primevue/toast'
export default {
    name: 'App',
    components: { AppLayout, Toast },
}
</script>
