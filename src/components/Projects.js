import { GL2, Dots } from './Icons';
import tasteful from '../images/tf_home.png'
import astro from '../images/astro_home.png'

export default function Projects(){
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
        <div className='together'>Let's add more together!</div>
        </div>
      </div>
      </>
    )
  }
