
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FatCakeDetails from './fatcakedetails';
import Tribe from './tribe';



function App() {

  return (
   
<Router>
      <Routes>
        <Route path="/" element={<FatCakeDetails />} />
        <Route path="/tribe" element={<Tribe />} />
       
      
      </Routes>
    </Router>
  );
}

export default App;
