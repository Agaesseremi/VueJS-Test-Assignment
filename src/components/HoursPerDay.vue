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
  <div class="calendar w-12 m-0">
    <div class="timeline">
      <div
        class="time flex flex-wrap justify-content-center align-items-center"
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
  margin-left: 3rem;
  font-weight: bolder;
}

.timeline {
  position: relative;
}

.time {
  position: relative;
}

.hour-line {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 1px;
  background-color: #ccc;
}

.time p {
  margin: 0;
}

.time {
  margin-bottom: 1rem;
}

</style>