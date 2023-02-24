<template>
  <v-container>
      <v-row>
        <v-col cols="12">
          <a @click="$router.go(-1)" class="go-back">
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
  <AddProduct @addProduct="addProduct"/>
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

