import React, { useState } from "react";
import gerry from "./assets/gerry.jpg";
import profileIcon from "./assets/profileIcon.svg";

function Bio() {
  const [form, setForm] = useState(false);
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
    setPerson({
      name: e.target.userName.value,
      about: e.target.aboutUser.value,
    });
  };

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
      <div className="profile-photo" role="button" title="change profile photo">
        <img src={profileIcon} alt="profile" />
      </div>
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
