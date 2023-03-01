<template>
  <main>
    <v-app-bar color="blue-grey-darken-2">
      <GoBack />
      <v-app-bar-title>Shopping List</v-app-bar-title>
    </v-app-bar>
    <v-container>
      <v-row v-for="item in shoppingList" :key="item.name" class="d-flex align-center justify-space-between">
          <v-checkbox v-model="item.checked"  @change="toggle()" :label="item.name" hide-details></v-checkbox>
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
  </main>
</template>
<script>
import GoBack from '@/components/GoBack.vue'
export default {
  components: { GoBack },
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
      toggle: function() {
        localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList));
      }
    }
}
</script>