<template>
    <div class="modal" v-if="showModal">
        <div class="modal-content bg-white rounded shadow-md p-4 max-w-md w-full">
            <form @submit.prevent="submitForm">
                <h1 class="text-lg font-bold text-center mb-4">Create Appointment</h1>
                <div class="mb-4">
                    <label for="title" class="block font-bold">Title</label>
                    <div class="border p-2">
                        <input v-model="formData.title" class="input w-full" type="text">
                    </div>
                </div>
                <div class="mb-4">
                    <label for="dateofappointment" class="block font-bold">Date Of Appointment</label>
                    <div class="border p-2">
                        <input v-model="formData.date" class="input w-full" type="date">
                    </div>
                </div>
                <div class="mb-4">
                    <label for="starttime" class="block font-bold">Start Time</label>
                    <div class="border p-2">
                        <input v-model="formData.start_time" class="input w-full" type="time" min="00:00" max="23:00"
                            required>
                    </div>
                </div>
                <div class="mb-4">
                    <label for="endtime" class="block font-bold">End Time</label>
                    <div class="border p-2">
                        <input v-model="formData.end_time" class="input w-full" type="time" min="00:00" max="23:00"
                            required>
                    </div>
                </div>
                <div class="btnform flex justify-between mt-4">
                    <button type="submit" class="bg-blue-500 text-white rounded p-2 hover:bg-blue-700">Submit</button>
                    <button @click="closeModal" class="button is-link">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'ModalFormTest',
    props: ['showModal'],
    data() {
        return {
            formData: {
                title: '',
                date: '',
                start_time: '',
                end_time: ''
            }
        };
    },
    methods: {
        closeModal() {
            console.log('close modal');
            this.$emit('close-modal');
        },
        submitForm() {
            // Récupère le token du localStorage
            const token = localStorage.getItem('token');

            // Vérifie que le token est présent
            if (!token) {
                console.error('Token non trouvé. Utilisateur non authentifié.');
                return;
            }

            console.log('Form Data:', this.formData);


            const requestData = {
                title: this.formData.title,
                date: this.formData.date,
                start_time: `${this.formData.date} ${this.formData.start_time}:00`,
                end_time: `${this.formData.date} ${this.formData.end_time}:00`
            };

            console.log('Request Data:', requestData);


            // Ajoute le token à l'en-tête d'autorisation
            const headers = {
                Authorization: `Bearer ${token}`
            };

            // Effectue la requête API avec Axios
            axios.post('http://127.0.0.1:8000/api/tasks', requestData, { headers })
                .then(response => {
                    // Gère la réponse de la requête API en cas de succès
                    console.log('Réponse de la création de tâche :', response.data);
                    // Tu peux ajouter d'autres actions si nécessaire
                })
                .catch(error => {
                    // Gère les erreurs de la requête API
                    console.error('Erreur de la création de tâche :', error);
                });
        }
    }
};
</script>

<style scoped>
/* Add custom CSS for your modal here */
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
    z-index: 999;
}

/* Customize additional styles as needed */
</style>
