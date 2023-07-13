import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", () => {
  const count = ref([]);
  const doubleCount = computed(() => count.value.length * 2);

  function increment() {
    count.value.push({});
  }

  axios
    .get(`http://localhost:8000/api/v1/exchange/`)
    .then((res) => {
      count.value = res.data;
      console.log(res.data);
    })
    .catch((error) => alert(error.response.data.message));

  return { count, doubleCount, increment, currencies: count };
});
