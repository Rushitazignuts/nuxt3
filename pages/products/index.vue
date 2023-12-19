<template>
  <div>
    <div class="d-flex justify-content-start">
    <h3 class="ms-3">Products page</h3>
    <BButton  size="sm" class="m-auto"> Toggle modal </BButton>
</div>
    <div v-if="dynamicFields">
        <div class="container" v-for="product in dynamicFields" :key="product.id">
        <div class="left-column d-flex justify-content-between">
            <h3>{{ product.id }}</h3>
            <p>{{ product.title }}</p>
            <div @click="router.push(`/products/${product.id}`)">view</div>    
            <div @click="deleteProduct(product.id)">Delete</div>        
        </div>
      
    </div>
</div>
  </div>
</template>

<script setup>
const router = useRouter();

    // const {data:products,pending,error,refresh} = await useFetch("https://fakestoreapi.com/products")
    // console.log("data" , products);
import { useProductStore } from '../../store/pinia'
import { storeToRefs } from 'pinia';
const productStore = useProductStore()
const {
  dynamicFields
} = storeToRefs(productStore)
const {  deleteProduct } = productStore


</script>

<style>

</style>