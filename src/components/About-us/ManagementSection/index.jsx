import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../../OptionAnimation";
import "./Management.scss";

ManagementSection.propTypes = {
  data: PropTypes.object,
};

ManagementSection.PropsDefault = {
  data: {},
};

function ManagementSection(props) {
  const [refText, inViewText] = useInView({
    threshold: THRESHOLD,
  });

  const [refImg, inViewImg] = useInView({
    threshold: THRESHOLD,
  });

  return (
    <Fragment>
      <section id="management">
        <div className="management__container">
          <div className="management__content-wrap" ref={refText}>
            <div className="management__title-number-wrap">
              <span
                className={
                  inViewText
                    ? "management__title-number to_animate"
                    : "management__title-number"
                }
              >
                {props.data.titleNumber}
              </span>
            </div>

            <div className="management__title-wrap">
              <span
                className={
                  inViewText
                    ? "management__title to_animate"
                    : "management__title"
                }
              >
                {props.data.title[0]}
              </span>

              <span
                className={
                  inViewText
                    ? "management__title to_animate"
                    : "management__title"
                }
              >
                {props.data.title[1]}
              </span>
            </div>

            <div className="management__main-content-wrap">
              {props.data.mainData.map((value) => (
                <div className="management__main-content" key={value.id}>
                  <div className="management__main-content-title-wrap">
                    <span className={inViewText ? "to_animate" : ""}>
                      {value.title}
                    </span>
                  </div>

                  <div className="management__main-content-text-wrap">
                    <p className={inViewText ? "to_animate" : ""}>
                      {value.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="management__img-wrap" ref={refImg}>
            <div className="management__first-img-wrap">
              <div className="management__first-img-wrapper">
                <div
                  className={inViewImg ? "overlay to_animate" : "overlay"}
                ></div>
                <img
                  src={props.data.srcImg[0]}
                  alt="firstManagement"
                  className={
                    inViewImg
                      ? "management__first-img to_animate"
                      : "management__first-img"
                  }
                />
              </div>
            </div>

            <div className="management__second-img-wrap">
              <div className="management__second-img-wrapper">
                <div
                  className={inViewImg ? "overlay to_animate" : "overlay"}
                ></div>
                <img
                  src={props.data.srcImg[1]}
                  alt="secondManagement"
                  className={
                    inViewImg
                      ? "management__second-img to_animate"
                      : "management__second-img"
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

export default ManagementSection;
