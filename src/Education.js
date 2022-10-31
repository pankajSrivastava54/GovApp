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
const fetchAmountReleasedByDSTForCentralSectorSchemeFrom201819To202021 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"e25ae4f6-4472-4ded-afd9-30d7851d5fe9?api-key="+KEY+"&format=json&offset=0&limit=18"
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
const fetchFundAllocationandExpenditurebytheDepartmentofScienceandTechnology201617to202021 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"f629e371-9104-4a56-be21-80d508fdc55e?api-key="+KEY+"&format=json&limit=62"
  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record._financial_year),
        datasets: [
          {
            label: "Budget Estimates( In Crs.)",
            data: data.records
              .map((record) => record.budget_estimates_in_crs_),
              backgroundColor: "rgba(128,0,128,1)",
              borderWidth: 4,
          },
          {
            label: "Revised Estimates (In Crs.)",
            data: data.records
              .map((record) => record.revised_estimates_in_crs_),
              backgroundColor: "rgba(255,0,0,1)",
              borderWidth: 4,
          },
          
          {
            label: "Actual Expenditure (In Crs.)",
            data: data.records
              .map((record) => record.actual_expenditure_in_crs_),
              backgroundColor: "rgba(0,0,255,1)",
              borderWidth: 4,
          },
          
        ],
      };
      callback(chartData);
    });
  });
};

const fetchOrdinaryApplicationsPatentsFiledFrom198081To201011ByDifferentStates = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"ba7adee5-a077-4eec-a9e0-d6ed424772c4?api-key="+KEY+"&format=json&limit=16"
  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.name_of_the_state__union_territory),
        datasets: [
          {
            label: "1980-81",
            data: data.records
              .map((record) => record._1980_81),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "1985-86",
            data: data.records
              .map((record) => record._1985_86),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
          {
            label: "1990-91",
            data: data.records
              .map((record) => record._1990_91),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "1995-96",
            data: data.records
              .map((record) => record._1995_96),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2000-01",
            data: data.records
              .map((record) => record._2000_01),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2005-06",
            data: data.records
              .map((record) => record.__2005_06),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2006-07",
            data: data.records
              .map((record) => record.__2006_07),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2007-08",
            data: data.records
              .map((record) => record.__2007_08),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2008-09",
            data: data.records
              .map((record) => record.__2008_09),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2009-10",
            data: data.records
              .map((record) => record.__2009_10),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2010-11",
            data: data.records
              .map((record) => record.__2010_11),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };

      callback(chartData);
    });
  });
};

const fetchMPhilDoctorateDegreesAwardedFacultyWise199091To201011 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"f832dc7c-7522-4c6b-af87-15d99cf9c596?api-key="+KEY+"&format=json&limit=13"
  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.disciplines+record.faculty),
        datasets: [
          {
            label: "1990-91",
            data: data.records
              .map((record) => record._1990_91),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "1995-96",
            data: data.records
              .map((record) => record._1995_96),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
          {
            label: "2000-01",
            data: data.records
              .map((record) => record._2000_01),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2001-02",
            data: data.records
              .map((record) => record.__2001_02),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2002-03",
            data: data.records
              .map((record) => record.__2002_03),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2003-04",
            data: data.records
              .map((record) => record.__2003_04),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2004-05",
            data: data.records
              .map((record) => record.__2004_05),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2005-06",
            data: data.records
              .map((record) => record.__2005_06),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2006-07",
            data: data.records
              .map((record) => record.__2006_07),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2007-08",
            data: data.records
              .map((record) => record.__2007_08),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2008-09",
            data: data.records
              .map((record) => record.__2008_09),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2009-10",
            data: data.records
              .map((record) => record.__2009_10),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2010-11",
            data: data.records
              .map((record) => record.__2010_11),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };
      callback(chartData);
    });
  });
};

const fetchResearchersPerMillionPeopleForSelectedCountriesIn2009 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"b651f642-ce7e-45fe-bb91-041926740e71?api-key="+KEY+"&format=json&limit=29"
  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.country),
        datasets: [
          {
            label: "No. of Researchers per million people",
            data: data.records
              .map((record) => record.no__of_researchers_per_million_people),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Population in Million -2009",
            data: data.records
              .map((record) => record.population_in_million__2009),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },   
          {
            label: "Total Researchers (Number) -2009",
            data: data.records
              .map((record) => record.total_researchers__number___2009),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Note on Total Researchers (Number) -2009",
            data: data.records
              .map((record) => record.note_on_total_researchers__number___2009),
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

export function Education({ loggedIn, logout, login }) {
  const classes = useStyles();

  const [chartData, setChartData, bool2] = useState(null);

  const getAmountReleasedByDSTForCentralSectorSchemeFrom201819To202021 = () => {
    fetchAmountReleasedByDSTForCentralSectorSchemeFrom201819To202021((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };
  const getFundAllocationandExpenditurebytheDepartmentofScienceandTechnology201617to202021 = () => {
    fetchFundAllocationandExpenditurebytheDepartmentofScienceandTechnology201617to202021((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };

  const getOrdinaryApplicationsPatentsFiledFrom198081To201011ByDifferentStates = () => {
    fetchOrdinaryApplicationsPatentsFiledFrom198081To201011ByDifferentStates((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
       //bool2 == true;
      //setChartUsed(true);
    });
  };
  // useEffect(() => {
  //   refreshChart();
  // }, [chartData]);

  const getMPhilDoctorateDegreesAwardedFacultyWise199091To201011 = () => {
    fetchMPhilDoctorateDegreesAwardedFacultyWise199091To201011((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };

  const getResearchersPerMillionPeopleForSelectedCountriesIn2009 = () => {
    fetchResearchersPerMillionPeopleForSelectedCountriesIn2009((chartData) => {
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
        <button className={classes.button} onClick={getResearchersPerMillionPeopleForSelectedCountriesIn2009}>Researchers Per Million People For Selected Countries In 2009</button>
         <button className={classes.button} onClick={getMPhilDoctorateDegreesAwardedFacultyWise199091To201011}>M.Phil/Doctorate Degrees Awarded Faculty-Wise (1990-91 To 2010-11)</button>
        <button className={classes.button} onClick={getOrdinaryApplicationsPatentsFiledFrom198081To201011ByDifferentStates}>Number Of Ordinary Applications For Patents Filed From 1980-81 To 2010-11 By Different States</button>
         <button className={classes.button} onClick={getAmountReleasedByDSTForCentralSectorSchemeFrom201819To202021 }>Amount Released By Department Of Science & Technology (DST) For Central Sector Scheme From 2018-19 To 2020-21</button>
        <button className={classes.button} onClick={getFundAllocationandExpenditurebytheDepartmentofScienceandTechnology201617to202021}>Fund Allocation And Expenditure By The Department Of Science And Technology (Since 2016-17 To 2020-21)</button>
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
        { chartData && <ChartGdp chartData={chartData} />}      
      </div> 
    </div>
    </Content>
  );

  
}
