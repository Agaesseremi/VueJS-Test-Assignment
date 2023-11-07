<template>
  <div class="header">
    <h1>OnGoing</h1>
    <button @click="openModal"><i class="fa-solid fa-plus fa-xl"></i></button>
  </div>
  <TaskForm :showModal="showModal" @close-modal="closeAndHideModal" />
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
<script>
import moment from 'moment';
import TaskCard from './TaskCard.vue';
import TaskForm from '../components/TaskForm.vue';

export default {
  name: 'HoursPerDay',

  props: ['data'],

  components: {
    TaskCard,
    TaskForm
  },

  data() {
    return {
      showModal: false
    }
  },

  methods: {
    moment,
    filteredTasks(hour) {
      return this.$props.data.tasks?.filter((task) => {
        return task['start-time'].slice(0, 2) == hour - 1;
      }) || [];
    },
    openModal() {
      this.showModal = true; // Show the modal when this method is called
    },
    closeAndHideModal() {
      this.showModal = false; // Hide the modal when this method is called
    }
  },

  setup(props) {
    console.log(props);
  },

};
</script>

<!-- TaskCard -->




<style scoped>
h1 {
  margin-left: 25px;
  font-size: 24px;
  font-weight: bolder;
}

.time {
  height: 100px;
  margin-left: 1rem;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  /* Pour ajuster la marge au besoin */
}

.fa-solid {
  padding-top: 0.5rem;
  padding-left: 0.5rem;
}

.calendar {
  overflow-x: auto;
  /* Rend la div scrollable horizontalement */
  white-space: nowrap;
  /* Empêche le texte de revenir à la ligne */
  max-height: 31rem;
  scrollbar-width: none;
  /* Supprime complètement la barre de défilement (Firefox) */
}

@media screen and (max-width: 400px) {
  .calendar {
    max-height: 22.9rem;
  }
}

::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(194, 200, 252);
  border-radius: 5px;
}

/*For Microsoft browsers */
::-ms-scrollbar {
  width: none;
}

::-ms-scrollbar-thumb {
  background-color: #DBE9F6;
  border-radius: none;
}
</style>