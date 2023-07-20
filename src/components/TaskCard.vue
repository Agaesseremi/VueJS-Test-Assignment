<template>
    <div class="taskcard bg-blue-400" :style="this.calculateMeetDuration()">
        <p>{{ $props.task.id }}</p>
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
            let height = 50 * moment.duration(endTime.diff(startTime)).as('hour')
            return { height: `${height}px` }
        }

    },
    computed: {
        cssVars() {
            return {
                '--heightMultiplicator': this.height
            }
        },
    }
};
</script>


<style scoped>
.taskcard {
    height: calc(50px * var(--heightMultiplicator));
}
</style>