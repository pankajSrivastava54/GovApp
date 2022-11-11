import React, { useState } from "react";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ChartGdp } from "./ChartGdp";
import Content from "../src/Dashboard/Content";
import { KEY, API_URL,CrimeDisposalPersonsArrested2020_Resource,ret_type,ret_limit,CrimeDisposalPersonsArrested2020,
  CountryWiseForeignAccusedDuring2020,CountryWiseForeignAccusedDuring2020_Resource,SeizuresHeroinNCRB2016To2020_Resource,
  NCRBConvictionRate20162020_Resource,NCRBConvictionRate20162020,NCRBFarmersSuicide2018And2019_Resource,NCRBCFoeticide20182019_Resource,NCRBFoeticide20142016_Resource,
  NCRBCyberFraud20142016_Resource,NCRBKidnappingAbduction20182020_Resource,NCRBDeathsInPoliceCustody2020_Resource,NCRBMissingAndTracedPersons2020_Resource,
  ForeignPrisoners31December2020_Resource,NCRBBoysandGirlsReportedMissing20142016_Resource,NCRBCyberFraud20142016,NCRBKidnappingAbduction20182020,
  SeizuresHeroinNCRB2016To2020,NCRBMissingAndTracedPersons2020,NCRBBoysandGirlsReportedMissing20142016,ForeignPrisoners31December2020,
  CasesNIA2017To2021,NCRBFarmersSuicide2018And2019,NCRBFoeticide20182019,NCRBFoeticide20142016,DisposalPersonsArrestedOffencesagainstState2020,
  NCRBDeathsInPoliceCustody2020,CasesNIA2017To2021_Resource,CasesPoAActNCRB2015to2017_Resource,CasesPoAActNCRB2015to2017,
  NDPSCasesNCRB2018to2020_Resource,NDPSCasesNCRB2018to2020,CasesCrimesagainstChildrenNCRB2014to2017_Resource,CasesCrimesagainstChildrenNCRB2014to2017,
  NRIMaritalComplaintsJanuary2017to31stDecember2021_Resource,NRIMaritalComplaintsJanuary2017to31stDecember2021,
  SeizedCounterfeitCurrencyNotesFrom2016To2020_Resource,SeizedCounterfeitCurrencyNotesFrom2016To2020,FICNSeizedFIRfrom2016to2018_Resource,
  FICNSeizedFIRfrom2016to2018,useStyles,DrugsSeizedBSFIndoBangladeshBorder2017To2022_Resource,DrugsSeizedBSFIndoBangladeshBorder2017To2022,
  FICNSeizedFIRfrom2019_Resource,FICNSeizedFIRfrom2019} from "../src/Const/Const";

import { ChartPie } from "./ChartPie";

import { ChartDonut } from "./ChartDonut";

import { ChartLine } from "./ChartLine";


// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchAPI = (callback) => {
  console.log("fetching data"+API_URL+CrimeDisposalPersonsArrested2020_Resource+KEY+ret_type+ret_limit);
  const response = fetch(
    API_URL+CrimeDisposalPersonsArrested2020_Resource+KEY+ret_type+ret_limit
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
          // {
          //   label: "Persons Arrested - Total",
          //   data: data.records
          //     .map((record) => record.persons_arrested___total____col__5_),
          //     //.slice(0, 10),
          //   backgroundColor: "rgba(255, 255, 132, 0.6)",
          //   borderWidth: 4,
          // },
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
          // {
          //   label: "Persons Chargesheeted - Total",
          //   data: data.records
          //     .map((record) => record.persons_chargesheeted___total____col__8_),
          //     //.slice(0, 10),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
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
          // {
          //   label: "Persons Convicted - Total",
          //   data: data.records
          //     .map((record) => record.persons_convicted___total____col__11_),
          //     //.slice(0, 10),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
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
          // {
          //   label: "Persons Discharged - Total",
          //   data: data.records
          //     .map((record) => record.persons_discharged___total____col__14_),
          //     //.slice(0, 10),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
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
          // {
          //   label: "Persons Acquitted - Total",
          //   data: data.records
          //     .map((record) => record.persons_acquitted___total____col__17_),
          //     //.slice(0, 10),
          //   backgroundColor: "rgba(45, 155, 132, 0.6)",
          //   borderWidth: 4,
          // },
        ],
      };

      callback(chartData);
    });
  });
};

// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchForeignCrimeAPI = (callback) => {
  console.log("fetching data fetchForeignCrimeAPI");
  const response = fetch(
    API_URL+CountryWiseForeignAccusedDuring2020_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("result data 222"+JSON.stringify(data));
    const result = data.records.filter(record => record.afghanistan____col__3_ !== 0 && record.bangladesh____col__4_ );
    let newArr = [];

    {data.records.filter(record => !(record.crime_head__col__2_).includes('Total')).map(filteredName => (
      console.log("filteredName size"+JSON.stringify(filteredName)),
      newArr.push(filteredName)
    ))}

    console.log("result data"+JSON.stringify(result));
  
      const chartData = {
        labels: newArr
          .map((record) => record.crime_head__col__2_),
        datasets: [
          {
            label: "Bangladesh",
            data: newArr
              .map((record) => record.bangladesh____col__4_),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "nepal",
            data: newArr
              .map((record) => record.nepal____col__5_),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "pakistan",
            data: newArr
              .map((record) => record.pakistan____col__6_),
            backgroundColor: "rgba(255, 255, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "sri_lanka",
            data: newArr
              .map((record) => record.sri_lanka____col__7_),
            backgroundColor: "rgba(105, 255, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "nigeria",
            data: newArr
              .map((record) => record.nigeria____col__37_),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "sudan",
            data: newArr
              .map((record) => record.sudan____col__39_),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "britain",
            data: newArr
              .map((record) => record.britain____col__18_),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "israel",
            data: newArr
              .map((record) => record.israel____col__10_),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Iran",
            data: newArr
              .map((record) => record.iran____col__11_),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Japan",
            data: newArr
              .map((record) => record.japan____col__13_),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "australia",
            data: newArr
              .map((record) => record.australia____col__34_),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "brazil",
            data: newArr
              .map((record) => record.brazil____col__31_),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "new_zealand",
            data: newArr
              .map((record) => record.new_zealand____col__35_),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "myanmar",
            data: newArr
              .map((record) => record.myanmar____col__14_),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "yemen",
            data: newArr
              .map((record) => record.yemen____col__16_),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };

      callback(chartData);
    });
  });
};

// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchHeroinSeizureAPI = (callback) => {
  //console.log("fetching data fetchHeroinSeizureAPI");
  const response = fetch(
    API_URL+SeizuresHeroinNCRB2016To2020_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
    const result = data.records.filter(record => record._2016___kgs_ !== "0" && record._2016___kgs_ > 1.0 );
    let newArr = [];

    console.log("result data"+JSON.stringify(result));
      {data.records.filter(record => !(record.state_ut).includes('Total')).map(filteredName => (
        console.log("filteredName size"+JSON.stringify(filteredName)),
        newArr.push(filteredName)
      ))}

      console.log("result newArr"+JSON.stringify(newArr));
      console.log("result size"+data.records.length);
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: newArr
          .map((record) => record.state_ut),
         //  .slice(0, result.length-2),
        datasets: [
          {
            label: "_2016",
            data: newArr
              .map((record) => record._2016___kgs_),
              //.slice(0, result.length-2),
              backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2017",
            data: newArr
              .map((record) => record._2017___kgs_),
              //.slice(0, result.length-2),
              backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2018",
            data: newArr
              .map((record) => record._2018___kgs_),
              //.slice(0, result.length-2),
              backgroundColor: "rgba(255, 255, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2019",
            data: newArr
              .map((record) => record._2019___kgs_),
              //.slice(0, result.length-2),
              backgroundColor: "rgba(105, 255, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2020",
            data: newArr
              .map((record) => record._2020___kgs_),
              //.slice(0, result.length-2),
              backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
 
        ],
      };
      callback(chartData);
    });
  });
};

// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchConvictionRateAPI = (callback) => {
  console.log("fetching data fetchConvictionRateAPI");
  const response = fetch(
    //API_URL+"2f4cba8d-8190-4dcc-8b9b-3b39ed59ef44?api-key="+KEY+"&format=json&offset=0&limit=40"
    API_URL+NCRBConvictionRate20162020_Resource+KEY+ret_type+ret_limit

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
         
        ],
      };
      callback(chartData);
    });
  });
};

const fetchSuicideFarmersAPI = (callback) => {
  console.log("fetching data fetchSuicideFarmersAPI");
  const response = fetch(
    //API_URL+"855d712f-8bf9-420d-a430-23dbf61c1dbe?api-key="+KEY+"&format=json&offset=0&limit=40"
    API_URL+NCRBFarmersSuicide2018And2019_Resource+KEY+ret_type+ret_limit


  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    const filtereddata = data.records.filter(record => record._2018 !== "0" && record._2018 > 0 );
    console.log("data filtereddata"+JSON.stringify(filtereddata));
    let newArr = [];

    {filtereddata.filter(record => !(record.state_ut).includes('Total')).map(filteredName => (
      console.log("filteredName size"+JSON.stringify(filteredName)),
      newArr.push(filteredName)
    ))}
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: newArr
          .map((record) => record.state_ut),
          //.slice(0, 20),
        datasets: [
          {
            label: "_2018",
            data: newArr
              .map((record) => record._2018),
              //.slice(0, 20),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "_2019",
            data: newArr
              .map((record) => record._2019),
              //.slice(0, 20),
            backgroundColor: "rgba(255,0,0,1)",
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
    //API_URL+"855d712f-8bf9-420d-a430-23dbf61c1dbe?api-key="+KEY+"&format=json&offset=0&limit=40"
    API_URL+NCRBCFoeticide20182019_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    const filtereddata = data.records.filter(record => record._2018 !== "0" && record._2018 > 0 );
    console.log("data filtereddata"+JSON.stringify(filtereddata));
    let newArr = [];

    {data.records.filter(record => !(record.state_ut).includes('Total')).map(filteredName => (
      console.log("filteredName size"+JSON.stringify(filteredName)),
      newArr.push(filteredName)
    ))}
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: newArr
          .map((record) => record.state_ut),
          //.slice(0, 20),
        datasets: [
          {
            label: "2018",
            data: newArr
              .map((record) => record._2018),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2019",
            data: newArr
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
    //API_URL+"67a3c702-ae08-4e84-8623-738bd9bfc826?api-key="+KEY+"&format=json&offset=0&limit=40"
    API_URL+NCRBFoeticide20142016_Resource+KEY+ret_type+ret_limit

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
    //API_URL+"4fe95be3-99e7-4699-b2ca-798877cd7108?api-key="+KEY+"&format=json&offset=0&limit=40"
    API_URL+NCRBCyberFraud20142016_Resource+KEY+ret_type+ret_limit


  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));

      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: data.records
        .map((record) => record.year),
        datasets: [
          {

            data: data.records
              .map((record) => record.no__of_cyber_fraud_cases_registered),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },

        ],
      };
      callback(chartData);
    });
  });
};

