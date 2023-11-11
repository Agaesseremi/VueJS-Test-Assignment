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
    <div v-if="this.store.user && this.store.user.task && this.store.user.task.length > 0" class="days w-4/5 h-40">
      <div class="time" v-for="hour in 24" :key="hour">
        <div v-if="filteredTaskList.length > 0">
          <div v-for="task in filteredTaskList" :key="task.id">
            <TaskCard :task="task" />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <!-- Affichez un message ou un chargement ici en cas de données vides -->
      <div class="time" v-for="hour in 24" :key="hour">
        <h1>user Not Connected</h1>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import TaskCard from './TaskCard.vue';
import TaskForm from './Modal/TaskForm.vue';
import { computed, watchEffect, ref } from 'vue';
import { useStore } from '../Store';

export default {
  name: 'HoursPerDay',
  props: ['data'],

  components: {
    TaskCard,
    TaskForm
  },

  setup() {
    const store = useStore();
    const selectedDay = computed(() => store.selectedDay);
    const selectedMonth = computed(() => store.selectedMonth);

    // Utilisez 'ref' pour selectedDateData
    const selectedDateData = ref(null);

    const selectedDate = () => {
      console.log('ppDate');
      const monthAbbreviations = {
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12",
      };

      const selectedMonthValue = monthAbbreviations[selectedMonth.value] || "01";
      const selectedDayValue = selectedDay.value.toString().padStart(2, '0');

      const year = 2023;
      const actualDate = `${year}-${selectedMonthValue}-${selectedDayValue}`;
      console.log(actualDate);
      selectedDateData.value = actualDate;
    };
    const filteredTaskList = ref([]);

    const filteredTasks = () => {
      if (store.user.task && store.user.task.length > 0) {
        console.log('user.task:', store.user.task);
        store.user.task.forEach(task => {
          console.log('task.date:', task.date);
          console.log('selectedDateData:', selectedDateData.value);
          if (task.date === selectedDateData.value) {
            filteredTaskList.value.push(task);
          }
        });
      }
      console.log('filteredTaskList:', filteredTaskList);
      return filteredTaskList;
    };

    watchEffect(() => {
      if (selectedDay.value !== null && selectedMonth.value !== null) {
        selectedDate();
        filteredTasks();
      }
    });

    return {
      store,
      selectedDay,
      selectedMonth,
      selectedDateData,
      filteredTaskList,
    };
  },


  methods: {
    moment,



    openModal() {
      this.filteredTasks();
      this.showModal = true; // Show the modal when this method is called
    },
    closeAndHideModal() {
      this.showModal = false; // Hide the modal when this method is called
    },
  },
};
</script>

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