<script>
import { ref } from "vue";
import FlagArg from "../assets/img/FlagArg.svg";
import FlagUS from "../assets/img/FlagUS.svg";
import Arrow from "../assets/img/arrow.svg";
import Button from "../assets/img/button.svg";
import DeployArrow from "../assets/img/deploy.svg";
import { Line } from "vue-chartjs";
import * as chartConfig from "../utils/chartConfig";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const currenciesRef = ref(0);
const result = ref("");
const rate = ref("");
const token = localStorage.getItem("token");

setTimeout(() => {
  axios
    .post(`http://localhost:8000/api/v1/exchange/`, { token })
    .then((res) => {
      console.log(res.data);
      currenciesRef.value = res.data;
      rate.value = res.data.rates.ARS;
    })
    .catch((error) => alert("u must logged or token expired " + error.message));
}, 1250);

export default {
  name: "Chart",
  components: {
    Line,
  },
  data() {
    return {
      chartConfig,
      FlagArg,
      FlagUS,
      Arrow,
      Button,
      DeployArrow,
      currenciesRef,
      inputValue: "",
      result,
    };
  },
  watch: {
    inputValue(newVal) {
      this.$nextTick(() => {
        result.value = (newVal / rate.value).toFixed(2);
      });
    },
  },
};
</script>

<template>
  <div class="chart-container">
    <div class="convert-options">
      <div class="fiatToChange">
        <p class="p-gray">From</p>
        <div class="inputFiatToChange">
          <div class="changeFiat">
            <img :src="FlagArg" alt="arg" />
            <p class="fiat">ARS</p>
            <img @click="" class="deploy-arrow" :src="DeployArrow" alt="" />
          </div>
          <div class="containerInput">
            <input
              v-model="inputValue"
              class="inputFTC"
              placeholder="Enter here"
              type="text"
            />
          </div>
        </div>
      </div>
      <div class="containerButton">
        <img class="buttonExchange" :src="Button" />
      </div>
      <div class="fiatConverted">
        <p class="p-gray">To</p>
        <div class="inputFiatToChange">
          <div class="changeFiat">
            <img class="flagUS" :src="FlagUS" alt="us" />
            <p class="fiat">{{ currenciesRef?.base }}</p>
            <img class="deploy-arrow" :src="DeployArrow" alt="" />
          </div>
          <div>
            <input
              class="inputFC"
              placeholder="000"
              type="text"
              v-model="result"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="fiatDescription">
      <p class="fiat-description">From Argentine Peso to US Dollar</p>
      <div class="exchange-rate">
        <p class="fiat-rate">{{ currenciesRef?.rates?.ARS }}</p>
        <img class="arrow-trend" :src="Arrow" alt="" />
        <p class="p-rate">+4.11%</p>
      </div>
    </div>
    <Line :data="chartConfig.data" :options="chartConfig.options" />
  </div>
</template>

<style scoped>
.chart-container {
  height: 47.5%;
  width: 60%;
  padding: 20px;
  margin-bottom: 24px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.24);
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.24);
}
.p-header {
  font-size: 10px;
  color: #4f4d55;
}
h1 {
  margin: 0;
}
.convert-options {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
}
canvas {
  max-height: 200px;
}

