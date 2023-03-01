<template>
  <v-app-bar color="blue-grey-darken-2">
    <v-app-bar-title>Home Stock Manager</v-app-bar-title>
  </v-app-bar>
  <RouterLink to="/home-stock">
      <v-btn
    color="indigo"
    >
    Home Stock
    </v-btn>
  </RouterLink>
  <RouterLink to="/shopping-list">
      <v-btn
    color="indigo"
    >
    Shopping List
    </v-btn>
  </RouterLink>
  <RouterLink to="/pending">
      <v-btn
    color="indigo"
    >
    Pending
    </v-btn>
  </RouterLink>
</template>