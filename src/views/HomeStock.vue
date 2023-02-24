<script setup>
import ProductList from '@/components/ProductList.vue';
</script>

<template>
  <main>
    <v-layout>
      <v-app-bar color="blue-grey-darken-2">
        <RouterLink to="/">
          <v-btn
            icon
            class="hidden-xs-only"
          >
            <v-icon color="white">mdi-arrow-left</v-icon>
          </v-btn>
        </RouterLink>
        <v-app-bar-title>Home Stock</v-app-bar-title>
      </v-app-bar>
      <v-container class="pt-12">
        <ProductList />
        <v-row>
          
          <RouterLink to="/home-stock/create" id="create-button">
            <v-btn
            icon="mdi-plus"
            color="indigo"
            >
            </v-btn>
          </RouterLink>
        </v-row>
      </v-container>
    </v-layout>
  </main>
</template>
