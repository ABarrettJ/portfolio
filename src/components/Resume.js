import React, {useEffect, useState} from 'react';
import {Download, ExpandIcon, CollapseIcon } from './Icons';


const Resume = () => {
    return (

      <section className="resume-section">
        <div className='resume-image background-image'></div>
        <div id='resume-jump'></div>
        <a className="download-button dl-icon"
          href="https://raw.githubusercontent.com/ABarrettJ/portfolio/main/src/images/Austin%20Barrett%20Resume.pdf"
          target='_blank'
          rel="noreferrer"
          download="Austin Barrett Resume">
          Download <Download/>
        </a>
        <article className='resume-pdf'>
        <iframe
          title="Resume"
          src="https://drive.google.com/file/d/1krDAeMbtWOKAa_1byrHQjH_YSXhF-uaO/preview"
          style={{border: "none", width: "100%", height: "110%", overflow: "hidden"}}
        >
        </iframe>
        </article>
      </section>
    )
  };

export default function ResumeElement() {
    const [openResume, setOpenResume] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const handleResumeOpen = () => {
      setOpenResume(!openResume);
    };

    useEffect(() => {
      if (openResume) {
        const element = document.getElementById('resume-jump');
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [openResume]);

    useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <>
        <div
          className={`resume-button ${scrollY >= 181 ? 'fixed-button' : ''}`}
          onClick={handleResumeOpen}
        >
          Resume {openResume ? (<CollapseIcon/>) : (<ExpandIcon/>)}
        </div>
        {openResume &&
          <div className='resume-wrapper'>
            <Resume />
          </div>
        }
      </>
    )
  }
