
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FatCakeDetails from './fatcakedetails';
import Tribe from './tribe';
import SampDetails from './sampdetails';
import MorogoDetails from './morogodetails';
import ChickenFeetDetails from './chickenfeetdetails';



function App() {

  return (
   
<Router>
      <Routes>
        <Route path="/" element={<FatCakeDetails />} />
        <Route path="/tribe" element={<Tribe />} />
        <Route path="/sampdetails" element={<SampDetails />} />
        <Route path="/morogodetails" element={<MorogoDetails />} />
        <Route path="/chickenfeetdetails" element={<ChickenFeetDetails />} />
       
      
      </Routes>
    </Router>
  );
}

export default App;
