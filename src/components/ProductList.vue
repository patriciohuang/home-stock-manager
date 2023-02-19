<template>
  <v-row v-for="(item, index) in productList">
      <v-col>
          <v-card :title="item.name" :subtitle="item.date">
              <v-card-actions>
                  <v-btn variant="outlined" @click="deleteProduct(index)">Delete</v-btn>
              </v-card-actions>
          </v-card>
      </v-col>
  </v-row>
      
  
</template>
<script>
  export default {
      data: ()=> ({
          productList: []
      }),
      mounted() {
          this.productList = JSON.parse(localStorage.getItem('productList') || '[]');
      },
      methods : {
          deleteProduct : function (index) {
              this.productList.splice(index, 1);
              localStorage.setItem('productList', JSON.stringify(this.productList));
          }
      }
  }
</script>