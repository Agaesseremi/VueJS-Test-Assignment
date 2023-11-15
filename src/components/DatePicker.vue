<template>
    <div class="datepicker flex items-center justify-center">
        <div class="lg:flex p-8 rounded shadow-md w-screen">
            <div class="w-1/2 lg:w-1/4 mx-auto mb-3">
                <label for="month" class="block font-bold">Mois :</label>
                <select id="month" v-model="selectedMonth" class="w-full p-2 rounded border">
                    <option v-for="(month, key) in months" :key="key" :value="key">{{ month.name }}</option>
                </select>
                <button @click="selectMonth" class="w-full mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                    Sélection du mois
                </button>
            </div>

            <div class="w-1/2 lg:w-1/4 mx-auto" v-if="isMonthSelected">
                <label for="day" class="block font-bold">Jour :</label>
                <select id="day" v-model="selectedDay" class="w-full p-2 rounded border">
                    <option value="">Sélection du jour</option>
                    <option v-for="(day, index) in selectedMonthData.days" :key="index" :value="day">{{ day }}</option>
                </select>
                <button @click="selectDay" class="w-full mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                    Sélection du jour
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from '../Store';

export default {
    data() {
        return {
            selectedMonth: 'Jan',
            selectedDay: '',
            isMonthSelected: false,
            isDaySelected: false,
            months: {
                "Jan": {
                    "name": "Janvier",
                    "short": "Jan",
                    "number": 1,
                    "days": 31
                },
                "Feb": {
                    "name": "Février",
                    "short": "Feb",
                    "number": 2,
                    "days": 28
                },
                "Mar": {
                    "name": "Mars",
                    "short": "Mar",
                    "number": 3,
                    "days": 31
                },
                "Apr": {
                    "name": "Avril",
                    "short": "Apr",
                    "number": 4,
                    "days": 30
                },
                "May": {
                    "name": "Mai",
                    "short": "May",
                    "number": 5,
                    "days": 31
                },
                "Jun": {
                    "name": "Juin",
                    "short": "Jun",
                    "number": 6,
                    "days": 30
                },
                "Jul": {
                    "name": "Juillet",
                    "short": "Jul",
                    "number": 7,
                    "days": 31
                },
                "Aug": {
                    "name": "Aout",
                    "short": "Aug",
                    "number": 8,
                    "days": 31
                },
                "Sep": {
                    "name": "Septembre",
                    "short": "Sep",
                    "number": 9,
                    "days": 30
                },
                "Oct": {
                    "name": "Octobre",
                    "short": "Oct",
                    "number": 10,
                    "days": 31
                },
                "Nov": {
                    "name": "Novembre",
                    "short": "Nov",
                    "number": 11,
                    "days": 30
                },
                "Dec": {
                    "name": "Decembre",
                    "short": "Dec",
                    "number": 12,
                    "days": 31
                }
            },
            selectedMonthData: null,
        };
    },
    watch: {
        selectedMonth: 'fetchSelectedMonthData',
    },
    methods: {
        async selectMonth() {
            if (this.selectedMonth !== '') {
                this.isMonthSelected = true;
                useStore().setMonth(this.selectedMonth);
                await this.fetchSelectedMonthData();
            }
        },
        selectDay() {
            if (this.selectedDay !== '') {
                this.isDaySelected = true;
                useStore().setDay(this.selectedDay);
            }
        },
        async fetchSelectedMonthData() {
            this.selectedMonthData = {
                days: Array.from({ length: this.months[this.selectedMonth].days }, (_, i) => i + 1),
            };
        },
    },
};
</script>

<style>
.datepicker {
    background-color: #DBE9F6;
}
</style>
