import { useState } from "react";

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
        <li>Home</li>
        <li>about us</li>
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
