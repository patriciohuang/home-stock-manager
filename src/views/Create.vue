<template>
  <v-container>
    <v-app-bar color="surface">
      <GoBack />
      <v-app-bar-title>Create Product</v-app-bar-title>
    </v-app-bar>
    <AddProduct @addProduct="addProduct"/>
  </v-container>
</template>
<script>
  import AddProduct from '@/components/AddProduct.vue'
  import GoBack from '@/components/GoBack.vue'
  import addSuggestion from '@/utils/suggestion'
  import { saveList } from  '@/utils/firestore'
  export default {
    components: { AddProduct, GoBack },
    methods: {
      async addProduct({name, date}) {
        const list = JSON.parse(localStorage.getItem('productList') || '[]');
        list.push({
          id: Date.now(),
          name,
          date,
        });
        await saveList('productList', list)
        localStorage.setItem('productList', JSON.stringify(list));
        await addSuggestion(name);
        this.$router.go(-1)
      }
    }
  }
</script>

