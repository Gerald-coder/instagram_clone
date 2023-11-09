import React, { useState } from "react";
import gerry from "./assets/gerry.jpg";
import profileIcon from "./assets/profileIcon.svg";

function Bio() {
  const [form, setForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(profileIcon);

  // const [name, setName] = useState("");
  // const [about, setAbout] = useState("");
  const [person, setPerson] = useState({
    name: "Gerald",
    about: "software Engineer @Google",
  });

  const setProfileForm = (e) => {
    e.preventDefault();
    setForm(true);
  };
  const setCloseForm = (e) => {
    e.preventDefault();
    setForm(false);
  };

  // USING THE VALUE PROPERTY ON THE INPUT FIELD
  // const setProfile = (e) => {
  //   e.preventDefault();
  //   const newPerson = { name, about };
  //   setPerson(newPerson);
  //   setForm(false);
  //   setName("");
  //   setAbout("");
  // };

  //WITHOUT USING THE VALUE PROPERTY
  const setProfile = (e) => {
    e.preventDefault();
    if (e.target.userName.value || e.target.aboutUser.value) {
      setPerson({
        name: e.target.userName.value,
        about: e.target.aboutUser.value,
      });
    }
    setForm(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    console.log(e.target.files);
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
        // Save the image in local storage (or any other client-side storage method you prefer)
        localStorage.setItem("profileImage", event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Retrieve the profile photo from local storage
  const profileImage = localStorage.getItem("profileImage");

  const EditForm = (
    <form className="edit-bio-form" onSubmit={(e) => setProfile(e)}>
      <input
        type="text"
        id=""
        placeholder="name"
        name="userName"
        // value={name}
        // onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        id=""
        placeholder="about you"
        name="aboutUser"
        // value={about}
        // onChange={(e) => setAbout(e.target.value)}
      />{" "}
      <br />
      <button className="cancel-button" onClick={setCloseForm}>
        cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );
  return (
    <section className="bio">
      <input
        type="file"
        accept="image/*"
        id="profilePhotoInput"
        onChange={handleImageChange}
      />
      <label htmlFor="profilePhotoInput">
        <div
          className="profile-photo"
          role="button"
          title="change profile photo"
        >
          {profileImage ? (
            <img src={profileImage} alt="profile" />
          ) : (
            <img src={selectedImage} alt="profile" />
          )}
        </div>
      </label>
      <div className="profile-info">
        <p className="name">{person.name}</p>
        <p className="about">{person.about}</p>
        {!form && <button onClick={setProfileForm}>Edit profile</button>}
        {form && EditForm}
      </div>
    </section>
  );
}

export default Bio;
