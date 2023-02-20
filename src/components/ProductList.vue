<template>
  <v-row v-for="item in sorted" :key="item.id">
    <v-col>
      <v-card :title="item.name" :subtitle="item.date">
        <v-row class="pa-6" justify="end">
          <v-dialog
            v-model="dialogs[item.id]"
            width="auto"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                color="red" 
                icon="mdi-delete"
                v-bind="props"
              >
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5">
                Delete item
              </v-card-title>
              <v-card-text>Are you sure you want to delete this item?</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="green-darken-1"
                  variant="tonal"
                  @click="dialogs[item.id] = false"
                >
                  No
                </v-btn>
                <v-btn
                  color="red-darken-1"
                  variant="tonal"
                  @click="() => deleteProduct(item)"
                >
                  Yes
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-card>
  </v-col>
  </v-row>
</template>
<script>
  export default {
    data: ()=> ({
      productList: [],
      dialogs: {}
    }),
    mounted() {
      this.productList = JSON.parse(localStorage.getItem('productList') || '[]');
      this.dialogs = this.productList.reduce((dialogs, product) => {
        dialogs[product.id] = false;
        return dialogs;
      }, {})
    },
    methods : {
      deleteProduct : function (item) {
        const index = this.productList.indexOf(item);
        this.productList.splice(index, 1);
        localStorage.setItem('productList', JSON.stringify(this.productList));
        this.dialogs[item.id] = false;
      },
    }, 
    computed: {
      sorted() {
        return this.productList.sort((a,b)=> {
          return new Date(a.date) - new Date(b.date);
        });
      }
    }
  }
</script>