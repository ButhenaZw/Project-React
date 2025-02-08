import React, { useState, useEffect } from "react";
import "./services.css";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

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
      id="services"
      style={{
        position: "relative",
        top: "100px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: isDarkMode ? "#1a1a1a" : "white", 
        color: isDarkMode ? "white" : "black",
      }}
    >
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div style={{ position: "relative", bottom: "29px" }}>
          <h1
            className="header-text"
            style={{
              color: isDarkMode ? "white" : "black", 
              width: "100%",
              backgroundColor: isDarkMode ? "#1a1a1a" : "white",
              fontSize: "2rem",
              position: "relative",
              left: "500px",
            }}
          >
            {t("ourServices")}
          </h1>
        </div>
        <div className="headers3"></div>
        <div className="header1"></div>
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0px",
          borderRadius: "8px",
          lineHeight: "1.6",
          display: "flex",
          flexWrap: "wrap",
          gap: "160px",
          position: "relative",
          top: "60px",
          backgroundColor: isDarkMode ? "#1a1a1a" : "white", // Background color
          justifyContent: "space-between",
        }}
      >
        <div className="text-services">
          <h2
            className="header-text"
            style={{ color: "#ff7900" }}
          >
            {t("academicPrograms")}
          </h2>
          <p
            style={{
              textAlign: "left",
              fontWeight: "bolder",
              whiteSpace: "pre-line",
              color: isDarkMode ? "white" : "black", // Text color
            }}
          >
            {t("academicProgramsDesc")}
          </p>

          <h2
            className="headerl-text"
            style={{ color: "#ff7900" }}
          >
            {t("coCurricularActivities")}
          </h2>
          <p
            style={{
              textAlign: "left",
              fontWeight: "bolder",
              whiteSpace: "pre-line",
              color: isDarkMode ? "white" : "black", // Text color
            }}
          >
            {t("coCurricularActivitiesDesc")}
          </p>

          <h2
            className="header-text"
            style={{ color: "#ff7900" }}
          >
            {t("educationalTechnology")}
          </h2>
          <p
            style={{
              textAlign: "left",
              fontWeight: "bolder",
              whiteSpace: "pre-line",
              color: isDarkMode ? "white" : "black", // Text color
            }}
          >
            {t("educationalTechnologyDesc")}
          </p>
        </div>

        <div className="img-services" style={{ position: "relative", top: "90px" }}>
          <img src="https://i.imgur.com/NFaqqbz.png" alt="Description" width={330} />
        </div>
      </div>


    </div>
  );
}
