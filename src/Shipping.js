import React, { useEffect, useState } from "react";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ChartGdp } from "./ChartGdp";
import { SummaryCard } from "../src/People/Driver";
import Content from "../src/Dashboard/Content";
import { KEY , API_URL,ret_type,ret_limit,GrowthOfIndianShippingFrom1947Onwards,GrowthOfIndianShippingAsOn31December2014_Resource,
  GrowthOfIndianShippingFrom1947Onwards_Resource,GrowthOfIndianShippingAsOn31December2014} from "../src/Const/Const";
import { Line } from "react-chartjs-2";
import 'chart.js/auto'


const fetchGrowthOfIndianShippingAsOn31December2014 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"5dc3565c-5a91-4d39-9724-74c20dc62fc5?api-key="+KEY+"&format=json&limit=65"
    API_URL+GrowthOfIndianShippingAsOn31December2014_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.year),
        datasets: [
          {
            label: "Coastal-No. of vessels",
            data: data.records
              .map((record) => record.coastal_no_of_vessels),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Coastal-GRT",
            data: data.records
              .map((record) => record.coastal_grt),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
          {
            label: "Coastal-Average GRT",
            data: data.records
              .map((record) => record.coastal_average_grt),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Overseas-No. of vessels",
            data: data.records
              .map((record) => record.overseas_no_of_vessels),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Overseas-GRT",
            data: data.records
              .map((record) => record.overseas_grt),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Overseas-Average GRT",
            data: data.records
              .map((record) => record.overseas_average_grt),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Total-No. of vessels",
            data: data.records
              .map((record) => record.total_no_of_vessels),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Total-GRT",
            data: data.records
              .map((record) => record.total_grt),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Total-Average GRT",
            data: data.records
              .map((record) => record.total_average_grt),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };
      callback(chartData);
    });
  });
};

const fetchGrowthOfIndianShippingFrom1947Onwards = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"e8d9007e-fd5d-4657-a3a0-27f666e62df3?api-key="+KEY+"&format=json"
    API_URL+GrowthOfIndianShippingFrom1947Onwards_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.year),
        datasets: [
          {
            label: "Coastal-No. of vessels",
            data: data.records
              .map((record) => record.coastal_no_of_vessels),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Coastal-GRT",
            data: data.records
              .map((record) => record.coastal_grt),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
          {
            label: "Coastal-Average GRT",
            data: data.records
              .map((record) => record.coastal_average_grt),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Overseas-No. of vessels",
            data: data.records
              .map((record) => record.overseas_no_of_vessels),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Overseas-GRT",
            data: data.records
              .map((record) => record.overseas_grt),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Overseas-Average GRT",
            data: data.records
              .map((record) => record.overseas_average_grt),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Total-No. of vessels",
            data: data.records
              .map((record) => record.total_no_of_vessels),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Total-GRT",
            data: data.records
              .map((record) => record.total_grt),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Total-Average GRT",
            data: data.records
              .map((record) => record.total_average_grt),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };
      callback(chartData);
    });
  });
};


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(img/wallpaper2-min.PNG)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    paddingTop: "40px",
  },
  paper: {
    margin: theme.spacing(8, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    alignSelf:'center',
    width:'20%',
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success  .light,
    fontWeight : "bold",
    fontSize:20,
    color:'black'
    },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.light,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function Shipping({ loggedIn, logout, login }) {
  const classes = useStyles();

  const [chartData, setChartData] = useState(null);


  const getGrowthOfIndianShippingAsOn31December2014 = () => {
    fetchGrowthOfIndianShippingAsOn31December2014((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };

  const getGrowthOfIndianShippingFrom1947Onwards = () => {
    fetchGrowthOfIndianShippingFrom1947Onwards((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };
  return (
    <Content>
    <div
      style={{
        height: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "contrast(75%)",
        //backgroundImage: "url(/img/wallpaper.jpeg)",
      }}
    />
    <div className="App">
    <div style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "contrast(75%)",
        border:"1px solid black",
        backgroundImage: "url(/img/Shipping.png)",
      }}>
        <button className={classes.button} onClick={getGrowthOfIndianShippingFrom1947Onwards}>{GrowthOfIndianShippingFrom1947Onwards}</button>
        <button className={classes.button} onClick={getGrowthOfIndianShippingAsOn31December2014}>{GrowthOfIndianShippingAsOn31December2014}</button>

    </div>
       <div 
       style={{
        height: "1000px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "contrast(75%)",
        //backgroundImage: "url(/img/wallpaper.jpeg)",
      }}>
        {chartData && <ChartGdp chartData={chartData} />}      
      </div> 
    </div>
    </Content>
  );

  
}
