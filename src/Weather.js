import React, { useState } from "react";

import { ChartGdp } from "./ChartGdp";
import Content from "../src/Dashboard/Content";
import { ChartPie } from "./ChartPie";

import { ChartDonut } from "./ChartDonut";

import { ChartLine } from "./ChartLine";
import { KEY , API_URL,ret_type,ret_limit,RainfallInAllIndia1901To2019_Resource,RainfallInAllIndia1901To2019,
  MonthlySeasonalAnnualMeanTemperatureIndiaFrom1901To2016_Resource,MonthlySeasonalAnnualMeanTemperatureIndiaFrom1901To2016,
  useStyles,DeclineInForestCoverOn10February2022_Resource,DeclineInForestCoverOn10February2022} from "../src/Const/Const";



const fetchMonthlySeasonalAnnualMeanTemperatureIndiaFrom1901To2016_Resource = (callback) => {
  console.log(" fetchRainfallInAllIndia1901To2019"+KEY);
  const response = fetch(
    //API_URL+"e297f7c6-3ffa-4776-92b3-0dd05dde4e2a?api-key="+KEY+"&format=json&offset=0&limit=100"
    API_URL+MonthlySeasonalAnnualMeanTemperatureIndiaFrom1901To2016_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();
    data.then((data) => {
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: data.records
          .map((record) => record.year),
        datasets: [
          {
            label: "Jun",
            data: data.records
              .map((record) => record.jun),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "Jul",
            data: data.records
              .map((record) => record.jul),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },
          {
            label: "Aug",
            data: data.records
              .map((record) => record.aug),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "Sep",
            data: data.records
              .map((record) => record.sep),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Jun - Sep",
            data: data.records
              .map((record) => record.jun_sep),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };  
      callback(chartData);
    });
  });
};

const fetchRainfallInAllIndia1901To2019 = (callback) => {
  console.log(" fetchRainfallInAllIndia1901To2019"+KEY);
  const response = fetch(
    //API_URL+"e297f7c6-3ffa-4776-92b3-0dd05dde4e2a?api-key="+KEY+"&format=json&offset=0&limit=100"
    API_URL+RainfallInAllIndia1901To2019_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();
    data.then((data) => {
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: data.records
          .map((record) => record.year),
        datasets: [
          {
            label: "Jun",
            data: data.records
              .map((record) => record.jun),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "Jul",
            data: data.records
              .map((record) => record.jul),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },
          {
            label: "Aug",
            data: data.records
              .map((record) => record.aug),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "Sep",
            data: data.records
              .map((record) => record.sep),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Jun - Sep",
            data: data.records
              .map((record) => record.jun_sep),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };  
      callback(chartData);
    });
  });
};
const fetchDeclineInForestCoverOn10February2022 = (callback) => {
  console.log(" DeclineInForestCoverOn10February2022");
  const response = fetch(
    //API_URL+"e297f7c6-3ffa-4776-92b3-0dd05dde4e2a?api-key="+KEY+"&format=json&offset=0&limit=100"
    API_URL+DeclineInForestCoverOn10February2022_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();
    data.then((data) => {
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: data.records
          .map((record) => record.state_ut),
        datasets: [
          {
            label: "Geographical Area (GA)",
            data: data.records
              .map((record) => record.geographical_area__ga_),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "Total Forest Cover",
            data: data.records
              .map((record) => record.total_forest_cover),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },
          {
            label: "Change in Forest Cover w.r.t. ISFR 2019",
            data: data.records
              .map((record) => record.change_in_forest_cover_w_r_t__isfr_2019),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          
        ],
      };  
      callback(chartData);
    });
  });
};

export function Weather({ loggedIn, logout, login }) {
  //const classes = useStyles();
  const classes = useStyles();

  //const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [chartType, setChartType] = useState(null);
  const [chartTitle, setChartTitle] = useState(null);

  
  const getMonthlySeasonalAnnualMeanTemperatureIndiaFrom1901To2016_Resource = () => {
    fetchMonthlySeasonalAnnualMeanTemperatureIndiaFrom1901To2016_Resource((chartData) => {
      setChartType('line');
      setChartTitle(MonthlySeasonalAnnualMeanTemperatureIndiaFrom1901To2016);
      setChartData(chartData);
    });
  };
  const getRainfallInAllIndia1901To2019 = () => {
    fetchRainfallInAllIndia1901To2019((chartData) => {
      setChartType('line');
      setChartTitle(RainfallInAllIndia1901To2019);
      setChartData(chartData);
    });
  };
  const getDeclineInForestCoverOn10February2022 = () => {
    fetchDeclineInForestCoverOn10February2022((chartData) => {
      setChartType('line');
      setChartTitle(DeclineInForestCoverOn10February2022);
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
        backgroundImage: "url(/img/Weather.png)",
      }}>

        <button className={classes.button} onClick={getMonthlySeasonalAnnualMeanTemperatureIndiaFrom1901To2016_Resource}>{MonthlySeasonalAnnualMeanTemperatureIndiaFrom1901To2016}</button>
        <button className={classes.button} onClick={getRainfallInAllIndia1901To2019}>{RainfallInAllIndia1901To2019}</button>
        <button className={classes.button} onClick={getDeclineInForestCoverOn10February2022}>{DeclineInForestCoverOn10February2022}</button>

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