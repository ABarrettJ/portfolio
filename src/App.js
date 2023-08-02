import React, {useEffect, useState} from 'react';
import tasteful from './images/tf_home.png'
import astro from './images/astro_home.png'
import jsx from './images/react.svg'
import { Dialog } from '@mui/material';
import './App.css';
// import './Card.scss'
import './AppMobile.css'
import './tanuki.css'

// svgs
import ReactIcon from './images/skill_icons/react.svg';
import FastAPIIcon from './images/skill_icons/fastapi.svg';
import JavaScriptIcon from './images/skill_icons/javascript.svg';
import PythonIcon from './images/skill_icons/python.svg';
import AWSIcon from './images/skill_icons/amazons3.svg';
import DjangoIcon from './images/skill_icons/django.svg';
import PostgreSQLIcon from './images/skill_icons/postgresql.svg';
import HTML5Icon from './images/skill_icons/html5.svg';
import CSSIcon from './images/skill_icons/css3.svg';
import MaterialUIIcon from './images/skill_icons/mui.svg';

const LinkedIn = (props) => (
  <svg
    className="icon"
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#FFF"
      strokeLinejoin="round"
      d="M22 3.47v17.06A1.47 1.47 0 0 1 20.53 22H3.47A1.47 1.47 0 0 1 2 20.53V3.47A1.47 1.47 0 0 1 3.47 2h17.06A1.47 1.47 0 0 1 22 3.47ZM7.882 9.648h-2.94v9.412h2.94V9.647Zm.265-3.235a1.694 1.694 0 0 0-1.682-1.706h-.053a1.706 1.706 0 0 0 0 3.412 1.694 1.694 0 0 0 1.735-1.653v-.053Zm10.912 6.93c0-2.83-1.8-3.93-3.588-3.93a3.353 3.353 0 0 0-2.977 1.517h-.082V9.647H9.647v9.412h2.941v-5.006a1.953 1.953 0 0 1 1.765-2.106h.112c.935 0 1.63.588 1.63 2.07v5.042h2.94l.024-5.718Z"
    />
  </svg>
);

const Download = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    className='dl-icon'
    {...props}
  >
    <path

      stroke="#FFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 17h.01m.39-3h.6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 15.602 21 16.068 21 17c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 20 18.932 20 18 20H6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 18.398 3 17.932 3 17c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 14 5.068 14 6 14h.6m5.4 1V4m0 11-3-3m3 3 3-3"
    />
  </svg>
);

const ExpandIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    stroke="#FFF"
    viewBox="0 0 20 20"
    className='expand-icon'
    {...props}
  >
    <path

      stroke="#FFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 19H5v-5m9-9h5v5"
    />
  </svg>
);

const CollapseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    stroke="#FFF"
    viewBox="0 -5 40 48"
    className='expand-icon'
    {...props}
  >
    <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}>
      <path d="M44 20H28V4M4 28h16v16" />
    </g>
  </svg>
)

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
        src="https://drive.google.com/file/d/1jjqUpejs8H7VZvrM_3v46-31ExMxcEpu/preview"
        style={{border: "none", width: "100%", height: "110%", overflow: "hidden"}}
      >
      </iframe>
      </article>
    </section>
  )
};


function GL2(){
  return(
  <span data-testid="brand-header-default-logo"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 24" height="24" width="25" class="tanuki-logo">
  <path fill="#E24329" d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z" class="tanuki-shape tanuki"></path>
  <path fill="#FC6D26" d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z" class="tanuki-shape right-cheek"></path>
  <path fill="#FCA326" d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z" class="tanuki-shape chin"></path>
  <path fill="#FC6D26" d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z" class="tanuki-shape left-cheek"></path>
</svg>
</span>
  );
}
const Box = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          <p className="ghi-src-candidates">
            src&nbsp;&nbsp;> candidates&nbsp;&nbsp;>&nbsp;&nbsp;<img src={jsx} style={{verticalAlign: 'middle'}}/>&nbsp;<a className='jsx-link' href='https://drive.google.com/file/d/1jjqUpejs8H7VZvrM_3v46-31ExMxcEpu/view'>austin_barrett.jsx</a>
          </p>
        </div>
      </div>
    </div>
  );
};

