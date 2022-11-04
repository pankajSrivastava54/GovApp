import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { ChartGdp } from "./ChartGdp";
import Content from "../src/Dashboard/Content";
import { KEY , API_URL} from "../src/Const/Const";
import 'chart.js/auto'
import { ChartPie } from "./ChartPie";

// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchCAGR1951To2017 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"6bdbea5b-b8e9-4ae4-a197-eced68bda7e2?api-key="+KEY+"&format=json&offset=0&limit=100"
  );
  response.then((response) => {
    const data = response.json();
   
    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.period),
        datasets: [
          {
            label: "NHS",
            data: data.records
              .map((record) => record.nhs),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "SHs & District Roads",
            data: data.records
              .map((record) => record.shs___district_roads),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },
          {
            label: "Rural Roads",
            data: data.records
              .map((record) => record.rural_roads),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },   
          {
            label: "Urban Roads",
            data: data.records
              .map((record) => record.urban_roads),
            backgroundColor: "rgba(0,128,0,1)",
            borderWidth: 4,
          },
          {
            label: "Projects Roads",
            data: data.records
              .map((record) => record.projects_roads),
            backgroundColor: "rgba(255,165,0,1)",
            borderWidth: 4,
          },
          
        ],
      };
      
      callback(chartData);
    });
  });
};

// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchCountryWiseCamparisonOfRoadNetwork = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"fc1a2f14-a7a4-4f20-9c4e-128a142b2051?api-key="+KEY+"&format=json&limit=62"
  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.name_of_the_country),
        datasets: [
          {
            label: "total_road_length___road_length_in_km",
            data: data.records
              .map((record) => record.total_road_length___road_length_in_km),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Roads (in KM) per '000 people",
            data: data.records
              .map((record) => record.roads__in_km__per__000_people),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          
          {
            label: "National Highways - Road in Length in KM",
            data: data.records
              .map((record) => record.national_highways___road_in_length_in_km),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "National Highways - % share in total length",
            data: data.records
              .map((record) => record.national_highways_____share_in_total_length),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Share of Paved Road (%)",
            data: data.records
              .map((record) => record.share_of_paved_road____),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Motorways1 - Road Length in KM",
            data: data.records
              .map((record) => record.motorways1___road_length_in_km),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Motorways1 - % share in total road length",
            data: data.records
              .map((record) => record.motorways1_____share_in_total_road_length),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };
      callback(chartData);
    });
  });
};

const fetchGrossDefenceBudget = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"f69f8c7a-5ce0-4d63-8fed-0ec6ab8bee6c?api-key="+KEY+"&format=json"
  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record._year),
        datasets: [
          {
            label: "CRF Cess",
            data: data.records
              .map((record) => record.crf_cess),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Additional GBS",
            data: data.records
              .map((record) => record.additional_gbs),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
          {
            label: "Gbs ner",
            data: data.records
              .map((record) => record.gbs_ner_),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Toll Tot",
            data: data.records
              .map((record) => record.toll___tot),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Toll Pbff",
            data: data.records
              .map((record) => record.toll___pbff),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Market Borrowing",
            data: data.records
              .map((record) => record.market_borrowing),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Pvt Investment",
            data: data.records
              .map((record) => record.pvt__investment),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Total",
            data: data.records
              .map((record) => record._total),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };

      callback(chartData);
    });
  });
};

const fetchTop15CountriesFTAs = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"6c0a9e43-360f-460b-91a1-02837d827f3a?api-key="+KEY+"&format=json&limit=65"
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

      // datasets: [
      //   {
      //     labels: data.records
      //     .map((record) => record.year),
      //     data: data.records
      //       .map((record) => record.no__of_cyber_fraud_cases_registered),
      //       //.slice(0, 20),
      //     backgroundColor: "rgba(155, 99, 132, 0.6)",
      //     borderWidth: 4,
      //   },

      // ],
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
          // {
          //   labels: newArr
          //   .map((record) => record.country),
          //               data: newArr
          //     .map((record) => record._share_in_2019),
          //   backgroundColor: "rgba(55, 99, 132, 0.6)",
          //   borderWidth: 4,
          // },   
          // {
          //   labels: newArr
          //   .map((record) => record.country),
            
          //   data: newArr
          //     .map((record) => record.rank_in_2020),
          //   backgroundColor: "rgba(55, 99, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   labels: newArr
          //   .map((record) => record.country),
            
          //   data: newArr
          //     .map((record) => record.ftas_in_india_in_2020),
          //   backgroundColor: "rgba(55, 99, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "Share 2020",
          //   data: newArr
          //     .map((record) => record._share_in_2020),
          //   backgroundColor: "rgba(55, 99, 132, 0.6)",
          //   borderWidth: 4,
          // },
          
        ],
      };
      callback(chartData);
    });
  });
};

