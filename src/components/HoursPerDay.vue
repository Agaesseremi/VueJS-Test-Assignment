<script>
import moment from 'moment';
import TaskCard from './TaskCard.vue';

export default {
  name: 'HoursPerDay',

  props: ['data'],

  components: {
    TaskCard
  },

  methods: {
    moment,
    filteredTasks(hour) {
      return this.$props.data.tasks?.filter((task) => {
        return task['start-time'].slice(0, 2) == hour - 1;
      }) || [];
    },
  },

  setup(props) {
    console.log(props);
  },

};
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
    <div class="days w-4/5 h-40" v-if="this.$props.data">
      <div class="time" v-for="hour in  24" :key="hour">
        <div v-if="filteredTasks(hour) && filteredTasks(hour).length > 0">
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