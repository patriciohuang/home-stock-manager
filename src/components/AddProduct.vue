<template>
  <v-form v-model="valid" @submit.prevent="addProduct(name, expirationDate)">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Product name"
            required
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            type="date"
            v-model="expirationDate"
            label="Expiration day"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn type="submit" color="indigo">
        Add Product
      </v-btn>
      
    </v-container>
  </v-form>
</template>
<script>
  import router from '@/router';

  export default {
    data: () => ({
      valid: false,
      name: '',
      expirationDate: '',
      nameRules: [
        (value) => {
          if (value) return true
          return 'Product name is requred.'
        },
      ],
    }),
    methods : {
      addProduct : function (name, date) {
        if(name) {
          const list = JSON.parse(localStorage.getItem('productList') || '[]');
          list.push({
            id: Date.now(),
            name,
            date,
          });
          localStorage.setItem('productList', JSON.stringify(list));
          router.push('/')
        }
      }
    }
  }
</script>