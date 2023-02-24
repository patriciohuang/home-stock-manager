<template>
  <main>
    <v-layout>
      <v-app-bar color="blue-grey-darken-2">
        <RouterLink to="/">
          <v-btn
            icon
            class="hidden-xs-only"
          >
            <v-icon color="white">mdi-arrow-left</v-icon>
          </v-btn>
        </RouterLink>
        <v-app-bar-title>Shopping List</v-app-bar-title>
      </v-app-bar>
      <v-container class="pt-12">
        <v-row v-for="item in shoppingList" :key="item.name" class="d-flex justify-space-between">
            <v-checkbox :label="item.name" hide-details></v-checkbox>
            <v-btn
            variant="text"
            icon="mdi-close"
            color="blue-grey-lighten-3"
            @click="deleteItem(item)"
            >
            </v-btn>
        </v-row>
        <RouterLink to="/shopping-list/add-item">
          <v-btn
          color="blue-grey"
          prepend-icon="mdi-plus"
          class="my-6"
        >
          List item
        </v-btn>
        </RouterLink>
      </v-container>
    </v-layout>
  </main>
</template>
<script>
export default {
  data: ()=> ({
    shoppingList: [],
  }),
  mounted() {
    this.shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');
  },
  methods: {
      deleteItem : function (item) {
        const index = this.shoppingList.indexOf(item)
        this.shoppingList.splice(index, 1);
        localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList));
      },
    }
}
</script>