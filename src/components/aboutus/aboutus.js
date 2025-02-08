import React from "react";
import History from "./history/history"
import Mission from "./mission/mission"
import Hero from './Hero/hero'
import Partner from './partner/partner'
import Staff from '../ProjectReacta/teams/teams'
import Footer from '../contactus/Home/footer/footer'

function App() {
  return (
<div>
<Hero/>

<div  style={{display:"flex",justifyContent:'center',position:"relative",top:"100px"}}>

  <div><Mission/></div>
</div>
<div  style={{position:"relative",top:"100px"}}>
<History /></div>
<Staff/>

<Partner/>
<div  style={{position:"relative",top:"400px"}}>
<Footer/></div>





</div>
  );
}

export default App;
