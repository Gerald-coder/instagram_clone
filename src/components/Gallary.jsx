import React from "react";
import pexels2 from "./assets/pexels2.jpeg";

function Gallary() {
  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhoto">
        <i className="add-photo-button fas fa-plus-square" />
      </label>
      <section className="gallary">
        <div className="item">
          <img src={pexels2} alt="mine" className="item-image" />
        </div>
      </section>
    </>
  );
}

export default Gallary;
