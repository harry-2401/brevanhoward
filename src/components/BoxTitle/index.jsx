import React from "react";
import PropTypes from "prop-types";
import "./BoxTitle.scss";

BoxTitle.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
};

BoxTitle.PropsDefault = {
  number: "01",
  title: "",
};

function BoxTitle(props) {
  return (
    <div className="title-box-wrap" ref={props.refValue}>
      <div className={props.inViewValue ? "title to_animate" : "title"}>
        <div className="title-box">
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
            <path
              d="M13.5629 13.5629L45 0.541196L76.4371 13.5629L89.4588 45L76.4371 76.4371L45 89.4588L13.5629 76.4371L0.541196 45L13.5629 13.5629Z"
              stroke="#ECE9E5"
            ></path>
          </svg>
          <div className="title-box-number">{props.number}</div>
        </div>

        <div className="title-text">
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
}

export default BoxTitle;
