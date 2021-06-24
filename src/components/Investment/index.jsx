import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./Investment.scss";
import LinkTo from "../LinkTo";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../OptionAnimation";
Investment.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};

Investment.PropsDefault = {
  title: "",
  content: ["", ""],
};

function Investment(props) {
  const [ref, inView] = useInView({
    threshold: THRESHOLD,
  });

  return (
    <Fragment>
      <div id="investment" ref={ref}>
        <div className="investment__container">
          <div className="investment__text-wrap">
            <div className="investment__text-title">
              <span className={inView ? "to_animate" : ""}>{props.title}</span>
            </div>

            <div
              className={
                inView
                  ? "investment__text-content to_animate"
                  : "investment__text-content"
              }
            >
              <span>{props.content[0]}</span>

              <span>{props.content[1]}</span>
            </div>

            <LinkTo linkTo="/about-us" text="text">
              More Details
            </LinkTo>
          </div>

          <div className="investment__img-wrap">
            <div className="investment__img-wrapper">
              <span
                className={inView ? "overlay to_animate" : "overlay"}
              ></span>
              <img
                className={
                  inView ? "investment__img to_animate" : "investment__img"
                }
                src={props.srcImg}
                alt="investment"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Investment;
