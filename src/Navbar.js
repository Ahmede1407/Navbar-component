import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { social, links } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container show-container">
          <ul className="links">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">home2</a>
            </li>
            <li>
              <a href="#">home3</a>
            </li>
            <li>
              <a href="#">home4</a>
            </li>
          </ul>
        </div>
        <ul className="social-icons">
          <li>
            <a href="http://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="http://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="http://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