const fetchCityWiseKidnapping2018TO2020 = (callback) => {
  console.log("fetching data fetchCyberFraudAPI2014T02016");
  const response = fetch(
    //API_URL+"fc4878fe-9b80-4c33-b401-7cce0c766cee?api-key="+KEY+"&format=json&offset=0&limit=40"
    API_URL+NCRBKidnappingAbduction20182020_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    //const filtereddata = data.records.filter(record => record._2016___foeticide !== "0" && record._2016___foeticide > 0 );
    //console.log("data filtereddata"+JSON.stringify(filtereddata));
    let newArr = [];

    {data.records.filter(record => !(record.city).includes('Total')).map(filteredName => (
      console.log("filteredName size"+JSON.stringify(filteredName)),
      newArr.push(filteredName)
    ))}
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: newArr
        .map((record) => record.city),
        //.slice(0, 20),
        datasets: [
          {
            label: "2018",
            data: newArr
              .map((record) => record._2018),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2019",
            data: newArr
              .map((record) => record._2019),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2020",
            data: newArr
              .map((record) => record._2020),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };
      callback(chartData);
    });
  });
};

const fetchDeathsInPoliceCustody2020 = (callback) => {
  console.log("fetching data fetchgetDeathsInPoliceCustody2020");
  const response = fetch(
    //API_URL+"67aadebc-311c-43e2-bf2b-2f1ac8f524ed?api-key="+KEY+"&format=json&offset=0&limit=40"
    API_URL+NCRBDeathsInPoliceCustody2020_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    const filtereddata = data.records.filter(record => record.deaths_reported____col__3_ !== "0" && record.deaths_reported____col__3_ > 0 );
    console.log("data filtereddata"+JSON.stringify(filtereddata));
    let newArr = [];

    {filtereddata.filter(record => !(record.state_ut__col__2_).includes('Total')).map(filteredName => (
      //console.log("filteredName size"+JSON.stringify(filteredName)),
      newArr.push(filteredName)
    ))}
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: newArr
        .map((record) => record.state_ut__col__2_),
        //.slice(0, 20),
        datasets: [
          {
            label: "Deaths Reported",
            data: newArr
              .map((record) => record.deaths_reported____col__3_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Mag Enquiries Ordered",
            data: newArr
              .map((record) => record.mag__enquiries_ordered____col__4_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Judicial Enquiries Ordered",
            data: newArr
              .map((record) => record.judicial_enquiries_ordered____col__5_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Cases Registered",
            data: newArr
              .map((record) => record.cases___registered____col__6_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Cases Chargesheeted",
            data: newArr
              .map((record) => record.cases___charge_sheeted____col__7_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Cases Convicted",
            data: newArr
              .map((record) => record.cases___convicted____col__8_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Cases Acquitted Discharged",
            data: newArr
              .map((record) => record.cases___acquitted__discharged____col__9_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Policeme Arrested",
            data: newArr
              .map((record) => record.policemen___arrested____col__10_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Policeme Chargesheeted",
            data: newArr
              .map((record) => record.policemen___charge_sheeted____col__11_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Policemen Convicted" ,
            data: newArr
              .map((record) => record.policemen___convicted____col__12_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Policemen Acquitted Discharged",
            data: newArr
              .map((record) => record.policemen___acquitted__discharged____col__13_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };
      callback(chartData);
    });
  });
};

const fetchCasesRegisteredByNIAFrom2017To2021 = (callback) => {
  console.log("fetching data fetchMissingAndTracedPersons2020");
  const response = fetch(
    //API_URL+"ba0713b7-e646-4dc7-9c26-e7f8dc592df0?api-key="+KEY+"&format=json&offset=0&limit=100"
    API_URL+CasesNIA2017To2021_Resource+KEY+ret_type+ret_limit


  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    const filtereddata = data.records.filter(record => record.deaths_reported____col__3_ !== "0" && record.deaths_reported____col__3_ > 0 );
    console.log("data filtereddata"+JSON.stringify(filtereddata));

      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: data.records
        .map((record) => record._year)
        .slice(0,data.records.length-1),
        datasets: [
          {
            label: "Number of cases registered by NIA",
            data: data.records
              .map((record) => record.number_of_cases_registered_by_nia)
              .slice(0,data.records.length-1),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
        ],
      };
      callback(chartData);
    });
  });
};

const fetchNDPSCasesNCRB2018to2020 = (callback) => {
  console.log("fetching data fetchNDPSCasesNCRB2018to2020");
  const response = fetch(
    //API_URL+"ba0713b7-e646-4dc7-9c26-e7f8dc592df0?api-key="+KEY+"&format=json&offset=0&limit=100"
    API_URL+NDPSCasesNCRB2018to2020_Resource+KEY+ret_type+ret_limit


  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    const filtereddata = data.records.filter(record => record.deaths_reported____col__3_ !== "0" && record.deaths_reported____col__3_ > 0 );
    console.log("data filtereddata"+JSON.stringify(filtereddata));
    let newArr = [];

    {data.records.filter(record => !(record.state_ut).includes('Total')).map(filteredName => (
      console.log("filteredName size"+JSON.stringify(filteredName)),
      newArr.push(filteredName)
    ))}
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: newArr
        .map((record) => record.state_ut),
        datasets: [
          {
            label: "2018",
            data: newArr
              .map((record) => record._2018),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "2019",
            data: newArr
              .map((record) => record._2019),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },
          {
            label: "2020",
            data: newArr
              .map((record) => record._2020),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
         
        ],
      };
      callback(chartData);
    });
  });
};
const fetchNRIMaritalComplaintsJanuary2017to31stDecember2021 = (callback) => {
  console.log("fetching data fetchNRIMaritalComplaintsJanuary2017to31stDecember2021");
  const response = fetch(
    //API_URL+"ba0713b7-e646-4dc7-9c26-e7f8dc592df0?api-key="+KEY+"&format=json&offset=0&limit=100"
    API_URL+NRIMaritalComplaintsJanuary2017to31stDecember2021_Resource+KEY+ret_type+ret_limit


  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    const filtereddata = data.records.filter(record => record.country !== "0" && record.country > 0 );
    console.log("data filtereddata"+JSON.stringify(filtereddata));
    let newArr = [];

    {data.records.filter(record => !(record.country).includes('Total')).map(filteredName => (
      console.log("filteredName size"+JSON.stringify(filteredName)),
      newArr.push(filteredName)
    ))}
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: newArr
        .map((record) => record.country),
        datasets: [
          {
            label: "Total No. of Complaints",
            data: newArr
              .map((record) => record.total_no__of_complaints),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },

        ],
      };
      callback(chartData);
    });
  });
};

