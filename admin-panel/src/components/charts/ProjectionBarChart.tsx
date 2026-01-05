import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

export default function ProjectionBarChart() {
  const series = [
    {
      name: "Actual",
      data: [16, 20, 17, 22, 14, 20],
    },
    {
      name: "Projected",
      data: [4, 5, 4, 5, 3, 5],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: false },
      fontFamily: "Inter, sans-serif",
      animations: { enabled: false },
    },

    plotOptions: {
      bar: {
        columnWidth: "20px",
        borderRadius: 4,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },

    colors: [
      "#A8C5DA",
      "rgba(168,197,218,0.5)",
    ],

    dataLabels: { enabled: false },

    grid: {
      borderColor: "rgba(28,28,28,0.05)",
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },

    yaxis: {
      min: 0,
      max: 30,
      tickAmount: 3,
      labels: {
        offsetX: -10,
        style: {
          fontSize: "12px",
          colors: "rgba(28,28,28,0.4)",
        },
        formatter: (v) => (v === 0 ? "0" : `${v}M`),
      },
    },

    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        offsetY: -2,
        style: {
          fontSize: "12px",
          colors: "rgba(28,28,28,0.4)",
        },
      },
    },

    legend: { show: false },
    tooltip: { enabled: false },
  };

  return (
    <ReactApexChart
      type="bar"
      height="100%"
      series={series}
      options={options}
    />
  );
}
