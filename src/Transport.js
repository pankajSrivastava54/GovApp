import React, { useEffect, useState } from "react";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ChartGdp } from "./ChartGdp";
import { SummaryCard } from "../src/People/Driver";
import Content from "../src/Dashboard/Content";
import { KEY , API_URL} from "../src/Const/Const";
import { Line } from "react-chartjs-2";
import 'chart.js/auto'

// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchCAGR1951To2017 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"6bdbea5b-b8e9-4ae4-a197-eced68bda7e2?api-key="+KEY+"&format=json&offset=0&limit=100"
  );
  response.then((response) => {
    const data = response.json();
    // const chartData = {
    //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    //   datasets: [
    //     {
    //       label: "First dataset",
    //       data: [33, 53, 85, 41, 44, 65],
    //       fill: true,
    //       backgroundColor: "rgba(75,192,192,0.2)",
    //       borderColor: "rgba(75,192,192,1)"
    //     },
    //     {
    //       label: "Second dataset",
    //       data: [33, 25, 35, 51, 54, 76],
    //       fill: false,
    //       borderColor: "#742774"
    //     }
    //   ]
    // };
    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.period),
          //.slice(0, 10),
        datasets: [
          {
            label: "NHS",
            data: data.records
              .map((record) => record.nhs),
              //.slice(0, 10),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "SHs & District Roads",
            data: data.records
              .map((record) => record.shs___district_roads),
              //.slice(0, 10),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },
          {
            label: "Rural Roads",
            data: data.records
              .map((record) => record.rural_roads),
              //.slice(0, 10),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },   
          {
            label: "Urban Roads",
            data: data.records
              .map((record) => record.urban_roads),
              //.slice(0, 10),
            backgroundColor: "rgba(0,128,0,1)",
            borderWidth: 4,
          },
          {
            label: "Projects Roads",
            data: data.records
              .map((record) => record.projects_roads),
              //.slice(0, 10),
            backgroundColor: "rgba(255,165,0,1)",
            borderWidth: 4,
          },
          
        ],
      };
      
      //sort the data in descending order and remove the last 10 records
      // chartData.datasets[0].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[1].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[2].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[3].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[4].data.sort((a, b) => b - a).slice(0, 20);

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
          .map((record) => record.name_of_the_country)
          .slice(0, 62),
        datasets: [
          {
            label: "total_road_length___road_length_in_km",
            data: data.records
              .map((record) => record.total_road_length___road_length_in_km)
              .slice(0, 62),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Roads (in KM) per '000 people",
            data: data.records
              .map((record) => record.roads__in_km__per__000_people)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          
          {
            label: "National Highways - Road in Length in KM",
            data: data.records
              .map((record) => record.national_highways___road_in_length_in_km)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "National Highways - % share in total length",
            data: data.records
              .map((record) => record.national_highways_____share_in_total_length)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Share of Paved Road (%)",
            data: data.records
              .map((record) => record.share_of_paved_road____)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Motorways1 - Road Length in KM",
            data: data.records
              .map((record) => record.motorways1___road_length_in_km)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Motorways1 - % share in total road length",
            data: data.records
              .map((record) => record.motorways1_____share_in_total_road_length)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };

      //sort the data in descending order and remove the last 10 records
      // chartData.datasets[0].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[1].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[2].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[3].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[4].data.sort((a, b) => b - a).slice(0, 20);

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
          .map((record) => record._year)
          .slice(0, 62),
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

      //sort the data in descending order and remove the last 10 records
      // chartData.datasets[0].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[1].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[2].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[3].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[4].data.sort((a, b) => b - a).slice(0, 20);

      callback(chartData);
    });
  });
};

const fetchRevenueRealisedFromRoadTransport200910To201617 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"d25f5173-f1b6-4694-b1f5-0cefe38e2696?api-key="+KEY+"&format=json"
  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record._year)
          .slice(0, 62),
        datasets: [
          {
            label: "Motor Vehicles & Accessories - Import Duty",
            data: data.records
              .map((record) => record.motor_vehicles___accessories___import_duty),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Motor Vehicles & Accessories - Excise Duty",
            data: data.records
              .map((record) => record.motor_vehicles___accessories___excise_duty),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
          {
            label: "Motor Vehicles & Accessories - Total",
            data: data.records
              .map((record) => record.motor_vehicles___accessories___total),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Tyres & Tubes - Import Duty",
            data: data.records
              .map((record) => record.tyres___tubes___import_duty),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Tyres & Tubes - Excise Duty",
            data: data.records
              .map((record) => record.tyres___tubes___excise_duty),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Tyres & Tubes - Total",
            data: data.records
              .map((record) => record.tyres___tubes___total),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "High Speed Diesel Oil - Import Duty*",
            data: data.records
              .map((record) => record.high_speed_diesel_oil___import_duty_),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "High Speed Diesel Oil - Excise Duty",
            data: data.records
              .map((record) => record.high_speed_diesel_oil___excise_duty),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "High Speed Diesel Oil - Total",
            data: data.records
              .map((record) => record.high_speed_diesel_oil___total),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Motor Spirit Total - Import Duty",
            data: data.records
              .map((record) => record.motor_spirit_total___import_duty),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Motor Spirit Total - Excise Duty",
            data: data.records
              .map((record) => record.motor_spirit_total___excise_duty),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Motor Spirit Total - Total",
            data: data.records
              .map((record) => record.motor_spirit_total___total),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Total - All Total",
            data: data.records
              .map((record) => record.total___all_total),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };

      //sort the data in descending order and remove the last 10 records
      // chartData.datasets[0].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[1].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[2].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[3].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[4].data.sort((a, b) => b - a).slice(0, 20);

      callback(chartData);
    });
  });
};

