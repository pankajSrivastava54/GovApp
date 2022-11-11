import React, { useState } from "react";

import { ChartGdp } from "./ChartGdp";
import { ChartDonut } from "./ChartDonut";

import { ChartLine } from "./ChartLine";
import Content from "../src/Dashboard/Content";
import { KEY , API_URL, ret_type,ret_limit,GDPOfIndia,GrossDefenceBudget_Resource,GDPOfIndia_Resource,NationalIncomeAndExpenditureComponentsOfGDP_Resource,
  GrossDefenceBudget,NationalIncomeAndExpenditureComponentsOfGDP,useStyles} from "../src/Const/Const";
import { ChartPie } from "./ChartPie";
// method to fetch data from the API url at https://api.data.gov.in/resource/1d369aae-155a-4cc8-b7a8-04d4cd5ec2a6?api-key=579b464db66ec23bdd00000157d61d8ad2304d5a7708be21b48b6863&format=json&offset=0&limit=100
const fetchAPI = (callback) => {
  console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"4b97a963-c5ee-43ad-8de6-c38629ff2342?api-key="+KEY+"&format=json&offset=0&limit=100"
    API_URL+NationalIncomeAndExpenditureComponentsOfGDP_Resource+KEY+ret_type+ret_limit

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      console.log("fetching data"+JSON.stringify(data));

      const chartData = {
        labels: data.records
          .map((record) => record._year)
          .slice(0, 10),
        datasets: [
          {
            label: "Level of Real GDP",
            data: data.records
              .map((record) => record.level_of_real_gdp__rs_crore_)
              .slice(0, 10),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "Percentage Change GDP",
            data: data.records
              .map((record) => record.percentage_change_in_real_gdp__percent_)
              .slice(0, 10),
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

      callback(chartData);
    });
  });
};

const fetchGDPIndiaWB = (callback) => {
  //console.log("fetching data"+KEY);
  const response = fetch(
    //API_URL+"028ce5f5-c769-468d-8c1f-f086a74b1ee0?api-key="+KEY+"&format=json"
    "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.MKTP.CD?format=json"

  );
  response.then((response) => {
    const data = response.json();

    data.then((data) => {
      // set the chart data, trim the data to 10 records
      //console.log("fetching data"+JSON.stringify(data));
      //console.log("fetching data AAAA"+JSON.stringify(data[0]));
      var arr = [];

      Object.keys(data).forEach(function(key) {
        console.log("data key"+JSON.stringify(data[1][1].indicator));
        console.log("data key"+JSON.stringify(data[1][1].country));

        arr.push(data[key]);
        console.log("data arr"+JSON.stringify(arr));

      });

     // console.log("Array==>"+JSON.stringify(arr.map((rec) => rec.countryiso3code)));

    //   {arr.map(item => {
    //     console.log("Array BBBBB==>"+JSON.stringify(item));
    //   }) 
    // }
      // data.map(({ countryiso3code,date }) => {
      //   console.log("Array==>"+JSON.stringify(countryiso3code));

      //   //)
      // })
      const chartData = {
        labels: data.map((record) => record.countryiso3code),
          //.slice(0, 62),
        datasets: [
          {
            label: "Defence Budget Gross_",
            data: data
              .map((record) => record.value),
            backgroundColor: "rgba(155, 99, 132, 0.6)",
            borderWidth: 4,
          },
          {
            label: "GDP",
            data: data
              .map((record) => record.gdp_),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          
          {
            label: "Defence Budget Percentage Of GDP",
            data: data
              .map((record) => record.date),
            backgroundColor: "rgba(55, 99, 132, 0.6)",
            borderWidth: 4,
          },
          
        ],
      };

      callback(chartData);
    });
  });
};


export function Gdp({ loggedIn, logout, login }) {
  //const classes = useStyles();
  const classes = useStyles();

  const [chartData, setChartData] = useState(null);
  const [chartType, setChartType] = useState('bar');

  const [chartTitle, setChartTitle] = useState('bar');
  const refreshChart = () => {
    fetchAPI((chartData) => {
      setChartType('bar');
      setChartTitle(NationalIncomeAndExpenditureComponentsOfGDP);
      setChartData(chartData);
    });
  };
  const getGDPOfIndia = () => {
    fetchGDPOfIndiaAPI((chartData) => {
      setChartType('bar');
      setChartTitle(GDPOfIndia);
      setChartData(chartData);
    });
  };

  const getGrossDefenceBudget = () => {
    fetchGrossDefenceBudget((chartData) => {
      setChartType('bar');
      setChartTitle(GrossDefenceBudget);
      setChartData(chartData);
    });
  };

  const getGDPIndiaWB = () => {
    fetchGDPIndiaWB ((chartData) => {
      setChartType('bar');
      //setChartTitle(GDPdataFromWorldBank);
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
        backgroundImage: "url(/img/GDP.png)",
      }}>
        <button className={classes.button} onClick={refreshChart}>{NationalIncomeAndExpenditureComponentsOfGDP}</button>

        <button className={classes.button} onClick={getGDPOfIndia}>{GDPOfIndia}</button>

        <button className={classes.button} onClick={getGrossDefenceBudget}>{GrossDefenceBudget}</button>

        <button className={classes.button} onClick={getGDPIndiaWB}>GDP data From World Bank</button>
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
