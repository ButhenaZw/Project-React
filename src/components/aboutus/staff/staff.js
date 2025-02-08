import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUser, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import './staff.css';

import '../../../i18n';

const teamMembers = [
  {
    name: 'Buthina',
    role: 'Principal',
    email: 'buthina.bu@school.com',
    phone: '+123456789',
    linkedin: 'https://linkedin.com/in/buthina',
    location: 'JORDAN, AQABA',
    image: 'https://i.imgur.com/zoZ09yX.jpeg',
  },
  {
    name: 'Hamed',
    role: 'Vice Principal',
    email: 'hamed.hamed@school.com',
    phone: '+987654321',
    linkedin: 'https://linkedin.com/in/hamed',
    location: 'JORDAN, AQABA',
    image: 'https://i.imgur.com/svz743F.jpeg',
  },
  {
    name: 'Omar',
    role: 'Head of Academics',
    email: 'omar.omar@school.com',
    phone: '+1122334455',
    linkedin: 'https://linkedin.com/in/omar',
    location: 'JORDAN, AQABA',
    image: 'https://i.imgur.com/uHSUebS.jpeg',
  },
  {
    name: 'Tamara',
    role: 'Head of Administration',
    email: 'tamara.tamara@school.com',
    phone: '+9988776655',
    linkedin: 'https://linkedin.com/in/tamara',
    location: 'JORDAN, AQABA',
    image: 'https://i.imgur.com/ZXqmRmM.jpeg',
  },
  {
    name: 'Shireen',
    role: 'Head of Sports',
    email: 'shireen@school.com',
    phone: '+5544332211',
    linkedin: 'https://linkedin.com/in/shireen',
    location: 'JORDAN, AQABA',
    image: 'https://i.imgur.com/IvLOkp4.jpeg',
  },
  {
    name: 'Saba',
    role: 'Head of Arts',
    email: 'Saba@school.com',
    phone: '+6677889900',
    linkedin: 'https://linkedin.com/in/Saba',
    location: 'JORDAN, AQABA',
    image: 'https://i.imgur.com/UZTYPK9.jpeg',
  },
];

function TeamMembers() {
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(selectedImage === index ? null : index);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ position: 'relative', top: "150px" }}>
      <div style={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
        <div style={{ position: 'relative', bottom: '15px' }}>
          <h1
            className='header-text'
            style={{
              color: '#f8991f',
              width: '150px',
              fontSize: '2rem',
              position: "relative",
              left: "540px",
              width:"280px"
            }}
          >
            {t('staffTeam')}
          </h1>
          
        </div>

   
       
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', borderRadius: '10px' , position:"relative",top:"60px"}}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '10%',
              width: '200px',
              flex: '1 1 calc(33.333% - 20px)',
              boxSizing: 'border-box',
              textAlign: 'center',
            }}
          >
            <img className='img-staff'
              src={member.image}
              alt={member.name}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                marginBottom: '10px',
                cursor: 'pointer',
                transform: selectedImage === index ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
              onClick={() => handleImageClick(index)}
            />
            <h3 style={{ fontSize: '1rem', margin: '5px 0' }}>
              <FaUser /> {member.name}
            </h3>
            <p style={{ fontSize: '0.9rem', margin: '5px 0' }}>
              <strong>{t('role')}:</strong> {member.role}
            </p>
            <p style={{ fontSize: '0.9rem', margin: '5px 0' }}>
              <FaEnvelope /> {member.email}
            </p>
            <p style={{ fontSize: '0.9rem', margin: '5px 0' }}>
              <FaPhone /> {member.phone}
            </p>
            <p style={{ fontSize: '0.9rem', margin: '5px 0' }}>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> {t('linkedin')}
              </a>
            </p>
            <p style={{ fontSize: '0.9rem', margin: '5px 0' }}>
              <MdLocationOn /> {member.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;
