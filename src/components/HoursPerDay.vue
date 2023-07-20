<script>
import moment from 'moment'
import TaskCard from './TaskCard.vue';

export default {
  name: 'HoursPerDay',
  methods: {
    moment,
  },

  components: {
    TaskCard
  },
  data() {
    return {
      meets: {
        "id": 95,
        "avatar_url": "https://reqres.in/img/faces/3-image.jpg",
        "email": "emma.wong@reqres.in",
        "first_name": "Jhon",
        "last_name": "Mathew",
        "primary_color": "#0804db",
        "tasks": [
          {
            "id": 1,
            "date": "20/07/2023",
            "start-time": "09:00",
            "end-time": "10:00",
            "title": "Mobile app design",
            "members": [
              {
                "name": "Mike",
                "avatar_url": "https://reqres.in/img/faces/3-image.jpg",
              },
              {
                "name": "Anita",
                "avatar_url": "https://reqres.in/img/faces/3-image.jpg",
              },
            ]
          },
          {
            "id": 2,
            "date": "20/07/2023",
            "start-time": "10:00",
            "end-time": "11:20",
            "title": "Software Testing",
            "members": [
              {
                "name": "Anita",
                "avatar_url": "https://reqres.in/img/faces/3-image.jpg",
              },
              {
                "name": "David",
                "avatar_url": "https://reqres.in/img/faces/3-image.jpg",
              },
            ]
          }
        ]
      }
    }
  }
}
</script>

<!-- TaskCard -->

<template>
  <h1>OnGoing</h1>
  <!-- Create hour for selected day -->
  <div class="calendar flex ">
    <div class="timeline w-20">
      <div class="time" v-for="hour in 24" :key="hour">
        <p>{{ moment({ hour: hour - 1 }).format('HH:mm') }}</p>
        <div class="hour-line" v-if="hour > 1"></div>
      </div>
    </div>
    <div class="days w-80">
      <div class="time" v-for="hour in 24" :key="hour">
        <div v-if="hour - 1 == meets.tasks[1]['start-time'].slice(0, 2)">
          <TaskCard :task="meets.tasks[1]" />
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
h1 {
  margin-left: 25px;
  font-weight: bolder;
}

.time {
  height: 50px;
}
</style>