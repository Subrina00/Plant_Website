import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import leaf1 from "./assets/leaf-1.png";
import leaf2 from "./assets/leaf-2.png";
import leaf3 from "./assets/leaf-3.png";
import leaf4 from "./assets/leaf-4.png";

import plant1 from "./assets/plant-1.png";
import plant2 from "./assets/plant-2.png";

import cart1 from "./assets/cart-1.png";
import cart2 from "./assets/cart-2.png";
import cart3 from "./assets/cart-3.png";
import cart4 from "./assets/cart-4.png";

import review1 from "./assets/review-1.jpg";
import review2 from "./assets/review-2.jpg";
import review3 from "./assets/review-3.jpg";
import review4 from "./assets/review-4.jpg";

import home from "./assets/home.png";
import floral1 from "./assets/floral-1.png";
import favicon from "./assets/favicon.png";

function App() {
  
  return (
   <>
   
   {/* ======== HEADER SECTION ======== */}


   <header id="navbar">
      <nav>
        <div>IndoorPlants.</div>
        <div>

          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Review</a>
            </li>
          </ul>

          <div>
            <img src={leaf1} alt="" />
          </div>
          <div>
            <img src={leaf2} alt="" />
          </div>

        </div>

        <div>
          <i class="ri-menu-4-line"></i>
        </div>

      </nav>
   </header>

   </>
  )
}

export default App
