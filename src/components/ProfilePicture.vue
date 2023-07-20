<template>
  <div class="container">
    <div class="flex justify-center items-center flex-col">
      <img class="profile-picture" src="../assets/profilePicture.png" alt="Profile Picture" />
      <p class="flex-1">Rémi</p>
      <p class="flex-1">Agaësse</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePicture',
}
</script>

<style scoped>
.profile-picture {
  width: 3rem;
  border-radius: 100%;
  border: solid 1px black;
  cursor: pointer;
}

.container {
  margin-top: 35px;
}

p {
  font-size: 12px;
}
</style>