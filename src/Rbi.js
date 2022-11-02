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
import { green, purple } from "@material-ui/core/colors";
import colors from "./Theme/colors";

// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchLiabilitiesAndAssetsOfRBI2001TO2016API = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"e74bed5c-7578-4a42-8fb0-fecf931d4fb7?api-key="+KEY+"&format=json&offset=0&limit=100"
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
          .map((record) => record.category+record.heads),
          //.slice(0, 10),
        datasets: [
          {
            label: "_2001P",
            data: data.records
              .map((record) => record._2001),
              //.slice(0, 10),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },
          {
            label: "_2002",
            data: data.records
              .map((record) => record._2002),
              //.slice(0, 10),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },
          {
            label: "_2003",
            data: data.records
              .map((record) => record._2003),
              //.slice(0, 10),
            backgroundColor: "rgba(0,0,255,1)",
            borderWidth: 4,
          },   
          {
            label: "_2004",
            data: data.records
              .map((record) => record._2004),
              //.slice(0, 10),
            backgroundColor: "rgba(0,128,0,1)",
            borderWidth: 4,
          },
          {
            label: "_2005",
            data: data.records
              .map((record) => record._2005),
              //.slice(0, 10),
            backgroundColor: "rgba(255,165,0,1)",
            borderWidth: 4,
          },
          {
            label: "_2006",
            data: data.records
              .map((record) => record._2006),
              //.slice(0, 10),
            backgroundColor: "rgba(255,255,0,1)",
            borderWidth: 4,
          },
          {
            label: "_2007",
            data: data.records
              .map((record) => record._2007),
              //.slice(0, 10),
            backgroundColor: "rgba(0, 255, 255, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2008",
            data: data.records
              .map((record) => record._2008),
              //.slice(0, 10),
            backgroundColor: "rgba(202, 225, 255, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2009",
            data: data.records
              .map((record) => record._2009),
              //.slice(0, 10),
            backgroundColor: "rgba(218, 221, 252, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2010",
            data: data.records
              .map((record) => record._2010),
              //.slice(0, 10),
            backgroundColor: "rgba(57, 195, 241, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2011",
            data: data.records
              .map((record) => record._2011),
              //.slice(0, 10),
            backgroundColor: "rgba(0, 128, 255, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2012",
            data: data.records
              .map((record) => record._2012),
              //.slice(0, 10),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2013",
            data: data.records
              .map((record) => record._2013),
              //.slice(0, 10),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2014",
            data: data.records
              .map((record) => record._2014),
              //.slice(0, 10),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2015",
            data: data.records
              .map((record) => record._2015),
              //.slice(0, 10),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "_2016",
            data: data.records
              .map((record) => record._2016),
              //.slice(0, 10),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
        ],
      };
      //  const chartData = {
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
const fetchGDPOfIndiaAPI = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    API_URL+"07d49df4-233f-4898-92db-e6855d4dd94c?api-key="+KEY+"&format=json&limit=62"
  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.financial_year)
          .slice(0, 62),
        datasets: [
          {
            label: "gross_domestic_product_in_rs_cr_at_2004_05_prices",
            data: data.records
              .map((record) => record.gross_domestic_product_in_rs_cr_at_2004_05_prices)
              .slice(0, 62),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Agriculture & Allied Services (in Rs. Cr.) at 2004-05 Prices",
            data: data.records
              .map((record) => record.agriculture_allied_services_in_rs_cr_at_2004_05_prices)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          
          {
            label: "Agriculture (in Rs. Cr.) at 2004-05 Prices",
            data: data.records
              .map((record) => record.agriculture_in_rs_cr_at_2004_05_prices)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Industry (in Rs. Cr.) at 2004-05 Prices",
            data: data.records
              .map((record) => record.industry_in_rs_cr_at_2004_05_prices)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Mining and Quarrying (in Rs. Cr.) at 2004-05 Prices",
            data: data.records
              .map((record) => record.mining_and_quarrying_in_rs_cr_at_2004_05_prices)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Manufacturing (in Rs. Cr.) at 2004-05 Prices",
            data: data.records
              .map((record) => record.manufacturing_in_rs_cr_at_2004_05_prices)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Services (in Rs. Cr.) at 2004-05 Prices",
            data: data.records
              .map((record) => record.services_in_rs_cr_at_2004_05_prices)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },

          {
            label: "Agri-culture & Allied Services -Share to Total GDP",
            data: data.records
              .map((record) => record.agri_culture_allied_services__share_to_total_gdp)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Agriculture - Share to Total GDP",
            data: data.records
              .map((record) => record.agriculture___share_to_total_gdp)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Industry - Share to Total GDP",
            data: data.records
              .map((record) => record.industry___share_to_total_gdp)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },

          {
            label: "Mining and Quarrying - Share to Total GDP",
            data: data.records
              .map((record) => record.mining_and_quarrying___share_to_total_gdp)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Manufacturing - Share to Total GDP",
            data: data.records
              .map((record) => record.manufacturing___share_to_total_gdp)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Services - Share to Total GD",
            data: data.records
              .map((record) => record.services___share_to_total_gdp)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Gross Domestic Product - % Growth Rate (YoY)",
            data: data.records
              .map((record) => record.gross_domestic_product___growth_rate_yoy_)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Agri-culture & Allied Services - % Growth Rate (YoY)",
            data: data.records
              .map((record) => record.agri_culture_allied_services___growth_rate_yoy_)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Agriculture - % Growth Rate (YoY)",
            data: data.records
              .map((record) => record.agriculture___growth_rate_yoy_)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },

          {
            label: "Industry - % Growth Rate (YoY)",
            data: data.records
              .map((record) => record.industry___growth_rate_yoy_)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Mining and Quarrying - % Growth Rate (YoY)",
            data: data.records
              .map((record) => record.mining_and_quarrying___growth_rate_yoy_)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Manufacturing - % Growth Rate (YoY)",
            data: data.records
              .map((record) => record.manufacturing___growth_rate_yoy_)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Services - % Growth Rate (YoY)",
            data: data.records
              .map((record) => record.services___growth_rate_yoy_)
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
    API_URL+"028ce5f5-c769-468d-8c1f-f086a74b1ee0?api-key="+KEY+"&format=json"
    //https://api.data.gov.in/resource/028ce5f5-c769-468d-8c1f-f086a74b1ee0?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json

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
            label: "Defence Budget Gross_",
            data: data.records
              .map((record) => record.defence_budget__be___gross_)
              .slice(0, 62),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "GDP",
            data: data.records
              .map((record) => record.gdp_)
              .slice(0, 62),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          
          {
            label: "Defence Budget Percentage Of GDP",
            data: data.records
              .map((record) => record.defence__budget_as_percentage_of_gdp)
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
    fontSize:20,
    color : "#f3f6f4",
    fontWeight : "bold"
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

export function Rbi({ loggedIn, logout, login }) {
  //const classes = useStyles();
  const classes = useStyles();

  //const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState(null);
  // const chartData = null;

  const getLiabilitiesAndAssetsOfRBI2001TO2016 = () => {
    fetchLiabilitiesAndAssetsOfRBI2001TO2016API((chartData) => {
      // chartData = chartData;
      setChartData(chartData);
    });
  };
  const getGDPOfIndia = () => {
    fetchGDPOfIndiaAPI((chartData) => {
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
        style:"blue"
        //backgroundImage: "url(/img/wallpaper.jpeg)",
      }}>
        <button  className={classes.button}  onClick={getLiabilitiesAndAssetsOfRBI2001TO2016} >Liabilities And Assets Of The Reserve Bank Of India</button>

        <button className={classes.button} onClick={getGDPOfIndia}>GDP Of India And Major Sectors Of Economy, Share Of Each Sector To GDP And Growth Rate Of GDP And Other Sectors Of Economy 1951-52 Onward</button>

        <button className={classes.button} onClick={getGrossDefenceBudget}>Year-Wise Gross Defence Budget (BE) As Percentage Of GDP From 2019-20 To 2021-22</button>
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