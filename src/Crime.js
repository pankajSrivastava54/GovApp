import React, { useEffect, useState } from "react";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ChartGdp } from "./ChartGdp";
import Content from "../src/Dashboard/Content";
import { KEY, API_URL } from "../src/Const/Const";
import { ChartPie } from "./ChartPie";

// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchAPI = (callback) => {
  console.log("fetching data");
  const response = fetch(
    API_URL+"a5fc05b9-4e5b-4625-a694-ead8caf11327?api-key="+KEY+"&format=json&offset=0&limit=100"
  );
  response.then((response) => {
    const data = response.json();
    data.then((data) => {
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: data.records
          .map((record) => record.crime_head__col__2_),
          //.slice(0, 10),
        datasets: [
          {
            label: "Persons Arrested - Male",
            data: data.records
              .map((record) => record.persons_arrested___male____col__3_),
              //.slice(0, 10),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons Arrested - Female",
            data: data.records
              .map((record) => record.persons_arrested___female____col__4_),
              //.slice(0, 10),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons Arrested - Total",
            data: data.records
              .map((record) => record.persons_arrested___total____col__5_),
              //.slice(0, 10),
            backgroundColor: "rgba(255, 255, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons Chargesheeted - Male",
            data: data.records
              .map((record) => record.persons_chargesheeted___male____col__6_),
              //.slice(0, 10),
            backgroundColor: "rgba(105, 255, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons Chargesheeted - Female",
            data: data.records
              .map((record) => record.persons_chargesheeted___female____col__7_),
              //.slice(0, 10),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons Chargesheeted - Total",
            data: data.records
              .map((record) => record.persons_chargesheeted___total____col__8_),
              //.slice(0, 10),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons Convicted - Male",
            data: data.records
              .map((record) => record.persons_convicted___male____col__9_),
              //.slice(0, 10),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons Convicted - Female",
            data: data.records
              .map((record) => record.persons_convicted___female____col__10_),
              //.slice(0, 10),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons Convicted - Total",
            data: data.records
              .map((record) => record.persons_convicted___total____col__11_),
              //.slice(0, 10),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons Discharged - Male",
            data: data.records
              .map((record) => record.persons_discharged___male____col__12_),
              //.slice(0, 10),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons Discharged - Female",
            data: data.records
              .map((record) => record.persons_discharged___female____col__13_),
              //.slice(0, 10),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons Discharged - Total",
            data: data.records
              .map((record) => record.persons_discharged___total____col__14_),
              //.slice(0, 10),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons Acquitted - Male",
            data: data.records
              .map((record) => record.persons_acquitted___male____col__15_),
              //.slice(0, 10),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons Acquitted - Female",
            data: data.records
              .map((record) => record.persons_acquitted___female____col__16_),
              //.slice(0, 10),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons Acquitted - Total",
            data: data.records
              .map((record) => record.persons_acquitted___total____col__17_),
              //.slice(0, 10),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };

      //sort the data in descending order and remove the last 10 records
      chartData.datasets[0].data.sort((a, b) => b - a).slice(0, 20);
      chartData.datasets[1].data.sort((a, b) => b - a).slice(0, 20);
      chartData.datasets[2].data.sort((a, b) => b - a).slice(0, 20);
      chartData.datasets[3].data.sort((a, b) => b - a).slice(0, 20);
      chartData.datasets[4].data.sort((a, b) => b - a).slice(0, 20);

      callback(chartData);
    });
  });
};

// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchForeignCrimeAPI = (callback) => {
  console.log("fetching data fetchForeignCrimeAPI");
  const response = fetch(
    API_URL+"a6424291-57f4-4011-b019-931e24fda24e?api-key="+KEY+"&format=json&offset=0&limit=100"

    //"https://api.data.gov.in/resource/a6424291-57f4-4011-b019-931e24fda24e?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&limit=30"
  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("result data 222"+JSON.stringify(data));
    const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(result));

      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: data.records
          .map((record) => record.crime_head__col__2_)
          .slice(0, 20),
        datasets: [
          {
            label: "Bangladesh",
            data: data.records
              .map((record) => record.bangladesh____col__4_)
              .slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "nepal",
            data: data.records
              .map((record) => record.nepal____col__5_)
              .slice(0, 20),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "pakistan",
            data: data.records
              .map((record) => record.pakistan____col__6_)
              .slice(0, 20),
            backgroundColor: "rgba(255, 255, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "sri_lanka",
            data: data.records
              .map((record) => record.sri_lanka____col__7_)
              .slice(0, 20),
            backgroundColor: "rgba(105, 255, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "nigeria",
            data: data.records
              .map((record) => record.nigeria____col__37_)
              .slice(0, 20),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "sudan",
            data: data.records
              .map((record) => record.sudan____col__39_)
              .slice(0, 20),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "britain",
            data: data.records
              .map((record) => record.britain____col__18_)
              .slice(0, 20),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "israel",
            data: data.records
              .map((record) => record.israel____col__10_)
              .slice(0, 20),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Iran",
            data: data.records
              .map((record) => record.iran____col__11_)
              .slice(0, 20),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Japan",
            data: data.records
              .map((record) => record.japan____col__13_)
              .slice(0, 20),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "australia",
            data: data.records
              .map((record) => record.australia____col__34_)
              .slice(0, 20),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "brazil",
            data: data.records
              .map((record) => record.brazil____col__31_)
              .slice(0, 20),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "new_zealand",
            data: data.records
              .map((record) => record.new_zealand____col__35_)
              .slice(0, 20),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "myanmar",
            data: data.records
              .map((record) => record.myanmar____col__14_)
              .slice(0, 20),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "yemen",
            data: data.records
              .map((record) => record.yemen____col__16_)
              .slice(0, 20),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };

      //sort the data in descending order and remove the last 10 records
       chartData.datasets[0].data.sort((a, b) => b - a).slice(0, 20);
       chartData.datasets[1].data.sort((a, b) => b - a).slice(0, 20);
       chartData.datasets[2].data.sort((a, b) => b - a).slice(0, 20);
       chartData.datasets[3].data.sort((a, b) => b - a).slice(0, 20);
       chartData.datasets[4].data.sort((a, b) => b - a).slice(0, 20);
        chartData.datasets[5].data.sort((a, b) => b - a).slice(0, 20);
        chartData.datasets[6].data.sort((a, b) => b - a).slice(0, 20);
        chartData.datasets[7].data.sort((a, b) => b - a).slice(0, 20);
        chartData.datasets[8].data.sort((a, b) => b - a).slice(0, 20);
        chartData.datasets[9].data.sort((a, b) => b - a).slice(0, 20);
        chartData.datasets[10].data.sort((a, b) => b - a).slice(0, 20);
        


      callback(chartData);
    });
  });
};

// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchHeroinSeizureAPI = (callback) => {
  console.log("fetching data fetchHeroinSeizureAPI");
  const response = fetch(
    API_URL+"43f3d838-7c03-4c48-9a27-5ff8a664f217?api-key="+KEY+"&format=json&offset=0&limit=40"

    //"https://api.data.gov.in/resource/43f3d838-7c03-4c48-9a27-5ff8a664f217?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&limit=40    "
  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("result data 222"+JSON.stringify(data));
    const result = data.records.filter(record => record._2016___kgs_ !== "0" && record._2016___kgs_ > 1.0 );
    console.log("result data"+JSON.stringify(result));

      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: result
          .map((record) => record.state_ut),
          //.slice(0, 20),
        datasets: [
          {
            label: "_2016",
            data: result
              .map((record) => record._2016___kgs_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2017",
            data: result
              .map((record) => record._2017___kgs_),
              //.slice(0, 20),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2018",
            data: result
              .map((record) => record._2018___kgs_),
              //.slice(0, 20),
            backgroundColor: "rgba(255, 255, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2019",
            data: result
              .map((record) => record._2019___kgs_),
             // .slice(0, 20),
            backgroundColor: "rgba(105, 255, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2020",
            data: result
              .map((record) => record._2020___kgs_),
              //.slice(0, 20),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          // {
          //   label: "sudan",
          //   data: data.records
          //     .map((record) => record.sudan____col__39_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "britain",
          //   data: data.records
          //     .map((record) => record.britain____col__18_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "israel",
          //   data: data.records
          //     .map((record) => record.israel____col__10_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "Iran",
          //   data: data.records
          //     .map((record) => record.iran____col__11_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "Japan",
          //   data: data.records
          //     .map((record) => record.japan____col__13_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "australia",
          //   data: data.records
          //     .map((record) => record.australia____col__34_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "brazil",
          //   data: data.records
          //     .map((record) => record.brazil____col__31_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "new_zealand",
          //   data: data.records
          //     .map((record) => record.new_zealand____col__35_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "myanmar",
          //   data: data.records
          //     .map((record) => record.myanmar____col__14_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "yemen",
          //   data: data.records
          //     .map((record) => record.yemen____col__16_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
        ],
      };

      //sort the data in descending order and remove the last 10 records
       //chartData.datasets[0].data.sort((a, b) => b - a).slice(0, 20);
       //chartData.datasets[1].data.sort((a, b) => b - a).slice(0, 20);
       //chartData.datasets[2].data.sort((a, b) => b - a).slice(0, 20);
       //chartData.datasets[3].data.sort((a, b) => b - a).slice(0, 20);
      //  chartData.datasets[4].data.sort((a, b) => b - a).slice(0, 20);
      //   chartData.datasets[5].data.sort((a, b) => b - a).slice(0, 20);
      //   chartData.datasets[6].data.sort((a, b) => b - a).slice(0, 20);
      //   chartData.datasets[7].data.sort((a, b) => b - a).slice(0, 20);
      //   chartData.datasets[8].data.sort((a, b) => b - a).slice(0, 20);
      //   chartData.datasets[9].data.sort((a, b) => b - a).slice(0, 20);
      //   chartData.datasets[10].data.sort((a, b) => b - a).slice(0, 20);
        


      callback(chartData);
    });
  });
};

// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchConvictionRateAPI = (callback) => {
  console.log("fetching data fetchConvictionRateAPI");
  const response = fetch(
    API_URL+"2f4cba8d-8190-4dcc-8b9b-3b39ed59ef44?api-key="+KEY+"&format=json&offset=0&limit=40"

    //"https://api.data.gov.in/resource/2f4cba8d-8190-4dcc-8b9b-3b39ed59ef44?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json"
  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    //const data = data.records.filter(record => record._2016___kgs_ !== "0" && record._2016___kgs_ > 1.0 );
    //console.log("data data"+JSON.stringify(data));

      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: data.records
          .map((record) => record.year),
          //.slice(0, 20),
        datasets: [
          {
            //label: "2014",
            data: data.records
              .map((record) => record.conviction_rate_cvr_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          // {
          //   label: "2015",
          //   data: data.records
          //     .map((record) => record.conviction_rate_cvr_),
          //     //.slice(0, 20),
          //   backgroundColor: "rgba(55, 99, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "2016",
          //   data: data.records
          //     .map((record) => record.conviction_rate_cvr_),
          //     //.slice(0, 20),
          //   backgroundColor: "rgba(255, 255, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "_2019",
          //   data: result
          //     .map((record) => record._2019___kgs_),
          //    // .slice(0, 20),
          //   backgroundColor: "rgba(105, 255, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "_2020",
          //   data: result
          //     .map((record) => record._2020___kgs_),
          //     //.slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "sudan",
          //   data: data.records
          //     .map((record) => record.sudan____col__39_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "britain",
          //   data: data.records
          //     .map((record) => record.britain____col__18_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "israel",
          //   data: data.records
          //     .map((record) => record.israel____col__10_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "Iran",
          //   data: data.records
          //     .map((record) => record.iran____col__11_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "Japan",
          //   data: data.records
          //     .map((record) => record.japan____col__13_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "australia",
          //   data: data.records
          //     .map((record) => record.australia____col__34_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "brazil",
          //   data: data.records
          //     .map((record) => record.brazil____col__31_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "new_zealand",
          //   data: data.records
          //     .map((record) => record.new_zealand____col__35_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "myanmar",
          //   data: data.records
          //     .map((record) => record.myanmar____col__14_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "yemen",
          //   data: data.records
          //     .map((record) => record.yemen____col__16_)
          //     .slice(0, 20),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
        ],
      };

      //sort the data in descending order and remove the last 10 records
       //chartData.datasets[0].data.sort((a, b) => b - a).slice(0, 20);
       //chartData.datasets[1].data.sort((a, b) => b - a).slice(0, 20);
       //chartData.datasets[2].data.sort((a, b) => b - a).slice(0, 20);
       //chartData.datasets[3].data.sort((a, b) => b - a).slice(0, 20);
      //  chartData.datasets[4].data.sort((a, b) => b - a).slice(0, 20);
      //   chartData.datasets[5].data.sort((a, b) => b - a).slice(0, 20);
      //   chartData.datasets[6].data.sort((a, b) => b - a).slice(0, 20);
      //   chartData.datasets[7].data.sort((a, b) => b - a).slice(0, 20);
      //   chartData.datasets[8].data.sort((a, b) => b - a).slice(0, 20);
      //   chartData.datasets[9].data.sort((a, b) => b - a).slice(0, 20);
      //   chartData.datasets[10].data.sort((a, b) => b - a).slice(0, 20);
        


      callback(chartData);
    });
  });
};

