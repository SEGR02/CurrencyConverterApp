<script>
import FlagArg from "../assets/img/FlagArg.png";
import FlagUS from "../assets/img/FlagUS.png";
import Arrow from "../assets/img/arrow.png";
import Button from "../assets/img/button.svg";
import { Line } from "vue-chartjs";
import * as chartConfig from "../utils/chartConfig";
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

export default {
  name: "App",
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
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="sub-container">
      <p class="p-header">FAST MONEY</p>
      <h1 style="font-size: 72px">Currency Converter</h1>
      <p style="color: #4f4d55; font-size: 16px">
        Convert popular currencies from around the world with updated
        exchanges<br />
        <center>rates using our calculator</center>
      </p>
      <div class="chart-container">
        <div class="convert-options">
          <div class="fiatToChange">
            <p>From</p>
            <img :src="FlagArg" alt="arg" />
          </div>
          <div><img :src="Button" /></div>
          <div>
            <p>To</p>
            <img :src="FlagUS" alt="us" />
          </div>
        </div>
        <div>
          <p style="margin: 0">From Argentine Peso to US Dollar</p>
          <div class="exchange-rate">
            <p style="margin: 0">$58,345,190</p>
            <img
              style="margin-bottom: 3px; margin-left: 3px"
              :src="Arrow"
              alt=""
            />
            <p class="p-rate">+4.11%</p>
          </div>
        </div>
        <Line :data="chartConfig.data" :options="chartConfig.options" />
      </div>
      <p>
        Currency calculation tools use reference exchange rates obtained from
        major market data sources
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sub-container {
  background-color: #f8f8f8;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.chart-container {
  height: 340px;
  width: 60%;
  padding: 32px;
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
  /* margin-top: -10px; */
}
.convert-options {
  display: flex;
  justify-content: space-between;
}
canvas {
  max-height: 200px;
}

.convert-options div p {
  margin: 0;
}

img {
  height: 30px;
  width: 30px;
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
</style>
