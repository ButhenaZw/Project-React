import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function SForm({ setStudents }) {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    age: '',
    profileImage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudent({ ...student, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.firstName && student.lastName && student.email && student.age && student.gender && student.profileImage) {
      const students = JSON.parse(localStorage.getItem('students')) || [];

      if (students.length >= 100) {
        toast.error("Student limit reached! Please remove some students.", { autoClose: 1500 });
        return;
      }

      students.push(student);
      localStorage.setItem('students', JSON.stringify(students));

      if (typeof setStudents === 'function') {
        setStudents(students);
      } else {
        console.error("setStudents is not a function");
      }

      toast.success("Student successfully added!", { autoClose: 1500 });
      setTimeout(() => {
        navigate("/dash");
      }, 2000);

      setStudent({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        age: '',
        profileImage: '',
      });
    } else {
      toast.error("Please fill in all fields!", { autoClose: 1500 });
    }
  };

  const formStyle = {
    width: '550px',
    margin: 'auto',
    position: 'relative',
    top: '20px',
    left:"200px",
    height: 'auto',
    fontSize: '15px',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', 
    gap: '20px', 
  };

  const inputStyle = {
    width: '200px',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  };

  const buttonStyle = {
    backgroundColor: '#ff7900',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    gridColumn: 'span 2',
    marginTop: '20px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
  };

  return (
    <div style={formStyle}>
      <ToastContainer />
      <h3 style={{ textAlign: 'center', color: '#ff7900', gridColumn: 'span 2' }}>Add Student</h3>
      <form onSubmit={handleSubmit}>
        <div  style={{ display: 'flex',gap:"90px"}}>
        <div>
          <div style={{ marginBottom: '15px' }}>
            <label style={labelStyle}>First Name</label>
            <input
              type="text"
              name="firstName"
              value={student.firstName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={labelStyle}>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={student.lastName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
        </div>

        <div>
          <div style={{ marginBottom: '15px' }}>
            <label style={labelStyle}>Gender</label>
            <select
              name="gender"
              value={student.gender}
              onChange={handleChange}
              required
              style={inputStyle}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={labelStyle}>Age</label>
            <input
              type="number"
              name="age"
              value={student.age}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={labelStyle}>Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
              style={{ width: '100%' }}
            />
          </div>
        </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button type="submit" style={buttonStyle}>
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
}

export default SForm;
