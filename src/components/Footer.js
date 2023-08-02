import React from 'react';
import { LinkedIn, GL2} from './Icons';


export default function Footer() {

    return(
      <>
      <div className='footer-divider'></div>
      <div className='footer-container'>
        <h1 className='footer-bold'>
          Looking for a new addition to your team?
          <div className='footer-thin'>Let's talk!</div>
          <div className='footer-email'>
            Send me an email at:&nbsp;
            <a href='mailto:austinjbarrett98@gmail.com' className='email-link'>
                austinjbarrett98@gmail.com
            </a>
          </div>
        </h1>
        <div id='contact-jump' className='social-container' style={{margin: '0'}}>
          <LinkedIn/>
          <GL2/>
        </div>
      </div>
      </>
    );
  }
