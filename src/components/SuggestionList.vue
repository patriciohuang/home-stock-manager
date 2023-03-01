<template>
  <v-theme-provider theme="dark">
    <p v-if="suggestionList.length === 0">No suggestions yet</p>
    <div v-else>
      <h3>Suggestions</h3>
      <v-card 
      class="mx-auto"
      >
        <v-list density="compact">
          <v-list-item 
          v-for="item in suggestionList"
          class="pl-6"
          @click="addItem(item)">{{ item }}
        </v-list-item >
      </v-list>
      </v-card>
    </div >
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