import React, { useState } from 'react';
import Nav from "../../ProjectReacta/nav/nav";
import './homec.css';
import Footer from './footer/footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Homec() {
  const [message, setMessage] = useState({
    firstName: '',
    lastName: '',
    email: '',
    messageText: '',
  });

  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessages = [...messages, message];
    setMessages(newMessages);
    localStorage.setItem('messages', JSON.stringify(newMessages));

    toast.success('Message sent successfully!', {
      position: 'bottom-right', 
    });

    setMessage({
      firstName: '',
      lastName: '',
      email: '',
      messageText: '',
    });
  };

  return (
    <div>
      <Nav />
      <div className='image-contact'>
        <h1 className='header-contactuss'>Contact Us</h1>
        <p className='par-contactuss'>
          We’d love to hear from you! Whether you have questions about our coding courses, 
          need help choosing the right program, or want to partner with us, we’re here to assist.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "90px", textAlign: 'center', position: "relative", top: "160px" }}>
      </div>
      <div style={{display:"flex", justifyContent:"center",gap:"90px",textAlign:'center',position:"relative",top:"160px"}}>
        <div className='call-co'>
            <img className='contact-icon' src="https://i.imgur.com/wwGXhYR.png"/>
            <h2 className='h2-contactus'>Visit Us</h2>
            <h5 style={{color:"gray"}}>lorem ipsum lorem ipsum<br/> lorem ipsum lorem ipsum</h5><br/>

           <h5 style={{color:"#f95c2d"}}>G2P6+5Q9, Aqaba</h5>
        </div>
        <div className='call-co'>           
             <img className='contact-icon' src="https://i.imgur.com/Q9DpB2Z.png"/>
            <h2 className='h2-contactus'>Call Us</h2>
            <h5 style={{color:"gray"}}>lorem ipsum lorem ipsum<br/> lorem ipsum lorem ipsum</h5><br/>

            <h5 style={{color:"#f95c2d"}}>+962777801212</h5></div>
        <div className='call-co'>
        <img className='contact-icon' src="https://i.imgur.com/wjRkGep.png"/>
            <h2 className='h2-contactus'>Message Us</h2>
            <h5 style={{color:"gray"}}>lorem ipsum lorem ipsum<br/> lorem ipsum lorem ipsum</h5><br/>

            <h5 style={{color:"#f95c2d"}}>
            codingschoolaqaba.ojo@orange.com</h5>
        </div>
      </div>
      <div className='finall'>
        <div className='map-contactt'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7455.383283951614!2d35.01195174944921!3d29.53474539675825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150071875a9fca41%3A0xf5d61d999f967371!2sOrange%20Digital%20Village%20Aqaba!5e0!3m2!1sen!2sjo!4v1738663284815!5m2!1sen!2sjo" width={600} height={350} style={{border: 0, position:"relative", left:"20px" , borderRadius:"10px"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
         </div>

        <div className='form-contactt'>
          <form onSubmit={handleSubmit} style={{ display: "grid", position: "relative", right: "140px", color: "white", top: "30px" }}>
            <label>First Name</label>
            <input className='input-contact' name="firstName" value={message.firstName} onChange={handleChange} />
            <label>Last Name</label>
            <input className='input-contact' name="lastName" value={message.lastName} onChange={handleChange} />
            <label>Email</label>
            <input className='input-contact' name="email" value={message.email} onChange={handleChange} />
            <label>Message</label>
            <textarea name="messageText" value={message.messageText} onChange={handleChange} />
            <button className='input-button' type="submit">Send</button>
          </form>
        </div>
      </div>

      <div className="messages">
        <h3>Messages</h3>
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

      <div style={{ position: "relative", top: "300px" }}>
        <Footer />
      </div>

      <ToastContainer />
    </div>
  );
}

export default Homec;
