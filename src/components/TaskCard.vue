<template>
    <div :style="calculateMeetDuration()" class="bg-blue-600 text-white w-4/4 m-1 rounded-md pt-1">
        <p class="text-left text-lg font-bold pl-1">{{ task.title }}</p>
        <div class="grid grid-cols-2 mt-2">
            <div class="col-span-1">
                <p class="text-right text-sm pr-2">{{ task.start_time.toString() }} - {{ task.end_time.toString() }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'TaskCard',
    props: {
        task: {
            type: Object,
            required: true,
        },
    },

    methods: {
        calculateMeetDuration() {
            const startTime = moment(this.task.start_time);
            const endTime = moment(this.task.end_time);
            const height = 100 * moment.duration(endTime.diff(startTime)).as('hour');
            return { height: `${height}px` };
        },
    },
};
</script>

<style scoped></style>
