import React, { useEffect, useState } from "react";
import getphotoUrl from "get-photo-url";
import gerry from "./assets/gerry.jpg";
import pexels2 from "./assets/pexels2.jpeg";
import pexels3 from "./assets/pexels3.jpeg";
import pexels4 from "./assets/pexels4.jpeg";
import { db } from "./dexieDb";
import { useLiveQuery } from "dexie-react-hooks";

const photos = [
  { url: gerry, id: 1 },
  { url: pexels2, id: 2 },
  { url: pexels3, id: 3 },
  { url: pexels4, id: 4 },
];

function Gallary() {
  const userImages = useLiveQuery(() => db.gallary.toArray(), []);

  const handleImageUpload = async () => {
    db.gallary.add({
      url: await getphotoUrl("#addPhotoInput"),
    });
  };

  useEffect(() => {
    [...photos, userImages];
  }, []);

  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput">
        <i
          className="add-photo-button fas fa-plus-square"
          onClick={handleImageUpload}
        />
      </label>
      <section className="gallery">
        {userImages?.map((photo) => {
          return (
            <div className="item" key={photo.id}>
              <img src={photo.url} alt="mine" className="item-image" />
              <button
                className="delete-button"
                // onClick={(ind) => handleDeletPhoto(ind)}
              >
                delete
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Gallary;
