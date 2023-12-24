import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column, ColumnFilterElementTemplateOptions } from 'primereact/column';
import { Dropdown } from "primereact/dropdown";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ChartGdp } from "./ChartGdp";
import Content from "./Dashboard/Content";
import { KEY, API_URL,useStyles,GetAllChatGPTModels} from "./Const/Const";

import { ChartPie } from "./ChartPie";

import { ChartDonut } from "./ChartDonut";

import { ChartLine } from "./ChartLine";

let selectedCity = [
  { label: 'All Brands', value: null },
  { label: 'Audi', value: 'Audi' },
  { label: 'BMW', value: 'BMW' },
  { label: 'Fiat', value: 'Fiat' },
  { label: 'Honda', value: 'Honda' },
  { label: 'Jaguar', value: 'Jaguar' },
  { label: 'Mercedes', value: 'Mercedes' },
  { label: 'Renault', value: 'Renault' },
  { label: 'VW', value: 'VW' },
  { label: 'Volvo', value: 'Volvo' }
 ];
const cities = [
  [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 }
  ],
];


export function Text2Speech({ loggedIn, logout, login }) {
  const classes = useStyles();
 
  const [chartData, setChartData] = useState(null);
  const [chartType, setChartType] = useState('bar');

  const [chartTitle, setChartTitle] = useState('bar');
  const [username, setUsername] = useState([]);
  const [voice, setVoice] = useState([]);

  const [password, setPassword] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(0);
  const [error, setError] = useState("");
  const [userSpeech, setUserSpeech] = useState(Object);

  function handleUsernameChange(e) {
    //console.log(e.target.value);
    setUsername(e.target.value);
}
function handleChange(e) {
  console.log(e.target.value);

  setVoice(e.target.value);
}

  function handleSubmit(e) {
    e.preventDefault();
    //use fetch to GET the result from the server
    //and set the result state
    var claimUrl = "https://api.openai.com/v1/audio/speech";
	
		const headers = new Headers();
		headers.append("Accept", "application/json");
		headers.append("Content-Type", "application/json");
		headers.append("Authorization","Bearer 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");
	console.log(username);
  console.log(voice);

    const fetchMethod = {
			method: "POST",
			headers: headers,
      body: JSON.stringify({"model":"tts-1","input":username,"voice":voice}),

		  };

      const response = fetch(
			  claimUrl,
			  fetchMethod
			)
      
      .then((res) => res.blob())
      .then((blob) => {
        //const status = response.status;
        const url = URL.createObjectURL(blob);
        new Audio(url).play();

        const data = response;
        const audio = new Audio(response);

        console.log(audio);
        if (audio) {
          setUserSpeech(audio);
        } else {
        console.log('Error in claiming process:', response);
        setError(audio.Error);
        
        }
      });
}
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

        {/* <button className={classes.button} onClick={getChatGPTModels}>{GetAllChatGPTModels}</button> */}
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
			{/* <DataTable  value={chartData}  paginator rows={100} dataKey="id" header={"Model"} tableStyle={{ minWidth: '50rem' }}  emptyMessage="No executions found.">
                <Column field="id" header="Model Id" style={{ minWidth: '12rem' }} align={"center"}/>        
                <Column field="object"  header="Model Name" style={{ minWidth: '14rem' }} align={"center"} />
                <Column field="created" style={{ minWidth: '14rem' }} header="Created"  align={"center"}/>
                <Column field="owned_by"  style={{ minWidth: '14rem' }} header="Owned By" align={"center"} />
                
            </DataTable>  */}
                  <form onSubmit={handleSubmit}>
       <label>
          Text to Speech
      </label>
      <br></br>
      <label>
          Please enter text:
          {/* <input type="text" value={username} onChange={handleUsernameChange} /> */}
          <textarea id="w3review" name="w3review" rows="4" cols="50" value={username} onChange={handleUsernameChange}>
            At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
        </textarea>

      </label>
      {/* <label>
          Password:
          <input type="text" value={password} onChange={handlePasswordChange} />
      </label> */}
      {/* <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={selectedCity} optionLabel="name" 
    placeholder="Select a City" className="w-full md:w-14rem" /> */}
     <div>
     <label>

     Please select Voice types:
     </label>

     <select value={voice} onChange={handleChange}>

      <option value="alloy">alloy</option>
      <option value="echo">echo</option>
      <option value="fable">fable</option>
      <option value="onyx">onyx</option>
      <option value="nova">nova</option>
      <option value="shimmer">shimmer</option>

    </select>

</div>
      <input type="submit" value="Submit" />
  </form>
       </div>

      {/* </div> */}

    </div>
    </Content>

  );
}
