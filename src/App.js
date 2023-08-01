import React, {useEffect, useState} from 'react';
import jsx from './images/react.svg'
import './App.css';

const LinkedIn = (props) => (
  <a href='https://www.linkedin.com/in/abarrettj/'>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={27}
    height={27}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h27v27H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.01)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFWklEQVR4nO2dW6hWRRTHh+JYpvlgEQV2AbsgZTfKDIKkp0LRghNEDxEVVm89hUEPWnF6Syvo8hA9ZNBLkRBBFysiiJ6ii3k4GNYxxQS7ncyvMn8xOcJ8q+/sPXvv2fuMe9bv7cBa66xZf/bM7Nkz3xijKIqiKIqiKIpyAgCMAePAVmAn8DvKjKvFVlebsa7EWAdMaf1LsTVa16YQJwFPlueheBwFJmzt2hBExajPRBvdlFXb5zCwGVgBLDCZAyxwtdjiauNja7c25gAux4zvgcui/IMeAiwHpkXNpqIM9G7GIJ8MFSNMlIGo3bhpipvG+WxuHDQTgKdF7V6JEXRSBL02SrYZAFwnajcZI6h94fFZGCXbDAAWitrNxAg6RJRMM4LY9VNBmqGCJIYKkhhJCQKcDNxmp3tutvYL8DOwA3gRuNH0HFIRBLga+Jpy3gOWmJ5CCoIAN1T8RrIXWGp6yJwLAiwCfqA6X3T2USczQTYIl3+Al9zajh1T5tu1MLcqekTY3mN6RgqCfCZcNhTYbhS275uekYIgB8V3gMUFtktE+AOmZ6QgyAHhcnaB7TnCdr/pGSkI8pFw2Vhg+7Cw/dD0jBQEWS9cjriXwKvc6udpboC348efwvYB0zNSEGTMTWGrskOnvS0pDJwHfFdBjP3AhaaHzPkT4vmdAbw2YreKZDtwrukppCKI538p8BjwLrDHTYvtGtcLwCrTc0hNkNxBBUmLORcEWF1zcXEPcEvsON6+5OuBR4C3XZdpJxJ/A4fcavPHbn3Nfr+Z37hwNesXPaArSF2mY8ZxEwsrwu6K/r8BzwIXdF2/6AEbFPE/YsUBHgJ+ahjD7tLc1OT9SAasG6d2wIQEicmndt2ti/pFDxjLnoZxRmDHjOeBO4FlwFnu+8yZ7u9b3VR8tq5yF3B+YNlq1yMHQXYBdwDzAttrl34edAO9xE4GFoXEqduOvgvyHHBKYFNlvMV29XlEzFcrxslWkIPis/H6wCYWxZwHvD5ClNUVYmQryL3uPIadGd1vIgGcPuIEwFd2/An0z1MQ71jZyON1bnPFqaYGwJXuqfNZE+ibryA+7kPYfcAHbrfkcfYB24DbQwd6F+8NkdK2QD8VBFgFfEs5XwLXBBZ2pfA9HHLYNXtBgDXAXwFi+IW9KVCU3VUH96wFAS4B/ihYn5LHlY8zE7KVFXhZ+G2KXY++CfKOcLObKB61b+OezVLgqRGD9FsB8e8WPm/WbV/vBeHYl0nJXQX29m1csqzkf9glfJ/P67YvB0GeqLrHC/hE+DxeYn+xsP+xbvtyEGR76NNR0AUV7i1231d8DtVtXw6C7BMupduKgIuEz94Se7s67HO0bvtyEGQgXErfyq2N8Bl01b4cBBki9fbVZq4SpqOGqyAqSDP0CRlGuyyHKaGqfVcFrptXcgnTUcNVEBWkGfqEDKNdlsOUUNW+qwLXzSu5hOmo4SqICtIMfUKG0S7LYUqoat9VgevmlVzCdNRwFUQFaYY+IcNol+UwJVS176rAdfNKLmE6anh2glTFRI7TVb6x6lc54a4aSKQ4XeUbq36VEz6RjkWH0Pb/kQ5BScUMaA/t12zkNHBz7Dhd5RurfqbzgJmBCtJ/Qew2fh+90CUQ96PSPr/GCCoPPK5oHDQT+P+pq8k2LgXbEiXbDACeaeNSsFHX5i2PknGPAa5o69q82S6WVFFmAbi8tYslC65eHbh7+mw/mf1Az7HfJF7puqlBa1eveqLo5cSpXE7s/UzeRMDPvipdXN/tCbNWL7gPYip6N1Uy0I+7KfHOEbeB5sgM8I27AG28j7cFKYqiKIqiKIpiesm/hj3GtsFwaC4AAAAASUVORK5CYII="
        id="b"
        width={100}
        height={100}
      />
    </defs>
  </svg>
  </a>
)
const GitLab = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={27}
    height={27}
    fill="none"
    {...props}
  >
    <path fill="url(#gitlabPattern)" d="M0 0h27v27H0z" />
    <defs>
      <pattern
        id="gitlabPattern"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#gitlabImage" transform="scale(.01)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="gitlabImage"
        width={100}
        height={100}
      />
    </defs>
  </svg>
)

const Box = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          <p className="ghi-src-candidates">
            src&nbsp;&nbsp;> candidates&nbsp;&nbsp;>&nbsp;&nbsp;<img src={jsx} style={{verticalAlign: 'middle'}}/>&nbsp;austin_barrett.jsx
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
      <div className='resume'><a style={{cursor: 'pointer'}}>Resume</a></div>
      <div className='contact'><a style={{cursor: 'pointer'}}>Contact</a></div>
      <LinkedIn/>
      <a href='https://gitlab.com/barrettAJ'>
        <GitLab/>
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

  const text = "Hey, I’m Austin! I’m a full stack developer located in Charlotte NC...";

  useEffect(() => {
    if(index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(prevText => prevText + text.charAt(index));
        setIndex(prevIndex => prevIndex + 1);
      }, 50);

      // Clean up the timeout on unmount
      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  return (
    <div className="ide">
      <div className="hello-box">
        {/* <div className="filestructure">
          ghi  >  src  > candidates  >  austin_barrett.jsx
        </div> */}
        {/* <Dots/> */}
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
                return <span key={idx} className='dank-mono'>{word} </span>
              })
            }
          </div>
        </div>
      </div>
    </div>
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
              <div className="live">
                <a href='https://tastefulapp.gitlab.io/tasteful/'>
                  <div className="pulse-circle"></div>
                </a>
              </div>
              <a href='https://gitlab.com/tastefulapp/tasteful'>
                <GitLab/>
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
        <div className='project-display'></div>
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
            <div className='proj-repo'>
              <a href='https://gitlab.com/barrettAJ/astro'>
                <GitLab/>
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
        <div className='project-display'></div>
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
