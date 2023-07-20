<script>
import moment from 'moment'
import TaskCard from './TaskCard.vue';

export default {
  name: 'HoursPerDay',
  methods: {
    moment,
  },
  computed: {
    filteredTasks() {
      return (hour) => {
        return this.meets.tasks.filter((task) => {
          return task['start-time'].slice(0, 2) == hour - 1;
        });
      };
    },
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
                "avatar_url": "https://reqres.in/img/faces/1-image.jpg",
              },
              {
                "name": "Anita",
                "avatar_url": "https://reqres.in/img/faces/2-image.jpg",
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
                "avatar_url": "https://reqres.in/img/faces/2-image.jpg",
              },
              {
                "name": "David",
                "avatar_url": "https://reqres.in/img/faces/5-image.jpg",
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
  <!-- Hours of the day -->
  <div class="calendar flex">
    <div class="timeline w-1/5">
      <div class="time" v-for="hour in 24" :key="hour">
        <p>{{ moment({ hour: hour - 1 }).format('HH:mm') }}</p>
        <div v-if="hour > 1"></div>
      </div>
    </div>

    <!--div for call TaskCard when in Json -->
    <div class="days w-4/5 h-40">
      <div class="time" v-for="hour in 24" :key="hour">
        <div v-if="filteredTasks(hour).length > 0">
          <div v-for="task in filteredTasks(hour)" :key="task.id">
            <TaskCard :task="task" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
h1 {
  margin-left: 25px;
  font-size: 24px;
  font-weight: bolder;
  margin-bottom: 20px;
}

.time {
  height: 100px;
}
</style>