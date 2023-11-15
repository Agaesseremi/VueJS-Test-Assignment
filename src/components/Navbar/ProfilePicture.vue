<template>
  <div class="container">
    <div class="flex justify-center items-center flex-col">
      <img class="profile-picture" :src="userData.avatar_url || require('../../assets/profilePicture.png')"
        alt="Profile Picture" />
      <div class="grid grid-cols-2 pt-2">
        <p class="pl-3">{{ userData.first_name || 'Prénom inconnu' }}</p>
        <p>{{ userData.last_name || 'Nom inconnu' }}</p>
      </div>
    </div>
  </div>
</template>



<script>
import { useStore } from '../../Store';
export default {
  name: 'ProfilePicture',
  setup() {
    const store = useStore();
    const userData = store.user;

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
