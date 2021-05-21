<template>
  <component :is="layout">
    <router-view />
  </component>  
</template>

<script>
import {  ref, computed } from "vue";
import { useRouter } from "vue-router";
const defaultLayout = "default";
export default {
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

