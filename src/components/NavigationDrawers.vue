<template>
    <v-bottom-navigation
      height="80px"
      bg-color="surface"
      class="bottom-nav"
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
    <RouterLink to="/account">
      <v-btn>
        <v-icon color="icon">mdi-account</v-icon>
      </v-btn>
    </RouterLink>
    </v-bottom-navigation>
</template>
<script>
  export default {
    data: () => ({ value: 1 }),
  }
</script>
<style>
.bottom-nav {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
