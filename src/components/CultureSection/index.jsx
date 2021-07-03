import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { THRESHOLD } from "../../OptionAnimation";
import LinkTo from "../LinkTo";
import "./Culture.scss";
import { useInView } from "react-intersection-observer";
import BoxTitle from "../BoxTitle";

CultureSection.propTypes = {
  title: PropTypes.string,
  mainTitle: PropTypes.string,
  mainText: PropTypes.array,
  srcImg: PropTypes.string,
};

CultureSection.PropsDefault = {
  title: "",
  mainTitle: "",
  mainText: [],
  srcImg: "",
};

function CultureSection(props) {
  const [ref, inView] = useInView({
    threshold: THRESHOLD,
  });

  return (
    <Fragment>
      <section id="culture" ref={ref}>
        <div className="culture__container">
          <BoxTitle
            number={"03"}
            title={props.title}
            refValue={ref}
            inViewValue={inView}
          />

          <div className="culture__main">
            <div className="culture__main-title">
              <span className={inView ? "to_animate" : ""}>
                {props.mainTitle}
              </span>
            </div>

            <div className="culture__main-content-wrap">
              <div className="culture__main-first-content">
                <div className="culture__main-text">
                  <p className={inView ? "to_animate" : ""}>
                    {props.mainText[0]}
                  </p>
                </div>

                <div className="culture__main-text">
                  <p className={inView ? "to_animate" : ""}>
                    {props.mainText[2]}
                  </p>
                </div>
              </div>

              <div className="culture__main-second-content">
                <div className="culture__main-text">
                  <p className={inView ? "to_animate" : ""}>
                    {props.mainText[1]}
                  </p>
                </div>

                <div className="culture__main-linkTo">
                  <LinkTo
                    linkTo="/culture"
                    text="text"
                    animate={inView ? true : false}
                  >
                    More Details
                  </LinkTo>
                </div>
              </div>

              <div className="culture__main-third-content">
                <div className="culture__main-img-wrap">
                  <div
                    className={inView ? "overlay to_animate" : "overlay"}
                  ></div>
                  <img
                    className={inView ? "to_animate" : ""}
                    src={props.srcImg}
                    alt="culture"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default CultureSection;
