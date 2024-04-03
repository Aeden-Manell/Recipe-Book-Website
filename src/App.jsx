
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FatCakeDetails from './fatcakedetails';



function App() {

  return (
   
<Router>
      <Routes>
        <Route path="/" element={<FatCakeDetails />} />
       
      
      </Routes>
    </Router>
  );
}

export default App;
