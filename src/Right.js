import React from 'react';
import './Right.css'

function Right() {
    const currYear = new Date().getFullYear();
  return (
  
  <div className='right'>
<h5>Maryline &#169; All Rights Reserved {currYear} </h5>
  </div>
  )
}

export default Right;
