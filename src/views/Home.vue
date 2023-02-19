<script setup>
import ProductList from '@/components/ProductList.vue';
</script>

<template>
  <main>
    <ProductList />
    
    <v-container>
      <v-row justify="space-between" class="text-center">
        <v-col>
          <RouterLink to="/create">
            <v-btn
            color="indigo"
            >Create
            </v-btn>
          </RouterLink>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
<style>

</style>
