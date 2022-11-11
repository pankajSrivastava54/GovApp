import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { ChartGdp } from "./ChartGdp";
import Content from "../src/Dashboard/Content";
import { KEY , API_URL,ret_type,ret_limit,CAGR1951To2017_Resource,CountryWiseCamparisonOfRoadNetwork_Resource,
  ExpenditureDevelopmentMaintenanceNationalHighways_Resource,RevenueRealisedFromRoadTransport200910To201617_Resource,
  CAGR1951To2017,ExpenditureDevelopmentMaintenanceNationalHighways,
  RevenueRealisedFromRoadTransport200910To201617,CountryWiseStrengthPenetrationDiffTypesVehicles2016,CountryWiseCamparisonOfRoadNetwork,
  DeathOfPedestrians2018To2020_Resource,DeathOfPedestrians2018To2020,BusesOwnedByPublicPrivateSectorsIndia1961To2017_Resource,
  BusesOwnedByPublicPrivateSectorsIndia1961To2017,Top5ExportsAutomobile201617To201819_Resource,Top5ExportsAutomobile201617To201819,
  VehicularPopulationNationalHighwayRoadLengthFrom2001To2017_Resource,VehicularPopulationNationalHighwayRoadLengthFrom2001To2017,
  RoadAccidentsPersonsKilledTwoWheelerAccidents2016to2020_Resource,RoadAccidentsPersonsKilledTwoWheelerAccidents2016to2020,
  useStyles,RoadAccidentsFrom2016To2020,RoadAccidentsFrom2016To2020_Resource} from "../src/Const/Const";
import { ChartDonut } from "./ChartDonut";

import { ChartLine } from "./ChartLine";
import { ChartPie } from "./ChartPie";

import 'chart.js/auto'
import { ChartBubble } from "./ChartBubble";

// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchCAGR1951To2017 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"6bdbea5b-b8e9-4ae4-a197-eced68bda7e2?api-key="+KEY+"&format=json&offset=0&limit=100"
    API_URL+CAGR1951To2017_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();
  
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
     
      callback(chartData);
    });
  });
};

// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchCountryWiseCamparisonOfRoadNetwork = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"fc1a2f14-a7a4-4f20-9c4e-128a142b2051?api-key="+KEY+"&format=json&limit=62"
    API_URL+CountryWiseCamparisonOfRoadNetwork_Resource+KEY+ret_type+ret_limit

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

 
      callback(chartData);
    });
  });
};

const fetchExpenditureDevelopmentMaintenanceNationalHighwayst = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"f69f8c7a-5ce0-4d63-8fed-0ec6ab8bee6c?api-key="+KEY+"&format=json"
    API_URL+ExpenditureDevelopmentMaintenanceNationalHighways_Resource+KEY+ret_type+ret_limit

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
    //API_URL+"d25f5173-f1b6-4694-b1f5-0cefe38e2696?api-key="+KEY+"&format=json"
    API_URL+RevenueRealisedFromRoadTransport200910To201617_Resource+KEY+ret_type+ret_limit

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

      callback(chartData);
    });
  });
};

