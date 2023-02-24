<template>
  <v-layout>
    <v-app-bar color="blue-grey-darken-2">
      <RouterLink to="/home-stock">
        <v-btn
          icon
          class="hidden-xs-only"
        >
          <v-icon color="white">mdi-arrow-left</v-icon>
        </v-btn>
      </RouterLink>
      <v-app-bar-title>Create New Product</v-app-bar-title>
    </v-app-bar>
    <v-container class="pt-12">
      <AddProduct @addProduct="addProduct"/>
    </v-container>
  </v-layout>
</template>
<script>
  import AddProduct from '../components/AddProduct.vue'
  import addSuggestion from '@/utils/suggestion'
  export default {
    components: { AddProduct },
    methods: {
      addProduct({name, date}) {
        const list = JSON.parse(localStorage.getItem('productList') || '[]');
        list.push({
          id: Date.now(),
          name,
          date,
        });
        localStorage.setItem('productList', JSON.stringify(list));
        addSuggestion(name);
        this.$router.push('/home-stock')
      }
    }
  }
</script>

