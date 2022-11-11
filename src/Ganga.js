import React, { useEffect, useState } from "react";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ChartGdp } from "./ChartGdp";
import { SummaryCard } from "../src/People/Driver";
import Content from "../src/Dashboard/Content";
import { KEY , API_URL, ret_type,ret_limit,TreatmentPlantGanga2017,WaterQualityGanga2018To2020,WaterQualityGanga2021,
  DrainsDischargingIntoRiverGangaApr2022,DrainsDischargingIntoRiverGangaApr2022_Resource,WaterQualityGanga2021_Resource,
  WaterQualityGanga2018To2020_Resource,TreatmentPlantGanga2017_Resource,useStyles} from "../src/Const/Const";
import { Line } from "react-chartjs-2";
import 'chart.js/auto'

// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100

const fetchTreatmentPlant2017 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"316f90f7-28be-4ddc-8ab2-a34740e2fd6c?api-key="+KEY+"&format=json&limit=100"
    API_URL+TreatmentPlantGanga2017_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));
      let newArr = [];

      {data.records.filter(record => !(record.name_of_state).includes('Total')).map(filteredName => (
        console.log("filteredName size"+JSON.stringify(filteredName)),
        newArr.push(filteredName)
      ))}
      const chartData = {
        labels: newArr
          .map((record) => record.name_of_state),
        datasets: [
          {
            label: "no_of_stp_units_completed",
            data: newArr
              .map((record) => record.no_of_stp_units_completed),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "treatment_capacity_created__mld_",
            data: newArr
              .map((record) => record.treatment_capacity_created__mld_),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
          
          
        ],
      };

      callback(chartData);
    });
  });
};

const fetchWaterQuality2018To2020 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"95273406-7394-489b-ba92-475595008d10?api-key="+KEY+"&format=json&limit=100"
    API_URL+WaterQualityGanga2018To2020_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.state+"-"+record.station_name),
        datasets: [
          {
            label: "CRF Cess",
            data: data.records
              .map((record) => record.parameters___dissolved_oxygen__mg_l______criteria__5_0_mg_l____2018),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Additional GBS",
            data: data.records
              .map((record) => record.parameters___dissolved_oxygen__mg_l______criteria__5_0_mg_l____2019),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
          {
            label: "Gbs ner",
            data: data.records
              .map((record) => record.parameters___dissolved_oxygen__mg_l______criteria__5_0_mg_l____2020),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Toll Tot",
            data: data.records
              .map((record) => record.parameters___faecal_coliform__mpn_100_ml_____criteria__2500_mpn_100_ml____2018),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Toll Pbff",
            data: data.records
              .map((record) => record.parameters___faecal_coliform__mpn_100_ml_____criteria__2500_mpn_100_ml____2019),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Market Borrowing",
            data: data.records
              .map((record) => record.parameters___faecal_coliform__mpn_100_ml_____criteria__2500_mpn_100_ml____2020),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          
        ],
      };

      callback(chartData);
    });
  });
};


const fetchgetWaterQuality2021 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"ed5d2b18-acda-4d21-99e9-552792f32e67?api-key="+KEY+"&format=json&limit=100"
    API_URL+WaterQualityGanga2021_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.station_code+"("+record.station_name+")"),
        datasets: [
          {
            label: "Parameters - Dissolved Oxygen (mg/l) - (Criteria >5.0 mg/l)",
            data: data.records
              .map((record) => record.parameters___dissolved_oxygen__mg_l_____criteria__5_0_mg_l_),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Parameters - Faecal coliform (MPN/100 ml) - (Criteria <2500 MPN/100 ml)",
            data: data.records
              .map((record) => record.parameters___faecal_coliform__mpn_100_ml_____criteria__2500_mpn_100_ml_),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
        ],
      };
      callback(chartData);
    });
  });
};
const fetchDrainsDischargingIntoRiverGangaApe2022s = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"445d5642-d652-4797-a8d2-af1ec3c68dd8?api-key="+KEY+"&format=json&limit=13"
    API_URL+DrainsDischargingIntoRiverGangaApr2022_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));
      let newArr = [];

      {data.records.filter(record => !(record.states).includes('Total')).map(filteredName => (
        console.log("filteredName size"+JSON.stringify(filteredName)),
        newArr.push(filteredName)
      ))}
      const chartData = {
        labels: newArr
          .map((record) => record.states+"("+record.category+")"),
        datasets: [
          {
            label: "Monitored Drains",
            data: newArr
              .map((record) => record.monitored_drains),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Flow (MLD)",
            data: newArr
              .map((record) => record.flow__mld_),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
        ],
      };
      callback(chartData);
    });
  });
};

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: "100vh",
//   },
//   image: {
//     backgroundImage: "url(img/wallpaper2-min.PNG)",
//     backgroundRepeat: "no-repeat",
//     backgroundColor:
//       theme.palette.type === "dark"
//         ? theme.palette.grey[900]
//         : theme.palette.grey[50],
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     width: "100%",
//     paddingTop: "40px",
//   },
//   paper: {
//     margin: theme.spacing(8, 8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   button: {
//     alignSelf:'center',
//     width:'20%',
//     margin: theme.spacing(1),
//     backgroundColor: '#6C4AB6',
//     fontWeight : "bold",
//     fontSize:15,
//     color:'white'
//     },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

export function Ganga({ loggedIn, logout, login }) {
  const classes = useStyles();

  const [chartData, setChartData] = useState(null);
  const [chartType, setChartType] = useState('bar');

  const [chartTitle, setChartTitle] = useState('bar');

  const getWaterQuality2021 = () => {
    fetchgetWaterQuality2021((chartData) => {
      setChartType('line');
      setChartTitle(WaterQualityGanga2021);
      setChartData(chartData);
    });
  };

  const getDrainsDischargingIntoRiverGangaApr2022 = () => {
    fetchDrainsDischargingIntoRiverGangaApe2022s((chartData) => {
      setChartType('line');
      setChartTitle(DrainsDischargingIntoRiverGangaApr2022);
      setChartData(chartData);
    });
  };
  const getWaterQuality2018To2020 = () => {
    fetchWaterQuality2018To2020((chartData) => {
      setChartType('line');
      setChartTitle(WaterQualityGanga2018To2020);
      setChartData(chartData);
    });
  };
  const getTreatmentPlant2017 = () => {
    fetchTreatmentPlant2017((chartData) => {
      setChartType('line');
      setChartTitle(TreatmentPlantGanga2017);
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
        backgroundImage: "url(/img/Ganga.png)",
      }}>
        <button className={classes.button} onClick={getDrainsDischargingIntoRiverGangaApr2022}>{DrainsDischargingIntoRiverGangaApr2022}</button>
        <button className={classes.button} onClick={getWaterQuality2021}>{WaterQualityGanga2021}</button>
        <button className={classes.button} onClick={getWaterQuality2018To2020}>{WaterQualityGanga2018To2020}</button>
        <button className={classes.button} onClick={getTreatmentPlant2017 }>{TreatmentPlantGanga2017}</button>
         
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
