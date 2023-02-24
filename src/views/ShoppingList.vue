<template>
  <main>
    <h1 class="py-6">Shopping List</h1>
    <v-row v-for="item in shoppingList">
      <v-col>
        <v-checkbox :label="item.name"></v-checkbox>
      </v-col>
    </v-row>
    
    <RouterLink to="/shopping-list/add-item">
      <v-btn
      color="blue-grey"
      prepend-icon="mdi-plus"
    >
      List item
    </v-btn>
    </RouterLink>
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
}
</script>