import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../student/profile.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProfileS() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    profileImage: "https://bootdey.com/img/Content/avatar/avatar1.png",
  });

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("studentProfile"));
    if (storedProfile) {
      setProfile(storedProfile);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phoneNumber" && !/^\d*$/.test(value)) {
      return;
    }else {
          toast.warning("Only numbers are allowed!", { autoClose: 2000 });
        }
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prevProfile) => {
        const updatedProfile = { ...prevProfile, profileImage: imageUrl };
        localStorage.setItem("studentProfile", JSON.stringify(updatedProfile));
        return updatedProfile;
      });
    }
  };

  const handleSave = () => {
    localStorage.setItem("studentProfile", JSON.stringify(profile));
    toast.success("Profile updated successfully!", { autoClose: 1500 });
    setTimeout(() => {
      navigate("/dash");
    }, 2000);
  };

  return (
    <div className="container light-style flex-grow-1 container-p-y">
      <h4 className="font-weight-bold py-3 mb-4">Account Settings</h4>
      <div className="cd-card overflow-hidden">
        <div className="row no-gutters cd-row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush cd-account-settings-links">
              <a className="list-group-item list-group-item-action active" href="#account-general">
                General
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="account-general">
                <div className="cd-card-body media align-items-center">
                  <img src={profile.profileImage} alt="Profile" className="d-block cd-ui-w-80" />
                  <div className="media-body ml-4">
                    <label className="cd-btn cd-btn-outline-primary">
                      Upload new photo
                      <input type="file" className="cd-account-settings-fileinput" onChange={handleImageUpload} />
                    </label>
                  </div>
                </div>
                <hr className="border-light m-0" />
                <div className="cd-card-body">
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control mb-1" name="email" value={profile.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" name="firstName" value={profile.firstName} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" name="lastName" value={profile.lastName} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="text" className="form-control" name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right mt-3">
              <button type="button" className="btn-save-ps" onClick={handleSave}>
                Save changes
              </button>
              &nbsp;
              <button type="button" className="btn-cancel-ps">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
}

export default ProfileS;
