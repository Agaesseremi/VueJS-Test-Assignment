<template>
    <div :style="calculateMeetDuration()" class=" taskcard bg-blue-600 text-white w-4/4 m-1 rounded-md pt-1 relative">
        <p class="text-left text-lg font-bold pl-1">
            <span class="hidden md:inline-block">{{ task.title }}:</span>
            <span class="md:hidden">{{ task.title }}</span>
            <span class="hidden md:inline-block ml-2">{{ formattedStartTime }} - {{ formattedEndTime }}</span>
        </p>
        <div class="grid grid-cols-2 mt-2">
            <div class="col-span-1">
            </div>
            <div class="col-span-1 flex justify-end">
                <button @click="clearTask(task.id)" class="cursor-pointer p-2 absolute right-0 top-0">
                    <i class="fa-solid fa-times"></i>
                </button>
            </div>
        </div>
    </div>
</template>


<script>
import moment from 'moment';
import axios from 'axios';
import { useStore } from '../../Store';

export default {
    name: 'TaskCard',
    props: {
        task: {
            type: Object,
            required: true,
        },
    },
    computed: {
        formattedStartTime() {
            return moment(this.task['start_time']).format('HH:mm');
        },
        formattedEndTime() {
            return moment(this.task['end_time']).format('HH:mm');
        },
    },
    methods: {
        calculateMeetDuration() {
            const startTime = moment(this.task.start_time);
            const endTime = moment(this.task.end_time);

            const durationInMinutes = moment.duration(endTime.diff(startTime)).as('minutes');

            const height = `${durationInMinutes}px`; // Hauteur en minutes
            const startMinutes = startTime.minutes(); // Récupérer les minutes de l'heure de début
            const marginTop = `${startMinutes}px`; // margin-top basé sur les minutes de l'heure de début

            return { height, 'margin-top': marginTop, position: 'absolute' };
        },




        clearTask(taskId) {
            axios.delete(`http://127.0.0.1:8000/api/tasks/${taskId}`)
                .then(response => {
                    useStore().getTasksByUser();
                    console.log('Réponse de la supréssion de la tâche :', response.data);
                })
                .catch(error => {
                    console.error('Erreur de la supréssion de la tâche :', error);
                });
        },
    },
};
</script>

<style scoped>
.taskcard {
    width: 60rem;
}

@media screen and (max-width: 400px) {
    .taskcard {
        width: 15rem;
    }
}
</style>
