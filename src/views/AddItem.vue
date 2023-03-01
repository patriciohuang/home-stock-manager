<template>
  <v-app-bar color="blue-grey-darken-2">
    <GoBack />
    <v-app-bar-title>Add Item</v-app-bar-title>
  </v-app-bar>
  <v-container>
    <v-form v-model="valid" @submit.prevent="addItem(item)">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="item"
              :rules="itemRules"
              label="Item name"
              required
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <div class="d-flex justify-center ma-6">
          <v-btn type="submit" color="indigo" >
            Add item
          </v-btn>
        </div>
        <SuggestionList @add-item="addItem"/>
      </v-container>
    </v-form>
  </v-container>
</template>
<script>
import addSuggestion from '@/utils/suggestion'
import SuggestionList from '@/components/SuggestionList.vue'
import GoBack from '@/components/GoBack.vue'
export default {
  components: { SuggestionList, GoBack },
  data: ()=>({
    valid: false,
    item: '',
    itemRules: [
        (value) => {
          if (value) return true
          return 'Item is requred.'
        },
      ],
  }), 
  methods: {
    addItem: function(name) {
      if(name) {
        const list = JSON.parse(localStorage.getItem('shoppingList') || '[]');
        list.push({
          id: Date.now(),
          name,
          checked: false
        });
        localStorage.setItem('shoppingList', JSON.stringify(list));
        addSuggestion(name);
        this.$router.go(-1)
      }
    }
  }
}
</script>