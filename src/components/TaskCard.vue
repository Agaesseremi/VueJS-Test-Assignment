<template>
    <div :style="calculateMeetDuration()" class="  bg-blue-600 text-white w-4/4 m-1 rounded-md pt-1">
        <p class="text-left text-lg font-bold pl-1">{{ task.title }}</p>
        <p class="taskMembersName text-left text-xs pl-1">{{ getMembersString(task.members) }}</p>
        <div class="grid grid-cols-2 mt-2">
            <div class="col-span-1 flex pl-1">
                <div v-for="member in task.members" :key="member.id">
                    <img :src="member.avatar_url" alt="Member Image" class="w-7 rounded-full h-auto border-2 border-white">
                </div>
            </div>
            <div class="col-span-1">
                <p class="text-right text-sm pr-2">{{ task['start-time'].toString() }} - {{ task['end-time'].toString() }}
                </p>
            </div>
        </div>

    </div>
</template>


<script>
import moment from 'moment';

// import moment from 'moment';

export default {
    name: 'TaskCard',
    data() {
        return {
            height: 1
        };
    },
    props: ['task'],
    setup(props) {
        // setup() receives props as the first argument.
        console.log(props.task)

    },

    methods: {
        calculateMeetDuration() {
            let startTime = moment({ hour: this.$props.task['start-time'].slice(0, 2), minute: this.$props.task['start-time'].slice(3, 5) })
            let endTime = moment({ hour: this.$props.task['end-time'].slice(0, 2), minute: this.$props.task['end-time'].slice(3, 5) })
            let height = 100 * moment.duration(endTime.diff(startTime)).as('hour')
            return { height: `${height}px` }
        },
        timeInFloat(time) {
            let [hour, minute] = time.split(':');
            return (parseInt(hour) + parseInt(minute) / 60).toFixed(2);
        },
        getMembersString(members) {
            return members.map(member => member.name).join(", ");
        },
    },
    computed: {
    }
};
</script>


<style scoped></style>