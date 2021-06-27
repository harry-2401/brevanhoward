import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../OptionAnimation";
import LinkTo from "../LinkTo";
import "./Contact.scss";

ContactSection.propTypes = {
  title: PropTypes.string,
  mainTitle: PropTypes.array,
  srcImg: PropTypes.string,
};

ContactSection.PropsDefault = {
  title: "",
  mainTitle: [""],
  srcImg: "",
};

function ContactSection(props) {
  const [ref, inView] = useInView({
    threshold: THRESHOLD,
  });

  return (
    <Fragment>
      <section id="contact" ref={ref}>
        <div className="contact__background">
          <img src={props.srcImg} alt="background" />
        </div>

        <div className="contact__container">
          <div className="contact__title-box-wrap">
            <div
              className={
                inView ? "contact__title to_animate" : "contact__title"
              }
            >
              <div className="contact__title-box">
                <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                  <path
                    d="M13.5629 13.5629L45 0.541196L76.4371 13.5629L89.4588 45L76.4371 76.4371L45 89.4588L13.5629 76.4371L0.541196 45L13.5629 13.5629Z"
                    stroke="#ECE9E5"
                  ></path>
                </svg>

                <div className="contact__title-box-number">04</div>
              </div>
              <div className="contact__title-text">{props.title}</div>
            </div>
          </div>

          <div className="contact__main">
            <div className="contact__main-title-wrap">
              <div className="contact__title">
                <span className={inView ? "to_animate" : ""}>{props.mainTitle[0]}</span>
              </div>
              <div className="contact__title">
                <span className={inView ? "to_animate" : ""}>{props.mainTitle[1]}</span>
              </div>
              <LinkTo linkTo="/contact-us" animate={inView ? true : false}>
                Contact Us
              </LinkTo>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default ContactSection;
