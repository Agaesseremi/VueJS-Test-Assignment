<!-- LoginModal.vue -->
<template>
    <div>
        <h2>Connexion</h2>
        <form @submit.prevent="login">
            <!-- Champs de connexion (par exemple, email et mot de passe) -->
            <input v-model="email" placeholder="Email" required>
            <input v-model="password" type="password" placeholder="Mot de passe" required>
            <button type="submit">Se connecter</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            console.log('Email:', this.email);
            console.log('Password:', this.password);
            // Appelle une méthode pour effectuer la requête API pour la connexion
            this.$emit('login', { email: this.email, password: this.password });
        },
    },
};
</script>
