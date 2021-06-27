import React, { Fragment } from "react";
import { GrLinkedin } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import "./Footer.scss";

function FooterSection() {
  return (
    <Fragment>
      <section id="footer">
        <div className="footer__container">
          <div className="footer__nav-container">
            <div className="footer__nav-logo-wrap">
              <Link className="footer__logo" to="/">
                Brevan Howard
              </Link>
            </div>

            <div className="footer__nav-wrap">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <NavLink
                    activeClassName="active"
                    to="/about-us"
                    className="footer__nav-link"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="footer__nav-item">
                  <NavLink
                    activeClassName="active"
                    to="/culture"
                    className="footer__nav-link"
                  >
                    Culture
                  </NavLink>
                </li>

                <li className="footer__nav-item">
                  <NavLink
                    activeClassName="active"
                    to="/careers"
                    className="footer__nav-link"
                  >
                    Careers
                  </NavLink>
                </li>

                <li className="footer__nav-item">
                  <NavLink
                    activeClassName="active"
                    to="/contact"
                    className="footer__nav-link"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="footer__social-wrap">
              <div className="footer__social-wrapper">
                <GrLinkedin className="footer__social-icon" />

                <a
                  className="footer__social-link"
                  rel="noreferrer"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  Linked
                </a>
              </div>
            </div>

            <div className="footer__policy-wrap">
              <div className="footer__first-policy">
                <div className="footer__privacy">
                  <Link className="footer__policy-link" to="/">
                    Privacy Policy
                  </Link>
                </div>

                <div className="footer__terms">
                  <Link className="footer__policy-link" to="/">
                    Terms of User
                  </Link>
                </div>
              </div>

              <div className="footer__second-policy">
                <div className="footer__request">
                  <Link to="/" className="footer__policy-link">
                    Request Access
                  </Link>
                </div>

                <div className="footer__notices">
                  <Link to="/" className="footer__policy-link">
                    Notices
                  </Link>
                </div>
              </div>
            </div>

            <div className="footer__copyright-wrap">
              <p>© 2021 Brevan Howard. All rights reserved.</p>
            </div>
          </div>

          <div className="footer__contact-container">
            <div className="footer__contact-logo-wrap">
              <Link className="footer__contact-logo" to="/contact">
                Contact
              </Link>
            </div>

            <div className="footer__contact-investor">
              <div className="footer__contact-investor-title">
                Investor Relations / Fund Enquiries:
              </div>

              <div className="footer__contact-investor-link-wrap">
                <a
                  href="mailto:manhduong240101@gmail.com"
                  className="footer__contact-investor-link"
                >
                  manhduong240101@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default FooterSection;
