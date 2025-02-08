import React from "react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import useDarkMode from "use-dark-mode"; 
import "./Contact.css";
import Navbar from "../nav/nav";
import { useTranslation } from "react-i18next";

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
  const darkMode = useDarkMode(false);

  return (
    <div className={`bodya ${darkMode.value ? 'dark-mode' : ''}`}>
      <Navbar />
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
            <Link to="/signup">
              <Button className="cta-button">{t("getStarted")}</Button>
            </Link>
          </div>
        </section>


      </div>
    </div>
  );
};

export default Homepage;
