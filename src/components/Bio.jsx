import React from "react";
import gerry from "./assets/gerry.jpg";
import profileIcon from "./assets/profileIcon.svg";

function Bio() {
  const EditForm = (
    <form className="edit-bio-form" action="">
      <input type="text" id="" placeholder="name" />
      <input type="text" id="" placeholder="about you" /> <br />
      <button className="cancel-button">cancel</button>
      <button>Edit</button>
    </form>
  );
  return (
    <section className="bio">
      <div className="profile-photo" role="button" title="change profile photo">
        <img src={profileIcon} alt="profile" />
      </div>
      <div className="profile-info">
        <p className="name">Gerald</p>
        <p className="about">software developer @ gerry.io</p>
        <button>Edit profile</button>
        {EditForm}
      </div>
    </section>
  );
}

export default Bio;
