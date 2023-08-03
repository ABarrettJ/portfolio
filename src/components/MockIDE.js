import React, {useEffect, useState, useRef} from 'react';
import jsx from '../images/react.svg';

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

export default function CodeBox () {

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const lineHeight = 35;
  const containerHeight = 256;
  const textContentRef = useRef(null);
  const [numLines, setNumLines] = useState(Math.floor(containerHeight / lineHeight));

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

  useEffect(() => {
    if(textContentRef.current) {
      const { height } = textContentRef.current.getBoundingClientRect();
      setNumLines(Math.floor(height / lineHeight));
    }
  }, [lineHeight, displayText]);

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
            <div className="text-content" ref={textContentRef}>
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
