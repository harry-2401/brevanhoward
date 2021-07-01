import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../../OptionAnimation";
import "./DetailedRemark.scss";

DetailedRemark.propTypes = {
  data: PropTypes.object,
};

DetailedRemark.PropsDefault = {
  data: {},
};

function DetailedRemark(props) {
  const [ref, inView] = useInView({
    threshold: THRESHOLD,
  });

  return (
    <Fragment>
      <div id="detailed-remark" ref={ref}>
        <div className="detailed-remark__background">
          <img src={props.data.srcImg} alt="background" />
        </div>

        <div className="detailed-remark__container">
          <div className="detailed-remark__title-wrap">
            <span
              className={
                inView
                  ? "detailed-remark__title to_animate"
                  : "detailed-remark__title"
              }
            >
              {props.data.title}
            </span>
          </div>

          <div className="detailed-remark__main-container">
            {props.data.mainData.map((data) => (
              <div className="detailed-remark__main-content-wrap" key={data.id}>
                <div
                  className={
                    inView
                      ? "detailed-remark__main-content to_animate"
                      : "detailed-remark__main-content"
                  }
                >
                  <div className="detailed-remark__main-icon-wrap">
                    {data.icon}
                  </div>

                  <div className="detailed-remark__main-title-wrap">
                    <p className="detailed-remark__main-title">{data.title}</p>
                  </div>

                  <div className="detailed-remark__main-text-wrap">
                    <p className="detailed-remark__main-text">{data.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default DetailedRemark;
