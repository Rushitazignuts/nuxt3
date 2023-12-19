<template>
  <div>
    <!-- <nuxtLink to="/">Home</nuxtLink>
    <nuxtLink to="/products">Products</nuxtLink>
    <nuxtLink to="/products/create"> add Products</nuxtLink> -->

    <BNavbar>
  <BNavbarNav>
    <BNavItem :to="`/`">Home</BNavItem>
    <BNavItem :to="`/products`">Products</BNavItem>
    <BNavItem :to="`/admin`">Category</BNavItem>
  </BNavbarNav>
</BNavbar>    
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>