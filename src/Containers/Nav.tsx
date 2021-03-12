import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  return (
    <nav>
      <Link to="">
        <div className="navItem leftItem">
          <div className="textNav nonePadding">
            <img src={logo} alt="logo" className="logoImg" />
            <div className="logoText">Furnitures</div>
          </div>
        </div>
      </Link>
      <Link to="/cart">
        <div className="navItem">
          <div className="textNav">Cart</div>
        </div>
      </Link>
      <Link to="/account">
        <div className="navItem">
          <div className="textNav">Account</div>
        </div>
      </Link>
      <Link to="/Logout">
        <div className="navItem rightItem">
          <div className="textNav">Logout</div>
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
