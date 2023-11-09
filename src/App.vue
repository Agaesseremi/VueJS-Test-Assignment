<template>
  <div class="app">
    <Navbar @login-success="handleLoginSuccess" />
    <DatePicker />
    <HoursPerDay :data="this.data" />
  </div>
</template>

<script>
import HoursPerDay from './components/HoursPerDay.vue';
import DatePicker from './components/DatePicker.vue';
import Navbar from './components/Navbar.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    HoursPerDay,
    DatePicker,
    Navbar,
  },
  data() {
    return {
      data: {},
      tasks: []
    };
  },
  methods: {
    handleLoginSuccess() {
      this.getTasksByUser();
    },
    getTasksByUser() {
      const token = localStorage.getItem('token');

      if (token) {

        const headers = {
          Authorization: `Bearer ${token}`
        };

        axios.get('http://127.0.0.1:8000/api/tasks', { headers })
          .then(response => {
            // Les données sont déjà au format JSON ici, pas besoin de response.json()
            this.data = response.data;
            this.tasks = response.data.task;
            console.log(this.data);
            console.log(this.tasks);
          })
      } else {
        console.log('error no connected user');
      }
    }
  },
}
</script>

<style scoped>
/* * {
  box-shadow: 0 0 0 3px red;

} */

.app {
  background-color: #DBE9F6;
  color: #000;
  font-family: 'Roboto', sans-serif;
  height: 100%;
}
</style>