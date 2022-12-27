<template>
  <HeaderViewVue />
  <RouterView />
</template>

<script>

//components

import { RouterView } from 'vue-router';
import HeaderViewVue from './components/HeaderView.vue';

export default {
    name: "App",
    components: { RouterView,HeaderViewVue }
};
</script>

<style></style>
