<template>
  <v-chip
    class="ma-2"
    color="red"
    text-color="white"
    v-if="diff === 0"
  >
    Expires today
  </v-chip>
  <v-chip
    class="ma-2"
    color="amber-darken-3"
    text-color="white"
    v-else-if="diff === 1"
  >
    Expires tomorrow
  </v-chip>
  <v-chip
    class="ma-2"
    color="brown-darken-4"
    text-color="white"
    v-else-if="diff <= -1"
  >
    Expired
  </v-chip>
</template>
<script>
import moment from 'moment';
function diffDay(day, currentDay) {
    let a = moment(day);
    let b = moment(currentDay);
    return a.diff(b, "days");
}
export default {
  props: {
    date: String
  },
  data: ()=>({
    currentDay: '',
    diff: '',
  }),
  mounted() {
    this.currentDay = moment().local().format("YYYY-MM-DD");
    this.diff = diffDay(this.date, this.currentDay);
  },
}
  
</script>