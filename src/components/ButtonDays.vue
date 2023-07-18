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
  <div class="columns ">
    <Button
      v-for="n in 5"
      :key="n"
      class="column is-one-fifth time flex flex-wrap justify-content-center align-items-center button-days" 
      :class="{ 'active': activeButton === n }"
      @click="toggleStyle(n)"
    >
      <div class="columns">
        <h3 class="m-0 column text-number text-2xl">
          {{
            moment()
              .add(n - 1, 'days')
              .format('DD')
          }}
        </h3>
        <p class="text-days column m-0">
          {{
            moment()
              .add(n - 1, 'days')
              .format('ddd')
          }}
        </p>
      </div>
    </Button>
  </div>
</template>


<style scoped>
.button-days {
  transform: rotate(90deg);
  margin: auto;
  height: 4rem;
  max-width: 5rem;
  background: white;
  border-radius: 40px 40px 40px 40px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease; 
  margin-bottom: 3rem;
}
.text-number{
    transform: rotate(-90deg);
    font-size: 18px;
    color:blue;
    font-weight:bold;
}

.text-days{
    transform: rotate(-90deg);
    color:blue;
}

.button-days:hover {
  background: #f0f0f0; 
}

.active.button-days {
  background-color: blue;
  color:white;
}

.active .text-number {
  color: white;
}

.active .text-days {
  color: white;
}





</style>