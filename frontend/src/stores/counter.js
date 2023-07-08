import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", () => {
  const count = ref([]); // Inicializar count como un array vacío
  const doubleCount = computed(() => count.value.length * 2); // Usar length en lugar de value directamente

  function increment() {
    count.value.push({}); // Ejemplo de incrementar la cantidad de currencies
  }

  axios
    .get(`http://localhost:8000/api/v1/exchange/`)
    .then((res) => {
      count.value = res.data;
      console.log(res.data);
    })
    .catch((error) => alert(error.response.data.message));

  return { count, doubleCount, increment, currencies: count }; // Retornar count directamente
});
