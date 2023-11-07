import React from "react";
import gerry from "./assets/gerry.jpg";
import pexels2 from "./assets/pexels2.jpeg";
import pexels3 from "./assets/pexels3.jpeg";
import pexels4 from "./assets/pexels4.jpeg";

const photos = [gerry, pexels2, pexels3, pexels4];

function Gallary() {
  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhoto">
        <i className="add-photo-button fas fa-plus-square" />
      </label>
      <section className="gallery">
        {photos.map((photo) => {
          return (
            <div className="item">
              <img src={photo} alt="mine" className="item-image" />
              <button className="delete-button">delete</button>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Gallary;
