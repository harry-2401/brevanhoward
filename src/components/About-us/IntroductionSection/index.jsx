import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../../OptionAnimation";

import "./Introduction.scss";

IntroductionSection.propTypes = {
  title: PropTypes.string,
  mainTitle: PropTypes.string,
  mainText: PropTypes.array,
  srcImg: PropTypes.string,
};

IntroductionSection.PropsDefault = {
  title: "",
  mainTitle: "",
  mainText: [""],
  srcImg: "",
};

function IntroductionSection(props) {
  const [refText, inViewText] = useInView({
    threshold: THRESHOLD,
  });

  const [refImg, inViewImg] = useInView({
    threshold: THRESHOLD,
  });

  return (
    <Fragment>
      <div id="introduction">
        <div className="introduction__container">
          <div className="introduction__text-wrap" ref={refText}>
            <div className="introduction__title-box-wrap">
              <div
                className={
                  inViewText
                    ? "introduction__title to_animate"
                    : "introduction__title"
                }
              >
                <div className="introduction__title-box">
                  <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                    <path
                      d="M13.5629 13.5629L45 0.541196L76.4371 13.5629L89.4588 45L76.4371 76.4371L45 89.4588L13.5629 76.4371L0.541196 45L13.5629 13.5629Z"
                      stroke="#ECE9E5"
                    ></path>
                  </svg>
                  <div className="introduction__title-box-number">01</div>
                </div>

                <div className="introduction__title-text">
                  <p>{props.title}</p>
                </div>
              </div>
            </div>

            <div className="introduction__text-title">
              <span className={inViewText ? "to_animate" : ""}>
                {props.mainTitle}
              </span>
            </div>

            <div className="introduction__text-content-wrap">
              <div
                className={
                  inViewText
                    ? "introduction__text-content to_animate"
                    : "introduction__text-content"
                }
              >
                <span>{props.mainText[0]}</span>

                <span>{props.mainText[1]}</span>

                <span>{props.mainText[2]}</span>
              </div>
            </div>
          </div>

          <div className="introduction__img-wrap" ref={refImg}>
            <div className="introduction__img-wrapper">
              <span
                className={inViewImg ? "overlay to_animate" : "overlay"}
              ></span>
              <img
                className={
                  inViewImg
                    ? "introduction__img to_animate"
                    : "introduction__img"
                }
                src={props.srcImg}
                alt="introduction"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default IntroductionSection;