const fetchGrowthOfIndianShippingFrom1947Onwards = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"e8d9007e-fd5d-4657-a3a0-27f666e62df3?api-key="+KEY+"&format=json"
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
    backgroundColor: theme.palette.success.light,
    fontWeight : "bold",
    fontSize:20,
    color:'black'
    },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function Tourism({ loggedIn, logout, login }) {
  const classes = useStyles();

  const [chartData, setChartData] = useState(null);

  const getCAGR1951To2017 = () => {
    fetchCAGR1951To2017((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };
  const getCountryWiseCamparisonOfRoadNetwork = () => {
    fetchCountryWiseCamparisonOfRoadNetwork((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };

  const getGrossDefenceBudget = () => {
    fetchGrossDefenceBudget((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };
 

  const getTop15CountriesFTAs = () => {
    fetchTop15CountriesFTAs((chartData) => {
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
        //backgroundImage: "url(/img/wallpaper.jpeg)",
      }}>
        <button className={classes.button} onClick={getTop15CountriesFTAs}>Top 15 Source Countries For Foreign Tourist Arrivals (FTAs) In India During 2019 & 2020</button>
        {/* <button className={classes.button} onClick={getGrowthOfIndianShippingAsOn31December2014}>Growth Of Indian Shipping As On 31 December, 2014</button>
        <button className={classes.button} onClick={getCAGR1951To2017}>Compound Annual Growth Rate (CAGR) Of Road Network From 1951 To 2017</button>
        <button className={classes.button} onClick={getRevenueRealisedFromRoadTransport200910To201617 }>Revenue Realised From Road Transport (Centre) From 2009-10 To 2016-17</button>
        <button className={classes.button} onClick={getCountryWiseStrengthPenetrationDiffTypesVehicles2016}>Country-Wise Strength And Penetration Of Different Types Of Vehicles During 2016</button>
        <button className={classes.button} onClick={getFoeticideCases2018To2019}>State/UT-wise Cases Registered under Foeticide as per National Crime Records Bureau (NCRB) from 2018 to 2019 (From : Ministry of Health and Family Welfare)</button>
        <button className={classes.button} onClick={getFoeticideCases2014To2016}>State/UT-wise Cases Registered under Foeticide as per National Crime Records Bureau (NCRB) from 2014 to 2016 (From : Ministry of Health and Family Welfare)</button>
        <button className={classes.button} onClick={getCyberFraud2014To2016}>Year-Wise Details Of Cyber Fraud Cases Registered As Per National Crime Records Bureau (NCRB) From 2014 To 2016 (From : Ministry Of Home Affairs)</button>
        <button className={classes.button} onClick={getCityWiseKidnapping2018TO2020}>City-Wise Kidnapping & Abduction From 2018 To 2020</button>
        <button className={classes.button} onClick={getDeathsInPoliceCustody2020}>State/UT-Wise Deaths In Police Custody / Lockup (Persons Not On Remand) During 2020</button>
        <button className={classes.button} onClick={getMissingAndTracedPersons2020}> Gender & Age-Wise Missing And Traced Persons During 2020</button> */}
    </div>
      {/* <div className={classes.summaryCards}>
        <button onClick={getLiabilitiesAndAssetsOfRBI2001TO2016}>Expenditure (Actual) Incurred In The Development And Maintenance Of National Highways By MORTH By Source Of Financing From 2012-13 To 2017-18</button>
      </div>
      <div><br /></div>

      <div className={classes.summaryCards}>
        <button onClick={getGDPOfIndia}>GDP Of India And Major Sectors Of Economy, Share Of Each Sector To GDP And Growth Rate Of GDP And Other Sectors Of Economy 1951-52 Onward</button>
      </div>
      <div><br /></div>

      <div className={classes.summaryCards}>
        <button onClick={getGrossDefenceBudget}>Year-Wise Gross Defence Budget (BE) As Percentage Of GDP From 2019-20 To 2021-22</button>
      </div> */}

       {/* <div 
       style={{
        height: "1000px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "contrast(75%)",
        //backgroundImage: "url(/img/wallpaper.jpeg)",
      }}>
        {chartData && <ChartGdp chartData={chartData} />}      
      </div>  */}
      <div 
       style={{
        height: "1000px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "contrast(75%)",
        //backgroundImage: "url(/img/wallpaper.jpeg)",
      }}>
        {chartData && <ChartPie chartData={chartData} />}      
      </div> 
    </div>
    </Content>
  );

  
}
