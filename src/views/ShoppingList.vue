<template> 
  <v-container>
    <v-app-bar color="surface">
      <v-app-bar-title>Shopping List</v-app-bar-title>
    </v-app-bar>
    <v-row v-for="item in shoppingList" :key="item.name" class="d-flex align-center justify-space-between">
        <v-checkbox v-model="item.checked"  @change="toggle(item)" :label="item.name" hide-details></v-checkbox>
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
        color="primary"
        prepend-icon="mdi-plus"
        class="my-6"
      >
        List item
      </v-btn>
    </RouterLink>
    <AlertPending :shoppingList="shoppingList"/>
    <NavigationDrawers />
  </v-container>
</template>
<script>
import AlertPending from '@/components/AlertPending.vue'
import NavigationDrawers from '@/components/NavigationDrawers.vue';
import { saveList } from '../utils/firestore';
export default {
  components: { AlertPending, NavigationDrawers },
  data: ()=> ({
    shoppingList: [],
  }),
  mounted() {
    this.shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');
  },
  methods: {
      deleteItem: async function (item) {
        const index = this.shoppingList.indexOf(item)
        this.shoppingList.splice(index, 1);
        saveList('shoppingList', this.shoppingList);
        localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList));
      },
      toggle: async function(item) {
        item.modified = Date.now();
        saveList('shoppingList', this.shoppingList);
        localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList));
      }
    }
}
</script>