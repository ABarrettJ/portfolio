import React, {useEffect, useState} from 'react';
import Nav from './components/Nav';
import CodeBox from './components/MockIDE';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ResumeElement from './components/Resume';
import Footer from './components/Footer';
import Alert from '@mui/material/Alert';
import './App.css';
import './AppMobile.css';
import './tanuki.css';

function App() {
  const[openContact, setOpenContact] = useState(false);
  const[openResume, setOpenResume] = useState(false);
  const [alertOpen, setAlertOpen] = useState(true);

  const handleOpenContact = () => {
    setOpenContact(true);
  }

  const handleCloseContact = () => {
    setOpenContact(false);
  }

  const handleResumeOpen = () => {
    if(openResume){
      setOpenResume(false);
    }else{
      setOpenResume(true);
    }
  }

  return (
    <>
    {alertOpen &&
      <Alert
        className="customAlert"
        severity="info"
        open={alertOpen}
        onClose={() => {
          setAlertOpen(false)
        }}
      >
        Thank you for visiting my portfolio! Please note that it's currently under active development and may not yet be fully optimized for all devices and resolutions.
      </Alert>
    }
    <Nav handleOpenContact={handleOpenContact}/>
    <div className='nav-spacer'></div>
    <CodeBox/>
    <Projects/>
    <Skills/>
    <ResumeElement/>
    <Footer/>
    </>
  );
}

export default App;
