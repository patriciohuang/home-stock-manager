<template>
  <v-app-bar color="blue-grey-darken-2">
    <GoBack />
    <v-app-bar-title>Pending</v-app-bar-title>
  </v-app-bar>
  <p v-if="pendingList.length === 0">No pending yet</p>
  <v-theme-provider v-else theme="dark">
    <v-expansion-panels  >
      <v-expansion-panel v-for="item in pendingList" :key="item.id">
        <v-expansion-panel-title v-slot="{ open }">
          {{ item.name }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <AddToStock :item="item" @addToStock="addToStock"/>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-theme-provider>
</template> 
<script>
import GoBack from '@/components/GoBack.vue'
import AddToStock from '@/components/AddToStock.vue'
export default {
  components: { AddToStock, GoBack },
  data: ()=> ({
    shoppingList: [],
  }),
  mounted() {
    this.shoppingList = JSON.parse(localStorage.getItem('shoppingList') || '[]');
  },
  computed: {
    pendingList() {
      return this.shoppingList.filter(element => element.checked).map(element => element).sort((e1,e2) => e1.name < e2.name ? -1 : 1);
    }
  },
  methods: {
    addToStock: function({item, date}) {
      console.log(item, date)
      const list = JSON.parse(localStorage.getItem('productList') || '[]');
      list.push({
        id: Date.now(),
        name: item.name,
        date
      });
      localStorage.setItem('productList', JSON.stringify(list));

      const index = this.shoppingList.indexOf(item);
      this.shoppingList.splice(index, 1);
      localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList));
    }
  }
}
</script>