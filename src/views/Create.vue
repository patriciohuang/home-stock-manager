<script setup>
  import AddProduct from '../components/AddProduct.vue'
</script>
<template>
  <v-container>
      <v-row>
        <v-col cols="12">
          <a @click="$router.go(-1)" id="go-back">
            <v-btn
              icon="mdi-arrow-left"
              color="indigo"
              variant="outlined"
            >
            </v-btn>
          </a>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="py-6">
          <h2>Create new product</h2>
        </v-col>
      </v-row>
  </v-container>
  <AddProduct />
</template>

<style>

</style>
