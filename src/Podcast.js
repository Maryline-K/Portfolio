import React from 'react'
import './Podcast.css'
import pod from './pod.jpg'



function Podcast() {
  return (
    <div className='podcast' id = 'podcast'>
      <div className='podcast-header'>
      <img src={pod} className="pod-logo" alt="logo" />
        Podcast comming soon
        
        </div>
        </div>
  )
}

export default Podcast