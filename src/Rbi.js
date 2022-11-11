import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { ChartGdp } from "./ChartGdp";
import Content from "../src/Dashboard/Content";
import { KEY , API_URL, ret_type,ret_limit,GDPOfIndia_Resource,LiabilitiesAndAssetsOfTheReserveBankOfIndia_Resource,
  LiabilitiesAndAssetsOfTheReserveBankOfIndia,GrossDefenceBudget_Resource,GDPOfIndia,GrossDefenceBudget,BankwiseFrauds202021_Resource,
  BankwiseFrauds202021,OutstandingAmountOwedByWilfulDefaulters3132021_Resource,OutstandingAmountOwedByWilfulDefaulters3132021,
  useStyles,Frauds100CroreSCBsFIsFromApril012021ToDecember312021_Resource,Frauds100CroreSCBsFIsFromApril012021ToDecember312021,
  HighValueNotesInNIC2015To2021_Resource,HighValueNotesInNIC2015To2021,NiCIncreaseAndDecreaseForm2017To2021,NiCIncreaseAndDecreaseForm2017To2021_Resource} from "../src/Const/Const";
import 'chart.js/auto'

// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchLiabilitiesAndAssetsOfRBI2001TO2016API = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"e74bed5c-7578-4a42-8fb0-fecf931d4fb7?api-key="+KEY+"&format=json&offset=0&limit=100"
    API_URL+LiabilitiesAndAssetsOfTheReserveBankOfIndia_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

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
    
      callback(chartData);
    });
  });
};

// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchGDPOfIndiaAPI = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"07d49df4-233f-4898-92db-e6855d4dd94c?api-key="+KEY+"&format=json&limit=62"
    API_URL+GDPOfIndia_Resource+KEY+ret_type+ret_limit

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
      callback(chartData);
    });
  });
};

const fetchGrossDefenceBudget = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"028ce5f5-c769-468d-8c1f-f086a74b1ee0?api-key="+KEY+"&format=json"
    //https://api.data.gov.in/resource/028ce5f5-c769-468d-8c1f-f086a74b1ee0?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json
    API_URL+GrossDefenceBudget_Resource+KEY+ret_type+ret_limit

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


const fetchBankwiseFrauds202021 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
        API_URL+BankwiseFrauds202021_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.bank)
          .slice(0, 62),
        datasets: [
          {
            label: "FY 2020-21 - Number",
            data: data.records
              .map((record) => record.fy_2020_21___number)
              .slice(0, 62),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "FY 2020-21 - Amount involved",
            data: data.records
              .map((record) => record.fy_2020_21___amount_involved)
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


const fetchOutstandingAmountOwedByWilfulDefaulters3132021 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
        API_URL+OutstandingAmountOwedByWilfulDefaulters3132021_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.bank),
        datasets: [
          {
            label: "Outstanding Amount (in crore Rs.)",
            data: data.records
              .map((record) => record.outstanding_amount__in_crore_rs__),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          },   
        ],
      };

      callback(chartData);
    });
  });
};

const fetchFrauds100CroreSCBsFIsFromApril012021ToDecember312021 = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
        API_URL+Frauds100CroreSCBsFIsFromApril012021ToDecember312021_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.name_of_the_bank),
        datasets: [
          {
            label: "Number of frauds",
            data: data.records
              .map((record) => record.number_of_frauds),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },   
          {
            label: "Amount involved (in crore Rs.)",
            data: data.records
              .map((record) => record.amount_involved__in_crore_rs__),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          }, 
        ],
      };

      callback(chartData);
    });
  });
};


const fetchHighValueNotesInNIC2015To2021 = (callback) => {
  console.log("fetching data HighValueNotesInNIC2015To2021_Resource");
  const response = fetch(
        API_URL+HighValueNotesInNIC2015To2021_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.year__as_on_march_31st_),
        datasets: [
          {
            label: "Value of NIC (in Rs lakh crore)",
            data: data.records
              .map((record) => record.value_of_nic__in_rs_lakh_crore_),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },   
          {
            label: "Share of High Value Notes in NIC (in percentage)",
            data: data.records
              .map((record) => record.share_of_high_value_notes_in_nic__in_percentage_),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          }, 
        ],
      };

      callback(chartData);
    });
  });
};

