import React from "react";
import "./styles/home.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import RecipeList from "../components/RecipeList";
import HeadingText from "../components/HeadingText";
import Newsletter from "../components/Newsletter";

export default function Home(){
  return (
   <> 
    <Navbar/>
    <Hero/>
    <Slider/>
    <HeadingText/>
    <RecipeList/>
    <Newsletter/>
    <Footer/>
   </>
  );

}