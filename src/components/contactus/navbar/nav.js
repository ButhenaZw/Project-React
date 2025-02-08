import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./nav.css";


import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div>
        <nav
          style={{
            backgroundColor: 'white',
            height: '80px',
            display: 'flex',
            width: '1300px',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 50px',
            direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
          }}
        >
          <div>
            <img
              style={{ width: '100px' }}
              src="https://i.imgur.com/EC9WLYR.png"
              alt="Logo"
            />
          </div>

          <div
            style={{
              fontSize: '18px',
              color: 'black',
              display: 'flex',
              gap: '30px',
              textAlign: selectedLanguage === 'ar' ? 'right' : 'left',
            }}
          >
            <a
              href="aboutus"
              id='#aboutus'
              style={{ color: 'black', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = 'orange')}
              onMouseLeave={(e) => (e.target.style.color = 'black')}
            >
              {t('home')}
            </a>
            <Link to="/aboutus" style={{ textDecoration: 'none' }}>
            <a
              href="#"
              style={{ color: 'black', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = 'orange')}
              onMouseLeave={(e) => (e.target.style.color = 'black')}
            >
              {t('about')}
            </a></Link>
            <Link >
            <a
              href=""
              style={{ color: 'black', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = 'orange')}
              onMouseLeave={(e) => (e.target.style.color = 'black')}
            >
              {t('Service')}
            </a></Link>
            <a
              href="#"
              style={{ color: 'black', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = 'orange')}
              onMouseLeave={(e) => (e.target.style.color = 'black')}
            >
              {t('teams')}
            </a>
          </div>
          <div style={{ display: "flex", marginTop: "10px", gap: "5px" }}>
                  <Link to="/login">
                  <button className="login-btn">{t("login")}</button></Link>

          {selectedLanguage === "en" ? (
            <img
              src="https://vectorflags.s3.amazonaws.com/flags/uk-circle-01.png"
              alt="English"
              style={{ width: "34px",  }}
              onClick={() => changeLanguage("ar")}
            />
          ) : (
            <img
              src="https://vectorflags.s3.amazonaws.com/flags/sa-circle-01.png"
              alt="Arabic"
              style={{ width: "34px", }}
              onClick={() => changeLanguage("en")}
            />
          )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Hero;
