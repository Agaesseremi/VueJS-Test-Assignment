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
  <div class="grid grid-cols-4 gap-3">

    <button v-for="n in 4" :key="n"
      class="button-days cursor-pointer bg-white border rounded-full h-20 w-14 sm:h-40 sm:w-32 mx-auto flex flex-col justify-center items-center"
      :class="{ 'active': activeButton === n }" @click="toggleStyle(n)">
      <p class="text-xl font-bold">
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