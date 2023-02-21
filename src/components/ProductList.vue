<template>
  <div v-if="productList.length === 0" class="d-flex justify-center ma-6">
    <p>Currently you haven't any product</p>
  </div>
  <Product :productList="productList" :dialogs="dialogs" :currentDay="currentDay"/>
</template>
<script>
  import moment from 'moment';
  import Product from '@/components/Product.vue';

  export default {
    name: "ProductList",
    components: {
      Product
    },
    data: ()=> ({
      productList: [],
      dialogs: {},
      currentDay: ''
    }),
    mounted() {
      this.productList = JSON.parse(localStorage.getItem('productList') || '[]');
      this.dialogs = this.productList.reduce((dialogs, product) => {
        dialogs[product.id] = false;
        return dialogs;
      }, {});
      this.currentDay = moment().local().format('YYYY-MM-DD')
      console.log(this.productList)
    },
  }
</script>