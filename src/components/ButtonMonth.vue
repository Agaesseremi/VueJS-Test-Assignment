<template>
  <div class="flex mb-5">
    <button class="flex-1 border-2 border-rose-600" @click="updateMonthBefore">
      <p>
        <i class="fas fa-arrow-left"></i>
        {{ monthBefore.format('MMMM') }}
      </p>
    </button>
    <h2 class="flex-1 text-center font-bold text-lg">{{ selectedDate.format('MMMM') }}</h2>
    <button class="flex-1" @click="updateMonthAfter">
      <p>
        {{ monthAfter.format('MMMM') }}
        <i class="fas fa-arrow-right"></i>
      </p>
    </button>
  </div>
</template>


<script>
import moment from 'moment'
import { ref } from 'vue'

export default {
  name: 'ButtonMonth',
  setup() {
    let selectedDate = ref(moment())
    let monthBefore = ref(moment().subtract(1, 'months'))
    let monthAfter = ref(moment().add(1, 'months'))

    const updateMonthBefore = () => {
      monthBefore.value = monthBefore.value.subtract(1, 'months')
    }

    const updateMonthAfter = () => {
      monthAfter.value = monthAfter.value.add(1, 'months')
    }

    return {
      selectedDate,
      monthBefore,
      monthAfter,
      updateMonthBefore,
      updateMonthAfter
    }
  }
}
</script>



<style scoped>
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>