import React from "react";
import { Doughnut } from "react-chartjs-2";
//import { Chart } from "react-google-charts";
import {Chart, ArcElement} from 'chart.js'
import { PieChart, PieChartTwoTone } from "@material-ui/icons";
Chart.register(ArcElement);

// export const data = [
//   ["Task", "Hours per Day"],
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7],
// ];

// export const options = {
//   title: "My Daily Activities",
// };

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Pie Chart",
    },
  },
};

//export function ChartPie() {
  export function ChartDonut({ chartData }) {
//
  //alert("ChartPie");
    return <div width="50px" height="50px"><Doughnut options={options} data={chartData} /></div>;
  // return (
  //   <Chart
  //     chartType="PieChart"
  //     data={data}
  //     options={options}
  //     width={"100%"}
  //     height={"400px"}
  //   />
  // );
}
