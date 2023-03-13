<template>
  <v-container>
    <v-app-bar color="surface">
      <v-app-bar-title color="text">Home Stock</v-app-bar-title>
    </v-app-bar>
    <section>
      <ProductList />
        <v-row>
          <RouterLink to="/home-stock/create" id="create-button">
            <v-btn
            icon="mdi-plus"
            color="primary"
            >
            </v-btn>
          </RouterLink>
        </v-row>
    </section>
    <NavigationDrawers />
  </v-container>
</template>
<script>
import ProductList from '@/components/ProductList.vue';
import NavigationDrawers from '@/components/NavigationDrawers.vue';
export default {
  components: { ProductList, NavigationDrawers }
}
</script>
