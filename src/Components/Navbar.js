import React from "react";
import PropTypes from "prop-types";

export default function Navbar({ title = "Set you Navbar title" }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/">
            {title}
          </a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item ">
              <a
                class="nav-link active text-light"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/">
                About
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string };