const fetchCasesCrimesagainstChildrenNCRB2014to2017 = (callback) => {
  console.log("fetching data fetchCasesCrimesagainstChildrenNCRB2014to2017");
  const response = fetch(
    //API_URL+"ba0713b7-e646-4dc7-9c26-e7f8dc592df0?api-key="+KEY+"&format=json&offset=0&limit=100"
    API_URL+CasesCrimesagainstChildrenNCRB2014to2017_Resource+KEY+ret_type+ret_limit


  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    let newArr = [];

    {data.records.filter(record => !(record.state_ut).includes('Total')).map(filteredName => (
      console.log("filteredName size"+JSON.stringify(data.records)),
      newArr.push(filteredName)
    ))}
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: newArr
        .map((record) => record.state_ut),
        datasets: [
          {
            label: "2014",
            data: newArr
              .map((record) => record._2014),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "2015",
            data: newArr
              .map((record) => record._2015),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },
          {
            label: "2016",
            data: newArr
              .map((record) => record._2016),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2017",
            data: newArr
              .map((record) => record._2017),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
         
        ],
      };
      callback(chartData);
    });
  });
};

const fetchSeizedCounterfeitCurrencyNotesFrom2016To2020 = (callback) => {
  console.log("fetching data fetchSeizedCounterfeitCurrencyNotesFrom2016To2020");
  const response = fetch(
    API_URL+SeizedCounterfeitCurrencyNotesFrom2016To2020_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    let newArr = [];

    {data.records.filter(record => !(record.year_).includes('Total')).map(filteredName => (
      console.log("filteredName size"+JSON.stringify(data.records)),
      newArr.push(filteredName)
    ))}
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: newArr
        .map((record) => record.year_),
        datasets: [
          {
            label: "Denomination-wise Number of Seized Counterfeit Currency Notes - 2000",
            data: newArr
              .map((record) => record.denomination_wise_number_of_seized_counterfeit_currency_notes___2000),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "Denomination-wise Number of Seized Counterfeit Currency Notes - 1000",
            data: newArr
              .map((record) => record.denomination_wise_number_of_seized_counterfeit_currency_notes___1000),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },
          {
            label: "Denomination-wise Number of Seized Counterfeit Currency Notes - 500(O)",
            data: newArr
              .map((record) => record.denomination_wise_number_of_seized_counterfeit_currency_notes___500_o_),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "Denomination-wise Number of Seized Counterfeit Currency Notes - 500(N)",
            data: newArr
              .map((record) => record.denomination_wise_number_of_seized_counterfeit_currency_notes___500_n_),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "Denomination-wise Number of Seized Counterfeit Currency Notes - 200",
            data: newArr
              .map((record) => record.denomination_wise_number_of_seized_counterfeit_currency_notes___200),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "Denomination-wise Number of Seized Counterfeit Currency Notes - 100",
            data: newArr
              .map((record) => record.denomination_wise_number_of_seized_counterfeit_currency_notes___100),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "Denomination-wise Number of Seized Counterfeit Currency Notes - 50(O)",
            data: newArr
              .map((record) => record.denomination_wise_number_of_seized_counterfeit_currency_notes___50_o_),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "Denomination-wise Number of Seized Counterfeit Currency Notes - 50(N)",
            data: newArr
              .map((record) => record.denomination_wise_number_of_seized_counterfeit_currency_notes___50_n_),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "Denomination-wise Number of Seized Counterfeit Currency Notes - 20",
            data: newArr
              .map((record) => record.denomination_wise_number_of_seized_counterfeit_currency_notes___20),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "Denomination-wise Number of Seized Counterfeit Currency Notes - 10",
            data: newArr
              .map((record) => record.denomination_wise_number_of_seized_counterfeit_currency_notes___10),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "Denomination-wise Number of Seized Counterfeit Currency Notes - 5",
            data: newArr
              .map((record) => record.denomination_wise_number_of_seized_counterfeit_currency_notes___5),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "Denomination-wise Number of Seized Counterfeit Currency Notes - 2",
            data: newArr
              .map((record) => record.denomination_wise_number_of_seized_counterfeit_currency_notes___2),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "Denomination-wise Number of Seized Counterfeit Currency Notes - 1",
            data: newArr
              .map((record) => record.denomination_wise_number_of_seized_counterfeit_currency_notes___1),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
        ],
      };
      callback(chartData);
    });
  });
};

