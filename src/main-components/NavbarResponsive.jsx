import { HashLink as Link } from "react-router-hash-link";
import { X } from "react-bootstrap-icons";
import React, { useState, useContext } from "react";
import "./css-files/NavbarResponsive.css";
import { NavContext } from "./../App";

export const NavbarResponsive = () => {
  const { showResNav, setShowResNav } = useContext(NavContext);

  return (
    <div
      className={
        showResNav
          ? "navbar-container respon"
          : "navbar-container respon hideResNav"
      }
    >
      <X onClick={() => setShowResNav(false)} className="iconX" size={"4rem"} />
      <ul className="navbar-list">
        <Link
          to="#about"
          onClick={() => setShowResNav(false)}
          className="navbar-list-item"
        >
          <span className="gradient__text ">01.</span> About
        </Link>
        <Link
          to="#projects"
          onClick={() => setShowResNav(false)}
          className="navbar-list-item"
        >
          <span className="gradient__text ">02.</span> Projects
        </Link>
        <Link
          className="navbar-list-item"
          onClick={() => setShowResNav(false)}
          to="#contact"
        >
          <span className="gradient__text ">03.</span> Contact
        </Link>
        <a
          className="navbar-list-item-resume"
          onClick={() => setShowResNav(false)}
          href="#"
        >
          <button className="resume">Resume</button>
        </a>
      </ul>
    </div>
  );
};
