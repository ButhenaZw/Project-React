import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import"./dashboard.css"
import Footer from '../contactus/Home/footer/footer'


function App() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  
    return (
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Home />

      </div>
    )
  }
  
  export default App