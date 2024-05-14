import { LinkedIn, GL2} from './Icons';


export default function Nav(){

    const scrollToSocialContainer = () => {
      const element = document.getElementById('contact-jump');
      element.scrollIntoView({ behavior: "smooth" });
    };
    return (
      <>
      <div className='nav'>
      <div className='name-container'>
        <div className='first-name'>Austin <div className='last-name'> Barrett</div></div>
        <div className='title'>Full Stack Developer</div>
      </div>
      <div className='social-container'>
        <div className='resume'><a className='link-hover' href='https://drive.google.com/file/d/1krDAeMbtWOKAa_1byrHQjH_YSXhF-uaO/preview'>Resume</a></div>
        <div className='contact'><a onClick={scrollToSocialContainer} className='link-hover'>Contact</a></div>
        {/* 2232 */}
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
