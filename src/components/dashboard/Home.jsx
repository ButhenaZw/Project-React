import React, { useState, useEffect } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './homedash.css';
import SForm from './addstudent/sform'; 

function Home() {
  const [students, setStudents] = useState([]);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);

    const males = storedStudents.filter(student => student.gender === 'Male').length;
    const females = storedStudents.filter(student => student.gender === 'Female').length;
    setMaleCount(males);
    setFemaleCount(females);

    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(storedMessages);
  }, []);

  // Chart Data for Boys and Girls
  const data = [
    { name: 'Students', Boys: maleCount, Girls: femaleCount },
  ];

  return (
    <main className='mainscontainer'>
      <div className='mains-cards'>
        <div className='cardss-dashboard'>
          <div className='cardss-inner'>
            <h3 style={{ fontSize: '17px' }}>Total Teachers</h3>
          </div>
          <h1 style={{ fontSize: '27px' }}>26</h1>
        </div>
        <div className='cardss-dashboard'>
          <div className='cardss-inner'>
            <h3 style={{ fontSize: '17px' }}>Total Students</h3>
          </div>
          <h1 style={{ fontSize: '27px' }}>{students.length}</h1>
        </div>
        <div className='cardss-dashboard'>
          <div className='cardss-inner'>
            <h3 style={{ fontSize: '17px' }}>Boys</h3>
          </div>
          <h1 style={{ fontSize: '27px' }}>{maleCount}</h1>
        </div>
        <div className='cardss-dashboard'>
          <div className='card-inner'>
            <h3 style={{ fontSize: '17px' }}>Girls</h3>
          </div>
          <h1 style={{ fontSize: '27px' }}>{femaleCount}</h1>
        </div>
      </div>

      {/* Bar Chart for Boys (Orange) and Girls (Black) */}
      <div className='charts'>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Boys" fill="#ff7900" /> {/* Orange for Boys */}
            <Bar dataKey="Girls" fill="black" />   {/* Black for Girls */}
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: '30px' }}>
        <table style={{ width: '80%', borderCollapse: 'collapse', position: 'relative', left: "40px", borderRadius: "20px" }}>
          <thead>
            <tr style={{ backgroundColor: '#ff7900', color: "white" }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Full Name</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Age</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Gender</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <div className="d-flex align-items-center">
                    <img
                      src={student.profileImage}
                      alt="Profile"
                      style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
                    />
                    <p className="fw-bold mb-1">{student.firstName} {student.lastName}</p>
                  </div>
                </td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student.age}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3 style={{ color:"#ff7900",width:"100px"}}>Messages</h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div key={index} className="message-card">
                <h4>{msg.firstName} {msg.lastName}</h4>
                <p><strong>Email:</strong> {msg.email}</p>
                <p>{msg.messageText}</p>
              </div>
            ))
          ) : (
            <p>No messages yet.</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;
