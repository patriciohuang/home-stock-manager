<template>
  <v-card :title="item.name" :subtitle="item.date">
    <v-row class="pa-6" justify="space-between">
      <div>
        <v-chip
          class="ma-2"
          color="red"
          text-color="white"
          v-if="diffDay(item.date) === 0"
        >
          Expires today
        </v-chip>
        <v-chip
          class="ma-2"
          color="amber-darken-3"
          text-color="white"
          v-else-if="diffDay(item.date) === 1"
        >
          Expires tomorrow
        </v-chip>
        <v-chip
          class="ma-2"
          color="brown-darken-4"
          text-color="white"
          v-else-if="diffDay(item.date) <= -1"
        >
          Expired
        </v-chip>
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
import moment from 'moment';
  export default {
    name: "Product",
    props: {
      item: Object
    },
    data: ()=> ({
      dialog: false,
      currentDay: ''
    }),
    mounted() {
      this.currentDay = moment().local().format('YYYY-MM-DD')
    },
    methods : {
      deleteProduct : function (item) {
        this.$emit("deleteProduct", item);
        this.dialog = false;
      },
      diffDay(day) {
        let a = moment(day);
        let b = moment(this.currentDay);
        return a.diff(b, 'days');
      }
    }
  }
</script>