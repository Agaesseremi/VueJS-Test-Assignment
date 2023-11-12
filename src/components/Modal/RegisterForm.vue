<!-- RegisterModal.vue -->
<template>
    <div class="modal">
        <div class="modal-content bg-white rounded shadow-md p-4 max-w-md w-full">
            <h2 class="text-2xl font-bold mb-4">Inscription</h2>
            <form @submit.prevent="handleRegister(userdata)">
                <div class="mb-4">
                    <input v-model="first_name" class="input" placeholder="Prénom" required>
                </div>
                <div class="mb-4">
                    <input v-model="last_name" class="input" placeholder="Nom" required>
                </div>
                <div class="mb-4">
                    <input v-model="email" class="input" placeholder="Email" required>
                </div>
                <div class="mb-4">
                    <input v-model="password" class="input" type="password" placeholder="Mot de passe" required>
                </div>
                <div class="flex justify-end mt-4">
                    <button type="submit" class="bg-blue-500 text-white rounded p-2 hover:bg-blue-700">S'inscrire</button>
                    <button @click="closeModal" class="bg-gray-300 text-gray-600 rounded p-2 ml-4">Annuler</button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        };
    },
    methods: {
        closeModal() {
            this.$emit('close-modal-register');
        },
        handleRegister() {
            // Crée un objet avec les données du formulaire au format souhaité
            const userData = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
            };

            // Appelle une méthode pour effectuer la requête API pour l'inscription
            axios.post('http://127.0.0.1:8000/api/users', userData)
                .then(response => {
                    // Gère la réponse de la requête API en cas de succès
                    console.log('Réponse de l\'inscription :', response.data);
                    this.$emit('close-modal-register');
                })
                .catch(error => {
                    // Gère les erreurs de la requête API
                    console.error('Erreur de l\'inscription :', error);
                });
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
    z-index: 850;
}
</style>
