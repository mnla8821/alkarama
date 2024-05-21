import React from "react";
import "./Header.css";
import logo from "../../Assets/Header/photo_2023-11-19_04-21-59-removebg-preview 1.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/Contact"
                  className="nav-link"
                  aria-current="page"
                  href="contact.html"
                >
                  تواصل معنا
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" className="nav-link " aria-current="page">
                  حول النادي
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/History" className="nav-link" aria-current="page">
                  المتحف
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Matches" className="nav-link" href="matches.html">
                  المباريات
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/News" className="nav-link ">
                  الاخبار
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link "
                  href="landing.html"
                  tabindex="-1"
                >
                  الرئيسية
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
