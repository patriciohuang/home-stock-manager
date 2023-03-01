<template>
  <main>
    <v-app-bar color="blue-grey-darken-2">
      <GoBack />
      <v-app-bar-title>Home Stock</v-app-bar-title>
    </v-app-bar>

    <v-container>
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
  </main>
</template>
<script>
import ProductList from '@/components/ProductList.vue';
import GoBack from '@/components/Goback.vue';
export default {
  components: { ProductList, GoBack }
}
</script>
