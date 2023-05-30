import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem('authToken');
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          iNotebook
        </NavLink>
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
              <NavLink
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            {localStorage.getItem("authToken") == null && (
              <Link to="/login" className="btn btn-primary mx-1" role="button">
                Login
              </Link>
            )}
            {localStorage.getItem("authToken") == null && (
              <Link to="/signup" className="btn btn-primary mx-1" role="button">
                Signup
              </Link>
            )}
            {localStorage.getItem("authToken") != null && (
              <button className="btn btn-danger mx-1" onClick={onLogout}>Logout</button>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
