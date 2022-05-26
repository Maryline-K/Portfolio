import React from 'react'
import {Link } from "react-router-dom";
import './Home.css'
import Maryline from './Maryline.jpg'


function Home() {
  return (


    <div className='Home' id = '#'>

<header className="home-header">
        <img src={Maryline} className="home-logo" alt="logo" />
        <p>
          Welcome to Maryline's <code> Profile! </code> I am happy you stopped by. 
        </p>
        
         <div>

       
        <Link to="/about" className='text' >

            Learn More About Me
            
            </Link>
    


    </div>

 </header>
   
        
        </div>
  )
}

export default Home