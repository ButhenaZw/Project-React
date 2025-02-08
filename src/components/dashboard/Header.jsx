import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { BsSearch, BsJustify } from "react-icons/bs";

function Header({ OpenSidebar }) {
  const [profileImage, setProfileImage] = useState("https://i.imgur.com/A25nYQ0.jpeg");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateProfileImage = () => {
      const storedProfile = JSON.parse(localStorage.getItem("studentProfile"));
      if (storedProfile && storedProfile.profile) {
        setProfileImage(storedProfile.profile);
      }
    };

    updateProfileImage();

    const interval = setInterval(updateProfileImage, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header-dash">
      <div className="menu-icons">
        <BsJustify className="icon-dashboard" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon-dashboard" />
      </div>
      <div className="header-right">
        <div className="profile-dropdown-container">
          <Link to="/profileT">
            <img
              src={profileImage}
              alt="Profile"
              className="profile-imagess"
            />
          </Link>

          <div className="dropdown">
            <button className="dropbtn" onClick={() => setOpen(!open)}>
              <ArrowDropDownIcon />
            </button>
            {open && (
              <div className="dropdown-content">
                <Link to="/profileT" className="link-dropdown">My Profile</Link>
                <Link to="/login" className="link-dropdown">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
