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
    <div class="columns is-flex-mobile">
        <Button class="column">
            <p>
                <i class="fa-solid fa-arrow-left"></i>
                {{ monthBefore.format('MMMM') }}
            </p>
        </Button>
        <h2 class="column center">{{ selectedDate.format('MMMM') }}</h2>
        <Button class="column">
            <p>
                {{ monthAfter.format('MMMM') }}
                <i class="fa-solid fa-arrow-right"></i>
            </p>
        </Button>
    </div>
</template>


<style scoped>
button{
    background-color: transparent;
    border:none;
}

.center {
    text-align: center;
    text:bold;
    font-size: 24px;
}

.columns{
    margin-bottom:3rem;
}

</style>