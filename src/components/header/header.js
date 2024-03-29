import React from 'react';
import { useTranslation } from 'react-i18next';
import hcss from './header.module.css';
import logo from '../img/logo.png'

const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); 
  };

  return (
    <header className={hcss.header}>
      <img  src={logo} alt="Logo" className={hcss.logo} />
      <div className={hcss.headerBox} >
        <button className={hcss.headerBtn} onClick={() => changeLanguage('en')}>EN</button>
        <button className={hcss.headerBtn} onClick={() => changeLanguage('ua')}>UA</button>
        <button className={hcss.headerBtn} onClick={() => changeLanguage('he')}>HE</button>
      </div>
    </header>
  );
};

export default Header;