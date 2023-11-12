<template>
    <div class="modal">
        <div class="modal-content bg-white rounded shadow-md p-4 max-w-md w-full">
            <h2 class="text-2xl font-bold">Connexion</h2>
            <form @submit.prevent="handleLogin">
                <div class="mb-4">
                    <input v-model="email" class="input" placeholder="Email" required>
                </div>
                <div class="mb-4">
                    <input v-model="password" class="input" type="password" placeholder="Mot de passe" required>
                </div>
                <div class="flex justify-end mt-4">
                    <button type="submit" class="bg-blue-500 text-white rounded p-2 hover-bg-blue-700">Se connecter</button>
                    <button @click="closeModalLogin" class="bg-gray-300 text-gray-600 rounded p-2 ml-4">Annuler</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { useStore } from '../../Store';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        closeModalLogin() {
            this.$emit('close-modal-login');
        },
        async handleLogin() {
            const credentials = {
                email: this.email,
                password: this.password,
            };

            try {
                const response = await axios.post('http://127.0.0.1:8000/api/auth/login', credentials);
                const token = response.data.token;
                localStorage.setItem('token', token);

                // Maintenant, appelez la méthode du store pour récupérer les tâches de l'utilisateur
                const store = useStore(); // Obtenez une instance de votre store
                await store.getTasksByUser();
                store.setIsConnected(true);
                this.closeModalLogin();

                this.$emit('login-success');
            } catch (error) {
                console.error('Erreur de la connexion :', error);
            }
        },
    },
};
</script>

<style>
.modal {
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 800;
}
</style>
