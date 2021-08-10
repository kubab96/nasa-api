import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home"
import Apod from "./components/Apod"


function App() {
  return (
<BrowserRouter>
  <div>
    <Route component={Home} path="/" exact></Route>
    <Route component={Apod} path="/apod"></Route>
  </div>
</BrowserRouter>
  );
}

export default App;
