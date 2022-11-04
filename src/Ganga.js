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

const fetchTreatmentPlant2017 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"316f90f7-28be-4ddc-8ab2-a34740e2fd6c?api-key="+KEY+"&format=json&limit=100"
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
    API_URL+"95273406-7394-489b-ba92-475595008d10?api-key="+KEY+"&format=json&limit=100"
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

const fetchGrowthOfIndianShippingAsOn31December2014 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"5dc3565c-5a91-4d39-9724-74c20dc62fc5?api-key="+KEY+"&format=json&limit=65"
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

const fetchgetWaterQuality2021 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"ed5d2b18-acda-4d21-99e9-552792f32e67?api-key="+KEY+"&format=json&limit=100"
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
    API_URL+"445d5642-d652-4797-a8d2-af1ec3c68dd8?api-key="+KEY+"&format=json&limit=13"
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
    backgroundColor: '#6C4AB6',
    fontWeight : "bold",
    fontSize:20,
    color:'white'
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

export function Ganga({ loggedIn, logout, login }) {
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


  // useEffect(() => {
  //   refreshChart();
  // }, [chartData]);

  const getWaterQuality2021 = () => {
    fetchgetWaterQuality2021((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };

  const getDrainsDischargingIntoRiverGangaApr2022 = () => {
    fetchDrainsDischargingIntoRiverGangaApe2022s((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };
  const getWaterQuality2018To2020 = () => {
    fetchWaterQuality2018To2020((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };
  const getTreatmentPlant2017 = () => {
    fetchTreatmentPlant2017((chartData) => {
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
        <button className={classes.button} onClick={getDrainsDischargingIntoRiverGangaApr2022}>State-Wise Drains Discharging Into River Ganga And Its Tributaries Discharging Of Raw Water Mixed With Waste Water (In Reply To Unstarred Question On 4 April, 2022)</button>
         <button className={classes.button} onClick={getWaterQuality2021}>Station-Wise River Water Quality Of River Ganga During 2021</button>
        <button className={classes.button} onClick={getWaterQuality2018To2020}>Station-Wise River Water Quality Of River Ganga From 2018 To 2020</button>
        <button className={classes.button} onClick={getTreatmentPlant2017 }>State-Wise Completion Of Treatment Plant Projects Leading To Cleaning Of River Ganga And Its Tributaries During 2017</button>
         {/*<button className={classes.button} onClick={getCountryWiseStrengthPenetrationDiffTypesVehicles2016}>Country-Wise Strength And Penetration Of Different Types Of Vehicles During 2016</button>
        <button className={classes.button} onClick={getFoeticideCases2018To2019}>State/UT-wise Cases Registered under Foeticide as per National Crime Records Bureau (NCRB) from 2018 to 2019 (From : Ministry of Health and Family Welfare)</button>
        <button className={classes.button} onClick={getFoeticideCases2014To2016}>State/UT-wise Cases Registered under Foeticide as per National Crime Records Bureau (NCRB) from 2014 to 2016 (From : Ministry of Health and Family Welfare)</button>
        <button className={classes.button} onClick={getCyberFraud2014To2016}>Year-Wise Details Of Cyber Fraud Cases Registered As Per National Crime Records Bureau (NCRB) From 2014 To 2016 (From : Ministry Of Home Affairs)</button>
        <button className={classes.button} onClick={getCityWiseKidnapping2018TO2020}>City-Wise Kidnapping & Abduction From 2018 To 2020</button>
        <button className={classes.button} onClick={getDeathsInPoliceCustody2020}>State/UT-Wise Deaths In Police Custody / Lockup (Persons Not On Remand) During 2020</button>
        <button className={classes.button} onClick={getMissingAndTracedPersons2020}> Gender & Age-Wise Missing And Traced Persons During 2020</button> */}
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
