import React, { useState } from "react";

import { ChartGdp } from "./ChartGdp";
import Content from "../src/Dashboard/Content";
import { KEY , API_URL,ret_type,ret_limit,FTAs2019To2020_Resource,FTAs2019To2020,
  FTASTop60CountriesFrom2018To2020_Resource,FTASTop60CountriesFrom2018To2020,useStyles,FTVsfrom2017to2020_Resource,
  FTVsfrom2017to2020,FEEsTourismFrom2018To2020_Resource,FEEsTourismFrom2018To2020} from "../src/Const/Const";
import 'chart.js/auto'
import { ChartPie } from "./ChartPie";
import { ChartDonut } from "./ChartDonut";
import { ChartLine } from "./ChartLine";


const fetchTop15CountriesFTAs = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"6c0a9e43-360f-460b-91a1-02837d827f3a?api-key="+KEY+"&format=json&limit=65"
    API_URL+FTAs2019To2020_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));
      let newArr = [];

      {data.records.filter(record => !(record.country).includes('Total')).map(filteredName => (
        console.log("filteredName size"+JSON.stringify(filteredName)),
        newArr.push(filteredName)
      ))}

      const chartData = {
        labels: newArr
        .map((record) => record.country),
        datasets: [
          {

            data: newArr
              .map((record) => record.ftas_in_india_in_2019),
            //backgroundColor: "rgba(155, 99, 132, 0.6)",
            //borderWidth: 4,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
          
        ],
      };
      callback(chartData);
    });
  });
};


const fetchFTASTop60CountriesFrom2018To2020 = (callback) => {
  console.log("fetching fetchFTASTop60CountriesFrom2018To2020"+KEY);
  const response = fetch(
    //API_URL+"6c0a9e43-360f-460b-91a1-02837d827f3a?api-key="+KEY+"&format=json&limit=65"
    API_URL+FTASTop60CountriesFrom2018To2020_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));
      let newArr = [];

      {data.records.filter(record => !(record.nationality).includes('Total')).map(filteredName => (
        console.log("filteredName size"+JSON.stringify(filteredName)),
        newArr.push(filteredName)
      ))}

      const chartData = {
        labels: newArr
        .map((record) => record.nationality),
        datasets: [
          {

            data: newArr
              .map((record) => record._2018),
            //backgroundColor: "rgba(155, 99, 132, 0.6)",
            //borderWidth: 4,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
          {

            data: newArr
              .map((record) => record._2019),
            //backgroundColor: "rgba(155, 99, 132, 0.6)",
            //borderWidth: 4,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
          {

            data: newArr
              .map((record) => record._2020),
            //backgroundColor: "rgba(155, 99, 132, 0.6)",
            //borderWidth: 4,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      callback(chartData);
    });
  });
};


const fetchFTVsfrom2017to2020 = (callback) => {
  console.log("fetching fetchFTVsfrom2017to2020"+KEY);
  const response = fetch(
    //API_URL+"6c0a9e43-360f-460b-91a1-02837d827f3a?api-key="+KEY+"&format=json&limit=65"
    API_URL+FTVsfrom2017to2020_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));
      let newArr = [];

      {data.records.filter(record => !(record.state_ut).includes('Total')).map(filteredName => (
        console.log("filteredName size"+JSON.stringify(filteredName)),
        newArr.push(filteredName)
      ))}

      const chartData = {
        labels: newArr
        .map((record) => record.state_ut),
        datasets: [
          {
            label: "2017 - FTV",
            data: newArr
              .map((record) => record._2017___ftv),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "2018 - FTV",
            data: newArr
              .map((record) => record._2018___ftv),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },
          {
            label: "2019 - FTV",
            data: newArr
              .map((record) => record._2018___ftv),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2020 - FTV",
            data: newArr
              .map((record) => record._2020___ftv),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          
        ],
      };
      callback(chartData);
    });
  });
};