const fetchFICNSeizedFIRfrom2016to2018 = (callback) => {
  console.log("fetching data fetchFICNSeizedFIRfrom2016to2018");
  const response = fetch(
    API_URL+FICNSeizedFIRfrom2016to2018_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    let newArr = [];

    {data.records.filter(record => !(record.state_ut).includes('Total')).map(filteredName => (
      console.log("filteredName size"+JSON.stringify(data.records)),
      newArr.push(filteredName)
    ))}
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: newArr
        .map((record) => record.state_ut),
        datasets: [
          {
            label: "2016 - Number of FICN Seized",
            data: newArr
              .map((record) => record._2016___number_of_ficn_seized),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "2016 - Total Value (In Rs.)",
            data: newArr
              .map((record) => record._2016___total_value__in_rs__),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },
          {
            label: "_2016___total_number_of_case_number_of_complaints_lodged",
            data: newArr
              .map((record) => record._2016___total_number_of_case_number_of_complaints_lodged),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2017 - Number of FICN Seized",
            data: newArr
              .map((record) => record._2017___number_of_ficn_seized),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2017 - Total Value (In Rs.)",
            data: newArr
              .map((record) => record._2017___total_value__in_rs__),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "Denomination-wise Number of Seized Counterfeit Currency Notes - 100",
            data: newArr
              .map((record) => record.denomination_wise_number_of_seized_counterfeit_currency_notes___100),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2017 - Total number of case/Number of Complaints lodged",
            data: newArr
              .map((record) => record._2017___total_number_of_case_number_of_complaints_lodged),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2018 - Number of FICN Seized",
            data: newArr
              .map((record) => record._2018___number_of_ficn_seized),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2018 - Total Value (In Rs.)",
            data: newArr
              .map((record) => record._2018___total_value__in_rs__),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2018 - Total number of case/Number of Complaints lodged",
            data: newArr
              .map((record) => record._2018___total_number_of_case_number_of_complaints_lodged),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          
        ],
      };
      callback(chartData);
    });
  });
};

const fetchFICNSeizedFIRfrom2019 = (callback) => {
  console.log("fetching data FICNSeizedFIRfrom2019");
  const response = fetch(
    API_URL+FICNSeizedFIRfrom2019_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    let newArr = [];

    {data.records.filter(record => !(record.state_ut).includes('Total')).map(filteredName => (
      console.log("filteredName size"+JSON.stringify(data.records)),
      newArr.push(filteredName)
    ))}
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: newArr
        .map((record) => record.state_ut),
        datasets: [
          {
            label: "Number of FICN Seized",
            data: newArr
              .map((record) => record.number_of_ficn_seized),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "Total Value (In Rs.)",
            data: newArr
              .map((record) => record.total_value__in_rs__),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },
          {
            label: "Total number of case/Number of Complaints lodged",
            data: newArr
              .map((record) => record.total_number_of_case_number_of_complaints_lodged),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2017 - Number of FICN Seized",
            data: newArr
              .map((record) => record._2017___number_of_ficn_seized),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2017 - Total Value (In Rs.)",
            data: newArr
              .map((record) => record._2017___total_value__in_rs__),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "Denomination-wise Number of Seized Counterfeit Currency Notes - 100",
            data: newArr
              .map((record) => record.denomination_wise_number_of_seized_counterfeit_currency_notes___100),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2017 - Total number of case/Number of Complaints lodged",
            data: newArr
              .map((record) => record._2017___total_number_of_case_number_of_complaints_lodged),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2018 - Number of FICN Seized",
            data: newArr
              .map((record) => record._2018___number_of_ficn_seized),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2018 - Total Value (In Rs.)",
            data: newArr
              .map((record) => record._2018___total_value__in_rs__),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2018 - Total number of case/Number of Complaints lodged",
            data: newArr
              .map((record) => record._2018___total_number_of_case_number_of_complaints_lodged),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          
        ],
      };
      callback(chartData);
    });
  });
};
const fetchDrugsSeizedBSFIndoBangladeshBorder2017To2022 = (callback) => {
  console.log("fetching data fetchDrugsSeizedBSFIndoBangladeshBorder2017To2022");
  const response = fetch(
    API_URL+DrugsSeizedBSFIndoBangladeshBorder2017To2022_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    let newArr = [];

    {data.records.filter(record => !(record.drug).includes('Total')).map(filteredName => (
      console.log("filteredName size"+JSON.stringify(data.records)),
      newArr.push(filteredName)
    ))}
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: newArr
        .map((record) => record.drug),
        datasets: [
          {
            label: "2017",
            data: newArr
              .map((record) => record._2017),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "2018",
            data: newArr
              .map((record) => record._2018),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },
          {
            label: "2019",
            data: newArr
              .map((record) => record._2019),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2020",
            data: newArr
              .map((record) => record._2020),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2021",
            data: newArr
              .map((record) => record._2021),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2022",
            data: newArr
              .map((record) => record._2022),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          
        ],
      };
      callback(chartData);
    });
  });
};