const fetchSuicideFarmersAPI = (callback) => {
  console.log("fetching data fetchSuicideFarmersAPI");
  const response = fetch(
    API_URL+"855d712f-8bf9-420d-a430-23dbf61c1dbe?api-key="+KEY+"&format=json&offset=0&limit=40"

    //"https://api.data.gov.in/resource/2f4cba8d-8190-4dcc-8b9b-3b39ed59ef44?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json"
  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    const filtereddata = data.records.filter(record => record._2018 !== "0" && record._2018 > 0 );
    console.log("data filtereddata"+JSON.stringify(filtereddata));

      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: filtereddata
          .map((record) => record.state_ut),
          //.slice(0, 20),
        datasets: [
          {
            label: "_2018",
            data: filtereddata
              .map((record) => record._2018),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2019",
            data: filtereddata
              .map((record) => record._2019),
              //.slice(0, 20),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
  
        ],
      };
      callback(chartData);
    });
  });
};

const fetchFoeticideCasesAPI2018T02019 = (callback) => {
  console.log("fetching data fetchFoeticideCasesAPI2018T02019");
  const response = fetch(
    API_URL+"855d712f-8bf9-420d-a430-23dbf61c1dbe?api-key="+KEY+"&format=json&offset=0&limit=40"

    //"https://api.data.gov.in/resource/2f4cba8d-8190-4dcc-8b9b-3b39ed59ef44?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json"
  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    const filtereddata = data.records.filter(record => record._2018 !== "0" && record._2018 > 0 );
    console.log("data filtereddata"+JSON.stringify(filtereddata));

      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: filtereddata
          .map((record) => record.state_ut),
          //.slice(0, 20),
        datasets: [
          {
            label: "2018",
            data: filtereddata
              .map((record) => record._2018),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2019",
            data: filtereddata
              .map((record) => record._2019),
              //.slice(0, 20),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };
      callback(chartData);
    });
  });
};

const fetchFoeticideCasesAPI2014T02016 = (callback) => {
  console.log("fetching data fetchFoeticideCasesAPI2014T02016");
  const response = fetch(
    API_URL+"67a3c702-ae08-4e84-8623-738bd9bfc826?api-key="+KEY+"&format=json&offset=0&limit=40"
    //https://api.data.gov.in/resource/67a3c702-ae08-4e84-8623-738bd9bfc826?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&limit=40

    //"https://api.data.gov.in/resource/2f4cba8d-8190-4dcc-8b9b-3b39ed59ef44?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json"
  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    const filtereddata = data.records.filter(record => record._2016___foeticide !== "0" && record._2016___foeticide > 0 );
    console.log("data filtereddata"+JSON.stringify(filtereddata));

      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: filtereddata
          .map((record) => record.state_ut),
          //.slice(0, 20),
        datasets: [
          {
            label: "2014",
            data: filtereddata
              .map((record) => record._2014___foeticide),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2015",
            data: filtereddata
              .map((record) => record._2015___foeticide),
              //.slice(0, 20),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2016",
            data: filtereddata
              .map((record) => record._2016___foeticide),
              //.slice(0, 20),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };
      callback(chartData);
    });
  });
};

