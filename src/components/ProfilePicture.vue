<template>
  <div class="container">
    <div class="flex justify-center items-center flex-col">
      <img class="profile-picture" :src="require('../assets/profilePicture.png')" alt="Profile Picture" />
      <p class="flex-1">{{ $props.user.first_name ? user.first_name : 'Prénom inconnu' }}</p>
      <p class="flex-1">{{ $props.user.last_name ? user.last_name : 'Nom inconnu' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePicture',
  props: {
    user: Object // Définissez le type de la prop
  },
  setup(props) {
    console.log(props.user); // Log the user prop
  }
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
