import React, { useState, useEffect } from "react";
import "./ourst.css";

function OurStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(storedStudents);
  }, []);

  return (
    <div className="our-student-container">
      <h2>Our Students</h2>
      <div className="scroll-wrapper">
        <div className="scroll-content">
          {[...students, ...students].map((student, index) => (
            <div key={index} className="student-profile">
              <img
                src={student.profileImage}
                alt={student.firstName}
                className="profile-image"
              />
              <p>{student.firstName} {student.lastName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurStudent;
