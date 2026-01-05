import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

export default function RevenueLineChart() {
 const isDark =
  typeof window !== "undefined" &&
  document.documentElement.classList.contains("dark");

const series = [
 
  {
    name: "Current Week (Actual)",
    data: [12, 8, 10, 15, null, null],
  },

  {
    name: "Current Week (Projected)",
    data: [null, null, null, 15, 18, 20],
  },


  {
    name: "Previous Week",
    data: [8, 15, 13, 10, 14, 23],
  },
];


const options: ApexOptions = {
  chart: {
    type: "area",
    toolbar: { show: false },
    zoom: { enabled: false },
    fontFamily: "Inter, sans-serif",
  },

stroke: {
  curve: "smooth",
  width: 3,
  dashArray: [0, 6, 0], 
},

colors: [
  "var(--chart-line-primary)",   
  "var(--chart-line-primary)",  
  "var(--chart-line-secondary)", 
],

fill: {
  type: ["solid", "solid", "gradient"],
  colors: ["transparent", "transparent", undefined],
  gradient: {
    shade: "light",
    type: "vertical",
    opacityFrom: 0.16,
    opacityTo: 0,
    stops: [0, 60],
  },
},



  grid: {
    borderColor: "var(--chart-grid)",
    strokeDashArray: 0,
    yaxis: {
      lines: { show: true },
    },
  },

  markers: {
    size: 0,
  },

  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: {
      style: {
        fontSize: "12px",
        colors: "var(--chart-text-muted)",
      },
    },
  },

  yaxis: {
    labels: {
      style: {
        fontSize: "12px",
        colors: "var(--chart-text-muted)",
      },
    },
  },

  legend: {
    show: false,
  },

tooltip: {
  enabled: true,
  theme: isDark ? "dark" : "light",
  style: {
    fontSize: "12px",
    fontFamily: "Inter, sans-serif",
  },
},


};


  return (
    <div className="h-[232px] w-full">
      <ReactApexChart
        type="area"
        height="100%"
        series={series}
        options={options}
      />
    </div>
  );
}
