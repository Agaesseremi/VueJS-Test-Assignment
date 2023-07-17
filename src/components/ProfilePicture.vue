<template>
  <div class="container">
    <div class="content has-text-centered">
      <img class="ProfilePicture" src="../assets/profilePicture.png" alt="Profile Picture">
      <p class="name">Rémi</p>
      <p class="lastname">Agaësse</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePicture',
}
</script>

<style scoped>
  .ProfilePicture {
    width: 75px;
    border-radius: 50%;
    border: solid 1px black;
  }
</style>