<template>
    <v-bottom-navigation
      height="80px"
      bg-color="surface"
      grow
    >
    <RouterLink to="/home-stock">
      <v-btn>
        <v-icon color="icon">mdi-home</v-icon>
      </v-btn>
    </RouterLink>
    <RouterLink to="/shopping-list">
      <v-btn>
        <v-icon color="icon">mdi-cart</v-icon>
      </v-btn>
    </RouterLink>
    <RouterLink to="/pending">
      <v-btn>
        <v-icon color="icon">mdi-account-clock</v-icon>
      </v-btn>
    </RouterLink>
    </v-bottom-navigation>
</template>
<script>
  export default {
    data: () => ({ value: 1 }),
  }
</script>
