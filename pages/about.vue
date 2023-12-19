

<script setup>
const u = username();
definePageMeta({
    layout:false,
});
</script>
<template>
  <div>
    <NavBar />
    <hr />
    {{ u }}
   <NuxtLayout name="custom">
    <h1 class="text">hello nuxt 3</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis ipsa ducimus natus rem rerum accusamus perspiciatis labore similique nulla.</p>
</NuxtLayout>
  </div>
</template>

