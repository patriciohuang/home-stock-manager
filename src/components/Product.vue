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
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green-darken-1"
              variant="tonal"
              @click="dialog = false"
            >
              No
            </v-btn>
            <v-btn
              color="red-darken-1"
              variant="tonal"
              @click="() => deleteProduct(item)"
            >
              Yes
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
  name: "Product",
  props: {
    item: Object
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    deleteProduct: function (item) {
      this.$emit("deleteProduct", item);
      this.dialog = false;
    },
  },
  components: { ExpireChip }
}
</script>