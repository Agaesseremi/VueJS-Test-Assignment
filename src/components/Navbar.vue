<template>
    <header class="header flex items-center mb-5">
        <div class="w-1/3 text-center rounded-sm">
            <!-- Contenu de la première section de l'en-tête -->
        </div>
        <div class="w-1/3 mt-4 flex justify-center">
            <img src="../assets/logo_highday_transp.png" class="w-16 rounded-full border-black border-2 cursor-pointer" />
        </div>
        <div class="w-1/3 pt-2">
            <div v-if="isConnected()">
                <ProfilePicture />
            </div>
            <div class="mt-2" v-else>
                <button @click="openLoginModal"
                    class="bg-blue-500 text-white rounded p-2 mx-2 hover:bg-blue-700">Connexion</button>
                <button @click="openRegisterModal"
                    class="bg-green-500 text-white rounded mt-2 p-2 mx-2 hover:bg-green-700">Inscription</button>
            </div>
        </div>
        <LoginForm v-if="showModalLogin" @close-modal-login="closeLoginModal" />
        <RegisterForm v-if="showModalRegister" @close-modal-register="closeRegisterModal" />
    </header>
</template>

<script>
import ProfilePicture from './ProfilePicture.vue';
import LoginForm from './Modal/LoginForm.vue';
import RegisterForm from './Modal/RegisterForm.vue';
import { useStore } from '../Store';
import { computed } from 'vue';


export default {
    name: 'NavbarVue',
    data() {
        return {
            data: {},
            tasks: [],
            showModalLogin: false,
            showModalRegister: false
        };
    },
    setup() {
        const store = useStore();
        const isConnected = computed(() => store.getIsConnected);
        const user = store.getTasksByUser;
        console.log(user);
        return {
            isConnected,
            user
        };
    },
    components: {
        ProfilePicture,
        LoginForm,
        RegisterForm
    },
    methods: {
        openLoginModal() {
            this.showModalLogin = true; // Ouvrir la modal de Connexion
        },
        closeLoginModal() {
            this.showModalLogin = false; // Fermer la modal de Connexion
        },
        openRegisterModal() {
            this.showModalRegister = true; // Ouvrir la modal d'Inscription
        },
        closeRegisterModal() {
            this.showModalRegister = false; // Fermer la modal d'Inscription
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
