<template>
  <v-layout>
    <v-app-bar color="blue-grey-darken-2">
      <RouterLink to="/shopping-list">
        <v-btn
          icon
          class="hidden-xs-only"
        >
          <v-icon color="white">mdi-arrow-left</v-icon>
        </v-btn>
      </RouterLink>
      <v-app-bar-title>Add Item</v-app-bar-title>
    </v-app-bar>
    <v-container class="pt-12">
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
  </v-layout>
</template>
<script>
import addSuggestion from '@/utils/suggestion'
import SuggestionList from '../components/SuggestionList.vue'
export default {
  components: { SuggestionList },
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
          name
        });
        localStorage.setItem('shoppingList', JSON.stringify(list));
        addSuggestion(name);
        this.$router.push('/shopping-list')
      }
    }
  }
}
</script>