import React from 'react';
import StarRating from './StarRating';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
import './App.css';


const FatCakeDetails = () => {
  return (
    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

      <div className="navbar">
        <div className="navbar-logo">
          <a href="#logo">Logo</a>
        </div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#story">Our Story</a>
          <a href="#testimony">Testimonials</a>
          <a href="#contact">Contact Us</a>
          <input type="text" placeholder="Search" className="navbar-search"/>
        </div>
      </div>

            <div className="product-title">Recipe Title</div>   
            <div className='stars'> <StarRating rating={4} /> </div>
          
            

 </div>
  );
}

export default FatCakeDetails;