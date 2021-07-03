import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../../OptionAnimation";
import BoxTitle from "../../BoxTitle";
import "./Approach.scss";

ApproachSection.propTypes = {
  data: PropTypes.object,
};

ApproachSection.PropsDefault = {
  data: {},
};

function ApproachSection(props) {
  const [refText, inViewText] = useInView({
    threshold: THRESHOLD,
  });

  const [refDesc, inViewDesc] = useInView({
    threshold: THRESHOLD,
  });

  return (
    <Fragment>
      <section id="approach">
        <div className="approach__container">
          <div className="approach__content-wrap" ref={refText}>
            <BoxTitle
              number="02"
              title={props.data.title}
              refValue={refText}
              inViewValue={inViewText}
            />

            <div className="approach__main-wrap">
              <div className="approach__main-title-wrap">
                {props.data.mainTitle.map((data, index) => (
                  <span
                    className={inViewText ? "to_animate" : ""}
                    key={`approadMainTitle${index}`}
                  >
                    {data}
                  </span>
                ))}
              </div>

              <div className="approach__main-content-wrap">
                {props.data.mainText.map((data, index) => (
                  <div
                    key={`approadMainText${index}`}
                    className="approach__main-content"
                  >
                    <p className={inViewText ? "to_animate" : ""}>{data}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="approach__desc-wrap" ref={refDesc}>
            <div className="approach__desc-img-wrap">
              <div className="approach__desc-img-wrapper">
                <div
                  className={inViewDesc ? "overlay to_animate" : "overlay"}
                ></div>
                <img
                  className={
                    inViewDesc
                      ? "approach__desc-img to_animate"
                      : "approach__desc-img"
                  }
                  src={props.data.desc.srcImg}
                  alt=""
                />
              </div>
            </div>

            <div className="approach__desc-content-wrap">
              {props.data.desc.data.map((value, index) => (
                <div
                  className="approach__desc-content"
                  key={`approach__desc${index}`}
                >
                  <div className="approach__desc-content-number">
                    <span className={inViewDesc ? "to_animate" : ""}>
                      {value.number}
                    </span>
                  </div>

                  <div
                    className={
                      inViewDesc
                        ? "approach__desc-content-text-wrap to_animate"
                        : "approach__desc-content-text-wrap"
                    }
                  >
                    <div className="approach__desc-content-title">
                      <span>{value.title}</span>
                    </div>

                    <div className="approach__desc-content-text">
                      <p>{value.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default ApproachSection;
