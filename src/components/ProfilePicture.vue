<template>
  <div class="container">
    <div class="flex justify-center items-center">
      <img class="profile-picture" src="../assets/profilePicture.png" alt="Profile Picture" />
      <p>Rémi Agaësse</p>
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

.content {
  margin-top: 10px;
}
</style>