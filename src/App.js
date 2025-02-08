import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Activity from "./components/ProjectReacta/ac/Activty";
import Hero from "./components/ProjectReacta/hero/Contact";
import Team from "./components/ProjectReacta/teams/teams";
import Signup from "./components/ProjectReacta/sing/login";
import Services from "./components/ProjectReacta/services/services";
import AboutUs from "./components/aboutus/aboutus"
import Dashboards from "./components/dashboard/dashboards"
import Contactus from "./components/contactus/Home/homec"
import HomeS from "./components/student/home"
import ProfileS from "./components/student/profileS"
import Footer from './components/contactus/Home/footer/footer'
import ProfileT from './components/dashboard/profiles'
import PPro from './components/student/pro'
import FormS from './components/dashboard/addstudent/home'
import Edit from './components/dashboard/edit/edit'






function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Signup />} />
        <Route path="/" element={<><Hero id="home"/><Activity id="activity"/><Services/><Team/><div style={{position:"relative",top:"300px"}}><Footer/></div>  </>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/dash" element={<Dashboards />} />
        <Route path="/home" element={<HomeS />} />
        <Route path="/profile" element={<ProfileS />} />
        <Route path="/profileT" element={<ProfileT />} />
        <Route path="/pro" element={<PPro />} />
        <Route path="/form" element={<FormS />} />
        <Route path="/edit" element={<Edit />} />








        

        
      </Routes>
    </Router>
  );
}

export default App;
