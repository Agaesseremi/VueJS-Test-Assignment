<template>
    <div class="modal" v-if="showModal">
        <div class="modal-content bg-white rounded shadow-md p-4 max-w-md w-full">
            <form @submit="submitForm">
                <h1 class="text-lg font-bold text-center mb-4">Create Appointment</h1>
                <div class="mb-4">
                    <label for="title" class="block font-bold">Title</label>
                    <div class="border p-2">
                        <input class="input w-full" type="text" id="title" name="title">
                    </div>
                </div>
                <div class="mb-4">
                    <label for="dateofappointment" class="block font-bold">Date Of Appointment</label>
                    <div class="border p-2">
                        <input class="input w-full" type="date" name="dateofappointment" id="dateofappointment">
                    </div>
                </div>
                <div class="mb-4">
                    <label for="starttime" class="block font-bold">Start Time</label>
                    <div class="border p-2">
                        <input class="input w-full" type="time" id="starttime" name="starttime" min="00:00" max="23:00"
                            required>
                    </div>
                </div>
                <div class="mb-4">
                    <label for="endtime" class="block font-bold">End Time</label>
                    <div class="border p-2">
                        <input class="input w-full" type="time" id="endtime" name="endtime" min="00:00" max="23:00"
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
export default {
    name: 'ModalFormTest',
    props: ['showModal'],
    methods: {
        closeModal() {
            console.log('close modal');
            this.$emit('close-modal');
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
