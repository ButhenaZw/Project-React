import React from 'react'
import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function footer() {
  return (
    <div>
      <footer className='footer-contact'><br/>
<div style={{display:"flex", justifyContent:"space-evenly", color:"white"}}>
  <div>
  <h3 style={{color:"#f95d2de7"}}>About Us
  </h3><br/>
<p> 
Orange Coding School is a leading institution <br/>dedicated to teaching programming with interactive, <br/> practical approaches. Since its establishment,<br/>  our goal has been to prepare<br/> the next generation of professional developers.

</p>
  </div>

 
<div>
<a href='#' style={{color:"#f95d2de7",  textDecoration:"none" }}>Call Us <br/> 
<div style={{color:"white"}}>+962777801212</div>
 <br/>
</a>


<a href='#' style={{color:"#f95d2de7" ,  textDecoration:"none"}}>Message Us
 <br/> <div style={{color:"white"}}> codingschoolaqaba.ojo@orange.com</div>
 <br/>
</a>
<br/>

<a href='#' style={{color:"#f95d2de7" ,  textDecoration:"none"}}>Visit Us
<br/>
<div style={{color:"white"}}>
+962777801212
</div>
 <br/>
</a>
</div>
</div>

<br/>
<br/>

<div style={{display:"flex", gap:"30px",  justifyContent:"center" , color:"white"}}>
<h1 style={{color:"#f95d2de7"}}> Follow us </h1>
</div>

<br/>


<div  className='icon-contact'  >
    
<a className='icon-contact-iii' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <InstagramIcon style={{ fontSize: 40, color: '#E4405F', color : "white" }}  />
    </a>

    <a className='icon-contact-fff' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <FacebookIcon style={{ fontSize: 40 , color : "white"}} />
    </a>

    <a className='icon-contact-ggg'  href="https://github.com" target="_blank" rel="noopener noreferrer">
      <GitHubIcon style={{ fontSize: 40 , color : "white"}} />
    </a>

    <a className='icon-contact-ttt' href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <TwitterIcon style={{ fontSize: 40, color : "white" }} />
    </a>
</div>
<br/>

<div>
  <p style={{color:"white" ,display:"flex", justifyContent:"center"}}>   
  © 2025 All rights reserved | Orange Coding School
  </p>
</div>
</footer>
    </div>
  )
}

export default footer
