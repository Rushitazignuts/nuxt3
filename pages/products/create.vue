<template>
    <div class="fixed-200">
      <h2>Products page</h2>
      <div v-if="newError">oops !! {{  error }}</div>
      <div v-if="newPending"> loading...</div>
      <div v-if="newProduct">
       
          <div class="container" >
          <div class="left-column">
              <h3>{{ newProduct.id }}</h3>
              <img :src="newProduct.image" class="img-70">
          </div>
          <div class="right-column">
              
              <p>{{ newProduct.price }}</p>
          </div>
          <button @click=addProduct>addproduct</button>
      </div>
  </div>
    </div>
  </template>

<script setup>
const formData= {
    title:"test product",
    price:45.6,
    image:""
};
const newProduct    = ref([])
const newError = ref("")
const newPending = ref("")
const addProduct = async ()=>{
    const {data,pending,error,refresh} = await useFetch("https://fakestoreapi.com/products/",
    {
        methods :"POST",
        body :formData,
        headers:{
            "content-type":"application/json",
        },
    });
    newProduct.value = data.value
    newError.value = error.value
    newPending.value = pending.value
}
</script>

<style>

</style>