import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './hero.css';
import NavBar from "../../ProjectReacta/nav/nav"

function Hero() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <>

<NavBar/>
      <div
        className="container-heros"
        style={{
          width: '100%',
          height: '480px',
          textAlign: selectedLanguage === 'ar' ? 'right' : 'left', 
          direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr', 
        }}
      >
        <h1 className="h222">{t('aboutUsHeader')}</h1>
        <div
          className="container-heros2"
          style={{
            width: '100%',
            height: '480px',
          }}
        ></div>
      </div>
    </>
  );
}

export default Hero;
