import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar({
  title = "Set your Navbar title",
  mode,
  toggleMode,
}) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-body-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <a
            className={`navbar-brand ${
              mode === "dark" ? "text-white" : "text-dark"
            }`}
            href="#"
          >
            {title}
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  mode === "dark" ? "text-white" : "text-dark"
                }`}
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                className={`nav-link ${
                  mode === "dark" ? "text-white" : "text-dark"
                }`}
                href="#"
              >
                About
              </a>
            </li> */}
          </ul>

          {/* Dark Mode Toggle */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onClick={toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label ${
                mode === "dark" ? "text-white" : "text-dark"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {mode === "dark" ? "Light" : "Dark"} Mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string.isRequired, // Ensure mode is passed as a required prop
  toggleMode: PropTypes.func.isRequired, // Ensure toggleMode is passed as a required prop
};
