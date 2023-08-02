import ReactIcon from '../images/skill_icons/react.svg';
import FastAPIIcon from '../images/skill_icons/fastapi.svg';
import JavaScriptIcon from '../images/skill_icons/javascript.svg';
import PythonIcon from '../images/skill_icons/python.svg';
import AWSIcon from '../images/skill_icons/amazonaws.svg';
import DjangoIcon from '../images/skill_icons/django.svg';
import PostgreSQLIcon from '../images/skill_icons/postgresql.svg';
import HTML5Icon from '../images/skill_icons/html5.svg';
import CSSIcon from '../images/skill_icons/css3.svg';
import MaterialUIIcon from '../images/skill_icons/mui.svg';
import DockerIcon from '../images/skill_icons/docker.svg';
import GitIcon from '../images/skill_icons/git.svg'

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
      <div className='skills-tile'> <img className="skill-icon" src={DockerIcon} alt="AWS Icon"/><div className="skill-name">Docker</div></div>
      <div className='skills-tile'> <img className="skill-icon" src={GitIcon} alt="AWS Icon"/><div className="skill-name">Git</div></div>
      <div className='skills-tile'> <img className="skill-icon" src={HTML5Icon} alt="HTML5 Icon"/><div className="skill-name">HTML5</div></div>
      <div className='skills-tile'> <img className="skill-icon" src={CSSIcon} alt="CSS Icon"/><div className="skill-name">CSS</div></div>
      <div className='skills-tile'> <img className="skill-icon" src={MaterialUIIcon} alt="Material UI Icon"/><div className="skill-name">Material UI</div></div>
    </div>
    )
  } export default Skills
