import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
 const [navObj, setNavObj] = useState({
    open: false,
    width: window.innerWidth
 });

  const updateWidth = () => {
    const newNavObj = ({ width: window.innerWidth });

    if (navObj.open && newNavObj.width > 991) {
        navObj.open = false;
    }

    setNavObj(newNavObj);
  };

  const toggleNav = () => {
    setNavObj({ open: !navObj.open });
  };

  useEffect( () => {
    window.addEventListener("resize", updateWidth);
  }, [])

  useEffect( () => {
    window.removeEventListener("resize", updateWidth);
  }, [])

    return (
      <nav className="navbar navbar-expand-lg mb-2">
        <Link className="navbar-brand" to="/">
          Brett Fleming
        </Link>
        <button
          onClick={toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${navObj.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={toggleNav}
                className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={toggleNav}
                className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                to="/about"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={toggleNav}
                className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                to="/Contact"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

export default Nav;