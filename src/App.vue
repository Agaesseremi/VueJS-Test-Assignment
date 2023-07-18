<template>
  <div class="app">
    <header class=" header columns is-flex-mobile is-vcentered">
      <div class="column has-text-centered"><img src="./assets/logout.jpeg" /></div>
      <div class="column has-text-centered"><img src="./assets/logo-min.png" /></div>
      <div class="column"><ProfilePicture /></div>
    </header>
    <ButtonMonth />
    <ButtonDays />
    <HoursPerDay />
    
  </div>
</template>

<script>
import ProfilePicture from './components/ProfilePicture.vue';
import HoursPerDay from './components/HoursPerDay.vue';
import ButtonDays from './components/ButtonDays.vue';
import ButtonMonth from './components/ButtonMonth.vue';



export default {
  name: 'App',
  components: {
    ProfilePicture,
    HoursPerDay,
    ButtonDays,
    ButtonMonth
    
  }
}
</script>

<style scoped>
.app {
  background-color: #DBE9F6;
  color: #000;
  font-family: 'Roboto', sans-serif;
}

img {
  width: 75px;
  border-radius: 50%;
  border: solid 1px black;
}

.header.columns.is-vcentered {
  margin-bottom: 3rem;
}
</style>
