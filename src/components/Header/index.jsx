import React, { Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaAngleRight, FaBars } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import "./Header.scss";

function Header() {
  const [clickIconMobile, setClickIconMobile] = useState(false);

  const handleIconMobile = () => setClickIconMobile(!clickIconMobile);

  const closeMobileMenu = () => setClickIconMobile(false);

  return (
    <Fragment>
      <header id="header">
        <div className="header__container">
          <div className="header__logo-wrap">
            <Link to="/" className="header__logo" onClick={closeMobileMenu}>
              Breavan howard
            </Link>
          </div>

          <nav className="header__navbar-wrap">
            {clickIconMobile ? (
              <div
                className="header__icon-mobile-close-wrap"
                onClick={handleIconMobile}
              >
                <VscChromeClose />
              </div>
            ) : (
              <div
                className="header__icon-mobile-wrap"
                onClick={handleIconMobile}
              >
                <FaBars />
              </div>
            )}

            <div
              className={
                clickIconMobile
                  ? "header__navbar-wrapper active"
                  : "header__navbar-wrapper"
              }
            >
              <ul className="header__navbar-list">
                <li className="header__navbar-item">
                  <NavLink
                    to="/about-us"
                    className="header__navbar-link"
                    onClick={closeMobileMenu}
                  >
                    About-us
                  </NavLink>
                </li>

                <li className="header__navbar-item">
                  <NavLink
                    to="/culture"
                    className="header__navbar-link"
                    onClick={closeMobileMenu}
                  >
                    Culture
                  </NavLink>
                </li>

                <li className="header__navbar-item">
                  <NavLink
                    to="/careers"
                    className="header__navbar-link"
                    onClick={closeMobileMenu}
                  >
                    Careers
                  </NavLink>
                </li>

                <li className="header__navbar-item">
                  <NavLink
                    to="/Contact"
                    className="header__navbar-link"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>

              <div className="header__login-wrap">
                <NavLink
                  to="/login"
                  className="header__login"
                  onClick={closeMobileMenu}
                >
                  Login
                </NavLink>

                <FaAngleRight className="header__login-icon" />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
