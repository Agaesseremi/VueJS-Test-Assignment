// store.js

import { defineStore } from 'pinia';

export const useStore = defineStore('app', {
    state: () => ({
        selectedMonth: null,
        selectedDay: null,
    }),
    actions: {
        setMonth(month) {
            this.selectedMonth = month;
        },
        setDay(day) {
            this.selectedDay = day;
        },
    },
});