const fetchCasesPoAActNCRB2015to2017 = (callback) => {
  console.log("fetching data fetchCasesPoAActNCRB2015to2017");
  const response = fetch(
    //API_URL+"ba0713b7-e646-4dc7-9c26-e7f8dc592df0?api-key="+KEY+"&format=json&offset=0&limit=100"
    API_URL+CasesPoAActNCRB2015to2017_Resource+KEY+ret_type+ret_limit


  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    const filtereddata = data.records.filter(record => record.deaths_reported____col__3_ !== "0" && record.deaths_reported____col__3_ > 0 );
    console.log("data filtereddata"+JSON.stringify(filtereddata));

      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: data.records
        .map((record) => record.year),
        datasets: [
          {
            label: "Number of cases in Courts including brought forward from previous year",
            data: data.records
              .map((record) => record.number_of_cases_in_courts_including_brought_forward_from_previous_year),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "Number of cases compounded or withdrawn during trial",
            data: data.records
              .map((record) => record.number_of_cases_compounded_or_withdrawn_during_trial),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "Number of cases ended in conviction",
            data: data.records
              .map((record) => record.number_of_cases_ended_in_conviction),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "Number of cases ended in acquittal",
            data: data.records
              .map((record) => record.number_of_cases_ended_in_acquittal),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "Number of cases pending with the courts at the end of the year",
            data: data.records
              .map((record) => record.number_of_cases_pending_with_the_courts_at_the_end_of_the_year),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "Total number of cases disposed of by the Courts",
            data: data.records
              .map((record) => record.total_number_of_cases_disposed_of_by_the_courts),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
        ],
      };
      callback(chartData);
    });
  });
};
const fetchForeignOriginUndertrialdec2020 = (callback) => {
  console.log("fetching data fetchMissingAndTracedPersons2020");
  const response = fetch(
    //API_URL+"141e98f7-9ce4-4fe0-81d5-8d537118530e?api-key="+KEY+"&format=json&offset=0&limit=100"
    API_URL+ForeignPrisoners31December2020_Resource+KEY+ret_type+ret_limit


  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    const filtereddata = data.records.filter(record => record.nationality_country !== "0" && record.deaths_reported____col__3_ > 0 );
    console.log("data filtereddata"+JSON.stringify(filtereddata));
    let newArr = [];

    {data.records.filter(record => !(record.nationality_country).includes('Total')).map(filteredName => (
      console.log("filteredName size"+JSON.stringify(filteredName)),
      newArr.push(filteredName)
    ))}
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: newArr
        .map((record) => record.nationality_country),
        //.slice(0, 20),
        datasets: [
          {
            label: "Number of Foreign-origin Undertrial Prisoners",
            data: newArr
              .map((record) => record.number_of_foreign_origin_undertrial_prisoners),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };
      callback(chartData);
    });
  });
};
const fetchNumberofBoysandGirlsReportedMissing2014to2016 = (callback) => {
  console.log("fetching data fetchMissingAndTracedPersons2020");
  const response = fetch(
    //API_URL+"09c94c02-f824-4da8-bda9-3382466189aa?api-key="+KEY+"&format=json&offset=0&limit=40"
    API_URL+NCRBBoysandGirlsReportedMissing20142016_Resource+KEY+ret_type+ret_limit


  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    const filtereddata = data.records.filter(record => record.deaths_reported____col__3_ !== "0" && record.deaths_reported____col__3_ > 0 );
    console.log("data filtereddata"+JSON.stringify(filtereddata));
    console.log("data record size"+JSON.stringify(data.records.length));

      // set the chart data, trim the data to 10 records
      const chartData = {
        
        labels: data.records
        .map((record) => record.year),
        //.slice(0, 20),
        datasets: [
          {
            label: "Girls",
            data: data.records
              .map((record) => record.girls),
              //.slice(0, 20),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },
          {
            label: "Boys",
            data: data.records
              .map((record) => record.boys),
              //.slice(0, 20),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          
 
        ],
      };
      callback(chartData);
    });
  });
};

