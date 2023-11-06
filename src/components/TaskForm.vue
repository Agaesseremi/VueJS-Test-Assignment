<template>
    <div class="modal" v-if="showModal">
        <div class="modal-content">
            <form @submit="submitForm">
                <h1 class="title is-4">Create Appointment</h1>
                <div class="field">
                    <label for="title" class="label">Title</label>
                    <div class="control">
                        <input class="input" type="text">
                    </div>
                </div>
                <div class="field">
                    <label for="dateofappointment" class="label">Date Of Appointment</label>
                    <div class="control">
                        <input class="input" type="date" name="dateofappointment" id="dateofappointment">
                    </div>
                </div>
                <div class="field">
                    <label for="starttime" class="label">Start Time</label>
                    <div class="control">
                        <input class="input" type="time" id="starttime" name="starttime" min="00:00" max="23:00" required>
                    </div>
                </div>
                <div class="field">
                    <label for="endtime" class="label">End Time</label>
                    <div class="control">
                        <input class="input" type="time" id="endtime" name="endtime" min="00:00" max="23:00" required>
                    </div>
                </div>
                <div class="btnform">
                    <button type="submit">Submit</button>
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

.modal-content {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    padding: 20px;
    max-width: 400px;
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.field {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    text-align: left;
}

.input {
    border: 1px solid black;
    padding: 5px;
}

.label {
    font-weight: bold;
    margin-bottom: 5px;
}

.btnform {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
}

/* Customize additional styles as needed */
</style>
