<template>
  <v-alert v-if="show"
    density="compact"
    type="warning"
    title="Pending Stock"
    text="You have pending items in your shopping list. Click here to update your stock."
  ></v-alert>
</template>
<script>
  export default {
    props: {
      shoppingList: Array
    },
    computed: {
      show() {
        return this.shoppingList.some(element => element.checked)
      }
    }
  }
</script>