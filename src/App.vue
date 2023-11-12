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
import { useStore } from './Store';

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
      useStore().getTasksByUser();
    },
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