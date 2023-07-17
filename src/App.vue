<template>
  <div class="app">
    <header class="columns is-vcentered">
      <div class="column has-text-centered"><img src="./assets/logout.jpeg" /></div>
      <div class="column has-text-centered"><img src="./assets/logo-min.png" /></div>
      <div class="column"><ProfilePicture /></div>
    </header>
  </div>
</template>

<script>
import ProfilePicture from './components/ProfilePicture.vue';

export default {
  name: 'App',
  components: {
    ProfilePicture
  }
}
</script>

<style scoped>
.app {
background-color: #DBE9F6;
}
  img {
    width: 75px;
    border-radius: 50%;
    border: solid 1px black;
  }
</style>
