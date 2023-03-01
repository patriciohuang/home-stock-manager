<template>
  <v-app-bar color="blue-grey-darken-2">
    <GoBack />
    <v-app-bar-title>Create Product</v-app-bar-title>
  </v-app-bar>
  <v-container>
    <AddProduct @addProduct="addProduct"/>
  </v-container>
</template>
<script>
  import AddProduct from '@/components/AddProduct.vue'
  import GoBack from '@/components/GoBack.vue'
  import addSuggestion from '@/utils/suggestion'
  export default {
    components: { AddProduct, GoBack },
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
        this.$router.go(-1)
      }
    }
  }
</script>

