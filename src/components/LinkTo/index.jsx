import React from "react";
import { Link } from "react-router-dom";
import { RiArrowDropRightFill } from "react-icons/ri";
import "./LinkTo.scss";

function LinkTo(props) {
  return (
    <div className="linkTo-wrap">
      <Link
        className={props.animate === true ? "linkTo to_animate" : "linkTo"}
        style={
          props.text === "text"
            ? { color: "rgb(33, 41, 62)" }
            : { color: "#fff" }
        }
        to={props.linkTo}
      >
        {props.children}
        <RiArrowDropRightFill className="linkTo-icon" />
      </Link>
    </div>
  );
}

export default LinkTo;
