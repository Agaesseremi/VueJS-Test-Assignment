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
        <RegisterForm @register="handleRegister"></RegisterForm>
        <LoginForm @login="handleLogin"></LoginForm>
      </div>
    </header>
    <div>
      <h1></h1>
    </div>
    <DatePicker />
    <HoursPerDay :data="this.data" />
  </div>
</template>

<script>
import ProfilePicture from './components/ProfilePicture.vue';
import HoursPerDay from './components/HoursPerDay.vue';
import DatePicker from './components/DatePicker.vue';
import RegisterForm from './components/Modal/RegisterForm.vue'
import LoginForm from './components/Modal/LoginForm.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    ProfilePicture,
    HoursPerDay,
    DatePicker,
    RegisterForm,
    LoginForm,
  },
  data() {
    return {
      data: {},
      tasks: []
    };
  },
  methods: {
    handleRegister(userData) {
      // Appelle une méthode pour effectuer la requête API pour l'inscription
      axios.post('http://127.0.0.1:8000/api/users', userData)
        .then(response => {
          // Gère la réponse de la requête API en cas de succès
          console.log('Réponse de l\'inscription :', response.data);
        })
        .catch(error => {
          // Gère les erreurs de la requête API
          console.error('Erreur de l\'inscription :', error);
        });
    },
    handleLogin(credentials) {
      // Appelle une méthode pour effectuer la requête API pour la connexion
      axios.post('http://127.0.0.1:8000/api/auth/login', credentials)
        .then(response => {
          // Gère la réponse de la requête API en cas de succès
          const token = response.data.token;

          // Stocke le token dans le local storage
          localStorage.setItem('token', token);

          console.log(localStorage);

          // Appelle la méthode pour effectuer d'autres actions après la connexion
          this.afterLogin();
          this.getTasksByUser();
        })
        .catch(error => {
          // Gère les erreurs de la requête API
          console.error('Erreur de la connexion :', error);
        });
    },
    afterLogin() {
      // Tu peux ajouter d'autres actions à effectuer après une connexion réussie ici
      console.log('Utilisateur connecté !');
    },
    handleLogout() {
      // Supprime le token du local storage
      localStorage.removeItem('token');

      // Ajoute d'autres actions à effectuer après la déconnexion si nécessaire
      console.log('Utilisateur déconnecté !');
    },
    getTasksByUser() {
      const token = localStorage.getItem('token');

      if (token) {

        const headers = {
          Authorization: `Bearer ${token}`
        };

        axios.get('http://127.0.0.1:8000/api/tasks', { headers })
          .then(response => {
            // Les données sont déjà au format JSON ici, pas besoin de response.json()
            this.data = response.data;
            this.tasks = response.data.tasks;
          })
      } else {
        console.log('error no connected user');
      }
    }
  },


  created() {

    fetch("https://my-json-server.typicode.com/Agaesseremi/VueJS-Test-Assignment-Json/data")
      .then(response => response.json())
      .then(data => {
        this.data = data;
        this.tasks = data.tasks
      });
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