const fetchNiCIncreaseAndDecreaseForm2017To2021 = (callback) => {
  console.log("fetching data fetchNiCIncreaseAndDecreaseForm2017To2021");
  const response = fetch(
        API_URL+NiCIncreaseAndDecreaseForm2017To2021_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record.year__end_march_),
        datasets: [
          {
            label: "volume__nic__in_million_pieces_",
            data: data.records
              .map((record) => record.volume__nic__in_million_pieces_),
            backgroundColor: "rgba(255,0,0,1)",
            borderWidth: 4,
          },   
          {
            label: "% Increase/Decrease in Volume",
            data: data.records
              .map((record) => record.__increase_decrease_in_volume),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          }, 
          {
            label: "Value - NiC (Rs. in crores)",
            data: data.records
              .map((record) => record.value___nic__rs__in_crores_),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          }, 
          {
            label: "% Increase/Decrease in Value",
            data: data.records
              .map((record) => record.__increase_decrease_in_value),
            backgroundColor: "rgba(128,0,128,1)",
            borderWidth: 4,
          }, 
        ],
      };

      callback(chartData);
    });
  });
};
export function Rbi({ loggedIn, logout, login }) {
  //const classes = useStyles();
  const classes = useStyles();

  //const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [chartType, setChartType] = useState(null);
  const [chartTitle, setChartTitle] = useState(null);

  const getLiabilitiesAndAssetsOfRBI2001TO2016 = () => {
    fetchLiabilitiesAndAssetsOfRBI2001TO2016API((chartData) => {
      setChartType('line');
      setChartTitle(LiabilitiesAndAssetsOfTheReserveBankOfIndia);
      setChartData(chartData);
    });
  };
  const getGDPOfIndia = () => {
    fetchGDPOfIndiaAPI((chartData) => {
      setChartType('line');
      setChartTitle(GDPOfIndia);
      setChartData(chartData);
    });
  };
  
  const getGrossDefenceBudget = () => {
    fetchGrossDefenceBudget((chartData) => {
      setChartType('line');
      setChartTitle(GrossDefenceBudget);
      setChartData(chartData);
    });
  };
  const getBankwiseFrauds202021 = () => {
    fetchBankwiseFrauds202021((chartData) => {
      setChartType('line');
      setChartTitle(GrossDefenceBudget);
      setChartData(chartData);
    });
  };
  const getOutstandingAmountOwedByWilfulDefaulters3132021 = () => {
    fetchOutstandingAmountOwedByWilfulDefaulters3132021((chartData) => {
      setChartType('line');
      setChartTitle(GrossDefenceBudget);
      setChartData(chartData);
    });
  };
  const getFrauds100CroreSCBsFIsFromApril012021ToDecember312021 = () => {
    fetchFrauds100CroreSCBsFIsFromApril012021ToDecember312021((chartData) => {
      setChartType('line');
      setChartTitle(Frauds100CroreSCBsFIsFromApril012021ToDecember312021);
      setChartData(chartData);
    });
  };
  const getHighValueNotesInNIC2015To2021 = () => {
    fetchHighValueNotesInNIC2015To2021((chartData) => {
      setChartType('line');
      setChartTitle(HighValueNotesInNIC2015To2021);
      setChartData(chartData);
    });
  };
  const getNiCIncreaseAndDecreaseForm2017To2021 = () => {
    fetchNiCIncreaseAndDecreaseForm2017To2021((chartData) => {
      setChartType('line');
      setChartTitle(NiCIncreaseAndDecreaseForm2017To2021);
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
        style:"blue",
        backgroundImage: "url(/img/Rbi.png)",
      }}>
        <button  className={classes.button}  onClick={getLiabilitiesAndAssetsOfRBI2001TO2016}>{LiabilitiesAndAssetsOfTheReserveBankOfIndia}</button>
        <button className={classes.button} onClick={getGDPOfIndia}>{GDPOfIndia}</button>
        <button className={classes.button} onClick={getGrossDefenceBudget}>{GrossDefenceBudget}</button>
        <button className={classes.button} onClick={getBankwiseFrauds202021}>{BankwiseFrauds202021}</button>
        <button className={classes.button} onClick={getOutstandingAmountOwedByWilfulDefaulters3132021}>{OutstandingAmountOwedByWilfulDefaulters3132021}</button>
        <button className={classes.button} onClick={getFrauds100CroreSCBsFIsFromApril012021ToDecember312021}>{Frauds100CroreSCBsFIsFromApril012021ToDecember312021}</button>
        <button className={classes.button} onClick={getHighValueNotesInNIC2015To2021}>{HighValueNotesInNIC2015To2021}</button>
        <button className={classes.button} onClick={getNiCIncreaseAndDecreaseForm2017To2021}>{NiCIncreaseAndDecreaseForm2017To2021}</button>

      </div>

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
    </div>
    </Content>
  );

  
}
