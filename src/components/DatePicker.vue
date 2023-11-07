<template>
    <div class="datepicker min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded shadow-md w-screen">
            <div class="w-full lg:w-1/3 mx-auto">
                <label for="month" class="block font-bold">Mois :</label>
                <select id="month" v-model="selectedMonth" class="w-full p-2 rounded border">
                    <option value="Jan">Janvier</option>
                    <option v-for="(month, key) in months" :key="key" :value="key">{{ month.name }}</option>
                </select>
                <button @click="selectMonth" class="w-full mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                    Sélectionner le mois
                </button>
            </div>

            <div class="w-full lg:w-1/3 mx-auto" v-if="isMonthSelected">
                <label for="day" class="block mt-4 font-bold">Jour :</label>
                <select id="day" v-model="selectedDay">
                    <option value="">Sélectionnez un jour</option>
                    <option v-for="(day, index) in selectedMonthData.days" :key="index" :value="day">{{ day }}</option>
                </select>
                <button @click="selectDay" class="w-full mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                    Sélectionner le jour
                </button>
            </div>

            <div v-if="isMonthSelected && isDaySelected" class="w-full lg:w-1/3 mx-auto mt-4">
                <p class="font-bold">Date sélectionné : {{ selectedDay }} {{ selectedMonthData.name }} 2023</p>
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

<style></style>
