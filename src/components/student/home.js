import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import "./home.css";
import Nav from './navbar';
import Services from '../ProjectReacta/services/services';
import Activity from '../ProjectReacta/ac/Activty';
import { useTranslation } from "react-i18next";
import Footer from '../contactus/Home/footer/footer';
import Our from './ourstudent';

export const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded-lg text-white font-bold ${className}`} {...props}>
    {children}
  </button>
);

export const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow-md p-4 ${className}`}>{children}</div>
);

export const CardContent = ({ children }) => <div>{children}</div>;

const Homepage = () => {
  const { t, i18n } = useTranslation();
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#1a1a1a" : "white",
        color: isDarkMode ? "white" : "black", 
      }}
    >
      <Nav />
      <div className="homepage">
        <div style={{ backgroundColor: "#ff7900", height: "2px", width: "100%" }}></div>

        <section className="hero-section">
          <div>
            <img
              style={{ width: "450px", position: "relative", bottom: "0px" }}
              src="https://i.imgur.com/XtkVPDw.png"
              alt="Hero"
            />
          </div>
          <div>
            <h1 className="hero-title">{t("heroTitle")}</h1>
            <h4 className="hero-text">{t("heroText")}</h4>
          </div>
        </section>
      </div>
      <Activity />
      <Services />
      <div style={{ position: "relative", top: "600px" }}>
        <Footer />
      </div>
      <Our />


    </div>
  );
};

export default Homepage;
