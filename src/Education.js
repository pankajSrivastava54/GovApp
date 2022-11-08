import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { ChartGdp } from "./ChartGdp";
import Content from "../src/Dashboard/Content";
import { KEY , API_URL,ret_type,ret_limit,AmountReleasedByDSTForCentralSectorSchemeFrom201819To202021_Resource,
  FundAllocationandExpenditurebytheDepartmentofScienceandTechnology201617to202021_Resource,OrdinaryApplicationsPatentsFiledFrom198081To201011ByDifferentStates_Resource,
  MPhilDoctorateDegreesAwardedFacultyWise199091To201011_Resource,ResearchersPerMillionPeopleForSelectedCountriesIn2009_Resource,
  MPhilDoctorateDegreesAwardedFacultyWise199091To201011,OrdinaryApplicationsPatentsFiledFrom198081To201011ByDifferentStates,
  ResearchersPerMillionPeopleForSelectedCountriesIn2009,AICTEApprovedGovernmentEngineeringInstitutes201920To2021227_Resource,
  FundAllocationandExpenditurebytheDepartmentofScienceandTechnology201617to202021,
  VacantPostsOfTeachingAndNonTeachingStaff29thMar,VacantPostsOfTeachingAndNonTeachingStaff29thMar_Resource,AICTEApprovedGovernmentEngineeringInstitutes201920To202122,
  MBBSCollegesGovernmentPrivate22March20222_Resource,MBBSCollegesGovernmentPrivate22March20222} from "../src/Const/Const";
import 'chart.js/auto'

// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchAmountReleasedByDSTForCentralSectorSchemeFrom201819To202021 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"e25ae4f6-4472-4ded-afd9-30d7851d5fe9?api-key="+KEY+"&format=json&offset=0&limit=18"
    API_URL+AmountReleasedByDSTForCentralSectorSchemeFrom201819To202021_Resource+KEY+ret_type+ret_limit

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


const fetchgetAICTEApprovedGovernmentEngineeringInstitutes201920To202122 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"f629e371-9104-4a56-be21-80d508fdc55e?api-key="+KEY+"&format=json&limit=62"
    API_URL+AICTEApprovedGovernmentEngineeringInstitutes201920To2021227_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.academic_year),
        datasets: [
          {
            label: "Number of Government Engineering Institutes",
            data: data.records
              .map((record) => record.number_of_government_engineering_institutes),
              backgroundColor: "rgba(128,0,128,1)",
              borderWidth: 4,
          },
          {
            label: "Approved Seats in Government Engineering Institutes",
            data: data.records
              .map((record) => record.approved_seats_in_government_engineering_institutes),
              backgroundColor: "rgba(255,0,0,1)",
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
    //API_URL+"f629e371-9104-4a56-be21-80d508fdc55e?api-key="+KEY+"&format=json&limit=62"
    API_URL+FundAllocationandExpenditurebytheDepartmentofScienceandTechnology201617to202021_Resource+KEY+ret_type+ret_limit

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
    //API_URL+"ba7adee5-a077-4eec-a9e0-d6ed424772c4?api-key="+KEY+"&format=json&limit=16"
    API_URL+OrdinaryApplicationsPatentsFiledFrom198081To201011ByDifferentStates_Resource+KEY+ret_type+ret_limit

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
    //API_URL+"f832dc7c-7522-4c6b-af87-15d99cf9c596?api-key="+KEY+"&format=json&limit=13"
    API_URL+MPhilDoctorateDegreesAwardedFacultyWise199091To201011_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    
    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));
      let newArr = [];
      let newArr1 = [];

      {data.records.filter(record => !(record.disciplines).includes('Total')).map(filteredName => (
        console.log("filteredName size"+JSON.stringify(filteredName)),
        newArr.push(filteredName)
      ))}
      {newArr.filter(record => !(record.faculty).includes('Total')).map(filteredName => (
        console.log("filteredName size"+JSON.stringify(filteredName)),
        newArr1.push(filteredName)
      ))}
      const chartData = {
        labels: newArr1
          .map((record) => record.disciplines+record.faculty),
        datasets: [
          {
            label: "1990-91",
            data: newArr1
              .map((record) => record._1990_91),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "1995-96",
            data: newArr1
              .map((record) => record._1995_96),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },   
          {
            label: "2000-01",
            data: newArr1
              .map((record) => record._2000_01),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "2001-02",
            data: newArr1
              .map((record) => record.__2001_02),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2002-03",
            data: newArr1
              .map((record) => record.__2002_03),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },
          {
            label: "2003-04",
            data: newArr1
              .map((record) => record.__2003_04),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "2004-05",
            data: newArr1
              .map((record) => record.__2004_05),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2005-06",
            data: newArr1
              .map((record) => record.__2005_06),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "2006-07",
            data: newArr1
              .map((record) => record.__2006_07),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "2007-08",
            data: newArr1
              .map((record) => record.__2007_08),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "2008-09",
            data: newArr1
              .map((record) => record.__2008_09),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2009-10",
            data: newArr1
              .map((record) => record.__2009_10),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2010-11",
            data: newArr1
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
    //API_URL+"b651f642-ce7e-45fe-bb91-041926740e71?api-key="+KEY+"&format=json&limit=29"
    API_URL+ResearchersPerMillionPeopleForSelectedCountriesIn2009_Resource+KEY+ret_type+ret_limit

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
              backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "Population in Million -2009",
            data: data.records
              .map((record) => record.population_in_million__2009),
              backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },   
          {
            label: "Total Researchers (Number) -2009",
            data: data.records
              .map((record) => record.total_researchers__number___2009),
              backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },
          {
            label: "Note on Total Researchers (Number) -2009",
            data: data.records
              .map((record) => record.note_on_total_researchers__number___2009),
              backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          
        ],
      };
      callback(chartData);
    });
  });
};


