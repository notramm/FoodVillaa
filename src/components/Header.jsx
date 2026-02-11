import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://img.freepik.com/free-psd/restaurant-logo-design_23-2151249852.jpg?semt=ais_wordcount_boost&w=740&q=80" alt="Food Villa Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
          <Link to='/'>Home</Link>
          </li>
          <li><Link to='/about'>About Us</Link></li>
          <Link to='/contact'>Contact</Link>
          <Link to='/cart'>Cart</Link>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
