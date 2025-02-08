import { useState } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Form from './sform';
import { positions } from '@mui/system';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Form />
    </div>
  )
}

export default App;
