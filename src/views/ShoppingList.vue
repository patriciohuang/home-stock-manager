<template>
  <main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <RouterLink to="/" class="go-back">
            <v-btn
              icon="mdi-arrow-left"
              color="indigo"
              variant="outlined"
            >
            </v-btn>
          </RouterLink>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="py-6">
          <h1>Shopping List</h1>
        </v-col>
      </v-row>
    </v-container>
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