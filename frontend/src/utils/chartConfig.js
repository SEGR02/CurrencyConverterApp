import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import "chartjs-plugin-annotation"; // Importa el complemento

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "",
      backgroundColor: "#ebf1fd",
      data: [40, 39, 10, 40, 39, 80, 40],
      borderColor: "#1751D0",
      borderWidth: 1.5,
      pointRadius: 0,
      fill: true,
      tension: 0.1,
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      labels: {},
    },
  },
};
