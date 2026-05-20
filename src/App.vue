<script setup>

import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';

</script>

<template>
  <HeaderComp />
  <router-view></router-view>
  <FooterComp />
</template>

<style scoped>

</style>
