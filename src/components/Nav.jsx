import React from "react";
import instagramLogo from "../../public/assets/instagram.png";

function Nav() {
  return (
    <nav>
      <button className="logo">
        <img src={instagramLogo} alt="logo" />
      </button>
      <input type="text" className="search" placeholder="search" />
      <span className="nav-links">
        <button>hey</button>
        <button>you</button>
        <button>gerry</button>
        <button>man</button>
      </span>
    </nav>
  );
}

export default Nav;
