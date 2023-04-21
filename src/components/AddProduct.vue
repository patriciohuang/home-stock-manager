<template>
  <v-form v-model="valid" @submit.prevent="addProduct(name, expirationDate)">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="name"
            label="Product name"
            clearable
            :error="v$.name.$error"
          ></v-text-field>
          <span class="text-red" v-if="v$.name.$error">Product name is requred.</span>
        </v-col>
        <v-col cols="12">
          <v-text-field
            type="date"
            v-model="expirationDate"
            label="Expiration day"
            :error="v$.expirationDate.$error"
          ></v-text-field>
          <span class="text-red" v-if="v$.expirationDate.$error">Expiration date is requred.</span>
        </v-col>
      </v-row>
      <div class="d-flex justify-center ma-6">
        <v-btn type="submit" color="primary" >
          Add Product
        </v-btn>
      </div>
    </v-container>
  </v-form>
</template>
<script>
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
  data: () => ({
    v$: useValidate(),
    valid: false,
    name: '',
    expirationDate: '',
  }),
  methods : {
    addProduct : function (name, date) {
      this.v$.$validate()
      if(!this.v$.$error) {
        this.$emit("addProduct", {name, date});
      } 
    }
  },
  validations() {
    return {
      name: { required },
      expirationDate: { required }
    }
  },
}
</script>