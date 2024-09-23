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
      {/* Change navbar-expand-lg to navbar-expand-md */}
      <nav className={`navbar navbar-expand-md bg-body-${mode} bg-${mode}`}>
        <div className="container-fluid">
          {/* Navbar Brand */}
          <Link
            className={`navbar-brand ${
              mode === "dark" ? "text-white" : "text-dark"
            }`}
            to="/"
          >
            {title}
          </Link>

          {/* Toggle Button for Collapsing Navbar */}
          <button
            className={`navbar-toggler ${
              mode === "dark" ? "bg-white text-white" : "bg-gray text-dark"
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    mode === "dark" ? "text-white" : "text-dark"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    mode === "dark" ? "text-white" : "text-dark"
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
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
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
