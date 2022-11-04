import React, { useEffect, useState } from "react";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ChartGdp } from "./ChartGdp";
import { SummaryCard } from "../src/People/Driver";
import Content from "../src/Dashboard/Content";
import { KEY , API_URL} from "../src/Const/Const";
// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchAPI = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key="+KEY+"&format=json&offset=0&limit=100"
  );
  response.then((response) => {
    const data = response.json();
    data.then((data) => {
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: data.records
          .map((record) => record.ministry_department_state)
          .slice(0, 10),
        datasets: [
          {
            label: "Total Pending",
            data: data.records
              .map((record) => record.total_pending_as_on_01_11_2019)
              .slice(0, 10),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Pending > 1 year",
            data: data.records
              .map((record) => record.pending_more_than_1_year)
              .slice(0, 10),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Pending Between 6 - 12 Month",
            data: data.records
              .map((record) => record.pending_between_6_to_12_months)
              .slice(0, 10),
            backgroundColor: "rgba(255, 255, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Pending Between 2 - 6 Month",
            data: data.records
              .map((record) => record.pending_between_2_to_6_months)
              .slice(0, 10),
            backgroundColor: "rgba(105, 255, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Pending < 2 Month",
            data: data.records
              .map((record) => record.pending_less_than_2_months)
              .slice(0, 10),
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

const fetchCasesOfCorruptionCentralGovtEmployeeCBIFrom2017To2021API = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"e297f7c6-3ffa-4776-92b3-0dd05dde4e2a?api-key="+KEY+"&format=json&offset=0&limit=100"
  );
  response.then((response) => {
    const data = response.json();
    data.then((data) => {
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: data.records
          .map((record) => record._year),
        datasets: [
          {
            label: "no__of_cases_registered_",
            data: data.records
              .map((record) => record.no__of_cases_registered_),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "no__of_departments_involved",
            data: data.records
              .map((record) => record.no__of_departments_involved),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
 
          
        ],
      };  
      callback(chartData);
    });
  });
};
const fetchYearWiseQuantityValueOfUreaImportedfrom201617To202021API = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"bfcc38d2-1ff2-45e9-a483-4b3cadb430fa?api-key="+KEY+"&format=json&offset=0&limit=100"
  );
  response.then((response) => {
    const data = response.json();
    data.then((data) => {
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: data.records
          .map((record) => record._year),
        datasets: [
          {
            label: "_2019___20",
            data: data.records
              .map((record) => record.qty_in_lmt),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2020___21",
            data: data.records
              .map((record) => record.value_in_million_us_),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
 
          
        ],
      };  
      callback(chartData);
    });
  });
};
const fetchLoanReceivedFromInternationalFinancialInstitutionsFrom201920To202122API = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"2aeccebd-e76d-49a4-81f8-0becf72c5f2a?api-key="+KEY+"&format=json&offset=0&limit=100"
  );
  response.then((response) => {
    const data = response.json();
    data.then((data) => {
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: data.records
          .map((record) => record.state+"-"+record.sector__loan),
        datasets: [
          {
            label: "_2019___20",
            data: data.records
              .map((record) => record._2019___20),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2020___21",
            data: data.records
              .map((record) => record._2020___21),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2021___22",
            data: data.records
              .map((record) => record._2021___22),
            backgroundColor: "rgba(255, 255, 132, 0.6)",
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

const fetchPharmaceuticalsImportsFromChinaFrom201516To202122API = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"f6b2b6a0-f752-401f-b9d1-a72d0e3a6cac?api-key="+KEY+"&format=json&offset=0&limit=100"
  );
  response.then((response) => {
    const data = response.json();
    data.then((data) => {
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: data.records
          .map((record) => record.category_of_pharmaceuticals),
        datasets: [
          {
            label: "__2015_16",
            data: data.records
              .map((record) => record.__2015_16),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "__2016_17",
            data: data.records
              .map((record) => record.__2016_17),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2017_18",
            data: data.records
              .map((record) => record._2017_18),
            backgroundColor: "rgba(255, 255, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2018_19",
            data: data.records
              .map((record) => record._2018_19),
            backgroundColor: "rgba(105, 255, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2019_20",
            data: data.records
              .map((record) => record._2019_20),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2020_21",
            data: data.records
              .map((record) => record._2020_21),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2021_22",
            data: data.records
              .map((record) => record._2021_22),
            backgroundColor: "rgba(45, 155, 132, 0.6)",
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
const fetchWheatExport1stApril2021To21stMarch2022API = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"d93922cf-b61d-4ab9-9f33-0e3312203ee2?api-key="+KEY+"&format=json&offset=0&limit=100"
  );
  response.then((response) => {
    const data = response.json();
    data.then((data) => {
      console.log("fetching data WheatExport"+JSON.stringify(data));
      let newArr = [];

      {data.records.filter(record => !(record.country).includes('NA')).map(filteredName => (
        console.log("filteredName size"+JSON.stringify(filteredName)),
        newArr.push(filteredName)
      ))}
      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: newArr
          .map((record) => record.country),
        datasets: [
          {
            label: "1st April 2021 - 21st March 2022",
            data: newArr
              .map((record) => record._1st_april_2021___21st_march_2022),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          
        ],
      };

     
      callback(chartData);
    });
  });
};
const fetchFDI201617To202021API = (callback) => {
  //console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"0e3a5b95-4dcb-4d77-8b3f-fbd7ef203736?api-key="+KEY+"&format=json&offset=0&limit=100"
  );
  response.then((response) => {
    const data = response.json();
    console.log("fetching data"+JSON.stringify(data));

    data.then((data) => {
      console.log("fetching data"+JSON.stringify(data));

      // set the chart data, trim the data to 10 records
      const chartData = {
        labels: data.records
          .map((record) => record.sector)
          .slice(0, 10),
        datasets: [
          {
            label: "2016-17 - Apr-Mar",
            data: data.records
              .map((record) => record._2016_17___apr_mar)
              .slice(0, 10),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2017-18 - Apr-Mar",
            data: data.records
              .map((record) => record._2017_18___apr_mar)
              .slice(0, 10),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2018-19 - Apr-Mar",
            data: data.records
              .map((record) => record._2018_19___apr_mar)
              .slice(0, 10),
            backgroundColor: "rgba(255, 255, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "2019-20 - Apr-Mar",
            data: data.records
              .map((record) => record._2019_20___apr_mar)
              .slice(0, 10),
            backgroundColor: "rgba(105, 255, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "1st April 2021 - 21st March 2022",
            data: data.records
              .map((record) => record._2020_21___apr_mar)
              .slice(0, 10),
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
    backgroundColor: theme.palette.error.light,
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

export function Gov({ loggedIn, logout, login }) {
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

  const getFDI201617To202021 = () => {
    fetchFDI201617To202021API((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };

  const getWheatExport1stApril2021To21stMarch2022 = () => {
    fetchWheatExport1stApril2021To21stMarch2022API((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };
  const getPharmaceuticalsImportsFromChinaFrom201516To202122 = () => {
    fetchPharmaceuticalsImportsFromChinaFrom201516To202122API((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };
  const getLoanReceivedFromInternationalFinancialInstitutionsFrom201920To202122 = () => {
    fetchLoanReceivedFromInternationalFinancialInstitutionsFrom201920To202122API((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };
  const getYearWiseQuantityValueOfUreaImportedfrom201617To202021 = () => {
    fetchYearWiseQuantityValueOfUreaImportedfrom201617To202021API((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };
  const getCasesOfCorruptionCentralGovtEmployeeCBIFrom2017To2021 = () => {
    fetchCasesOfCorruptionCentralGovtEmployeeCBIFrom2017To2021API((chartData) => {
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
        <button className={classes.button} onClick={refreshChart}>Department-wise receipts, disposal and pendency of Public Grievance detailed statistics from 01.01.2016 to 01.11.2019</button>
        <button className={classes.button} onClick={getFDI201617To202021}>Sector-Wise Foreign Direct Investment (FDI) Equity Inflow From 2016-17 To 2020-21</button>
        <button className={classes.button} onClick={getWheatExport1stApril2021To21stMarch2022}>Country-Wise Export Of India Of Wheat In Terms Of Quantity To Top 25 Countries From 1st April 2021 To 21st March 2022</button>
        
        <button className={classes.button} onClick={getPharmaceuticalsImportsFromChinaFrom201516To202122}>Category-Wise Pharmaceuticals Imports From China From 2015-16 To 2021-22</button>
        <button className={classes.button} onClick={getLoanReceivedFromInternationalFinancialInstitutionsFrom201920To202122}>State /Donor /Loan-Wise Loan Received By States From International Financial Institutions From 2019-20 To 2021-22</button>
        <button className={classes.button} onClick={getYearWiseQuantityValueOfUreaImportedfrom201617To202021}>Year-Wise Quantity And Value Of The Urea Imported By The Country From 2016-17 To 2020-21</button>

        <button className={classes.button} onClick={getCasesOfCorruptionCentralGovtEmployeeCBIFrom2017To2021}>Year-Wise Cases Of Corruption Against The Central Government Employees Working In 45 Departments Central Bureau Of Investigation (CBI) From 2017 To 2021.</button>
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
