<template>
  <div class="pb-4">
    <AlertPending :shoppingList="shoppingList"/>
  </div>
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
import AlertPending from '@/components/AlertPending.vue';
export default {
  components: { Product, AlertPending },
  data: ()=> ({
    productList: [],
    shoppingList: [],
  }),
  mounted() {
    this.productList = JSON.parse(localStorage.getItem('productList') || '[]');
    this.shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');
  },
  computed: {
    sorted() {
      return this.productList.sort((a,b)=> {
        return new Date(a.date) - new Date(b.date);
      });
    },
  },
  methods: {
    deleteProduct : function (id) {
      const index = this.productList.indexOf(id)
      this.productList.splice(index, 1);
      localStorage.setItem('productList', JSON.stringify(this.productList));
    },
    addItemShopping: function(item) {
      const name = item.name;
      const id = item.id
      this.shoppingList.push({
        id,
        name,
        checked: false
      });
      localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList));
      this.deleteProduct(item);
    }
  }
}
</script>