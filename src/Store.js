// store.js

import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore('app', {
    state: () => ({
        selectedMonth: null,
        selectedDay: null,
        user: null,
        isConnected: false,
    }),
    actions: {
        setMonth(month) {
            this.selectedMonth = month;
        },
        setDay(day) {
            this.selectedDay = day;
        },
        setUser(data) {
            this.user = data;
        },
        setIsConnected(value) {
            this.isConnected = value;
        },
        getIsConnected() {
            return this.isConnected;
        },
        getUserData() {
            return this.user;
        },
        async getTasksByUser() {
            const token = localStorage.getItem('token');

            if (token) {
                const headers = {
                    Authorization: `Bearer ${token}`
                };

                try {
                    const response = await axios.get('http://127.0.0.1:8000/api/tasks', { headers });
                    const userData = response.data.data[0];
                    this.setUser(userData);
                    console.log(userData);
                } catch (error) {
                    console.error('Erreur lors de la récupération des tâches :', error);
                }
            }
        },
    },
});
