import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useDarkMode from "use-dark-mode";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import "./navbar.css";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const darkMode = useDarkMode(false);

  useEffect(() => {
    if (darkMode.value) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode.value]);

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <nav className={`navbar ${darkMode.value ? "dark" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="https://i.imgur.com/EC9WLYR.png" alt="Logo" />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>

        {/* Navbar Links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            {t("home")}
          </Link>
          <Link to="/aboutus" onClick={() => setMenuOpen(false)}>
            {t("about")}
          </Link>
          <Link to="/contactus" onClick={() => setMenuOpen(false)}>
            {t("ContactUs")}
          </Link>
        </div>

        {/* Right Section (Login, Language, Dark Mode) */}
        <div className="nav-actions">
          <Link to="/login">
            <button className="login-btn">{t("login")}</button>
          </Link>

          <select
            value={selectedLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">En</option>
            <option value="ar">AR</option>
          </select>

          <button onClick={darkMode.toggle} className="dark-mode-btn">
            {darkMode.value ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Hero;
