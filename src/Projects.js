import React from 'react'
import './Projects.css'
import CardItem from './CardItem';
import lock from './';
import marketing from './';
import money from './';
import net from './net.jpg';
import facebook from './facebook.jpg';
import Maryline from './Maryline.jpg'
import Whatsapp from './Whatsapp.jpg'



function Projects() {
  return (
    <div  className='projects' id = 'projects'>
            <header className='about-header'>
        
        <div className='cards'>
          <h1>Clone Projects</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>

           
              <ul className='cards__items'>
                 <CardItem
                h1='My Portfolio'
              src={Maryline}
                  text='I created this single page website using react.js to showcase my skills and past projects i have worked with. 
                 It is not much but atleast it is something   😍 😍  '
                  label=''
                  path='/'
                />
<CardItem
                h1='Netflix clone'
              src= {net}
                  text=' Built a full-stack web app to allow users to watch trailers movies from all the category using TMDB API and with the help of 
                  a package called movie-trailer.
                  ● play styles using open-source package called movie-trailer on the front-end
                  ● Utilized Hooks learn in React to manages the state under different scenarios that the user chose: JavaScript, 
                  React, Firebase, HTML/CSS.
                  
        '
                  label=''
                  path='/'
                />


              </ul> 

              <ul className='cards__items'>
              <CardItem
                h1='Facebook Clone'
              src={facebook}
                  text=' I created a facebook clone. The utility here is users can post feed and message others , users 
                  can view posts and feed on their page, and finally users can like posts'
                  label=''
                  path='/'
                />
               <CardItem
                h1='Whatsapp Clone'
              src={Whatsapp}
                  text=' I created a whatsapp clone in which users can chat with other contacts and can create their own groups and 
                  chat within the group they created.'
                  label=''
                  path='/'
                />


               
              </ul>
            </div>
          </div>
        </div>
        
        </header>
        </div>
  )
}

export default Projects