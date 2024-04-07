
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
import SkopoCowHeadDetails from './skopocowheaddetails';
import Home from './Home';
import Contact from './Contact';
import OurRecipes from './OurRecipes';
import Reviews from './Reviews';
import OurStory from './OurStory';




function App() {

  return (
   
<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fatcakedetails" element={<FatCakeDetails />} />
        <Route path="/tribe" element={<Tribe />} />
        <Route path="/sampdetails" element={<SampDetails />} />
        <Route path="/morogodetails" element={<MorogoDetails />} />
        <Route path="/chickenfeetdetails" element={<ChickenFeetDetails />} />
        <Route path="/skopocowheaddetails" element={<SkopoCowHeadDetails />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourrecipes" element={<OurRecipes />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/ourstory" element={<OurStory />} />
      


      
       
      
      </Routes>
    </Router>
  );
}

export default App;
