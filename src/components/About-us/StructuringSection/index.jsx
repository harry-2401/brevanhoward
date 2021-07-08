import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../../OptionAnimation";
import "./Structuring.scss";

StructuringSection.propTypes = {
  data: PropTypes.object,
};

StructuringSection.PropsDefault = {
  data: {},
};

function StructuringSection(props) {
  const [refText, inViewText] = useInView({
    threshold: THRESHOLD,
  });

  const [refImg, inViewImg] = useInView({
    threshold: THRESHOLD,
  });

  return (
    <Fragment>
      <section id="structuring">
        <div className="structuring__container">
          <div className="structuring__content-wrap" ref={refText}>
            <div className="structuring__title-number-wrap">
              <span
                className={
                  inViewText
                    ? "structuring__title-number to_animate"
                    : "structuring__title-number"
                }
              >
                {props.data.titleNumber}
              </span>
            </div>

            <div className="structuring__title-wrap">
              <span
                className={
                  inViewText
                    ? "structuring__title to_animate"
                    : "structuring__title"
                }
              >
                {props.data.title[0]}
              </span>

              <span
                className={
                  inViewText
                    ? "structuring__title to_animate"
                    : "structuring__title"
                }
              >
                {props.data.title[1]}
              </span>
            </div>

            <div className="structuring__text-container">
              {props.data.text.map((value) => (
                <div className="structuring__text-wrap" key={value.id}>
                  <p
                    className={
                      inViewText
                        ? "structuring__text : to_animate"
                        : "structuring__text"
                    }
                  >
                    {value.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="structuring__img-wrap" ref={refImg}>
            <div className="structuring__first-img-wrap">
              <div className="structuring__first-img-wrapper">
                <div
                  className={inViewImg ? "overlay to_animate" : "overlay"}
                ></div>
                <img
                  src={props.data.srcImg[0]}
                  alt=""
                  className={
                    inViewImg
                      ? "structuring__first-img to_animate"
                      : "structuring__first-img"
                  }
                />
              </div>
            </div>

            <div className="structuring__second-img-wrap">
              <div className="structuring__second-img-wrapper">
                <div
                  className={inViewImg ? "overlay to_animate" : "overlay"}
                ></div>
                <img
                  src={props.data.srcImg[1]}
                  alt=""
                  className={
                    inViewImg
                      ? "structuring__second-img to_animate"
                      : "structuring__second-img"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default StructuringSection;
