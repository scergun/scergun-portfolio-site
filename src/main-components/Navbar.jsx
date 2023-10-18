import { useEffect, useState, useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { List } from "react-bootstrap-icons";
import { NavContext } from "./../App";
import "./css-files/Navbar.css";

export const Navbar = () => {
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  });

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prevState) => {
        return {
          y: window.scrollY,
          lastY: prevState.y,
        };
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollData.y > 500) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }

    if (scrollData.lastY < scrollData.y) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [scrollData]);

  const { showResNav, setShowResNav } = useContext(NavContext);

  return (
    <>
      <div
        className={
          showNav
            ? "navbar-row gradient__bg no-res hideNav"
            : "navbar-row gradient__bg no-res"
        }
      >
        <div className="navbar-container">
          <Link smooth to="#home" className="navbar-logo gradient__text">
            scergun
          </Link>
          <ul className="navbar-list">
            <Link to="#about" className="navbar-list-item">
              <span className="gradient__text ">01.</span> About
            </Link>
            <Link to="#projects" className="navbar-list-item">
              <span className="gradient__text ">02.</span> Projects
            </Link>
            <Link className="navbar-list-item" to="#contact">
              <span className="gradient__text ">03.</span> Contact
            </Link>
            <a className="navbar-list-item-resume" href="#">
              <button className="resume">Resume</button>
            </a>
          </ul>
        </div>
      </div>

      <div
        className={
          showNav
            ? "navbar-row gradient__bg responsive-nav hideNav"
            : "navbar-row gradient__bg responsive-nav"
        }
      >
        <div className={"navbar-container-res"}>
          <Link
            onClick={() => setShowResNav(false)}
            smooth
            to="#home"
            className="navbar-logo gradient__text"
          >
            scergun
          </Link>

          <List
            onClick={() => setShowResNav(true)}
            className="icon"
            size={"30px"}
          />
        </div>
      </div>
    </>
  );
};