const fetchCyberFraudAPI2014T02016 = (callback) => {
  console.log("fetching data fetchCyberFraudAPI2014T02016");
  const response = fetch(
    API_URL+"4fe95be3-99e7-4699-b2ca-798877cd7108?api-key="+KEY+"&format=json&offset=0&limit=40"
    //https://api.data.gov.in/resource/67a3c702-ae08-4e84-8623-738bd9bfc826?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&limit=40
    //https://api.data.gov.in/resource/4fe95be3-99e7-4699-b2ca-798877cd7108?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json

    //"https://api.data.gov.in/resource/2f4cba8d-8190-4dcc-8b9b-3b39ed59ef44?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json"
  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    //const filtereddata = data.records.filter(record => record._2016___foeticide !== "0" && record._2016___foeticide > 0 );
    //console.log("data filtereddata"+JSON.stringify(filtereddata));

      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: data.records
          .map((record) => record.year),
          //.slice(0, 20),
        datasets: [
          {
            //label: data.records
            //.map((record) => record.year),
            data: data.records
              .map((record) => record.no__of_cyber_fraud_cases_registered),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          // {
          //   label: "2015",
          //   data: filtereddata
          //     .map((record) => record._2015___foeticide),
          //     //.slice(0, 20),
          //   backgroundColor: "rgba(55, 99, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "2016",
          //   data: filtereddata
          //     .map((record) => record._2016___foeticide),
          //     //.slice(0, 20),
          //   backgroundColor: "rgba(55, 99, 132, 0.6)",
          //   borderWidth: 4,
          // },
        ],
      };
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

export function Crime({ loggedIn, logout, login }) {
  //const classes = useStyles();
  const classes = useStyles();
 
  //const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState(null);
  // const chartData = null;

  const refreshChart = () => {
    fetchAPI((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };

  const getForeignCrime = () => {
    fetchForeignCrimeAPI((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };
  const getHeroinSeizure = () => {
    fetchHeroinSeizureAPI((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };
  const getConvictionRate = () => {
    fetchConvictionRateAPI((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };
  const getSuicideFarmers = () => {
    fetchSuicideFarmersAPI((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };
  const getFoeticideCases2018To2019 = () => {
    fetchFoeticideCasesAPI2018T02019((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };
  const getFoeticideCases2014To2016 = () => {
    fetchFoeticideCasesAPI2014T02016((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };

  const getCyberFraud2014To2016 = () => {
    fetchCyberFraudAPI2014T02016((chartData) => {
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
    <div >
        <button onClick={refreshChart}>Crime Head-wise Disposal of Persons Arrested for Offences against State during 2020</button>
    </div>
    <div><br /></div>
    <div >
        <button onClick={getForeignCrime}>Country-Wise Foreign Accused During 2020</button>
    </div>
    <div><br /></div>
    <div >
        <button onClick={getHeroinSeizure}>State/UTs-Wise Seizures Of Heroin As Published By The National Crime Records Bureau (NCRB) From 2016 To 2020</button>
    </div>
    <div><br /></div>
    <div >
        <button onClick={getConvictionRate}>Year-Wise Latest Publish Report Of The National Crime Records Bureau (NCRB), Conviction Rate (CVR) Of IPC Crimes At National Level From 2014 To 2016</button>
    </div>
    
    <div><br /></div>
    <div >
        <button onClick={getSuicideFarmers}>State/UT-Wise Suicide Committed By Farmers, As Per NCRB Report During 2018 And 2019</button>
    </div>
    <div><br /></div>
    <div >
        <button onClick={getFoeticideCases2018To2019}>State/UT-wise Cases Registered under Foeticide as per National Crime Records Bureau (NCRB) from 2018 to 2019 (From : Ministry of Health and Family Welfare)</button>
    </div>
    <div><br /></div>
    <div >
        <button onClick={getFoeticideCases2014To2016}>State/UT-wise Cases Registered under Foeticide as per National Crime Records Bureau (NCRB) from 2014 to 2016 (From : Ministry of Health and Family Welfare)</button>
    </div>
    <div><br /></div>
    <div >
        <button onClick={getCyberFraud2014To2016}>Year-Wise Details Of Cyber Fraud Cases Registered As Per National Crime Records Bureau (NCRB) From 2014 To 2016 (From : Ministry Of Home Affairs)</button>
    </div>

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
