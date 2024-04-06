import React from "react";
import Navbar from "../components/Navbar";
import "./styles/home.css"
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Slider from "../components/Slider";

export default function Home(){
  return (
   <> 
    <Navbar/>
    <Hero/>
    <Slider/>

    
    <Footer/>
   </>
  );

}