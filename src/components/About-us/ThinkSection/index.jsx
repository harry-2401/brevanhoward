import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./Think.scss";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../../OptionAnimation";

ThinkSection.propTypes = {
  data: PropTypes.object,
};

ThinkSection.PropsDefault = {
  data: {},
};

function ThinkSection(props) {
  const [refText, inViewText] = useInView({
    threshold: THRESHOLD,
  });

  const [refImg, inViewImg] = useInView({
    threshold: THRESHOLD,
  });
  return (
    <Fragment>
      <section id="think">
        <div className="think__container">
          <div className="think__content-wrap" ref={refText}>
            <div className="think__title-number-wrap">
              <span
                className={
                  inViewText
                    ? "think__title-number to_animate"
                    : "think__title-number"
                }
              >
                {props.data.titleNumber}
              </span>
            </div>

            <div className="think__title-wrap">
              <span
                className={
                  inViewText ? "think__title to_animate" : "think__title"
                }
              >
                {props.data.title[0]}
              </span>

              <span
                className={
                  inViewText ? "think__title to_animate" : "think__title"
                }
              >
                {props.data.title[1]}
              </span>
            </div>

            <div className="think__main-content-wrap">
              {props.data.mainData.map((value) => (
                <div className="think__main-content" key={value.id}>
                  <div className="think__main-content-title-wrap">
                    <span className={inViewText ? "to_animate" : ""}>
                      {value.title}
                    </span>
                  </div>
                  
                  <div className="think__main-content-text-wrap">
                    <p className={inViewText ? "to_animate" : ""}>
                      {value.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="think__img-wrap" ref={refImg}>
            <div className="think__img-wrapper">
              <div
                className={inViewImg ? "overlay to_animate" : "overlay"}
              ></div>
              <img
                src={props.data.srcImg}
                alt="think-img"
                className={inViewImg ? "think__img to_animate" : "think__img"}
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default ThinkSection;