const fetchFEEsTourismFrom2018To2020 = (callback) => {
  console.log("fetching FEEsTourismFrom2018To2020_Resource"+KEY);
  const response = fetch(
    //API_URL+"6c0a9e43-360f-460b-91a1-02837d827f3a?api-key="+KEY+"&format=json&limit=65"
    API_URL+FEEsTourismFrom2018To2020_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));
   

      const chartData = {
        labels:  data.records
        .map((record) => record.year),
        datasets: [
          {
            label: "FEE from Tourism (in Rs. Crore)",
            data: data.records
              .map((record) => record.fee_from_tourism__in_rs__crore_),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          
        ],
      };
      callback(chartData);
    });
  });
};
export function Tourism({ loggedIn, logout, login }) {
  const classes = useStyles();

  const [chartData, setChartData] = useState(null);
  const [chartType, setChartType] = useState('bar');

  const [chartTitle, setChartTitle] = useState('bar'); 

  const getTop15CountriesFTAs = () => {
    fetchTop15CountriesFTAs((chartData) => {
      setChartType('pie');
      setChartTitle(FTAs2019To2020);
      setChartData(chartData);
    });
  };
  const getFTASTop60CountriesFrom2018To2020 = () => {
    fetchFTASTop60CountriesFrom2018To2020((chartData) => {
      setChartType('pie');
      setChartTitle(FTAs2019To2020);
      setChartData(chartData);
    });
  };
  const getFTVsfrom2017to2020 = () => {
    fetchFTVsfrom2017to2020((chartData) => {
      setChartType('bar');
      setChartTitle(FTAs2019To2020);
      setChartData(chartData);
    });
  };
  const getFEEsTourismFrom2018To2020 = () => {
    fetchFEEsTourismFrom2018To2020((chartData) => {
      setChartType('bar');
      setChartTitle(FTAs2019To2020);
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
        backgroundImage: "url(/img/Tourism.png)",
      }}>
        <button className={classes.button} onClick={getTop15CountriesFTAs}>{FTAs2019To2020}</button>
        <button className={classes.button} onClick={getFTASTop60CountriesFrom2018To2020}>{FTASTop60CountriesFrom2018To2020}</button>
        <button className={classes.button} onClick={getFTVsfrom2017to2020}>{FTVsfrom2017to2020}</button>
        <button className={classes.button} onClick={getFEEsTourismFrom2018To2020}>{FEEsTourismFrom2018To2020}</button>

    </div>
      
    {chartData && chartType === 'bar' && 
    <div style={{
        height: "50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "contrast(75%)",
        //backgroundImage: "url(/img/wallpaper2-min.png)",
      }}>
        <div style={{
        height: "50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "contrast(75%)",
        fontWeight : "bold",
        fontSize:20,
        //backgroundImage: "url(/img/wallpaper2-min.png)",
      }}>
        {chartTitle}
        </div>

        {chartData && <ChartGdp chartData={chartData} />}
      </div>
    }
         {chartData && chartType === 'pie' && 
      <div 
       style={{
        height: "50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "contrast(75%)",
        //backgroundImage: "url(/img/wallpaper2-min.png)",
      }}>
               <div style={{
        height: "50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "contrast(75%)",
        fontWeight : "bold",
        fontSize:20,
        //backgroundImage: "url(/img/wallpaper2-min.png)",
      }}>
        {chartTitle}
        </div>
        {chartData && <ChartPie chartData={chartData} />}
      </div>
          }
         {chartData && chartType === 'donut' && 

      <div 
       style={{
        height: "50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "contrast(75%)",
        //backgroundImage: "url(/img/wallpaper2-min.png)",
      }}>
               <div style={{
        height: "50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "contrast(75%)",
        fontWeight : "bold",
        fontSize:20,
        //backgroundImage: "url(/img/wallpaper2-min.png)",
      }}>
        {chartTitle}
        </div>
        {chartData && <ChartDonut chartData={chartData} />}
      </div>
      }
         {chartData && chartType === 'line' && 

<div 
 style={{
  height: "50%",
  backgroundPosition: "center",
  backgroundSize: "cover",
  filter: "contrast(75%)",
  //backgroundImage: "url(/img/wallpaper2-min.png)",
}}>
                <div style={{
        height: "50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "contrast(75%)",
        fontWeight : "bold",
        fontSize:20,
        //backgroundImage: "url(/img/wallpaper2-min.png)",
      }}>
        {chartTitle}
        </div>
  {chartData && <ChartLine chartData={chartData} />}
</div>
}

    </div>


    </Content>

  );
}
