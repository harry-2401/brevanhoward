import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./Quote.scss";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../../OptionAnimation";

QuoteSection.propTypes = {
  firstImg: PropTypes.string,
  firstContent: PropTypes.array,
  secondImg: PropTypes.string,
  secondContent: PropTypes.array,
};

QuoteSection.PropsDefault = {
  firstImg: "",
  firstContent: [""],
  secondImg: "",
  secondContent: [""],
};

function QuoteSection(props) {
  const [firstRef, firstInView] = useInView({
    threshold: THRESHOLD,
  });

  const [secondRef, secondInView] = useInView({
    threshold: THRESHOLD,
  });

  return (
    <Fragment>
      <div id="quote">
        <div className="quote__container">
          <div className="quote__first-content-wrap" ref={firstRef}>
            <div className="quote__first-img-wrap">
              <div className="quote__first-img-wrapper">
                <div
                  className={firstInView ? "overlay to_animate" : "overlay"}
                ></div>
                <img
                  className={
                    firstInView
                      ? "quote__first-img to_animate"
                      : "quote__first-img"
                  }
                  src={props.firstImg}
                  alt=""
                />
              </div>
            </div>

            <div className="quote__first-content-text-wrap">
              <div
                className={
                  firstInView
                    ? "quote__first-content-text-wrapper to_animate"
                    : "quote__first-content-text-wrapper"
                }
              >
                <div className="quote__first-main-content-wrap">
                  <svg width="39" height="34" viewBox="0 0 39 34" fill="none">
                    <path
                      d="M0 34V18.9109L9.4873 0H15.1143L6.93555 18.9109H15.1143V34H0ZM23.8164 34V18.9109L33.3691 0H38.9961L30.8174 18.9109H38.9961V34H23.8164Z"
                      fill="#BDB4A8"
                    ></path>
                  </svg>
                </div>

                <p className="quote__first-content-text">
                  {props.firstContent[0]}
                </p>

                <div className="quote__first-content-desc-wrap">
                  <p>{props.firstContent[1]}</p>

                  <p>{props.firstContent[2]}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="quote__second-content-wrap" ref={secondRef}>
            <div className="quote__second-img-wrap">
              <div className="quote__second-img-wrapper">
                <div
                  className={secondInView ? "overlay to_animate" : "overlay"}
                ></div>
                <img className={secondInView ? "to_animate" : ""} src={props.secondImg} alt="" />
              </div>
            </div>

            <div className="quote__second-content-text-wrap">
              <p className={secondInView ? "to_animate" : ""}>{props.secondContent[0]}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default QuoteSection;
