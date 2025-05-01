import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          props.mode !== "light" ? "dark" : "light"
        } bg-${
          props.mode === "red" ? "danger" : props.mode === "green" ? "success" : props.mode === "yellow" ? "warning" : props.mode
        }`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
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
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="d-inline-flex">
              <button
                className="bg-[#e57373] border border-4 border-[#e57373] rounded-circle px-2 py-1 m-1 hover:opacity-80"
                style={{ width: "30px", height: "30px", backgroundColor: "#e57373" }}
                onClick={props.toggleOtherMode}
              ></button>
              <button
                className="bg-[#fff176] border border-4 border-[#fff176] rounded-circle px-2 py-1 m-1 hover:opacity-80"
                style={{ width: "30px", height: "30px", backgroundColor: "#fff176" }}
                onClick={props.toggleOtherMode3}
              ></button>
              <button
                className="bg-[#66bb6a] border border-4 border-[#66bb6a] rounded-circle px-2 py-1 m-1 hover:opacity-80"
                style={{ width: "30px", height: "30px", backgroundColor: "#66bb6a" }}
                onClick={props.toggleOtherMode2}
              ></button>
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
                  props.mode === "light" || props.mode === "yellow" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
Navbar.propTypes = { title: PropTypes.string };
Navbar.defaultProps = { title: "TextUtils" };