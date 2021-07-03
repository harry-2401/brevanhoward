import React, { Fragment } from "react";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../OptionAnimation";
import PropTypes from "prop-types";
import LinkTo from "../LinkTo";
import "./Careers.scss";
import BoxTitle from "../BoxTitle";

CareersSection.propsTypes = {
  title: PropTypes.string,
  mainTitle: PropTypes.string,
  mainTex: PropTypes.string,
  srcImg: PropTypes.array,
};

CareersSection.PropsDefault = {
  title: "",
  mainTitle: "",
  mainText: "",
  srcImg: [],
};

function CareersSection(props) {
  const [ref, inView] = useInView({
    threshold: THRESHOLD,
  });

  return (
    <Fragment>
      <section id="careers" ref={ref}>
        <div className="careers__container">
          <BoxTitle
            number={"03"}
            title={props.title}
            refValue={ref}
            inViewValue={inView}
          />

          <div className="careers__main">
            <div className="careers__main-text-wrap">
              <div className="careers__main-title">
                <span className={inView ? "to_animate" : ""}>
                  {props.mainTitle}
                </span>
              </div>

              <div className="careers__main-content-wrap">
                <div
                  className={
                    inView
                      ? "careers__main-content to_animate"
                      : "careers__main-content"
                  }
                >
                  <p>{props.mainText}</p>
                </div>

                <LinkTo
                  linkTo="/careers"
                  text="text"
                  animate={inView ? true : false}
                >
                  More Details
                </LinkTo>
              </div>
            </div>

            <div className="careers__main-img-box">
              <div className="careers__main-first-img-wrap">
                <div className="careers__main-img-wrap">
                  <div
                    className={inView ? "overlay to_animate" : "overlay"}
                  ></div>
                  <img
                    className={inView ? "to_animate" : ""}
                    src={props.srcImg[0]}
                    alt="careers"
                  />
                </div>
              </div>

              <div className="careers__main-second-img-wrap">
                <div className="careers__main-img-wrap">
                  <div
                    className={inView ? "overlay to_animate" : "overlay"}
                  ></div>
                  <img
                    className={inView ? "to_animate" : ""}
                    src={props.srcImg[1]}
                    alt="careers"
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

export default CareersSection;
