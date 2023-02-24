<template>
  <v-theme-provider theme="dark">
    <h3>Suggestions</h3>
    <v-card
      v-for="item in suggestionList"
      class="pl-6"
    >
      <v-list @click="addItem(item)">{{ item }}</v-list>
    </v-card>
  </v-theme-provider>
</template>
<script>
export default {
  emits: ['addItem'],
  data: ()=> ({
    suggestionList: [],
  }),
  mounted() {
    this.suggestionList = JSON.parse(localStorage.getItem('suggestionList') || '[]');
  },
  methods: {
    addItem: function(item) {
      this.$emit("addItem", item)
    }
  }
}
</script>