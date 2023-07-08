<script setup>
import Chart from "./Chart.vue";
</script>

<template>
  <div class="container">
    <div class="sub-container">
      <p class="p-header">FAST MONEY</p>
      <h1>Currency Converter</h1>
      <p class="p-desktop">
        Convert popular currencies from around the world with updated exchanges
        <br />rates using our calculator
      </p>
      <p class="p-mobile">
        Convert popular currencies from around the <br />
        world with updated exchangesrates using our <br />
        calculator
      </p>
      <Chart />
      <p class="p-footer">
        Currency calculation tools use reference exchange
        <br />rates obtained from major market data sources
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
  border-radius: 6px;
}
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
  font-size: 72px;
}
.p-footer {
  margin: 0;
  text-align: center;
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
@media screen and (max-width: 820px) {
  .chart-container {
    width: 47.5%;
    height: 55%;
  }
}
@media screen and (max-width: 750px) {
  h1 {
    font-size: 36px;
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
}

@media screen and (max-width: 545px) {
  .chart-container {
    height: 60%;
    width: 80%;
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
}
@media screen and (max-width: 385px) {
  .sub-container {
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 320px) {
  .p-footer,
  .p-mobile {
    font-size: 11px;
  }
  h1 {
    font-size: 26px;
  }
}
</style>
