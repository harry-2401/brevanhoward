import React, { Fragment } from "react";
import PropTypes from "prop-types";
import BoxTitle from "../../BoxTitle";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../../OptionAnimation";
import "./Strate.scss";

StrateSection.propTypes = {
  data: PropTypes.object,
};

StrateSection.PropsDefault = {
  data: {},
};

function StrateSection(props) {
  const [ref, inView] = useInView({ threshold: THRESHOLD });
  return (
    <Fragment>
      <section id="strate">
        <div className="strate__container" ref={ref}>
          <BoxTitle
            number="03"
            title={props.data.title}
            refValue={ref}
            inViewValue={inView}
          />
        </div>
      </section>
    </Fragment>
  );
}

export default StrateSection;
