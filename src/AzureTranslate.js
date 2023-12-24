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


export function AzureTranslate({ loggedIn, logout, login }) {
  const classes = useStyles();
 
  const [chartData, setChartData] = useState(null);
  const [chartType, setChartType] = useState('bar');

  const [chartTitle, setChartTitle] = useState('bar');
  const [username, setUsername] = useState([]);
  const [userText, setUserText] = useState([]);

  const [voice, setVoice] = useState([]);
  const [file, setFile] = useState([]);

  const [password, setPassword] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(0);
  const [error, setError] = useState("");
  const [userSpeech, setUserSpeech] = useState(Object);
	const [userData, setUserData] = useState(Object);

  function handleUserTextChange(e) {
    //console.log(e.target.value);
    setUserText(e.target.value);
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
    //const fileField = document.querySelector('input[type="file"]');

    var claimUrl = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en&to=fr&to=zu&to=hi&to=pa&to=as&to=bho&to=bn&to=es";

		const headers = new Headers();
    headers.append("Accept", "application/json");
		headers.append("Content-Type", "application/json");
		headers.append("Ocp-Apim-Subscription-Key","2aaed8cf2fcf490ea033fd1362ec30a9");
    headers.append("Ocp-Apim-Subscription-Region","eastus");

  //console.log(voice);

    const fetchMethod = {
			method: "POST",
			headers: headers,
      body: JSON.stringify([
        {"Text":userText}
    ]),
      // body: JSON.stringify({        "model": "gpt-3.5-turbo",
      // "messages": [
      //   {
      //     "role": "system",
      //     "content": userText
      //   }
      // ]}),


		  };


      const response = fetch(
			  claimUrl,
			  fetchMethod
			)
      .then((res) => res.json())
      .then((response) => {
        //const status = response.status;
        const data = response;
        console.log(JSON.stringify(data[0].translations[2]));
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
          Azure Translate
      </label>
      <br></br>
      <label>
          Please Enter text:
          {/* <input type="text" value={userText} onChange={handleUserTextChange} /> */}
          <textarea id="w3review" name="w3review" rows="10" cols="100" value={userText} onChange={handleUserTextChange}>
            At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
        </textarea>
      </label>
      {/* <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={selectedCity} optionLabel="name" 
    placeholder="Select a City" className="w-full md:w-14rem" /> */}
     <div>
     {/* <input type="file" onChange={onFileChange}/> */}
        {/* <button >
          Upload!
        </button> */}

</div>
      <input type="submit" value="Submit" />
  </form>
       </div>

      {/* </div> */}

      {/* <p>{JSON.stringify(userData.data)}</p>  */}
      {/* <p>Revised Prompt : {JSON.stringify(userData[0].revised_prompt)}</p>     */}
   
      {/* <Link href="{JSON.stringify(userData.data[0].url)}">{JSON.stringify(userData.data)}</Link> */}
      {/* <ul>
      {
        data.map(function(data){
          // returns Nathan, then John, then Jane
          return <li> {data.revised_prompt} as the {data.url} </li>
        })
      }
      </ul> */}

<div>
{userData[0].translations?.map((item, index) => (
        <div key={index}>
          {/* <p>{item.output}</p>
          <p>{item.safetyRatings[index].category}</p>
          <p>{item.safetyRatings[index].probability}</p> */}

          
          {/* <p>{item.revised_prompt}</p> */}
          <div><table align="center"><tr align="left"><td align="left">{userData[0].translations[index].text}</td> - <td>Language Id- {userData[0].translations[index].to}</td></tr></table></div>

        </div>
      ))}


 
    </div>
      </div>
    </Content>

  );
}