const Dots = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={10}
    fill="none"
    {...props}
  >
    <path
      fill="#6B7280"
      fillOpacity={0.5}
      d="M5.067 0c2.798 0 5.066 2.239 5.066 5s-2.268 5-5.066 5C2.268 10 0 7.761 0 5s2.268-5 5.067-5Z"
    />
    <path
      stroke="#2F2F2F"
      strokeOpacity={0.5}
      d="M5.067.313C7.69.313 9.817 2.41 9.817 5c0 2.589-2.127 4.688-4.75 4.688-2.624 0-4.75-2.1-4.75-4.688 0-2.589 2.126-4.688 4.75-4.688Z"
    />
    <path
      fill="#6B7280"
      fillOpacity={0.5}
      d="M19 0c2.798 0 5.067 2.239 5.067 5S21.798 10 19 10s-5.067-2.239-5.067-5S16.202 0 19 0Z"
    />
    <path
      stroke="#2F2F2F"
      strokeOpacity={0.5}
      d="M19 .313c2.623 0 4.75 2.098 4.75 4.687 0 2.589-2.127 4.688-4.75 4.688S14.25 7.588 14.25 5c0-2.589 2.127-4.688 4.75-4.688Z"
    />
    <path
      fill="#6B7280"
      fillOpacity={0.5}
      d="M32.933 0C35.731 0 38 2.239 38 5s-2.269 5-5.067 5-5.066-2.239-5.066-5 2.268-5 5.066-5Z"
    />
    <path
      stroke="#2F2F2F"
      strokeOpacity={0.5}
      d="M32.933.313c2.624 0 4.75 2.098 4.75 4.687 0 2.589-2.126 4.688-4.75 4.688-2.623 0-4.75-2.1-4.75-4.688 0-2.589 2.127-4.688 4.75-4.688Z"
    />
  </svg>
)

function Nav({handleOpenContact}){
  return (
    <>
    <div className='nav'>
    <div className='name-container'>
      <div className='first-name'>Austin <div className='last-name'> Barrett</div></div>
      <div className='title'>Full Stack Developer</div>
    </div>
    <div className='social-container'>
      <div className='resume'><a className='link-hover' href='https://drive.google.com/file/d/1jjqUpejs8H7VZvrM_3v46-31ExMxcEpu/view'>Resume</a></div>
      <div className='contact'><a onClick={handleOpenContact} className='link-hover'>Contact</a></div>
      <a href='https://www.linkedin.com/in/abarrettj/' title='My LinkedIn'>
        <LinkedIn/>
      </a>
      <a href='https://gitlab.com/barrettAJ' title='My Repository'>
        <GL2/>
      </a>
    </div>
    </div>
    </>
  );
}

