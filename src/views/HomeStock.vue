<template>
  <main>
    <v-app-bar color="blue-grey-darken-2">
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
  <NavigationDrawers />
</template>
<script>
import ProductList from '@/components/ProductList.vue';
import NavigationDrawers from '@/components/NavigationDrawers.vue';
export default {
  components: { ProductList, NavigationDrawers }
}
</script>
