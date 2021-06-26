import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { THRESHOLD } from "../../OptionAnimation";
import LinkTo from "../LinkTo";
import "./Culture.scss";
import { useInView } from "react-intersection-observer";

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
          <div className="culture__title-box-wrap">
            <div
              className={
                inView ? "culture__title to_animate" : "culture__title"
              }
            >
              <div className="culture__title-box">
                <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                  <path
                    d="M13.5629 13.5629L45 0.541196L76.4371 13.5629L89.4588 45L76.4371 76.4371L45 89.4588L13.5629 76.4371L0.541196 45L13.5629 13.5629Z"
                    stroke="#ECE9E5"
                  ></path>
                </svg>
                <div className="culture__title-box-number">03</div>
              </div>

              <div className="culture__title-text">
                <p>{props.title}</p>
              </div>
            </div>
          </div>

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
                  <div className={inView ? "overlay to_animate" : "overlay"}></div>
                  <img className={inView ? "to_animate" : ""} src={props.srcImg} alt="culture" />
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