const fetchCountryWiseStrengthPenetrationDiffTypesVehicles2016 = (callback) => {
  console.log("fetchCountryWiseStrengthPenetrationDiffTypesVehicles2016"+KEY);
  const response = fetch(
    //API_URL+"ce2b2653-fc64-4cba-b577-486d590b8c88?api-key="+KEY+"&format=json"
    API_URL+CountryWiseCamparisonOfRoadNetwork_Resource+KEY+ret_type+ret_limit

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
            label: "Total Road Length - Road Length in KM",
            data: data.records
              .map((record) => record.total_road_length___road_length_in_km),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Total Road Length - World Ranking",
            data: data.records
              .map((record) => record.total_road_length___world_ranking),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
          {
            label: "Population 2016",
            data: data.records
              .map((record) => record.population_2016),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
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
          {
            label: "Road Density",
            data: data.records
              .map((record) => record.road_density),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          // {
          //   label: "Motorcycles & Mopeds - Rank",
          //   data: data.records
          //     .map((record) => record.motorcycles___mopeds___rank),
          //   backgroundColor: "rgba(55, 99, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "Motorcycles & Mopeds - Penetration per 000 people",
          //   data: data.records
          //     .map((record) => record.motorcycles___mopeds___penetration_per_000_people),
          //   backgroundColor: "rgba(55, 99, 132, 0.6)",
          //   borderWidth: 4,
          // },
  
        ],
      };


      callback(chartData);
    });
  });
};
const fetchDeathOfPedestrians2018To2020 = (callback) => {
  console.log("fetchDeathOfPedestrians2018To2020"+KEY);
  const response = fetch(
    //API_URL+"ce2b2653-fc64-4cba-b577-486d590b8c88?api-key="+KEY+"&format=json"
    API_URL+DeathOfPedestrians2018To2020_Resource+KEY+ret_type+ret_limit

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
            label: "Total Number of Persons Killed in Road Accidents",
            data: data.records
              .map((record) => record.total_number_of_persons_killed_in_road_accidents),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Total Number of Pedestrian Killed in Road Accidents",
            data: data.records
              .map((record) => record.total_number_of_pedestrian_killed_in_road_accidents),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
          {
            label: "% Share of Pedestrian Killed in Total Road Accident",
            data: data.records
              .map((record) => record.__share_of_pedestrian_killed_in_total_road_accident),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
        
        ],
      };


      callback(chartData);
    });
  });
};

const fetchBusesOwnedByPublicPrivateSectorsIndia1961To2017 = (callback) => {
  console.log("BusesOwnedByPublicPrivateSectorsIndia1961To2017_Resource"+KEY);
  const response = fetch(
    //API_URL+"ce2b2653-fc64-4cba-b577-486d590b8c88?api-key="+KEY+"&format=json"
    API_URL+BusesOwnedByPublicPrivateSectorsIndia1961To2017_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record._year_as_on_31st_march_),
        datasets: [
          {
            label: "Public Sector",
            data: data.records
              .map((record) => record.public_sector),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Public Sector - %age share to total buses",
            data: data.records
              .map((record) => record.public_sector___age_share_to_total_buses),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
          {
            label: "Private Sector",
            data: data.records
              .map((record) => record.private_sector),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Private Sector - %age share to total buses",
            data: data.records
              .map((record) => record.private_sector___age_share_to_total_buses),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },  
          
        ],
      };


      callback(chartData);
    });
  });
};

const fetchTop5ExportsAutomobile201617To201819 = (callback) => {
  console.log("fetchTop5ExportsAutomobile201617To201819"+KEY);
  const response = fetch(
    //API_URL+"ce2b2653-fc64-4cba-b577-486d590b8c88?api-key="+KEY+"&format=json"
    API_URL+Top5ExportsAutomobile201617To201819_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.commodity),
        datasets: [
          {
            label: "2016 - 17",
            data: data.records
              .map((record) => record.__2016_17),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2017 - 2018",
            data: data.records
              .map((record) => record._2017_2018),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
          {
            label: "2018 - 2019",
            data: data.records
              .map((record) => record._2018_2019),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          
          
        ],
      };


      callback(chartData);
    });
  });
};

