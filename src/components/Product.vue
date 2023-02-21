<template>
  <v-row v-for="item in sorted" :key="item.id">
    <v-col>
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
            v-model="dialogs[item.id]"
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
                  @click="dialogs[item.id] = false"
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
    </v-col>
  </v-row>
</template>
<script>
import moment from 'moment';
  export default {
    name: "Product",
    props: {
      productList: Array,
      dialogs: {
        Array
      },
      currentDay: String,
    },
    methods : {
      deleteProduct : function (item) {
        const index = this.productList.indexOf(item);
        this.productList.splice(index, 1);
        localStorage.setItem('productList', JSON.stringify(this.productList));
        this.dialogs[item.id] = false;
      },
      diffDay(day) {
        let a = moment(day);
        let b = moment(this.currentDay);
        return a.diff(b, 'days');

      }
    }, 
    computed: {
      sorted() {
        return this.productList.sort((a,b)=> {
          return new Date(a.date) - new Date(b.date);
        });
      },
    }
  }
</script>