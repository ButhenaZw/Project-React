import React, { useState, useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './pro.css';

export default function PersonalProfile() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    profile: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Forange-default-pfp--770748923740491823%2F&psig=AOvVaw0Mkkp9Vdo-NnxOO1kw_Kin&ust=1739006830494000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCUvLWfsYsDFQAAAAAdAAAAABAE',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
      setProfile(savedProfile);
    } else {
      console.log("Profile not found. Using default.");
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedProfile = { ...profile, profile: reader.result }; 
        setProfile(updatedProfile);  
        localStorage.setItem("userProfile", JSON.stringify(updatedProfile)); 

        window.dispatchEvent(new Event("storage"));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));  
    toast.success("Profile updated successfully!", { autoClose: 1500 });

    setTimeout(() => {
      if (profile.role === 'teacher') {
        navigate("/dash");
      } else {
        navigate("/home");
      }
    }, 2000);
  };

  const handleCancel = () => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  };

  return (
    <section className="vh-100" style={{ width: '1000px', position: "relative", bottom: "40px" }}>
      <ToastContainer />
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage 
                    src={profile.profile} 
                    alt="Avatar" 
                    className="my-5" 
                    style={{ width: '80px', cursor: 'pointer', borderRadius: '50%' }} 
                    fluid 
                  />
                  <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id="fileInput" />
                  <label htmlFor="fileInput" style={{ cursor: 'pointer', color: 'white', textDecoration: 'underline' }}>
                    Change Image
                  </label>
                  <MDBTypography tag="h5">{profile.firstName} {profile.lastName}</MDBTypography>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>

                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Profile Information</MDBTypography>
                    <hr className="mt-0 mb-4" />

                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">First Name</MDBTypography>
                        <MDBInput name="firstName" value={profile.firstName} onChange={handleChange} />
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Last Name</MDBTypography>
                        <MDBInput name="lastName" value={profile.lastName} onChange={handleChange} />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBInput name="email" value={profile.email} onChange={handleChange} />
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBInput name="phone" value={profile.phone} onChange={handleChange} />
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <button style={{ border: 'none', backgroundColor: "#ff7900", color: "white", padding: "6px 12px", borderRadius: "5px" }} onClick={handleSave}>Save</button>
                      <Link to='/dash'>
                        <button style={{ border: 'none', backgroundColor: "#ff7900", color: "white", padding: "6px 12px", borderRadius: "5px" }} onClick={handleCancel} className="ms-2">Cancel</button>
                      </Link>
                    </div>

                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
