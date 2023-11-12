<template>
    <div class="flex">
        <!-- Bouton de Connexion -->
        <button class="bg-blue-500 text-white rounded p-2 mx-2 hover:bg-blue-700">Connexion</button>

        <!-- Bouton d'Inscription -->
        <button class="bg-green-500 text-white rounded p-2 mx-2 hover-bg-green-700"
            @click="openRegisterModal">Inscription</button>
    </div>
</template>

<script>
export default {
    methods: {
        openRegisterModal() {
            this.$emit('open-register-modal'); // Émet un événement "open-register-modal"
        },
    },
};
</script>