img {
  width: 27%;
}
.fiatToChange {
  margin-left: 3px;
}
.exchange-rate {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.p-rate {
  color: #52a86e;
  font-size: 12px;
  margin: 0;
}
.inputFiatToChange {
  display: flex;
  align-items: center;
}
input {
  border: none;
  color: #4facfe;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: #4facfe;
}
.inputFTC {
  margin-left: 20%;
  font-weight: 300;
  max-width: 11vw;
}

.inputFC {
  margin-left: 20%;
  font-weight: 300;
  width: 5.25vw;
}
.buttonExchange {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

.buttonExchange:hover {
  cursor: pointer;
}

.p-gray {
  color: #88939d;
  letter-spacing: 1px;
  font-size: 12px;
  margin-bottom: 6px;
  margin-top: 0;
}
.fiat {
  margin: 0 0 0 8px;
  color: #172028;
  font-weight: 500;
  letter-spacing: 1px;
}

.fiat-description {
  margin: 0;
  color: #88939d;
  font-weight: 500;
}

.fiatDescription {
  margin-left: 5px;
  margin-bottom: 6px;
}

.fiat-rate {
  margin: 0;
  color: #363840;
  font-size: 20px;
  font-weight: 600;
  margin-top: 5px;
}

.deploy-arrow {
  width: 10px;
  height: 6px;
  margin-left: 1.5px;
}

.deploy-arrow:hover {
  cursor: pointer;
}

.arrow-trend {
  margin: 4px 0 0 5px;
  width: 24px;
}

.fiatConverted,
.fiatToChange {
  width: 35%;
}

.containerButton {
  width: 10%;
  height: 10%;
}

.changeFiat {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.p-footer {
  margin: 0;
  text-align: center;
}

h1 {
  font-size: 72px;
}

.center-mobile {
  display: inline;
}

.p-mobile {
  display: none;
  color: #4f4d55;
  text-align: center;
}

.p-desktop {
  color: #4f4d55;
  text-align: center;
}

.inputFTC,
.inputFC {
  text-align: end;
}

@media screen and (max-width: 950px) {
  .inputFTC,
  .inputFC {
    background-color: transparent;
  }

  .containerButton {
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 820px) {
  .inputFTC,
  .inputFC {
    margin-left: 0;
  }
  .chart-container {
    width: 47.5%;
    height: 55%;
  }

  .convert-options {
    flex-direction: column;
  }
  .inputFiatToChange {
    justify-content: space-between;
  }
  .fiatConverted,
  .fiatToChange {
    width: 100%;
  }
  .containerButton {
    width: 100%;
  }
  canvas {
    max-height: 165px;
  }
}
@media screen and (max-width: 750px) {
  .inputFTC,
  .inputFC {
    margin-left: 0;
  }
  h1 {
    font-size: 36px;
  }
  .center-mobile {
    display: block;
  }

  .p-desktop {
    display: none;
  }
  .p-mobile {
    display: initial;
  }
}
@media screen and (max-width: 690px) {
  .chart-container {
    width: 52.5%;
  }
  .inputFTC,
  .inputFC {
    max-width: 12.5vw;
    width: 12.5vw;
  }
}

@media screen and (max-width: 600px) {
  .inputFTC,
  .inputFC {
    max-width: 14vw;
    width: 14vw;
  }
}

@media screen and (max-width: 545px) {
  .inputFTC,
  .inputFC {
    max-width: 17vw;
    width: 17vw;
  }

  .chart-container {
    height: 60%;
    width: 80%;
  }
  .convert-options {
    gap: 10px;
  }
  .chart-container {
    height: 58%;
  }
  .fiat-description,
  .p-footer,
  .p-mobile {
    font-size: 12px;
  }
  h1 {
    font-size: 28px;
  }
  .fiat-rate {
    font-size: 14px;
  }
}

@media screen and (max-width: 545px) {
  .inputFTC,
  .inputFC {
    max-width: 20vw;
    width: 20vw;
  }
}
@media screen and (max-width: 385px) {
  .inputFTC,
  .inputFC {
    max-width: 25vw;
    width: 25vw;
  }
  .sub-container {
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 320px) {
  .fiat {
    font-size: 12px;
  }
  .changeFiat {
    justify-content: start;
  }
  .fiat-description,
  .p-footer,
  .p-mobile {
    font-size: 11px;
  }
  h1 {
    font-size: 26px;
  }
  .fiat-rate {
    font-size: 13px;
  }
  canvas {
    max-height: 200px;
  }
  .inputFTC,
  .inputFC {
    max-width: 30vw;
    width: 30vw;
  }
}
</style>
