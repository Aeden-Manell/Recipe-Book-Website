import React from "react";
import './styles/navbar-style.css';
import { Link } from "react-router-dom";
import logoImage from "../assets/Logo.jpeg";

const Navbar = () => {


  return (
    <div className="Navigation">
      <nav class="flex align-center">
        <div><img src={logoImage} alt="Logo" className="logo" /></div>
        <ul>
          <li class="big-screens">

            <Link to="/">Home</Link>            
            <Link to="/ourrecipes">Our Recipes</Link>
            <Link to="/ourstory">Our Story</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/contact" id="contact-btn">Contact</Link>
          </li>
          <li class="small-screens">
            <i class="fa-solid fa-bars"></i>
          </li>
        </ul>
      </nav>
    </div>

  );
}

export default Navbar;