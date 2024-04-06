import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurStory from './pages/OurStory';
import OurRecipes from './pages/OurRecipes';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="ourstory" element={<OurStory />} />
          <Route path="ourrecipes" element={<OurRecipes />} />
          <Route path="reviews" element={<Reviews /> } />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
