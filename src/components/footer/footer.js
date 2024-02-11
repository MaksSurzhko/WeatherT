import React from 'react';
import foocss from './footer.module.css';
import logo from '../img/logo.png';
import github from '../img/github.png';
import telegram from '../img/telegram.png';
import linkedin from '../img/linkedin.png';

const Footer = () => {

  return (
      <footer className={foocss.footer}>
          <div className={foocss.fooBox}>
              <a className={foocss.link} href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">
                <img  src={logo} alt="Logo" className={foocss.logo} />
        </a>
        
      </div>
      <div className={foocss.fooBoxx}>
        <a className={foocss.linkk} href="https://t.me/MaksSurzhko" target="_blank" rel="noopener noreferrer">
          <img  src={telegram} alt="telegram" className={foocss.telegram} />
          Telegram
        </a>
        <a className={foocss.linkk} href="https://github.com/MaksSurzhko" target="_blank" rel="noopener noreferrer">
          <img  src={github} alt="github" className={foocss.telegram} />
          GitHub
        </a>
        <a className={foocss.linkk} href="https://www.linkedin.com/in/maksym-surzhko-451388272/" target="_blank" rel="noopener noreferrer">
          <img  src={linkedin} alt="linkedin" className={foocss.telegram} />
          Linkedin
        </a>
         </div>
      <p></p>
    </footer>
  );
};

export default Footer;