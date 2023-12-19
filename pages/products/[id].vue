<template>
    <div>
      <h2 class="ms-3">Product page</h2>
      <div v-if="product" >
          <div class="container" >
          <div class="left-column">
            <h3>{{ product.id }}</h3>
            <img :src="product.image" class="img-70">
            <p>{{ product.title }}</p>
            <p>{{ product.price }}</p>
          </div>
          <!-- <div class="right-column">
            <p>{{ product.title }}</p>
            <p>{{ product.price }}</p>
          </div> -->
      </div>
  </div>
    </div>
  </template>
  <script setup>
  const route = useRoute();
  const {data:product,pending,error,refresh} = await useFetch(`https://fakestoreapi.com/products/${route.params.id}`)
</script>
