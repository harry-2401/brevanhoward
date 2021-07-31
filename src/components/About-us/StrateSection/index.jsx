import React, { Fragment } from "react";
import PropTypes from "prop-types";
import BoxTitle from "../../BoxTitle";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../../OptionAnimation";
import "./Strate.scss";
import LinkTo from "../../LinkTo";

StrateSection.propTypes = {
  data: PropTypes.object,
};

StrateSection.PropsDefault = {
  data: {},
};

function StrateSection(props) {
  const [ref, inView] = useInView({ threshold: THRESHOLD });
  return (
    <Fragment>
      <section id="strate">
        <div className="strate__container" ref={ref}>
          <BoxTitle
            number="03"
            title={props.data.title}
            refValue={ref}
            inViewValue={inView}
          />

          <div className="strate__main-content-wrap">
            <div className="strate__main-title-wrap">
              <span
                className={
                  inView
                    ? "strate__main-title to_animate"
                    : "strate__main-title"
                }
              >
                {props.data.mainTitle}
              </span>
            </div>

            <div className="strate__main-text-wrap">
              <div className="strate__main-first-text-wrap">
                <div className="strate__text-wrap">
                  <p
                    className={
                      inView ? "strate__text to_animate" : "strate__text"
                    }
                  >
                    {props.data.mainText[0]}
                  </p>
                </div>

                <div className="strate__text-wrap">
                  <p
                    className={
                      inView ? "strate__text to_animate" : "strate__text"
                    }
                  >
                    {props.data.mainText[1]}
                  </p>
                </div>
              </div>

              <div className="strate__main-second-text-wrap">
                <div className="strate__text-wrap">
                  <p
                    className={
                      inView ? "strate__text to_animate" : "strate__text"
                    }
                  >
                    {props.data.mainText[2]}{" "}
                    <a
                      className="strate__text-contact"
                      href="mailto:manhduong240101@gmail.com"
                    >
                      contact us
                    </a>
                  </p>
                </div>

                <LinkTo linkTo="/login" animate={inView ? true : false}>
                  Login for Details
                </LinkTo>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default StrateSection;
