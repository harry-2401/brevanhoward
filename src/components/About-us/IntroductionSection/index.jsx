import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../../OptionAnimation";

import "./Introduction.scss";
import BoxTitle from "../../BoxTitle";

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
            <BoxTitle
              number={"01"}
              title={props.title}
              refValue={refText}
              inViewValue={inViewText}
            />

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
