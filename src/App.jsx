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


   <header id="navbar" className='bg-green-950 fixed w-full top-0 left-0 z-50'>
      <nav className='container flex items-center justify-between h-16 sm:h-20'>
        <div className='font-lobster sm:text-2xl'>IndoorPlants.</div>

        <div id='nav-menu' className='absolute top-0 left-[-100%] min-h-[80vh] w-full
        bg-green-950/80 backdrop-blur-sm flex items-center justify-center
         duration-300 overflow-hidden'>

          <ul className='flex flex-col items-center gap-8'>
            <li>
              <a href="#home" class="nav-link">Home</a>
            </li>
            <li>
              <a href="#about" class="nav-link">About</a>
            </li>
            <li>
              <a href="#popular" class="nav-link">Popular</a>
            </li>
            <li>
              <a href="#review" class="nav-link">Review</a>
            </li>
          </ul>

          <div className='absolute bottom-0 -right-10 opacity-90'>
            <img src={leaf1} className='w-32' />
          </div>
          <div className='absolute -top-5 -left-5 rotate-90 opacity-90'>
            <img src={leaf2} className='w-32' />
          </div>

        </div>

        <div className='text-xl sm:text-3xl cursor-pointer z-50'>
          <i class="ri-menu-4-line" id='hamburger'></i>
        </div>

      </nav>
   </header>

   </>
  )
}

export default App
