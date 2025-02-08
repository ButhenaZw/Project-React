import React, { useState, useEffect } from "react";
import "./Activity.css";
import { useTranslation } from "react-i18next";

const Activity = () => {
  const { t } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkMode);
  }, []);

  return (
    <div className={`activity-container ${isDarkMode ? "dark" : ""}`}>
      <div
        style={{
          width: "100%",
          backgroundColor: "#ff7900",
          height: "3px",
          position: "relative",
          bottom: "45px",
        }}
      ></div>
      <h1 
        className="activity-title" 
        style={{ color: isDarkMode ? 'white' : 'black' }} 
      >
        {t("schoolActivities")}
      </h1>
      <div className="activity-list">
        <a href="https://www.codewars.com/" target="_blank" className="activity-card">
          <img
            src="https://img.icons8.com/?size=100&id=SiADyIXKWCFz&format=png&color=000000"
            alt={t("codingWorkshop")}
          />
          <h3>{t("codingWorkshop")}</h3>
          <p>{t("codingWorkshopDesc")}</p>
        </a>

        <a href="https://www.hackerrank.com/" target="_blank" className="activity-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png"
            alt={t("programmingContest")}
          />
          <h3>{t("programmingContest")}</h3>
          <p>{t("programmingContestDesc")}</p>
        </a>

        <a href="https://www.scratch.mit.edu/" target="_blank" className="activity-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2343/2343614.png"
            alt={t("programmingGame")}
          />
          <h3>{t("programmingGame")}</h3>
          <p>{t("programmingGameDesc")}</p>
        </a>
      </div>
    </div>
  );
};

export default Activity;
