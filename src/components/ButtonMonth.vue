<script>
import moment from 'moment'
import { ref } from 'vue'

export default {
  name: 'ButtonMonth',
  setup() {
    let selectedDate = ref(moment())
    let monthBefore = ref(moment().subtract(1, 'months'))
    let monthAfter = ref(moment().add(1, 'months'))

    return {
      selectedDate,
      monthBefore,
      monthAfter
    }
  }
}

</script>

<template>
  <div class="flex mb-5">
    <button class="flex-1 border-2 border-rose-600" @click="monthBefore = monthBefore.subtract(1, 'months')">
      <p>
        <i class="fas fa-arrow-left"></i>
        {{ monthBefore.format('MMMM') }}
      </p>
    </button>
    <h2 class="flex-1 text-center font-bold text-lg">{{ selectedDate.format('MMMM') }}</h2>
    <button class="flex-1" @click="monthAfter = monthAfter.add(1, 'months')">
      <p>
        {{ monthAfter.format('MMMM') }}
        <i class="fas fa-arrow-right"></i>
      </p>
    </button>
  </div>
</template>


<style scoped>
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>