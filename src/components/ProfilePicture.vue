<template>
  <div class="container">
    <div class="flex justify-center items-center flex-col">
      <img class="profile-picture" :src="require('../assets/profilePicture.png')" alt="Profile Picture" />
      <p class="flex-1">{{ userData.first_name ? userData.first_name : 'Prénom inconnu' }}</p>
      <p class="flex-1">{{ userData.last_name ? userData.last_name : 'Nom inconnu' }}</p>
    </div>
  </div>
</template>


<script>
import { useStore } from '../Store';
export default {
  name: 'ProfilePicture',
  setup() {
    const store = useStore();
    const userData = store.user;

    // Utilisez userData comme vous le souhaitez
    console.log(userData);

    return {
      userData
    };
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
