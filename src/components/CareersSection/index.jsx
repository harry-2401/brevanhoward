import React, { Fragment } from "react";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../OptionAnimation";
import PropTypes from "prop-types";
import LinkTo from "../LinkTo";
import "./Careers.scss";

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
          <div className="careers__title-box-wrap">
            <div
              className={
                inView ? "careers__title to_animate" : "careers__title"
              }
            >
              <div className="careers__title-box">
                <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                  <path
                    d="M13.5629 13.5629L45 0.541196L76.4371 13.5629L89.4588 45L76.4371 76.4371L45 89.4588L13.5629 76.4371L0.541196 45L13.5629 13.5629Z"
                    stroke="#ECE9E5"
                  ></path>
                </svg>

                <div className="careers__title-box-number">04</div>
              </div>
              <div className="careers__title-text">{props.title}</div>
            </div>
          </div>

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
