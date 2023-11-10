<template>
    <header class="header flex items-center mb-5">
        <div class="w-1/3 text-center rounded-sm">

        </div>
        <div class="w-1/3 flex justify-center">
            <img src="../assets/logo_highday_transp.png" class="w-16 rounded-full border-black border-2 cursor-pointer" />
        </div>
        <div class="w-1/3">
            <ProfilePicture />
            <RegisterForm @register="handleRegister"></RegisterForm>
            <LoginForm @login="handleLogin"></LoginForm>
        </div>
    </header>
</template>

<script>
import RegisterForm from './Modal/RegisterForm.vue';
import LoginForm from './Modal/LoginForm.vue';
import ProfilePicture from './ProfilePicture.vue';
import axios from 'axios';


export default {
    name: 'NavbarVue',
    data() {
        return {
            data: {},
            tasks: []
        };
    },
    components: {
        RegisterForm,
        LoginForm,
        ProfilePicture,
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
                    this.$emit('login-success');
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
    },


}
</script>

<style></style>