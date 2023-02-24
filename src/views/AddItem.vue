<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <a @click="$router.go(-1)" class="go-back">
          <v-btn
            icon="mdi-arrow-left"
            color="indigo"
            variant="outlined"
          >
          </v-btn>
        </a>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="py-6">
        <h2>Add Item</h2>
      </v-col>
    </v-row>
  </v-container>
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
          Add Item
        </v-btn>
      </div>
    </v-container>
  </v-form>
</template>
<script>
import addSuggestion from '@/utils/suggestion'
export default {
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