import { Link, useNavigate } from "react-router-dom";
import React, { JSX } from "react";
import authService from "./../services/authService";
import Logo from "./../img/logo.png";

function NavBar(): JSX.Element {
  const navigate = useNavigate();

  // Post the form data to the API for authentication

  const handleLogout = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    console.log("handleLogout");
    event.preventDefault();
    authService.signout();
    navigate("/");
  };

  return (
    <>
      <div className="header header-light dark-text">
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <Link className="nav-brand" to="/">
                <img src={Logo} className="logo" alt="Logo" />
              </Link>
              <div className="nav-toggle"></div>
              <div className="mobile_nav">
                <ul>
                  <li>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#login"
                      className="theme-cl fs-lg"
                    >
                      <i className="lni lni-user"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/add-listing"
                      className="crs_yuo12 w-auto text-white theme-bg"
                    >
                      <span className="embos_45">
                        <i className="fas fa-plus me-2"></i>Add Listing
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="nav-menus-wrapper">
              <ul
                className="nav-menu"
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                {authService.isAuthenticated() && (
                  <li className="nav-item">
                    <Link to="/create" className="nav-link">
                      Create
                    </Link>
                  </li>
                )}
                {!authService.isAuthenticated() && (
                  <>
                    <li className="nav-item">
                      <Link to="/signin" className="ft-bold">
                        <i className="fas fa-sign-in-alt me-1 theme-cl"></i>
                        Sign In
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/register" className="nav-link">
                        Register
                      </Link>
                    </li>
                  </>
                )}

                {authService.isAuthenticated() && (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="dropdown07"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Welcome
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdown07">
                      <Link
                        to={""}
                        className="dropdown-item"
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </div>
                  </li>
                )}
                <ul className="nav-menu nav-menu-social align-to-right"></ul>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
