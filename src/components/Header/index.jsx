import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAngleRight, FaBars } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import "./NavBar.scss";
import { useState } from "react";

function Header() {
  const [clickIconMobile, setClickIconMobile] = useState(false);

  const handleIconMobile = () => setClickIconMobile(!clickIconMobile);

  const closeMobileMenu = () => setClickIconMobile(false);

  return (
    <Fragment>
      <section className="header">
        <div className="header__container">
          <Link className="header__logo" to="/" onClick={closeMobileMenu}>
            Brevan Howard
          </Link>

          {clickIconMobile ? 
          <VscChromeClose 
            className="header__icon-mobile-close" 
            onClick={handleIconMobile}
          /> 
          : 
          <FaBars 
            className="header__icon-mobile" 
            onClick={handleIconMobile}
          />
          }
          
          <div className={clickIconMobile ? "header__inner active" : "header__inner"}>
            <div className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item" onClick={closeMobileMenu}>
                  <NavLink activeClassName="active" to="/about-us" className="header__nav-link">
                    About Us
                  </NavLink>
                </li>
                <li className="header__nav-item" onClick={closeMobileMenu}>
                  <NavLink activeClassName="active" to="/culture" className="header__nav-link">
                    Culture
                  </NavLink>
                </li>

                <li className="header__nav-item" onClick={closeMobileMenu}>
                  <NavLink activeClassName="active" to="/careers" className="header__nav-link">
                    Careers
                  </NavLink>
                </li>

                <li className="header__nav-item" onClick={closeMobileMenu}>
                  <NavLink activeClassName="active" to="/contact" className="header__nav-link">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="header__login" onClick={closeMobileMenu}>
              <NavLink activeClassName="active" className="header__login-link" to="/login">
                Login
              </NavLink>
              <FaAngleRight className="header__login-icon" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Header;
