<template>
  <RouterLink to="/pending">
    <v-alert v-if="show"
      density="compact"
      type="warning"
      title="Pending Stock"
      text="You have pending items in your shopping list. Click here to update your stock."
    ></v-alert>
  </RouterLink>
  
</template>
<script>
  export default {
    props: {
      shoppingList: Array
    },
    computed: {
      show() {
        if(this.shoppingList.length) {
          return this.shoppingList.some(element => element.checked)
        }
      }
    }
  }
</script>