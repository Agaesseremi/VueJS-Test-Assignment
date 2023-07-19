<script>
import moment from 'moment';

export default {
  name: 'ButtonDays',
  data() {
    return {
      activeButton: null
    };
  },
  methods: {
    toggleStyle(n) {
      this.activeButton = this.activeButton === n ? null : n;
    }
  },
  computed: {
    moment() {
      return moment;
    }
  }
};
</script>
<template>
  <div class="flex mb-5">
<button
  v-for="n in 4"
  :key="n"
  class="flex-1 button-days bg-white border border-gray-300 rounded-full shadow-md"
  :class="{ 'active': activeButton === n }"
  @click="toggleStyle(n)"
>
        <p class="text-number">
          {{
            moment()
              .add(n - 1, 'days')
              .format('DD')
          }}
        </p>
        <p class="text-days">
          {{
            moment()
              .add(n - 1, 'days')
              .format('ddd')
          }}
        </p>
    </button>
  </div>
</template>

<style scoped>


.active.button-days {
  background-color: blue;
  color: white;
}

.active .text-number {
  color: white;
}

.active .text-days {
  color: white;
}
</style>