const fetchVehicularPopulationNationalHighwayRoadLengthFrom2001To2017 = (callback) => {
  console.log("fetchVehicularPopulationNationalHighwayRoadLengthFrom2001To2017"+KEY);
  const response = fetch(
    //API_URL+"ce2b2653-fc64-4cba-b577-486d590b8c88?api-key="+KEY+"&format=json"
    API_URL+VehicularPopulationNationalHighwayRoadLengthFrom2001To2017_Resource+KEY+ret_type+ret_limit

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
            label: "Number of Registered Motor Vehicles (in thousands) - Cars",
            data: data.records
              .map((record) => record.number_of_registered_motor_vehicles__in_thousands____cars),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Number of Registered Motor Vehicles (in thousands) - Buses",
            data: data.records
              .map((record) => record.number_of_registered_motor_vehicles__in_thousands____buses),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
          {
            label: "Length of National Highways (in km)",
            data: data.records
              .map((record) => record.length_of_national_highways__in_km_),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Length of all Roads (in km)",
            data: data.records
              .map((record) => record.length_of_all_roads__in_km_),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Registered Motor Vehicles per 1,000 Population - Cars",
            data: data.records
              .map((record) => record.registered_motor_vehicles_per_1_000_population___cars),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Registered Motor Vehicles per 1,000 Population - Buses",
            data: data.records
              .map((record) => record.registered_motor_vehicles_per_1_000_population___buses),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };


      callback(chartData);
    });
  });
};


const fetchRoadAccidentsPersonsKilledTwoWheelerAccidents2016to2020 = (callback) => {
  console.log("fetchVehicularPopulationNationalHighwayRoadLengthFrom2001To2017"+KEY);
  const response = fetch(
    //API_URL+"ce2b2653-fc64-4cba-b577-486d590b8c88?api-key="+KEY+"&format=json"
    API_URL+RoadAccidentsPersonsKilledTwoWheelerAccidents2016to2020_Resource+KEY+ret_type+ret_limit

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
            label: "Road accidents",
            data: data.records
              .map((record) => record.road_accidents),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons killed",
            data: data.records
              .map((record) => record.persons_killed),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
         
        ],
      };


      callback(chartData);
    });
  });
};

const fetchRoadAccidentsFrom2016To2020 = (callback) => {
  console.log("fetchRoadAccidentsFrom2016To2020"+KEY);
  const response = fetch(
    //API_URL+"ce2b2653-fc64-4cba-b577-486d590b8c88?api-key="+KEY+"&format=json"
    API_URL+RoadAccidentsFrom2016To2020_Resource+KEY+ret_type+ret_limit

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
            label: "Total number of road accidents",
            data: data.records
              .map((record) => record.total_number_of_road_accidents),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };


      callback(chartData);
    });
  });
};

