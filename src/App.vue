<template>
  <component :is="layout">
    <router-view />
  </component>  
</template>

<script>
import {  ref, computed } from "vue";
import { useRouter } from "vue-router";
import DashboardLayout from './layouts/AdminLayout.vue';
import EmptyLayout from './layouts/EmptyLayout.vue';
const defaultLayout = "default";
export default {
  name:'App',
  components:{'default-layout':DashboardLayout,'empty-layout':EmptyLayout},
  setup() {
    const { currentRoute } = useRouter();
    const layout = computed(
      () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
    );
    console.log('layout',layout);
    return {
      layout,
    };
  },
}
</script>

