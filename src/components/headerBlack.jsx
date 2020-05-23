//simple header component that will contain link to home page and any other relevant path

import React from "react";
import { Link } from "react-router-dom";
import "./header.style.css";
const Header = () => {
  return (
    <header className="appHeader black">
      {/* <button> Call to action </button> */}
      <Link to="/">
        {" "}
        {/* The process.env.PUBLIC_URL will help load image from public folder  */}
        <img
          src={process.env.PUBLIC_URL + "/npWhite.png"}
          alt="company logo"
          className="companyLogo"
        />
      </Link>
      <h1> Book Valley</h1>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/">Contact Us </Link>
      </nav>
    </header>
  );
};

export default Header;
