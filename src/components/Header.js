import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Log-In");

  return (
    <div className="header">
      <img
        className="logo"
        src={
          "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
        }
      />
      <ul className="nav-items">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/contact">Contacy us</Link></li>
        <li>Saved item</li>
        <button
          className="longin-btn"
          onClick={() => {
            btnName === "Log-In" ? setBtnName("Log-Out") : setBtnName("Log-In");
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