const CodeBox = () => {

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const lineHeight = 60;
  const containerHeight = 256;
  const numLines = Math.floor(containerHeight / lineHeight);

  const scrollToProjects = () => {
    const element = document.getElementById('projects-scroll');
    element.scrollIntoView({behavior: "smooth"});
  }

  const text = "Hey, I’m Austin! I’m a full stack developer located in Charlotte, NC...";

  useEffect(() => {
    if(index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(prevText => prevText + text.charAt(index));
        setIndex(prevIndex => prevIndex + 1);
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY <= 180){
      setShowScroll(true);
    } else if (showScroll && window.scrollY >180){
      setShowScroll(false);
    }
  };

  return (
    <>
    <div className="ide">
      <div className="hello-box">
        <Box/>
        <div className="editor">
          <div className="line-numbers">
            {
              Array(numLines).fill(0).map((_, index) => (
                <div className="line-number" key={index}>
                  {index + 1}
                </div>
              ))
            }
          </div>
          <div className="text-content">
            {
              displayText.split(' ').map((word, idx) => {
                if(word === 'full' || word === 'stack') {
                  return <span key={idx} className="highlight">{word} </span>
                }
                if(word === 'developer'){
                  return <span key={idx} className="highlight">{word}</span>
                }
                if(word === 'located'){
                  return <span key={idx} className='dank-mono'> {word} </span>
                }
                if(word === 'NC...'){
                  return <span key={idx} className='dank-mono'> {word}</span>
                }
                return <span key={idx} className='dank-mono'>{word} </span>
              })
            }
            <span className="blinking-cursor">|</span>
          </div>
        </div>
      </div>
    </div>
    {showScroll && (
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller" onClick={scrollToProjects}>V</div>
          </div>
        </div>
      )}
    </>
  );
}


function Projects(){
  return(
    <>
    <h1 id='projects-scroll' className='projects-title'>Projects</h1>
    <div className='projects-container'>
      <div className='project-row'>
        <div className='project-info'>
          <div className='top-bar'>
            <div className='nav-dots'>
              <div className='red-dot'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7.5" fill="#FC6161" stroke="#671A1A"/>
                </svg>
              </div>
              <div className='yellow-dot'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7.5" fill="#FCAB61" stroke="#94653A"/>
                </svg>
              </div>
              <div className='green-dot'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7.5" fill="#B7FC61" stroke="#41532A"/>
                </svg>
              </div>
            </div>
            <div className='proj-repo'>
              Live
              <div className="live">
                <a href='https://tastefulapp.gitlab.io/tasteful/'>
                <div className="pulse-container">
                  <div className="center-circle"></div>
                  <div className="pulse-circle"></div>
                </div>
                </a>
              </div>
              <a href='https://gitlab.com/tastefulapp/tasteful' title='Tasteful Repository'>
                <GL2/>
              </a>
            </div>
          </div>
          <div className='project-content'>
            <a className='no-decoration' href='https://gitlab.com/tastefulapp/tasteful'>
              <div className='project-title'>
                tasteful>
              </div>
            </a>
            <div className='project-description'>
            Tasteful is a Single-Page Application enhancing culinary discovery through AI-assisted reviews. I used React and Material UI for an intuitive interface, FastAPI and JWT for data management, and AWS S3 for real-time image handling. Experience our innovative approach to transforming user input into comprehensive restaurant reviews.
            </div>
            <div className='skills'>
              <div className='chip'>
                React
              </div>
              <div className='chip'>
                FastAPI
              </div>
              <div className='chip'>
                AWS S3
              </div>
              <div className='chip'>
                PostgreSQL
              </div>
              <div className='chip'>Material UI</div>
            </div>
          </div>
        </div>
        <div className='project-display-one'>
        <div className='browser-top'>
        <Dots/>
        </div>
        <div className='search-bar'>
          <div class="nav-items">
            <div class="flex ml-[20px] text-gray-500" style={{display: 'flex', paddingLeft: '20px', paddingRight: '20px'}}>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="mt-1 mr-2 duration-300 ease-in-out rounded-full hover:text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                </path>
              </svg>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="mt-1 mr-2 duration-300 ease-in-out hover:text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z">
                </path>
              </svg>
              <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="mt-[2px] mr-2 text-xl duration-300 ease-in-out hover:text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1459 11.0499L12.9716 9.05752L15.3462 8.84977C14.4471 7.98322 13.2242 7.4503 11.8769 7.4503C9.11547 7.4503 6.87689 9.68888 6.87689 12.4503C6.87689 15.2117 9.11547 17.4503 11.8769 17.4503C13.6977 17.4503 15.2911 16.4771 16.1654 15.0224L18.1682 15.5231C17.0301 17.8487 14.6405 19.4503 11.8769 19.4503C8.0109 19.4503 4.87689 16.3163 4.87689 12.4503C4.87689 8.58431 8.0109 5.4503 11.8769 5.4503C13.8233 5.4503 15.5842 6.24474 16.853 7.52706L16.6078 4.72412L18.6002 4.5498L19.1231 10.527L13.1459 11.0499Z" fill="currentColor">
                </path>
              </svg>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="mt-1 mr-4 duration-300 ease-in-out hover:text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill="none" d="M0 0h24v24H0z">
                  </path>
                  <path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z">
                  </path>
                </g>
              </svg>
            </div>
            <div class="flex w-full mr-4 bg-gray-800 rounded-full justify-evenly lg:px-4 laptop:px-0 xs:justify-center xs:w-5/5">

              <a href="https://tastefulapp.gitlab.io/tasteful/" target="_blank" class="browser-link"> https://tastefulapp.gitlab.io/tasteful/ </a>
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 top-[1px] mt-[3px] text-center duration-300 ease-in-out hover:text-gray-400 phone:hidden xs:hidden xs:text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                {/* <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon> */}
              </svg>
            </div>
            {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="w-10 mt-[3px] text-center text-gray-500 duration-300 ease-in-out hover:text-gray-400 phone:hidden xs:hidden" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
              </path>
            </svg> */}
          </div>
          </div>
          <img src={tasteful} className='display-one-img'/>
        </div>
      </div>
      <div className='project-row'>
        <div className='project-info'>
          <div className='top-bar'>
            <div className='nav-dots'>
              <div className='red-dot'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7.5" fill="#FC6161" stroke="#671A1A"/>
                </svg>
              </div>
              <div className='yellow-dot'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7.5" fill="#FCAB61" stroke="#94653A"/>
                </svg>
              </div>
              <div className='green-dot'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7.5" fill="#B7FC61" stroke="#41532A"/>
                </svg>
              </div>
            </div>
            <div className='proj-repo' title='Astro Repository'>
              <a href='https://gitlab.com/barrettAJ/astro'>
                <GL2/>
              </a>
            </div>
          </div>
          <div className='project-content'>
            <a className='no-decoration' href='https://gitlab.com/barrettAJ/astro'>
              <div className='project-title'>
                astro>
              </div>
            </a>
            <div className='project-description'>
            Astro is a web application developed to streamline inventory management and staff coordination. I utilized React coupled with Material UI/Bootstrap for a user-friendly interface and Django for reliable backend services. Experience how Astro enhances system scalability and real-time updates through its microservices architecture.
            </div>
            <div className='skills'>
              <div className='chip'>
                React
              </div>
              <div className='chip'>
                Django
              </div>
              <div className='chip'>
                Microservice
              </div>
              <div className='chip'>
                Material UI
              </div>
            </div>
          </div>
        </div>
        <div className='project-display-one'>
        <div className='browser-top'>
        <Dots/>
        </div>
        <div className='search-bar'>
          <div class="nav-items">
            <div class="flex ml-[20px] text-gray-500" style={{display: 'flex', paddingLeft: '20px', paddingRight: '20px'}}>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="mt-1 mr-2 duration-300 ease-in-out rounded-full hover:text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                </path>
              </svg>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="mt-1 mr-2 duration-300 ease-in-out hover:text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z">
                </path>
              </svg>
              <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="mt-[2px] mr-2 text-xl duration-300 ease-in-out hover:text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1459 11.0499L12.9716 9.05752L15.3462 8.84977C14.4471 7.98322 13.2242 7.4503 11.8769 7.4503C9.11547 7.4503 6.87689 9.68888 6.87689 12.4503C6.87689 15.2117 9.11547 17.4503 11.8769 17.4503C13.6977 17.4503 15.2911 16.4771 16.1654 15.0224L18.1682 15.5231C17.0301 17.8487 14.6405 19.4503 11.8769 19.4503C8.0109 19.4503 4.87689 16.3163 4.87689 12.4503C4.87689 8.58431 8.0109 5.4503 11.8769 5.4503C13.8233 5.4503 15.5842 6.24474 16.853 7.52706L16.6078 4.72412L18.6002 4.5498L19.1231 10.527L13.1459 11.0499Z" fill="currentColor">
                </path>
              </svg>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="mt-1 mr-4 duration-300 ease-in-out hover:text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill="none" d="M0 0h24v24H0z">
                  </path>
                  <path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z">
                  </path>
                </g>
              </svg>
            </div>
            <div class="flex w-full mr-4 bg-gray-800 rounded-full justify-evenly lg:px-4 laptop:px-0 xs:justify-center xs:w-5/5">
              <a href="https://gitlab.com/barrettAJ/astro/" target="_blank" class="browser-link"> https://gitlab.com/barrettAJ/astro/ </a>
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 top-[1px] mt-[3px] text-center duration-300 ease-in-out hover:text-gray-400 phone:hidden xs:hidden xs:text-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              </svg>
            </div>
          </div>
          </div>
          <img src={astro} className='display-one-img'/>
        </div>
      </div>
      <div className='title-row'>
      <h1 className='skills-title'>Skills</h1>
      </div>
    </div>
    </>
  )
}

function Skills(){
  return(
  <div className='skills-container'>
    <div className='skills-tile'> <img className="skill-icon" src={ReactIcon} alt="React Icon"/><div className="skill-name">React</div></div>
    <div className='skills-tile'> <img className="skill-icon" src={FastAPIIcon} alt="FastAPI Icon"/><div className="skill-name">FastAPI</div></div>
    <div className='skills-tile'> <img className="skill-icon" src={JavaScriptIcon} alt="JavaScript Icon"/><div className="skill-name">JavaScript</div></div>
    <div className='skills-tile'> <img className="skill-icon" src={PythonIcon} alt="Python Icon"/><div className="skill-name">Python</div></div>
    <div className='skills-tile'> <img className="skill-icon" src={AWSIcon} alt="AWS Icon"/><div className="skill-name">AWS S3</div></div>
    <div className='skills-tile'> <img className="skill-icon" src={DjangoIcon} alt="Django Icon"/><div className="skill-name">Django</div></div>
    <div className='skills-tile'> <img className="skill-icon" src={PostgreSQLIcon} alt="PostgreSQL Icon"/><div className="skill-name">PostgreSQL</div></div>
    <div className='skills-tile'> <img className="skill-icon" src={HTML5Icon} alt="HTML5 Icon"/><div className="skill-name">HTML5</div></div>
    <div className='skills-tile'> <img className="skill-icon" src={CSSIcon} alt="CSS Icon"/><div className="skill-name">CSS</div></div>
    <div className='skills-tile'> <img className="skill-icon" src={MaterialUIIcon} alt="Material UI Icon"/><div className="skill-name">Material UI</div></div>
  </div>
  )
}



function ContactMe() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const validateEmail = (email) => {
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return re.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      setErrorMessage("All fields must be filled out.");
    } else if (!validateEmail(formState.email)) {
      setErrorMessage("Invalid email format.");
    } else {
      setIsSubmitting(true);
      setErrorMessage(null);

      const formspreeEndpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT;

      fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          setFormState({
            name: '',
            email: '',
            message: ''
          });
          alert('Message sent!');
        } else {
          setErrorMessage("Error sending message.");
        }
      })
      .catch((error) => {
        setErrorMessage("An error occurred.");
        console.error('Error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    }
  };

  return (
    <>
    <div className='contact-container'>
    <div className="card-body">
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='form-input-group'>
          <input
            className='form-input form-control'
            type='text'
            name='name'
            placeholder='Name'
            value={formState.name}
            onChange={handleInputChange}
            disabled={isSubmitting}
          />
          <input
            className='form-input form-control'
            type='email'
            name='email'
            placeholder='Email'
            value={formState.email}
            onChange={handleInputChange}
            disabled={isSubmitting}
          />
        </div>
        <textarea
          className='form-input text-input'
          name='message'
          placeholder='Message'
          value={formState.message}
          onChange={handleInputChange}
          disabled={isSubmitting}
        />
        <button className='form-button' type='submit' disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
    </>
  );

//   return (
// <div className="card">
//     <div className="card-back">
//         <div className="line-numbers">
//             <div>1</div>
//             <div>2</div>
//             <div>3</div>
//             <div>4</div>
//             <div>5</div>
//             <div>6</div>
//             <div>7</div>
//             <div>8</div>
//             <div>9</div>
//         </div>
//         <code>
//             <span className="variable">const</span>
//             <span className="function"> aboutMe</span>
//             <span className="operator">=</span>
//             <span>{'{'}</span>
//             <div className="indent">
//                 <span className="property">name</span>
//                 <span className="operator">:</span>
//                 <span className="string">'Austin Barrett'</span>
//                 <span>,</span>
//             </div>
//             <div className="indent">
//                 <span className="property">title</span>
//                 <span className="operator">:</span>
//                 <span className="string">'Full Stack Developer'</span>
//                 <span>,</span>
//             </div>
//             <div className="indent">
//                 <span className="property">contact</span>
//                 <span className="operator">:</span>
//                 <span>{'{'}</span>
//                 <div className="indent">
//                     <span className="property">email</span>
//                     <span className="operator">:</span>
//                     <span className="string">'austinjbarrett98@gmail.com'</span>
//                     <span>,</span>
//                 </div>
//                 <div className="indent">
//                     <span className="property">linkedIn</span>
//                     <span className="operator">:</span>
//                     <span className="string">'linkedin.com/in/abarrettj'</span>
//                 </div>
//                 <span>{'}'}</span>
//             </div>
//             <span>{'}'}</span>
//         </code>
//     </div>
//     <div className="card-front">
//         <div className="line-numbers">
//             <div>1</div>
//             <div>2</div>
//             <div>3</div>
//             <div>4</div>
//             <div>5</div>
//             <div>6</div>
//             <div>7</div>
//             <div>8</div>
//             <div>9</div>
//         </div>
//         <code>
//             <span className="variable">this</span>
//             <span>.</span>
//             <span className="method">addEventListener</span>
//             <span>(</span>
//             <span className="string">'mouseover'</span>
//             <span>,</span>
//             <span className="function">()</span>
//             <span>=></span>
//             <span>{'{'}</span>
//             <div className="indent">
//                 <span className="variable">this</span>
//                 <span>.</span>
//                 <span className="property">flipCard</span>
//                 <span>=</span>
//                 <span className="boolean">true</span>
//                 <span>;</span>
//             </div>
//             <span>{'}'}</span>
//         </code>
//     </div>
// </div>
  // );


}


function ResumeElement() {
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

function App() {
  const[openContact, setOpenContact] = useState(false);
  const[openResume, setOpenResume] = useState(false);

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
    <Nav handleOpenContact={handleOpenContact}/>
    <div className='nav-spacer'></div>
    <CodeBox/>
    <Projects/>
    <Skills/>
    <ResumeElement/>
    <Dialog
      open={openContact}
      onClose={handleCloseContact}
      className='dialog custom-dialog'
      PaperProps={{ className: 'custom-paper' }}
      BackdropProps={{ className: 'custom-backdrop' }}
    >
      <ContactMe/>
    </Dialog>

    {/* <ContactMe/> */}
    {/* <div className='resume-wrapper'>
      <Resume/>
    </div> */}
    <div id='contact'className='contact-me'></div>
    </>
  );
}

export default App;
