<template>
  <div>
    <VTabs v-model="currentTab">
      <VTab :to="`/`">Home</VTab>
      <VTab :to="`/products`">Products</VTab>
      <VTab :to="`/admin`">Category</VTab>
    </VTabs>
  </div>
</template>

<script setup>
const currentTab = ref(0);
</script>

<style>
</style>