<template>
  <div>
    <v-text-field
      v-model="expirationDate"
      label="Expiration Date"
      type="date"
      :error="v$.expirationDate.$error"
    ></v-text-field>
    <span class="text-red" v-if="v$.expirationDate.$error">Expiration date is requred.</span>
  </div>
  <v-btn color="primary" @click="addToStock()">
    Add to Stock
  </v-btn>
</template>
<script>
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
  emits: ['addToStock'],
  props: {
    item: Object
  },
  data: ()=> ({
    v$: useValidate(),
    expirationDate: ''
  }),
  methods: {
    addToStock: function() {
      console.log(this.expirationDate)
      this.v$.$validate()
      if(!this.v$.$error) {
        this.$emit("addToStock", {item: this.item, date: this.expirationDate});
      }
    } 
  },
  validations() {
    return {
      expirationDate: { required }
    }
  },
}
</script>