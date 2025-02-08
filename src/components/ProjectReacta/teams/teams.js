import React, { useState, useEffect } from "react";
import "./style.css";

const Teams = () => {
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
    <>
      <title>teams</title>
      <section
        id="team"
        style={{
          backgroundColor: isDarkMode ? "#1a1a1a" : "white", 
          color: isDarkMode ? "white" : "black",
        }}
      >
        <h2 style={{ color: isDarkMode ? "white" : "black" }}>Meet Our Team</h2>
        <div className="team-container">
          {[
            {
              name: "Saba Alhrishat",
              role: "Web Developer",
              bio:
                "AI coach specializing in Software Engineering, working with robots and passionate about training children.",
              img: "https://i.imgur.com/UZTYPK9.jpeg",
            },
            {
              name: "Shireen Ramadan",
              role: "Web Developer",
              bio: "Experienced developer with a passion for creating beautiful websites.",
              img: "https://i.imgur.com/IvLOkp4.jpeg",
            },
            {
              name: "Buthena Abdullah",
              role: "Scrum Master",
              bio: "Experienced scrum master with a passion for agile methodologies.",
              img: "https://i.imgur.com/zoZ09yX.jpeg",
            },
            {
              name: "Tamara",
              role: "Product Owner",
              bio: "Expert in product development and management.",
              img: "https://i.imgur.com/ZXqmRmM.jpeg",
            },
            {
              name: "Hamed",
              role: "Web Developer",
              bio: "Experienced developer with a passion for front-end development.",
              img: "https://i.imgur.com/CthKRkT.jpeg",
            },
            {
              name: "Omar",
              role: "Web Developer",
              bio: "Passionate about full-stack development.",
              img: "https://i.imgur.com/uHSUebS.jpeg",
            },
          ].map((member, index) => (
            <div key={index} className="team-member">
              <img
                src={member.img}
                alt={member.name}
                className="member-photo"
                style={{ border: isDarkMode ? "2px solid white" : "2px solid #ddd" }}
              />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

     
    </>
  );
};

export default Teams;
