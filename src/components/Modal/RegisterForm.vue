<!-- RegisterModal.vue -->
<template>
    <div>
        <h2>Inscription</h2>
        <form @submit.prevent="register">
            <!-- Champs d'inscription (par exemple, nom, email, mot de passe) -->
            <input v-model="name" placeholder="Nom" required>
            <input v-model="email" placeholder="Email" required>
            <input v-model="password" type="password" placeholder="Mot de passe" required>
            <button type="submit">S'inscrire</button>
        </form>
    </div>
</template>

<script>
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
        register() {
            // Appelle une méthode pour effectuer la requête API pour l'inscription
            this.$emit('register', { first_name: this.name, last_name: this.name, email: this.email, password: this.password });
        },
    },
};
</script>
