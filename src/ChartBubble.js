import React from "react";
import { Bubble } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);



export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

  export function ChartBubble({ chartData }) {
    return <div width="50%" height="50%"><Bubble options={options} data={chartData} /></div>;

 
}
