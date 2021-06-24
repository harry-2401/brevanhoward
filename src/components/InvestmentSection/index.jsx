import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./Investment.scss";
import LinkTo from "../LinkTo";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../OptionAnimation";
InvestmentSection.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};

InvestmentSection.PropsDefault = {
  title: "",
  content: ["", ""],
};

function InvestmentSection(props) {
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

            <LinkTo animate={inView ? true : false} linkTo="/about-us" text="text">
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

export default InvestmentSection;
