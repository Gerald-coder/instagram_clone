import React from "react";
import instagramLogo from "./assets/instagram.png";

function Nav() {
  return (
    <nav>
      <button className="logo">
        <img src={instagramLogo} alt="logo" />
      </button>
      <input type="text" className="search" placeholder="search" />
      <span className="nav-links">
        <button>
          <i className="fa-solid fa-house"></i>
        </button>
        <button>
          <i className="fa-regular fa-comment"></i>
        </button>
        <button>
          <i className="fas fa-compass" />
        </button>
        <button>
          <i className="fas fa-heart" />
        </button>
      </span>
    </nav>
  );
}

export default Nav;
