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
        //backgroundImage: "url(/img/wallpaper.jpeg)",
      }}>
        <button className={classes.button} onClick={refreshChart}>Department-wise receipts, disposal and pendency of Public Grievance detailed statistics from 01.01.2016 to 01.11.2019</button>
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
