import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column, ColumnFilterElementTemplateOptions } from 'primereact/column';

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ChartGdp } from "./ChartGdp";
import Content from "./Dashboard/Content";
import { KEY, API_URL,useStyles,GetAllChatGPTModels} from "./Const/Const";

import { ChartPie } from "./ChartPie";

import { ChartDonut } from "./ChartDonut";

import { ChartLine } from "./ChartLine";

const getModels = (callback) => {

  console.log("In getModels");
		var claimUrl = "https://api.openai.com/v1/models";
	
		const headers = new Headers();
		headers.append("Accept", "application/json");
		headers.append("Content-Type", "application/json");
		headers.append("Authorization","Bearer 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");
	
    const fetchMethod = {
			method: "GET",
			headers: headers,
		  };

  console.log("fetching data"+claimUrl);
	  const response = fetch(
			  claimUrl,
			  fetchMethod
			)
      response.then((response) => {
        const data = response.json();
        console.log("result data"+JSON.stringify(data));
    
        data.then((data) => {
        console.log("result data 222"+JSON.stringify(data));
     
        //console.log("result data"+JSON.stringify(result));
        callback(data);
        });
      });
};


export function Models({ loggedIn, logout, login }) {
  const classes = useStyles();
 
  const [chartData, setChartData] = useState(null);
  const [chartType, setChartType] = useState('bar');

  const [chartTitle, setChartTitle] = useState('bar');
 
  const getChatGPTModels = () => {
    getModels((chartData) => {
      //setChartType('line');
      //setChartTitle(CountryWiseForeignAccusedDuring2020);
      console.log("rchartData 333"+JSON.stringify(chartData));

      setChartData(chartData.data);
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
        <button className={classes.button} onClick={getChatGPTModels}>{GetAllChatGPTModels}</button>
    </div>
    {/* <div style={{
        height: "50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "contrast(75%)",
        //backgroundImage: "url(/img/wallpaper2-min.png)",
      }}> */}
        <div style={{
        height: "50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "contrast(75%)",
        fontWeight : "bold",
        fontSize:20,
        //backgroundImage: "url(/img/wallpaper2-min.png)",
      }}>
			<DataTable  value={chartData}  paginator rows={100} dataKey="id" header={"Model"} tableStyle={{ minWidth: '50rem' }}  emptyMessage="No executions found.">
                <Column field="id" header="Model Id" style={{ minWidth: '12rem' }} align={"center"}/>        
                <Column field="object"  header="Model Name" style={{ minWidth: '14rem' }} align={"center"} />
                <Column field="created" style={{ minWidth: '14rem' }} header="Created"  align={"center"}/>
                <Column field="owned_by"  style={{ minWidth: '14rem' }} header="Owned By" align={"center"} />
                
            </DataTable> 
       </div>

      {/* </div> */}

    </div>
    </Content>

  );
}
