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


export function TranslateAudio({ loggedIn, logout, login }) {
  const classes = useStyles();
 
  const [chartData, setChartData] = useState(null);
  const [chartType, setChartType] = useState('bar');

  const [chartTitle, setChartTitle] = useState('bar');
  const [username, setUsername] = useState([]);
  const [voice, setVoice] = useState([]);
  const [file, setFile] = useState([]);

  const [password, setPassword] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(0);
  const [error, setError] = useState("");
  const [userSpeech, setUserSpeech] = useState(Object);
	const [userData, setUserData] = useState(Object);


  // const getChatGPTModels = () => {
  //   getModels((chartData) => {
  //     //setChartType('line');
  //     //setChartTitle(CountryWiseForeignAccusedDuring2020);
  //     console.log("rchartData 333"+JSON.stringify(chartData));

  //     setChartData(chartData.data);
  //   });
  // };

  function handleUsernameChange(e) {
    //console.log(e.target.value);
    setUsername(e.target.value);
}
function handleChange(e) {
  console.log(e.target.value);

  setVoice(e.target.value);
}
function onFileChange(event)  {
  console.log(event.target.value);
  // Update the state
  setFile({
      selectedFile: event.target.files[0],
  });
};
  function handleSubmit(e) {
    e.preventDefault();
    //use fetch to GET the result from the server
    //and set the result state
    console.log(e);
    const fileField = document.querySelector('input[type="file"]');

    var claimUrl = "https://api.openai.com/v1/audio/translations";
    const formData = new FormData();
    formData.append("file", fileField.files[0]);
    formData.append("model", "whisper-1");
    console.log(file);

    console.log(formData);

		const headers = new Headers();
		//headers.append("Accept", "multipart/form-data");
		//headers.append("Content-Type", "multipart/form-data");
		headers.append("Authorization","Bearer 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");
  //console.log(voice);

    const fetchMethod = {
			method: "POST",
			headers: headers,
      body: formData,

		  };

      const response = fetch(
			  claimUrl,
			  fetchMethod
			)
      .then((res) => res.json())
      .then((response) => {
        //const status = response.status;
        const data = response;
        console.log(data);
        if (data) {
        setUserData(data);
  
        
        } else {
        console.log('Error in claiming process:', response);
        setError(data.Error);
        
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
          Translate Audio
      </label>
      {/* <label>
          Password:
          <input type="text" value={password} onChange={handlePasswordChange} />
      </label> */}
      {/* <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={selectedCity} optionLabel="name" 
    placeholder="Select a City" className="w-full md:w-14rem" /> */}
     <div>
     <input type="file" onChange={onFileChange}/>
        {/* <button >
          Upload!
        </button> */}

</div>
      <input type="submit" value="Submit" />
  </form>
       </div>

      {/* </div> */}
			<div>{userData.text}</div>
                
    </div>
    </Content>

  );
}