const fetchCountryWiseStrengthPenetrationDiffTypesVehicles2016 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"ce2b2653-fc64-4cba-b577-486d590b8c88?api-key="+KEY+"&format=json"
  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.country)
          .slice(0, 62),
        datasets: [
          {
            label: "Total Vehicles in use",
            data: data.records
              .map((record) => record.total_vehicles_in_use),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "World Ranking",
            data: data.records
              .map((record) => record.world_ranking),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
          {
            label: "Total Vehicle Penetration per 000 people",
            data: data.records
              .map((record) => record.total_vehicle_penetration_per_000_people),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Passenger Cars - Total",
            data: data.records
              .map((record) => record.passenger_cars___total),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Passenger Cars - Rank",
            data: data.records
              .map((record) => record.passenger_cars___rank),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Passenger Cars - Penetration per 000 people",
            data: data.records
              .map((record) => record.passenger_cars___penetration_per_000_people),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Buses and Motor Coaches - Total",
            data: data.records
              .map((record) => record.buses_and_motor_coaches___total),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Buses and Motor Coaches - Rank",
            data: data.records
              .map((record) => record.buses_and_motor_coaches___rank),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Buses and Motor Coaches - Penetration per 000 people",
            data: data.records
              .map((record) => record.buses_and_motor_coaches___penetration_per_000_people),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Motorcycles & Mopeds - Total",
            data: data.records
              .map((record) => record.motorcycles___mopeds___total),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Motorcycles & Mopeds - Rank",
            data: data.records
              .map((record) => record.motorcycles___mopeds___rank),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Motorcycles & Mopeds - Penetration per 000 people",
            data: data.records
              .map((record) => record.motorcycles___mopeds___penetration_per_000_people),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
  
        ],
      };

      //sort the data in descending order and remove the last 10 records
      // chartData.datasets[0].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[1].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[2].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[3].data.sort((a, b) => b - a).slice(0, 20);
      // chartData.datasets[4].data.sort((a, b) => b - a).slice(0, 20);

      callback(chartData);
    });
  });
};
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

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

export function Transport({ loggedIn, logout, login }) {
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
  // useEffect(() => {
  //   refreshChart();
  // }, [chartData]);

  const getRevenueRealisedFromRoadTransport200910To201617 = () => {
    fetchRevenueRealisedFromRoadTransport200910To201617((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };

  const getCountryWiseStrengthPenetrationDiffTypesVehicles2016 = () => {
    fetchCountryWiseStrengthPenetrationDiffTypesVehicles2016((chartData) => {
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
        <button className={classes.button} onClick={getGrossDefenceBudget}>Expenditure (Actual) Incurred In The Development And Maintenance Of National Highways By MORTH By Source Of Financing From 2012-13 To 2017-18</button>
         <button className={classes.button} onClick={getCountryWiseCamparisonOfRoadNetwork}>Country-Wise Camparison Of Road Network On Major Road Indicators As Per World Road Statistics For 2018</button>
        <button className={classes.button} onClick={getCAGR1951To2017}>Compound Annual Growth Rate (CAGR) Of Road Network From 1951 To 2017</button>
        <button className={classes.button} onClick={getRevenueRealisedFromRoadTransport200910To201617 }>Revenue Realised From Road Transport (Centre) From 2009-10 To 2016-17</button>
        <button className={classes.button} onClick={getCountryWiseStrengthPenetrationDiffTypesVehicles2016}>Country-Wise Strength And Penetration Of Different Types Of Vehicles During 2016</button>
        {/*<button className={classes.button} onClick={getFoeticideCases2018To2019}>State/UT-wise Cases Registered under Foeticide as per National Crime Records Bureau (NCRB) from 2018 to 2019 (From : Ministry of Health and Family Welfare)</button>
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
