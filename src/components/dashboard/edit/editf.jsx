import React, { useState, useEffect } from 'react';

function Editf() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);

  const handleEdit = (index, field, value) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = value;
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <table style={{ width: '80%', borderCollapse: 'collapse', position: 'relative', left: "40px", borderRadius: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: '#ff7900', color: "white" }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Full Name</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Age</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Gender</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Actions</th>
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
                  <input 
                    type="text" 
                    value={`${student.firstName} ${student.lastName}`} 
                    onChange={(e) => {
                      const [firstName, ...lastName] = e.target.value.split(' ');
                      handleEdit(index, 'firstName', firstName);
                      handleEdit(index, 'lastName', lastName.join(' '));
                    }} 
                    style={{ border: 'none', background: 'transparent', fontWeight: 'bold' }}
                  />
                </div>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <input 
                  type="number" 
                  value={student.age} 
                  onChange={(e) => handleEdit(index, 'age', e.target.value)} 
                  style={{ border: 'none', background: 'transparent' }}
                />
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <select 
                  value={student.gender} 
                  onChange={(e) => handleEdit(index, 'gender', e.target.value)}
                  style={{ border: 'none', background: 'transparent' }}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <button 
                  onClick={() => handleDelete(index)} 
                  style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Editf;
