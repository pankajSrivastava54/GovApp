import React from "react";
import AppBarAndDrawer from "./AppBarAndDrawer/AppBarAndDrawer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./SignIn";
import './index.css';

import {Gov} from "./Gov";
import {Gdp} from "./Gdp";
import {Rbi} from "./Rbi"
import Tabs from "./Tabs";

import {Transport} from "./Transport"
import {Shipping} from "./Shipping"

import {Tourism} from "./Tourism"
import {Education} from "./Education"
import { Dashboard } from "./Dashboard/Dashboard";
import { Home } from "./Home/Home";
import { ThemeProvider } from "@material-ui/core/styles";
import { useTheme } from "./theme";
import { DataProvider } from "./Providers/DataProvider";
import People from "./ReduxTable/people";
import Trips from "./Trips/Trips";

import Driver from "./People/Driver";
import Components from "./Components/Components";
import Settings from "./Settings/Settings";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./ReduxTable/peopleSlice";
import { Provider } from "react-redux";
import { Crime } from "./Crime";
import { Models } from "./Models";
import { Text2Speech } from "./Text2Speech";
import { TranslateAudio } from "./TranslateAudio";
import { ImageGeneration } from "./ImageGeneration";
import { GenerateText } from "./GenerateText";
import { GenerateTextOpenAI, GenerateTextOpenAi } from "./GenerateTextOpenAI";


import { Moderations } from "./Moderations";
import { Transcription } from "./Transcription";
import { Ganga } from "./Ganga";
import { Weather } from "./Weather";
import { AzureTranslate } from "./AzureTranslate";

export default function App() {
  const store = configureStore({
    reducer: {
      people: peopleReducer,
    },
  });
  const [currentTheme, setCurrentTheme] = useTheme();
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={currentTheme}>
          <Provider store={store}>
            <DataProvider>
              <Router>
                <div>
                  <AppBarAndDrawer
                    currentTheme={currentTheme}
                    setCurrentTheme={setCurrentTheme}
                  />

                  <Switch>
                  <Route path="/models">
                      <Models />
                    </Route>
                    
                    <Route path="/text2Speech">
                      <Text2Speech />
                    </Route>
                    <Route path="/translateAudio">
                      <TranslateAudio />
                    </Route>
                    <Route path="/transcription">
                      <Transcription />
                    </Route>
                    <Route path="/moderations">
                      <Moderations />
                    </Route>
                    <Route path="/imageGeneration">
                      <ImageGeneration />
                    </Route>
                    <Route path="/genTextGemini">
                      <GenerateText />
                    </Route>
                    <Route path="/genTxtOpenAI">
                      <GenerateTextOpenAI />
                    </Route>
                    <Route path="/azureTranslate">
                      <AzureTranslate />
                    </Route>
                    {/* <Route path="/crime">
                      <Crime />
                    </Route>
                    <Route path="/gov">
                      <Gov />
                    </Route> */}
                    <Route path="/gdp">
                      <Gdp />
                    </Route>
                    <Route path="/profile">
                      <Driver id={1} />
                    </Route>
                    <Route path="/education">
                      <Education />
                    </Route>
                    <Route path="/dashboard">
                      <Dashboard />
                    </Route>
                    <Route exact path="/people">
                      <People />
                    </Route>
                    <Route path={`/people/:driverId`}>
                      <Driver />
                    </Route>
                    <Route path="/shipping">
                      <Shipping />
                    </Route>
                    <Route path="/ganga">
                      <Ganga />
                    </Route>
                    <Route path="/tourism">
                      <Tourism />
                    </Route>
                    <Route path="/weather">
                      <Weather />
                    </Route>
                    <Route path="/rbi">
                      <Rbi />
                    </Route>
                    <Route path="/transport">
                      <Transport />
                    </Route>
                    <Route path="/map">
                      <Trips />
                    </Route>
                    <Route path="/components">
                      <Components />
                    </Route>

                    <Route path="/settings">
                      <Settings
                        currentTheme={currentTheme}
                        setCurrentTheme={setCurrentTheme}
                      />
                    </Route>
                    <Route path="/">
                      <Home />
                    </Route>
                  </Switch>
                </div>

export default App;
              </Router>
            </DataProvider>
          </Provider>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </>
  );
}
