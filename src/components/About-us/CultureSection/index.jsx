import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../../OptionAnimation";
import LinkTo from "../../LinkTo";
import "./culture.scss";

CultureSection.propTypes = {
  title: PropTypes.string,
  srcImg: PropTypes.string,
};

CultureSection.PropsDefault = {
  title: "",
  srcImg: "",
};

function CultureSection(props) {
  const [ref, inView] = useInView({
    threshold: THRESHOLD,
  });
  return (
    <Fragment>
      <div id="next-culture" ref={ref}>
        <div className="next-culture__container">
          <div className="next-culture__img-wrap">
            <div className="next-culture__img-wrapper">
              <img src={props.data.srcImg} alt="" />
            </div>
          </div>

          <div className="next-culture__text-wrap">
            <h3 className="next-culture__text">
              <div className={inView ? "to_animate" : ""}>
                {props.data.title}
              </div>
            </h3>
            <LinkTo linkTo="/contact-us" animate={inView ? true : false}>
              More Details
            </LinkTo>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CultureSection;
