<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
            <div>
                <label for="month" class="block font-bold">Mois :</label>
                <select id="month" v-model="selectedMonth" class="w-full p-2 rounded border">
                    <option value="Jan">January</option>
                    <option v-for="(month, key) in months" :key="key" :value="key">{{ month.name }}</option>
                </select>
                <button @click="selectMonth" class="w-full mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                    Sélectionner le mois
                </button>
            </div>

            <div v-if="isMonthSelected">
                <label for="day" class="block mt-4 font-bold">Jour :</label>
                <select id="day" v-model="selectedDay">
                    <option value="">Sélectionnez un jour</option>
                    <option v-for="(day, index) in selectedMonthData.days" :key="index" :value="day">{{ day }}</option>
                </select>
                <button @click="selectDay" class="w-full mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                    Sélectionner le jour
                </button>
            </div>

            <div v-if="isMonthSelected && isDaySelected" class="mt-4">
                <p class="font-bold">Mois sélectionné : {{ selectedMonthData.name }}</p>
                <p class="mt-2">Jour sélectionné : {{ selectedDay }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedMonth: 'Jan',
            selectedDay: '',
            isMonthSelected: false,
            isDaySelected: false,
            months: {
                "Jan": {
                    "name": "January",
                    "short": "Jan",
                    "number": 1,
                    "days": 31
                },
                "Feb": {
                    "name": "February",
                    "short": "Feb",
                    "number": 2,
                    "days": 28
                },
                "Mar": {
                    "name": "March",
                    "short": "Mar",
                    "number": 3,
                    "days": 31
                },
                "Apr": {
                    "name": "April",
                    "short": "Apr",
                    "number": 4,
                    "days": 30
                },
                "May": {
                    "name": "May",
                    "short": "May",
                    "number": 5,
                    "days": 31
                },
                "Jun": {
                    "name": "June",
                    "short": "Jun",
                    "number": 6,
                    "days": 30
                },
                "Jul": {
                    "name": "July",
                    "short": "Jul",
                    "number": 7,
                    "days": 31
                },
                "Aug": {
                    "name": "August",
                    "short": "Aug",
                    "number": 8,
                    "days": 31
                },
                "Sep": {
                    "name": "September",
                    "short": "Sep",
                    "number": 9,
                    "days": 30
                },
                "Oct": {
                    "name": "October",
                    "short": "Oct",
                    "number": 10,
                    "days": 31
                },
                "Nov": {
                    "name": "November",
                    "short": "Nov",
                    "number": 11,
                    "days": 30
                },
                "Dec": {
                    "name": "December",
                    "short": "Dec",
                    "number": 12,
                    "days": 31
                }
            },
            selectedMonthData: null,
        };
    },
    methods: {
        selectMonth() {
            if (this.selectedMonth !== '') {
                this.isMonthSelected = true;
                this.selectedMonthData = this.months[this.selectedMonth];
            }
        },
        selectDay() {
            if (this.selectedDay !== '') {
                this.isDaySelected = true;
            }
        },
    },
};
</script>
