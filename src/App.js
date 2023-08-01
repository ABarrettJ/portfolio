import React, {useEffect, useState} from 'react';
import tasteful from './images/tf_home.png'
import jsx from './images/react.svg'
import './App.css';
import './tanuki.css'

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
)
const GitLab = (props) => (
  <svg
    className="icon"
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_2"
    width={27}
    height={27}
    fill="#FFF"
    stroke="#FFF"
    strokeWidth={1.92}
    data-name="Layer 2"
    viewBox="0 0 48 48"
    {...props}
  >
    <g id="SVGRepo_iconCarrier">
      <defs>
        <style>
          {
            ".cls-1{fill:none;stroke:#FFF;stroke-linecap:round;stroke-linejoin:round}"
          }
        </style>
      </defs>
      <path id="path50" d="M24 42h0l7.18-22.1H16.82L24 42Z" className="cls-1" />
      <path
        id="path66"
        d="M6.76 19.86h0l-2.19 6.71a1.5 1.5 0 0 0 .54 1.67L24 42 6.76 19.86Z"
        className="cls-1"
      />
      <path
        id="path74"
        d="M6.76 19.86h10.06L12.49 6.55a.74.74 0 0 0-1.41 0L6.76 19.86Z"
        className="cls-1"
      />
      <path
        id="path82"
        d="M41.25 19.86h0l2.18 6.71a1.5 1.5 0 0 1-.54 1.67L24 42l17.25-22.1Z"
        className="cls-1"
      />
      <path
        id="path86"
        d="M41.25 19.86H31.18l4.33-13.31a.74.74 0 0 1 1.41 0l4.33 13.31Z"
        className="cls-1"
      />
      <path
        d="m24 41.96 7.18-22.1h10.07L24 41.96zM24 41.96 6.76 19.86h10.06L24 41.96z"
        className="cls-1"
      />
    </g>
  </svg>
)


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
            src&nbsp;&nbsp;> candidates&nbsp;&nbsp;>&nbsp;&nbsp;<img src={jsx} style={{verticalAlign: 'middle'}}/>&nbsp;<a className='jsx-link' href='FILL RESUME HERE'>austin_barrett.jsx</a>
          </p>
        </div>
      </div>
    </div>
  );
};

const Dots = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={16}
    fill="none"
    {...props}
  >
    <circle cx={8} cy={8} r={8} fill="#787878" fillOpacity={0.5} />
    <circle cx={8} cy={8} r={7.5} stroke="#2F2F2F" strokeOpacity={0.5} />
    <circle cx={30} cy={8} r={8} fill="#787878" fillOpacity={0.5} />
    <circle cx={30} cy={8} r={7.5} stroke="#2F2F2F" strokeOpacity={0.5} />
    <circle cx={52} cy={8} r={8} fill="#787878" fillOpacity={0.5} />
    <circle cx={52} cy={8} r={7.5} stroke="#2F2F2F" strokeOpacity={0.5} />
  </svg>
)

function Nav(){
  return (
    <>
    <div className='nav'>
    <div className='name-container'>
      <div className='first-name'>Austin <div className='last-name'> Barrett</div></div>
      <div className='title'>Full Stack Developer</div>
    </div>
    <div className='social-container'>
      <div className='resume'><a className='link-hover'>Resume</a></div>
      <div className='contact'><a className='link-hover'>Contact</a></div>
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
            <div className="scroller">V</div>
          </div>
        </div>
      )}
    </>
  );
}


function Projects(){
  return(
    <>
    <h1 className='projects-title'>Projects</h1>
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
        <div className='project-display-two'>
        </div>
      </div>
      <div className='title-row'>
      <h1>Skills</h1>
      </div>
    </div>
    </>
  )
}

function Skills(){
  return(<div className='skills-container'></div>)
}

function App() {
  return (
    <>
    <Nav/>
    <div className='nav-spacer'></div>
    <CodeBox/>
    <Projects/>
    <Skills/>
    </>
  );
}

export default App;
