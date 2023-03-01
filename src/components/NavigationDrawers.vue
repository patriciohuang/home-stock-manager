<template>
    <v-bottom-navigation
      height="80px"
      bg-color="blue-grey-darken-2"
      grow
    >
    <RouterLink to="/home-stock">
      <v-btn >
        <v-icon>mdi-home</v-icon>
        Home
      </v-btn>
    </RouterLink>
    <RouterLink to="/shopping-list">
      <v-btn>
        <v-icon>mdi-cart</v-icon>
        Shopping List
      </v-btn>
    </RouterLink>
    <RouterLink to="/pending">
      <v-btn>
        <v-icon>mdi-account-clock</v-icon>
        Pending
      </v-btn>
    </RouterLink>
    </v-bottom-navigation>
</template>
<script>
  export default {
    data: () => ({ value: 1 }),
  }
</script>
