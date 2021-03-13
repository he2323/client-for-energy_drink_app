import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import "./nav.css";
import Cart from "../Cart"
interface NavItem {
  destination: string;
  representative: string;
}
const Nav = () => {
  const navItems: NavItem[] = [
    { destination: "/checkout", representative: "Checkout" },
    { destination: "/account", representative: "Account" },
    { destination: "/logout", representative: "Logout" },
  ];
  return (
    <nav>
      <div className="holeNav">
        <Link to="/">
          <div className="navItem">
            <div className="textNav nonePadding">
              <img src={logo} alt="logo" className="logoImg" />
              <div className="logoText">Furnitures</div>
            </div>
          </div>
        </Link>
        {navItems.map((item: NavItem, index: number) => (
          <Link to={item.destination} key={index}>
            <div className="navItem">
              <div className="textNav">{item.representative}</div>
            </div>
          </Link>
        ))}
      </div>
     <Cart />
    </nav>
  );
};

export default Nav;
