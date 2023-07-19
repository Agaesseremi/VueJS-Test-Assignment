<script>
import moment from 'moment'
export default {
  name: 'HoursPerDay',
    methods: {
    moment,
  },
}
</script>

<template>
  <h1>OnGoing</h1>
  <!-- Create hour for selected day -->
  <div class="calendar">
    <div class="timeline">
      <div
        class="time"
        v-for="hour in 24"
        :key="hour"
      >
        <p>{{ moment({ hour: hour - 1 }).format('HH:mm') }}</p>
        <div class="hour-line" v-if="hour > 1"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin-left: 25px;
  font-weight: bolder;
}


</style>