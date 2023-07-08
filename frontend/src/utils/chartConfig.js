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

const xScalePadding = {
  id: "xScalePadding",
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const {
      ctx,
      data,
      scales: { x, y },
    } = chart;

    console.log(x);
  },
};

export const data = {
  labels: ["June", "July", "August", "September", "October", "November"],
  datasets: [
    {
      label: "",
      backgroundColor: "#ebf1fd",
      data: [635000, 820000, 750000, 850000, 960000, 1680000],
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
