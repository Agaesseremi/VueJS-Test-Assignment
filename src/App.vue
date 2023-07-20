<template>
  <div class="app">
    <header class="header flex items-center mb-5">
      <div class="w-1/3 text-center rounded-sm">
        <i class="fa-regular fa-square-caret-left fa-2xl cursor-pointer"></i>
      </div>
      <div class="w-1/3 flex justify-center">
        <img src="./assets/logo_highday_transp.png" class="w-16 rounded-full border-black border-2 cursor-pointer" />
      </div>
      <div class="w-1/3">
        <ProfilePicture />
      </div>
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
    ButtonMonth,

  }
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
}
</style>