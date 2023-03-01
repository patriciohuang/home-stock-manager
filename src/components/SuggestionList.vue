<template>
  <v-theme-provider theme="dark">
    <p v-if="suggestionList.length === 0">No suggestions yet</p>
    <div v-else>
      <h3>Suggestions</h3>
      <v-card 
      class="mt-4"
      >
        <v-list density="compact">
          <v-container>
            <v-row v-for="item in suggestionList" class="d-flex justify-space-between">
              <v-list-item 
              class="pl-6"
              @click="addItem(item)">{{ item }}
              </v-list-item >
              <v-btn
              variant="text"
              icon="mdi-close"
              color="blue-grey-lighten-3"
              @click="deleteItem(item)"
              >
              </v-btn>
          </v-row>
          </v-container>
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
    },
    deleteItem : function (item) {
        const index = this.suggestionList.indexOf(item)
        this.suggestionList.splice(index, 1);
        localStorage.setItem('suggestionList', JSON.stringify(this.suggestionList));
      },
  }
}
</script>