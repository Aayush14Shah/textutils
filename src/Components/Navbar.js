import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg  navbar-${
          props.mode !== "light" ? "dark" : "light"
        } bg-${props.mode !== "light" ? "dark" : "light"} `}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="d-inline-flex ">
              <div>
                {/* red */}
                <button
                  className="bg-danger border border-4 border-danger rounded-circle px-2 py-1 m-1"
                  style={{ width: "30px", height: "30px" }}
                  onClick={props.toggleOtherMode}
                ></button>
              </div>
              <div>
                {/* green */}
                <button
                  className="bg-success border border-4 border-success rounded-circle px-2 py-1 m-1"
                  style={{ width: "30px", height: "30px" }}
                  onClick={props.toggleOtherMode2}
                ></button>
              </div>
              {/* <div
                className="bg-warning border border-4 border-warning rounded-circle px-2 py-1 m-1"
                style={{ width: "30px", height: "30px" }}
              ></div> */}
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Darkmode
              </label>
            </div>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
Navbar.propTypes = { title: PropTypes.string };

Navbar.defaultProps = { title: "Textutils" };
