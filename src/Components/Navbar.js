import React from "react";
import PropTypes from "prop-types";

export default function Navbar({ title = "Set you Navbar title" }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {title}
          </a>
          {/* Rest of your code */}
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string };
