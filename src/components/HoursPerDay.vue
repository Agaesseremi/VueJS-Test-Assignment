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
        <div class="time flex flex-wrap justify-content-center align-items-center"
          v-for="hour in 24"
          :key="hour"
        >
          <p>{{ moment({ hour: hour-1 }).format('HH:mm') }}</p>    
        </div>
      </div>
    </div>
</template>


<style scoped>
h1{
  margin-left: 3rem;
  font-weight: bolder;
}
</style>