import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTranslation } from "react-i18next";
import { FaSun, FaMoon } from 'react-icons/fa';
import useDarkMode from 'use-dark-mode';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [profileImage, setProfileImage] = useState("https://bootdey.com/img/Content/avatar/avatar1.png");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const darkMode = useDarkMode(false); // Initialize dark mode state
  
  // Effect to add/remove dark mode class
  useEffect(() => {
    if (darkMode.value) {
      document.body.classList.add('dark-mode'); // Apply dark mode class
    } else {
      document.body.classList.remove('dark-mode'); // Remove dark mode class
    }
  }, [darkMode.value]);

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("studentProfile"));
    if (storedProfile && storedProfile.profileImage) {
      setProfileImage(storedProfile.profileImage);
    }
  }, []);

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div>
        <nav
          className={darkMode.value ? "navbar-dark" : "navbar-light"} // Conditionally apply classes
          style={{
            height: "80px",
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 50px",
            direction: selectedLanguage === "ar" ? "rtl" : "ltr",
          }}
        >
          <div>
            <img
              style={{ width: "100px" }}
              src="https://i.imgur.com/EC9WLYR.png"
              alt="Logo"
            />
          </div>

          <div
            style={{
              fontSize: "18px",
              color: darkMode.value ? "white" : "black", 
              display: "flex",
              gap: "30px",
              textAlign: selectedLanguage === "ar" ? "right" : "left",
            }}
          >
            <Link to="/home" style={{ textDecoration: "none" }}>
              <a
                style={{ color: darkMode.value ? "white" : "black", textDecoration: "none" }}
                onMouseEnter={(e) => (e.target.style.color = "orange")}
                onMouseLeave={(e) => (e.target.style.color = darkMode.value ? "white" : "black")}
              >
                {t("home")}
              </a>
            </Link>
            <Link to="/aboutus" style={{ textDecoration: "none" }}>
              <a
                style={{ color: darkMode.value ? "white" : "black", textDecoration: "none" }}
                onMouseEnter={(e) => (e.target.style.color = "orange")}
                onMouseLeave={(e) => (e.target.style.color = darkMode.value ? "white" : "black")}
              >
                {t("about")}
              </a>
            </Link>
            <Link to="/contactus" style={{ textDecoration: "none" }}>
              <a
                style={{ color: darkMode.value ? "white" : "black", textDecoration: "none" }}
                onMouseEnter={(e) => (e.target.style.color = "orange")}
                onMouseLeave={(e) => (e.target.style.color = darkMode.value ? "white" : "black")}
              >
                {t("ContactUs")}
              </a>
            </Link>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src={profileImage}
              alt="Profile"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer",
                border: "2px solid #ff7900",
              }}
              onClick={() => navigate("/profile")}
            />

            <div className="dropdown">
              <button className="dropbtn" onClick={() => setOpen(!open)}>
                <ArrowDropDownIcon />
              </button>
              {open && (
                <div className="dropdown-content">
                  <Link to="/profile" className="link-dropdown">My Profile</Link>
                  <Link to="/login" className="link-dropdown">Logout</Link>
                </div>
              )}
            </div>

            <select
              value={selectedLanguage}
              onChange={(e) => changeLanguage(e.target.value)}
              style={{
                fontSize: "16px",
                color: "white",
                backgroundColor: "#ff7900",
                border: "none",
                height: "26px",
                position: "relative",
                top: "2px",
                padding: "1px 2px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <option value="en" style={{ color: "black" }}>
                En
              </option>
              <option value="ar" style={{ color: "black" }}>
                AR
              </option>
            </select>

            <button
              onClick={darkMode.toggle}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '20px',
                color: darkMode.value ? 'yellow' : 'black',
              }}
            >
              {darkMode.value ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Hero;