const fetchMBBSCollegesGovernmentPrivate22March20222 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"b651f642-ce7e-45fe-bb91-041926740e71?api-key="+KEY+"&format=json&limit=29"
    API_URL+MBBSCollegesGovernmentPrivate22March20222_Resource+KEY+ret_type+ret_limit

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
            label: "Government College",
            data: newArr
              .map((record) => record.government_college),
              backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "Government Seats",
            data: newArr
              .map((record) => record.government_seats),
              backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },   
          {
            label: "Private College",
            data: newArr
              .map((record) => record.private_college),
              backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },
          {
            label: "Private Seats",
            data: newArr
              .map((record) => record.private_seats),
              backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          }, 
  
        ],
      };
      callback(chartData);
    });
  });
};

const fetchVacantPostsOfTeachingAndNonTeachingStaff29thMar = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"b651f642-ce7e-45fe-bb91-041926740e71?api-key="+KEY+"&format=json&limit=29"
    API_URL+VacantPostsOfTeachingAndNonTeachingStaff29thMar_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.institute),
        datasets: [
          {
            label: "Vacancies - Teaching",
            data: data.records
              .map((record) => record.vacancies___teaching),
              backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "Vacancies - Non-Teaching",
            data: data.records
              .map((record) => record.vacancies___non_teaching),
              backgroundColor: "rgba(255,0,0,1)",
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

export function Education({ loggedIn, logout, login }) {
  const classes = useStyles();

  const [chartData, setChartData] = useState(null);
  const [chartType, setChartType] = useState('bar');
  const [chartTitle, setChartTitle] = useState('bar');
 
  const getFundAllocationandExpenditurebytheDepartmentofScienceandTechnology201617to202021 = () => {
    fetchFundAllocationandExpenditurebytheDepartmentofScienceandTechnology201617to202021((chartData) => {
      setChartType('bar');     
      setChartTitle(FundAllocationandExpenditurebytheDepartmentofScienceandTechnology201617to202021);
      setChartData(chartData);
    });
  };
  const getAICTEApprovedGovernmentEngineeringInstitutes201920To202122 = () => {
    fetchgetAICTEApprovedGovernmentEngineeringInstitutes201920To202122((chartData) => {
      setChartType('bar');     
      setChartTitle(AICTEApprovedGovernmentEngineeringInstitutes201920To202122);
      setChartData(chartData);
    });
  };
  
  const getOrdinaryApplicationsPatentsFiledFrom198081To201011ByDifferentStates = () => {
    fetchOrdinaryApplicationsPatentsFiledFrom198081To201011ByDifferentStates((chartData) => {
      setChartType('bar');     
      setChartTitle(OrdinaryApplicationsPatentsFiledFrom198081To201011ByDifferentStates);
      setChartData(chartData);

    });
  };

  const getMPhilDoctorateDegreesAwardedFacultyWise199091To201011 = () => {
    fetchMPhilDoctorateDegreesAwardedFacultyWise199091To201011((chartData) => {
      setChartType('bar');     
      setChartTitle(MPhilDoctorateDegreesAwardedFacultyWise199091To201011);
      setChartData(chartData);
    });
  };
  
  const getResearchersPerMillionPeopleForSelectedCountriesIn2009 = () => {
    fetchResearchersPerMillionPeopleForSelectedCountriesIn2009((chartData) => {
      setChartType('bar');     
      setChartTitle(ResearchersPerMillionPeopleForSelectedCountriesIn2009);
      setChartData(chartData);
    });
  };
  const getVacantPostsOfTeachingAndNonTeachingStaff29thMar = () => {
    fetchVacantPostsOfTeachingAndNonTeachingStaff29thMar((chartData) => {
      setChartType('bar');     
      setChartTitle(VacantPostsOfTeachingAndNonTeachingStaff29thMar);
      setChartData(chartData);
    });
  };
  const getMBBSCollegesGovernmentPrivate22March20222 = () => {
    fetchMBBSCollegesGovernmentPrivate22March20222((chartData) => {
      setChartType('bar');     
      setChartTitle(MBBSCollegesGovernmentPrivate22March20222);
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
        backgroundImage: "url(/img/Education.png)",
      }}>
        <button className={classes.button} onClick={getResearchersPerMillionPeopleForSelectedCountriesIn2009}>{ResearchersPerMillionPeopleForSelectedCountriesIn2009}</button>
        <button className={classes.button} onClick={getMPhilDoctorateDegreesAwardedFacultyWise199091To201011}>{MPhilDoctorateDegreesAwardedFacultyWise199091To201011}</button>
        <button className={classes.button} onClick={getOrdinaryApplicationsPatentsFiledFrom198081To201011ByDifferentStates}>{OrdinaryApplicationsPatentsFiledFrom198081To201011ByDifferentStates}</button>
        <button className={classes.button} onClick={getAICTEApprovedGovernmentEngineeringInstitutes201920To202122 }>{AICTEApprovedGovernmentEngineeringInstitutes201920To202122}</button>
        <button className={classes.button} onClick={getFundAllocationandExpenditurebytheDepartmentofScienceandTechnology201617to202021}>{FundAllocationandExpenditurebytheDepartmentofScienceandTechnology201617to202021}</button>
        <button className={classes.button} onClick={getVacantPostsOfTeachingAndNonTeachingStaff29thMar}>{VacantPostsOfTeachingAndNonTeachingStaff29thMar}</button>
        <button className={classes.button} onClick={getMBBSCollegesGovernmentPrivate22March20222}>{MBBSCollegesGovernmentPrivate22March20222}</button>

     </div>

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
