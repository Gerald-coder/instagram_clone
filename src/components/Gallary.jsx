import React, { useEffect, useState } from "react";
import gerry from "./assets/gerry.jpg";
import pexels2 from "./assets/pexels2.jpeg";
import pexels3 from "./assets/pexels3.jpeg";
import pexels4 from "./assets/pexels4.jpeg";
import tochi from "./assets/tochi.jpg";

const photos = [gerry, pexels2, pexels3, pexels4];

function Gallary() {
  const [selectedImage, setSelectedImage] = useState(null);

  const [userImages, setUserImages] = useState(() => {
    // Initialize userImages with the stored images from localStorage or an empty array
    const storedImages = localStorage.getItem("userImages");
    return storedImages ? JSON.parse(storedImages) : [];
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      setUserImages((prevImages) => [...prevImages, selectedImage]);
      setSelectedImage(null);
    }
  };

  useEffect(() => {
    // Update localStorage when userImages changes
    localStorage.setItem("userImages", JSON.stringify(userImages));
  }, [userImages]);

  useEffect(() => {
    // Cleanup created URLs when the component unmounts
    return () => {
      userImages.forEach((image) => URL.revokeObjectURL(image));
    };
  }, [userImages]);

  useEffect(() => {
    // This useEffect ensures that the image is displayed after the state update
    if (selectedImage) {
      setUserImages((prevImages) => [...prevImages, selectedImage]);
    }
  }, [selectedImage]);

  return (
    <>
      <input
        type="file"
        name="photo"
        id="addPhotoInput"
        onChange={handleImageChange}
      />
      <label htmlFor="addPhotoInput">
        <i
          className="add-photo-button fas fa-plus-square"
          onClick={handleImageUpload}
        />
      </label>
      <section className="gallery">
        {userImages.map((photo, ind) => {
          return (
            <div className="item" key={ind}>
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
