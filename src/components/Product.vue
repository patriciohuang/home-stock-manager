<template>
  <v-card :title="item.name" :subtitle="item.date">
    <v-row class="pa-6" justify="space-between">
      <div>
        <ExpireChip :date="item.date"/>
      </div>
      <v-dialog
        v-model="dialog"
        width="auto"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="red" 
            icon="mdi-delete"
            v-bind="props"
          >
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h5">
            Delete item
          </v-card-title>
          <v-card-text>Are you sure you want to delete this item?</v-card-text>
          <v-card-actions class="d-flex align-start flex-column mb-6">
            <v-btn
              color="primary"
              variant="flat"
              class="ma-2 pa-2"
              @click="() => deleteProduct(item)"
            >
              Yes
            </v-btn>
            <v-btn
              color="primary"
              variant="flat"
              class="ma-2 pa-2"
              @click="() => addItemShopping(item)"
            >
              Yes and add to shopping list
            </v-btn>
            <v-btn
              color="secondary"
              variant="flat"
              class="ma-2 pa-2"
              @click="dialog = false"
            >
              No
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-card>
</template>
<script>
import ExpireChip from './ExpireChip.vue';
export default {
  props: {
    item: Object
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    deleteProduct: function (item) {
      this.$emit("deleteProduct", item);
      this.dialog = false;
    },
    addItemShopping: function(item) {
      this.$emit("addItemShopping", item);
      this.dialog = false;
    }
  },
  components: { ExpireChip }
}
</script>