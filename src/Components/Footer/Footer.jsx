import React from "react";
import { FootersLinksData } from "../../Data/Data";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";
import logo from "../../Assets/new-logo.png";
import "../Copyrights/Copyrights.jsx";
import Copyrights from "../Copyrights/Copyrights.jsx";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        {/* footer part */}
        <div className="logo">
          <img src={logo} alt="" />
          <p>Magic every time</p>
        </div>
        <div>
          <h4>About us</h4>
          <ul className="about-params param-links">
            {FootersLinksData.Aboutus.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4>Discover</h4>
          <ul className="about-params param-links">
            {FootersLinksData.Discover.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4>My Account</h4>
          <ul className="about-params param-links">
            {FootersLinksData.Myaccount.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4>Help</h4>
          <ul className="about-params param-links">
            {FootersLinksData.Help.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Copyrights />
    </footer>
  );
};

export default Footer;