const fetchMissingAndTracedPersons2020 = (callback) => {
  console.log("fetching data fetchMissingAndTracedPersons2020");
  const response = fetch(
    //API_URL+"b70ed9d7-b350-4117-9987-21fa49d318eb?api-key="+KEY+"&format=json&offset=0&limit=40"
    API_URL+NCRBMissingAndTracedPersons2020_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();
    //const result = data.records.filter(record => record !== 0);
    console.log("result data"+JSON.stringify(data));

    data.then((data) => {
      console.log("data data 222"+JSON.stringify(data));
    const filtereddata = data.records.filter(record => record.deaths_reported____col__3_ !== "0" && record.deaths_reported____col__3_ > 0 );
    console.log("data filtereddata"+JSON.stringify(filtereddata));

      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: data.records
        .map((record) => record.age_group___gender____col__2_),
        //.slice(0, 20),
        datasets: [
          {
            label: "Unrecovered Persons of Previous Years",
            data: data.records
              .map((record) => record.unrecovered_persons_of_previous_years____col__3_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons Missing During 2020",
            data: data.records
              .map((record) => record.persons_missing_during_2020____col__4_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          // {
          //   label: "Total Missing",
          //   data: data.records
          //     .map((record) => record.total_missing__3_4_____col__5_),
          //     //.slice(0, 20),
          //   backgroundColor: "rgba(155, 99, 132, 0.6)",
          //   borderWidth: 4,
          // },
          {
            label: "Persons Traced From Previous Years Missing",
            data: data.records
              .map((record) => record.persons_traced___from_previous_years_missing____col__6_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons Traced From Missing Persons 2020",
            data: data.records
              .map((record) => record.persons_traced___from_missing_persons_2020____col__7_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          // {
          //   label: "Cases Convicted",
          //   data: data.records
          //     .map((record) => record.persons_traced___total_traced____col__8_),
          //     //.slice(0, 20),
          //   backgroundColor: "rgba(155, 99, 132, 0.6)",
          //   borderWidth: 4,
          // },
          // {
          //   label: "__of_persons_traced__col_8_col_5___100_____col__9_",
          //   data: data.records
          //     .map((record) => record.__of_persons_traced__col_8_col_5___100_____col__9_),
          //     //.slice(0, 20),
          //   backgroundColor: "rgba(155, 99, 132, 0.6)",
          //   borderWidth: 4,
          // },
          {
            label: "Persons Untraced From Previous Years Missing",
            data: data.records
              .map((record) => record.persons_untraced___from_previous_years_missing____col__10_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Persons Untraced From_ Missing Persons 2020",
            data: data.records
              .map((record) => record.persons_untraced___from_missing_persons_2020____col__11_),
              //.slice(0, 20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          // {
          //   label: "Policemen Convicted" ,
          //   data: data.records
          //     .map((record) => record.persons_untraced___total_traced____col__12_),
          //     //.slice(0, 20),
          //   backgroundColor: "rgba(155, 99, 132, 0.6)",
          //   borderWidth: 4,
          // },
 
        ],
      };
      callback(chartData);
    });
  });
};

export function Crime({ loggedIn, logout, login }) {
  const classes = useStyles();
 
  const [chartData, setChartData] = useState(null);
  const [chartType, setChartType] = useState('bar');

  const [chartTitle, setChartTitle] = useState('bar');
  const refreshChart = () => {
    fetchAPI((chartData) => {
      setChartType('line');
      setChartTitle(CrimeDisposalPersonsArrested2020);

      setChartData(chartData);
    });
  };

  const getForeignCrime = () => {
    fetchForeignCrimeAPI((chartData) => {
      setChartType('line');
      setChartTitle(CountryWiseForeignAccusedDuring2020);

      setChartData(chartData);
    });
  };
  const getHeroinSeizure = () => {
    fetchHeroinSeizureAPI((chartData) => {
      setChartType('bar');
      setChartTitle(SeizuresHeroinNCRB2016To2020);
      setChartData(chartData);
    });
  };
  const getConvictionRate = () => {
    fetchConvictionRateAPI((chartData) => {
      setChartType('bar');
      setChartTitle(NCRBConvictionRate20162020);
      setChartData(chartData);
    });
  };
  const getSuicideFarmers = () => {
    fetchSuicideFarmersAPI((chartData) => {
      setChartType('bar');      
      setChartTitle(NCRBFarmersSuicide2018And2019);

      setChartData(chartData);
    });
  };
  const getFoeticideCases2018To2019 = () => {
    fetchFoeticideCasesAPI2018T02019((chartData) => {
      setChartType('bar');
      setChartTitle(NCRBFoeticide20182019);

      setChartData(chartData);
    });
  };
  const getFoeticideCases2014To2016 = () => {
    fetchFoeticideCasesAPI2014T02016((chartData) => {
      setChartType('bar');     
       setChartTitle(NCRBFoeticide20142016);

      setChartData(chartData);
    });
  };

  const getCyberFraud2014To2016 = () => {
    fetchCyberFraudAPI2014T02016((chartData) => {
      setChartType('pie');
      setChartTitle(NCRBCyberFraud20142016);

      setChartData(chartData);
    });
  };
  
  const getCityWiseKidnapping2018TO2020 = () => {
    fetchCityWiseKidnapping2018TO2020((chartData) => {
      setChartType('bar');
      setChartTitle(NCRBKidnappingAbduction20182020);

      setChartData(chartData);
    });
  };

  const getDeathsInPoliceCustody2020 = () => {
    fetchDeathsInPoliceCustody2020((chartData) => {
      setChartType('bar');
      setChartTitle(NCRBDeathsInPoliceCustody2020);

      setChartData(chartData);
    });
  };
  
  const getMissingAndTracedPersons2020 = () => {
    fetchMissingAndTracedPersons2020((chartData) => {
      setChartType('bar');
      setChartTitle(NCRBMissingAndTracedPersons2020);

      setChartData(chartData);
    });
  };

  const getNumberofBoysandGirlsReportedMissing2014to2016 = () => {
    fetchNumberofBoysandGirlsReportedMissing2014to2016((chartData) => {
      setChartType('bar');
      setChartTitle(NCRBBoysandGirlsReportedMissing20142016);

      setChartData(chartData);
    });
  };
  const getForeignOriginUndertrialdec2020 = () => {
    fetchForeignOriginUndertrialdec2020((chartData) => {
      setChartType('bar');
      setChartTitle(ForeignPrisoners31December2020);

      setChartData(chartData);
    });
  };
  const getCasesRegisteredByNIAFrom2017To2021 = () => {
    fetchCasesRegisteredByNIAFrom2017To2021((chartData) => {
      setChartType('line');
      setChartTitle(CasesNIA2017To2021);

      setChartData(chartData);
    });
  };
  
  const getCasesPoAActNCRB2015to2017 = () => {
    fetchCasesPoAActNCRB2015to2017((chartData) => {
      setChartType('line');
      setChartTitle(CasesNIA2017To2021);

      setChartData(chartData);
    });
  };
  
  const getNDPSCasesNCRB2018to2020 = () => {
    fetchNDPSCasesNCRB2018to2020((chartData) => {
      setChartType('line');
      setChartTitle(CasesNIA2017To2021);

      setChartData(chartData);
    });
  };
  const getNRIMaritalComplaintsJanuary2017to31stDecember2021 = () => {
    fetchNRIMaritalComplaintsJanuary2017to31stDecember2021((chartData) => {
      setChartType('line');
      setChartTitle(NRIMaritalComplaintsJanuary2017to31stDecember2021);

      setChartData(chartData);
    });
  };
  
  const getCasesCrimesagainstChildrenNCRB2014to2017 = () => {
    fetchCasesCrimesagainstChildrenNCRB2014to2017((chartData) => {
      setChartType('line');
      setChartTitle(CasesCrimesagainstChildrenNCRB2014to2017);

      setChartData(chartData);
    });
  };
  const getSeizedCounterfeitCurrencyNotesFrom2016To2020 = () => {
    fetchSeizedCounterfeitCurrencyNotesFrom2016To2020((chartData) => {
      setChartType('line');
      setChartTitle(SeizedCounterfeitCurrencyNotesFrom2016To2020);
      setChartData(chartData);
    });
  };
  const getFICNSeizedFIRfrom2016to2018 = () => {
    fetchFICNSeizedFIRfrom2016to2018((chartData) => {
      setChartType('line');
      setChartTitle(FICNSeizedFIRfrom2016to2018);
      setChartData(chartData);
    });
  };
  const getFICNSeizedFIRfrom2019 = () => {
    fetchFICNSeizedFIRfrom2019((chartData) => {
      setChartType('line');
      setChartTitle(FICNSeizedFIRfrom2019);
      setChartData(chartData);
    });
  };
  const getDrugsSeizedBSFIndoBangladeshBorder2017To2022 = () => {
    fetchDrugsSeizedBSFIndoBangladeshBorder2017To2022((chartData) => {
      setChartType('line');
      setChartTitle(FICNSeizedFIRfrom2016to2018);
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
        backgroundImage: "url(/img/Crime.png)",
      }}>
        <button className={classes.button} onClick={refreshChart}>{DisposalPersonsArrestedOffencesagainstState2020}</button>
        <button className={classes.button} onClick={getForeignCrime}>{CountryWiseForeignAccusedDuring2020}</button>
        <button className={classes.button} onClick={getHeroinSeizure}>{SeizuresHeroinNCRB2016To2020}</button>
        <button className={classes.button} onClick={getConvictionRate}>{NCRBConvictionRate20162020}</button>
        <button className={classes.button} onClick={getSuicideFarmers}>{NCRBFarmersSuicide2018And2019}</button>
        <button className={classes.button} onClick={getFoeticideCases2018To2019}>{NCRBFoeticide20182019}</button>
        <button className={classes.button} onClick={getFoeticideCases2014To2016}>{NCRBFoeticide20142016}</button>
        <button className={classes.button} onClick={getCyberFraud2014To2016}>{NCRBCyberFraud20142016}</button>
        <button className={classes.button} onClick={getCityWiseKidnapping2018TO2020}>{NCRBKidnappingAbduction20182020}</button>
        <button className={classes.button} onClick={getDeathsInPoliceCustody2020}>{NCRBDeathsInPoliceCustody2020}</button>
        <button className={classes.button} onClick={getMissingAndTracedPersons2020}>{NCRBMissingAndTracedPersons2020}</button>
        <button className={classes.button} onClick={getNumberofBoysandGirlsReportedMissing2014to2016}>{NCRBBoysandGirlsReportedMissing20142016}</button>
        <button className={classes.button} onClick={getForeignOriginUndertrialdec2020}>{ForeignPrisoners31December2020}</button>
        <button className={classes.button} onClick={getCasesRegisteredByNIAFrom2017To2021}>{CasesNIA2017To2021}</button>
        <button className={classes.button} onClick={getCasesPoAActNCRB2015to2017}>{CasesPoAActNCRB2015to2017}</button>
        <button className={classes.button} onClick={getNDPSCasesNCRB2018to2020}>{NDPSCasesNCRB2018to2020}</button>
        <button className={classes.button} onClick={getNRIMaritalComplaintsJanuary2017to31stDecember2021}>{NRIMaritalComplaintsJanuary2017to31stDecember2021}</button>
        <button className={classes.button} onClick={getCasesCrimesagainstChildrenNCRB2014to2017}>{CasesCrimesagainstChildrenNCRB2014to2017}</button>
        <button className={classes.button} onClick={getSeizedCounterfeitCurrencyNotesFrom2016To2020}>{SeizedCounterfeitCurrencyNotesFrom2016To2020}</button>
        <button className={classes.button} onClick={getFICNSeizedFIRfrom2016to2018}>{FICNSeizedFIRfrom2016to2018}</button>

        <button className={classes.button} onClick={getDrugsSeizedBSFIndoBangladeshBorder2017To2022}>{DrugsSeizedBSFIndoBangladeshBorder2017To2022}</button>
        <button className={classes.button} onClick={getFICNSeizedFIRfrom2019}>{FICNSeizedFIRfrom2019}</button>

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
