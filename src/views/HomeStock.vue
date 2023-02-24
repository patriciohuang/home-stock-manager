<script setup>
import ProductList from '@/components/ProductList.vue';
</script>

<template>
  <main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <RouterLink to="/" class="go-back">
            <v-btn
              icon="mdi-arrow-left"
              color="indigo"
              variant="outlined"
            >
            </v-btn>
          </RouterLink>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="py-6">
          <h1>Home Stock</h1>
        </v-col>
      </v-row>
    </v-container>
    <ProductList />
    <RouterLink to="/home-stock/create" id="create-button">
      <v-btn
      icon="mdi-plus"
      color="indigo"
      >
      </v-btn>
    </RouterLink>
  </main>
</template>
