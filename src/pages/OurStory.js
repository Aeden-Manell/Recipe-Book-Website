import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import Newsletter from "../components/Newsletter";
import HeroAbout from "../components/HeroAbout";

const OurStory = () => {
  return ( 
    <>
      <Navbar/>
      <HeroAbout/>
      <About/>
      <Newsletter/>
      <Footer/>
    </>
   );
}
 
export default OurStory;