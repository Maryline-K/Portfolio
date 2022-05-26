import React from 'react'
import './Footer.css'
import Right from './Right.js'
import Icon from './components/icons'
import {Link} from 'react-router-dom'



function Footer(){

return(

	

  <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Information</h4>
  	 			<ul>
  	 				<li><a href="/">DevOps</a></li>
  	 		
  	 				<li><a href="/">React</a></li>
  	 			</ul>

				   <h4  style = {{marginTop:"30px"}}>Email Me</h4>
  	 			<ul>
				   <li ><a style={{textTransform:"lowercase"}} href="mailto:maeyumbong@yahoo.com?">maeyumbong@yahoo.com</a></li>
  	 			
  	 			
					  
  	 			</ul>
				  
  	 		</div>


  	 		<div className="footer-col">
  	 			<h4>CI/CD</h4>
  	 			<ul>
  	 				<li><Link to="/">Jenkins</Link></li>
  	 				<li><Link to="/">Ansible</Link></li>
					   <li><Link to="/">Nagios</Link></li>
  	 				<li><Link to="/">Git/GitHub</Link></li>
					 
			
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>container</h4>
  	 			<ul>
  	 				<li><Link to="/">Kubernetes</Link></li>
					   <li><Link to="/">Docker</Link></li>
				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Social</h4>
  	 			<div className="social-links">
  	 				<a href="/"><Icon className="fab fa-twitter" />Twitter</a>
  	 			
  	 				<a href="https://www.instagram.com/marylinek21/"><Icon className="fab fa-instagram" />Instagram</a>
  	 				
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
	    <Right/>
  </footer>
  

)
}
export default Footer;
