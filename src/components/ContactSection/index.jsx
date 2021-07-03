import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../OptionAnimation";
import LinkTo from "../LinkTo";
import "./Contact.scss";
import BoxTitle from "../BoxTitle";

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
          <BoxTitle
            number={"04"}
            title={props.title}
            refValue={ref}
            inViewValue={inView}
          />

          <div className="contact__main">
            <div className="contact__main-title-wrap">
              <div className="contact__title">
                <span className={inView ? "to_animate" : ""}>
                  {props.mainTitle[0]}
                </span>
              </div>
              <div className="contact__title">
                <span className={inView ? "to_animate" : ""}>
                  {props.mainTitle[1]}
                </span>
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
