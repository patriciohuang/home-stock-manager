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
import { saveList } from  '@/utils/firestore'
import { getList } from '../utils/firestore';
export default {
  components: { Product, AlertPending },
  data: ()=> ({
    productList: [],
    shoppingList: [],
  }),
  async mounted() {
    this.productList = await getList('productList');
    this.shoppingList = await getList('shoppingList');
  },
  computed: {
    sorted() {
      return this.productList.sort((a,b)=> {
        return new Date(a.date) - new Date(b.date);
      });
    },
  },
  methods: {
    deleteProduct: async function (id) {
      const index = this.productList.indexOf(id)
      this.productList.splice(index, 1);
      await saveList('productList', this.productList)
      localStorage.setItem('productList', JSON.stringify(this.productList));
    },
    addItemShopping: async function(item) {
      const name = item.name;
      const id = item.id
      this.shoppingList.push({
        id,
        name,
        checked: false
      });
      await saveList('shoppingList', this.shoppingList)
      localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList));
      this.deleteProduct(item);
    }
  }
}
</script>