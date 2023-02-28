<template>
  <div v-if="productList.length === 0" class="d-flex justify-center ma-6">
    <p>Currently you haven't any product</p>
  </div>
  <v-row v-for="item in sorted" :key="item.id">
    <v-col>
      <Product :item="item" @deleteProduct="deleteProduct" @addItemShopping="addItemShopping"/>
    </v-col>
  </v-row>
</template>
<script>
  import Product from '@/components/Product.vue';
  export default {
    components: { Product },
    data: ()=> ({
      productList: [],
    }),
    mounted() {
      this.productList = JSON.parse(localStorage.getItem('productList') || '[]');
    },
    computed: {
      sorted() {
        return this.productList.sort((a,b)=> {
          return new Date(a.date) - new Date(b.date);
        });
      },
    },
    methods: {
      deleteProduct : function (item) {
        const index = this.productList.indexOf(item)
        this.productList.splice(index, 1);
        localStorage.setItem('productList', JSON.stringify(this.productList));
      },
      addItemShopping: function(item) {
        const list = JSON.parse(localStorage.getItem('shoppingList') || '[]');
        const name = item.name;
        list.push({
          name
        });
        localStorage.setItem('shoppingList', JSON.stringify(list));
        this.deleteProduct(item);
      }
    }
  }
</script>