export function Transport({ loggedIn, logout, login }) {
  const classes = useStyles();

  const [chartData, setChartData] = useState(null);
  const [chartType, setChartType] = useState('bar');

  const [chartTitle, setChartTitle] = useState('bar');

  const getCAGR1951To2017 = () => {
    fetchCAGR1951To2017((chartData) => {
      setChartType('line');
      setChartTitle(CAGR1951To2017);
      setChartData(chartData);
    });
  };
  const getCountryWiseCamparisonOfRoadNetwork = () => {
    fetchCountryWiseCamparisonOfRoadNetwork((chartData) => {
      setChartType('line');
      setChartTitle(CountryWiseCamparisonOfRoadNetwork);
      setChartData(chartData);
    });
  };

  const getExpenditureDevelopmentMaintenanceNationalHighwayst = () => {
    fetchExpenditureDevelopmentMaintenanceNationalHighwayst((chartData) => {
      setChartType('line');
      setChartTitle(ExpenditureDevelopmentMaintenanceNationalHighways);
      setChartData(chartData);
    });
  };

  const getRevenueRealisedFromRoadTransport200910To201617 = () => {
    fetchRevenueRealisedFromRoadTransport200910To201617((chartData) => {
      setChartType('line');
      setChartTitle(RevenueRealisedFromRoadTransport200910To201617);
      setChartData(chartData);
    });
  };

  const getCountryWiseStrengthPenetrationDiffTypesVehicles2016 = () => {
    fetchCountryWiseStrengthPenetrationDiffTypesVehicles2016((chartData) => {
      setChartType('line');
      setChartTitle(CountryWiseStrengthPenetrationDiffTypesVehicles2016);
      setChartData(chartData);
    });
  };
  const getDeathOfPedestrians2018To2020 = () => {
    fetchDeathOfPedestrians2018To2020((chartData) => {
      setChartType('line');
      setChartTitle(CountryWiseStrengthPenetrationDiffTypesVehicles2016);
      setChartData(chartData);
    });
  };
  const getBusesOwnedByPublicPrivateSectorsIndia1961To2017 = () => {
    fetchBusesOwnedByPublicPrivateSectorsIndia1961To2017((chartData) => {
      setChartType('line');
      setChartTitle(BusesOwnedByPublicPrivateSectorsIndia1961To2017);
      setChartData(chartData);
    });
  };
  const getTop5ExportsAutomobile201617To201819 = () => {
    fetchTop5ExportsAutomobile201617To201819((chartData) => {
      setChartType('bar');
      setChartTitle(Top5ExportsAutomobile201617To201819);
      setChartData(chartData);
    });
  };
  
  const getVehicularPopulationNationalHighwayRoadLengthFrom2001To2017 = () => {
    fetchVehicularPopulationNationalHighwayRoadLengthFrom2001To2017((chartData) => {
      setChartType('bar');
      setChartTitle(VehicularPopulationNationalHighwayRoadLengthFrom2001To2017);
      setChartData(chartData);
    });
  };
  const getRoadAccidentsPersonsKilledTwoWheelerAccidents2016to2020 = () => {
    fetchRoadAccidentsPersonsKilledTwoWheelerAccidents2016to2020((chartData) => {
      setChartType('bar');
      setChartTitle(VehicularPopulationNationalHighwayRoadLengthFrom2001To2017);
      setChartData(chartData);
    });
  };
  const getRoadAccidentsFrom2016To2020 = () => {
    fetchRoadAccidentsFrom2016To2020((chartData) => {
      setChartType('bar');
      setChartTitle(RoadAccidentsFrom2016To2020);
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
        backgroundImage: "url(/img/Transport.png)",
      }}>
        <button className={classes.button} onClick={getExpenditureDevelopmentMaintenanceNationalHighwayst}>Expenditure (Actual) Incurred In The Development And Maintenance Of National Highways By MORTH By Source Of Financing From 2012-13 To 2017-18</button>
         <button className={classes.button} onClick={getCountryWiseCamparisonOfRoadNetwork}>{CountryWiseCamparisonOfRoadNetwork}</button>
        <button className={classes.button} onClick={getCAGR1951To2017}>{CAGR1951To2017}</button>
        <button className={classes.button} onClick={getRevenueRealisedFromRoadTransport200910To201617}>{RevenueRealisedFromRoadTransport200910To201617}</button>
        <button className={classes.button} onClick={getCountryWiseStrengthPenetrationDiffTypesVehicles2016}>{CountryWiseStrengthPenetrationDiffTypesVehicles2016}</button>
        <button className={classes.button} onClick={getDeathOfPedestrians2018To2020}>{DeathOfPedestrians2018To2020}</button>
        <button className={classes.button} onClick={getBusesOwnedByPublicPrivateSectorsIndia1961To2017}>{BusesOwnedByPublicPrivateSectorsIndia1961To2017}</button>
        <button className={classes.button} onClick={getTop5ExportsAutomobile201617To201819}>{Top5ExportsAutomobile201617To201819}</button>
        <button className={classes.button} onClick={getVehicularPopulationNationalHighwayRoadLengthFrom2001To2017}>{VehicularPopulationNationalHighwayRoadLengthFrom2001To2017}</button>
        <button className={classes.button} onClick={getRoadAccidentsPersonsKilledTwoWheelerAccidents2016to2020}>{RoadAccidentsPersonsKilledTwoWheelerAccidents2016to2020}</button>
        <button className={classes.button} onClick={getRoadAccidentsFrom2016To2020}>{RoadAccidentsFrom2016To2020}</button>
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
        {chartData && chartType === 'bubble' && 
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

        {chartData && <ChartBubble chartData={chartData} />}
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
