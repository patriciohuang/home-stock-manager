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
            :rules="dateRules"
            required
            v-model="expirationDate"
            label="Expiration day"
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="d-flex justify-center ma-6">
        <v-btn type="submit" color="indigo" >
          Add Product
        </v-btn>
      </div>
    </v-container>
  </v-form>
</template>
<script>
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
      dateRules: [
        (value) => {
          if (value) return true
          return 'Expiration date is requred.'
        },
      ],
    }),
    methods : {
      addProduct : function (name, date) {
        this.$emit("addProduct", {name, date});
      }
    }
  }
</script>