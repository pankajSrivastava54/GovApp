import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { ChartGdp } from "./ChartGdp";


 // method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
 async function fetchAPI() {
  //const [ setData] = useState(null);

//const [loading, setLoading] = useState(false);
//const [setChartData] = useState(null);
  //setLoading(true);
  const response = await fetch(
    "https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100"
  );
  const data = await response.json();
  console.log("alpha data"+JSON.stringify( data));
  //setData(data);
  //setLoading(false);

  // set the chart data, trim the data to 10 records
  const chartData = {
    labels: data.records
      .map((record) => record.ministry_department_state)
      .slice(0, 10),
    datasets: [
      // {
      //   label: "Total Receipts",
      //   data: data.records
      //     .map((record) => record.total_receipts_01_01_2016_to_01_11_2019_)
      //     .slice(0, 10),
      //   backgroundColor: "rgba(255, 99, 132, 0.6)",
      //   borderWidth: 4,
      // },
      // {
      //   label: "Total Disposal",
      //   data: data.records
      //     .map((record) => record.total_disposal_01_01_2016_to_01_11_2019_)
      //     .slice(0, 10),
      //   backgroundColor: "rgba(205, 255, 132, 0.6)",
      //   borderWidth: 4,
      // },
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
  console.log("chartData", chartData);
  //sort the data in descending order and remove the last 10 records
  chartData.datasets[0].data.sort((a, b) => b - a).slice(0, 20);
  chartData.datasets[1].data.sort((a, b) => b - a).slice(0, 20);
  chartData.datasets[2].data.sort((a, b) => b - a).slice(0, 20);
  chartData.datasets[3].data.sort((a, b) => b - a).slice(0, 20);
  chartData.datasets[4].data.sort((a, b) => b - a).slice(0, 20);
  //chartData.datasets[5].data.sort((a, b) => b - a).slice(0, 20);
  //chartData.datasets[6].data.sort((a, b) => b - a).slice(0, 20);


  //setChartData(chartData);
}
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

export function Gov({ loggedIn, logout, login }) {
  const classes = useStyles();
  
  const [data, setData] = useState(null);

//const [loading, setLoading] = useState(false);
const [chartData, setChartData] = useState(null);
//setLoading(true);
//setChartData(chartData);

 return (
    <div className="App">
      <div>
        <button onClick={fetchAPI}>Fetch API</button>
        {/* Show the ministry department names from the response data */}
        <div style={{ display: "none" }}>
          <table width="100%">
            <tr>
              {data &&
                data.field.map((fields) => (
                  <td width="12.5%">
                    <th>{fields.name}</th>
                  </td>
                ))}
            </tr>
          </table>
          <div>
            <table width="100%">
              {data &&
                data.records.map((record) => (
                  <tr>
                    <td align="left" width="12.5%">
                      {record.ministry_department_state}
                    </td>
                    <td align="left" width="12.5%">
                      {record.total_receipts_01_01_2016_to_01_11_2019_}
                    </td>
                    <td align="left" width="12.5%">
                      {record.total_disposal_01_01_2016_to_01_11_2019_}
                    </td>
                    <td align="left" width="12.5%">
                      {record.total_pending_as_on_01_11_2019}
                    </td>
                    <td align="left" width="12.5%">
                      {record.pending_more_than_1_year}
                    </td>
                    <td align="left" width="12.5%">
                      {record.pending_between_6_to_12_months}
                    </td>
                    <td align="left" width="12.5%">
                      {record.pending_between_2_to_6_months}
                    </td>
                    <td align="left" width="12.5%">
                      {record.pending_less_than_2_months}
                    </td>
                  </tr>
                ))}
            </table>
          </div>
        </div>
      </div>
      <div>
        <h1>Chart</h1>
      </div>
      {chartData && <ChartGdp chartData={chartData} />}
    </div>
  );
  // return (
  //   <Grid container component="main" className={classes.root}>
  //     <CssBaseline />
  //     <Grid container justify="center" className={classes.image}>
  //       <Grid
  //         item
  //         xs={12}
  //         sm={8}
  //         md={5}
  //         component={Paper}
  //         direction="row"
  //         elevation={6}
  //         square
  //       >
  //         <Grid className={classes.paper}>
  //           <Avatar className={classes.avatar}>
  //             <LockOutlinedIcon />
  //           </Avatar>
  //           <Typography component="h1" variant="h5">
  //             Sign in Pankaj
  //           </Typography>
  //           <form className={classes.form} noValidate>
  //             <TextField
  //               variant="outlined"
  //               margin="normal"
  //               required
  //               fullWidth
  //               id="email"
  //               label="Email Address"
  //               name="email"
  //               autoComplete="email"
  //               autoFocus
  //             />
  //             <TextField
  //               variant="outlined"
  //               margin="normal"
  //               required
  //               fullWidth
  //               name="password"
  //               label="Password"
  //               type="password"
  //               id="password"
  //               autoComplete="current-password"
  //             />
  //             <FormControlLabel
  //               control={<Checkbox value="remember" color="primary" />}
  //               label="Remember me"
  //             />
  //             <Button
  //               fullWidth
  //               variant="contained"
  //               color="primary"
  //               className={classes.submit}
  //               onClick={{fetchAPI}}
  //             >
  //               Sign In
  //             </Button>
  //             <Grid container>
  //               <Grid item xs>
  //                 <Link href="#" variant="body2">
  //                   Forgot password Pankaj?
  //                 </Link>
  //               </Grid>
  //               <Grid item>
  //                 <Link href="#" variant="body2">
  //                   {"Don't have an account? Sign Up"}
  //                 </Link>
  //               </Grid>
  //             </Grid>
  //             <Box mt={5}>
  //               <Copyright />
  //             </Box>
  //           </form>
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //   </Grid>
  // );
}
