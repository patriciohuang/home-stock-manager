<template>
  <div v-if="productList.length === 0" class="d-flex justify-center ma-6">
    <p>Currently you haven't any product</p>
  </div>
  <v-row v-for="item in sorted" :key="item.id">
    <v-col>
      <Product  
        :dialogs="dialogs" 
        :item="item"/>
    </v-col>
  </v-row>
</template>
<script>
  import Product from '@/components/Product.vue';

  export default {
    name: "ProductList",
    components: {
      Product
    },
    data: ()=> ({
      productList: [],
      dialogs: {},
    }),
    mounted() {
      this.productList = JSON.parse(localStorage.getItem('productList') || '[]');
      this.dialogs = this.productList.reduce((dialogs, product) => {
        dialogs[product.id] = false;
        return dialogs;
      }, {});
    },
    computed: {
      sorted() {
        return this.productList.sort((a,b)=> {
          return new Date(a.date) - new Date(b.date);
        });
      },
    }
  }
</script>