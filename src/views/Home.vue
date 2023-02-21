<script setup>
import ProductList from '@/components/ProductList.vue';
</script>

<template>
  <main>
    <h1 class="py-6">Home Stock</h1>
    <ProductList />
    <RouterLink to="/create" id="create-button">
      <v-btn
      icon="mdi-plus"
      color="indigo"
      >
      </v-btn>
    </RouterLink>
  </main>
</template>
<style>

</style>
