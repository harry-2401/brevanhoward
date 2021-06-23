import React, { Fragment } from "react";
import { Link as LinkS } from "react-scroll";
import { CgArrowLongDown} from "react-icons/cg";
import { useInView } from 'react-intersection-observer';
import { THRESHOLD } from "../../OptionAnimation";
import PropTypes from "prop-types";
import "./HeroSection.scss";

HeroSection.propTypes = {
  title: PropTypes.array,
};

HeroSection.PropsDefault = {
  title: [],
}

function HeroSection(props) {
  const [ref, inView] = useInView({
    threshold: THRESHOLD,
  });

  return (
    <Fragment>
      <div className="hero-section" ref={ref}>
        <div className="hero__container">
          <div className="hero__img-background-container">
            <div className="hero__img-background-wrap">
              <div className={inView ? "hero__img-background-wrapper to_animate" : "hero__img-background-wrapper"}>
                <img
                  className={inView ? "hero__img-background to_animate" : "hero__img-background"}
                  src={props.srcImg}
                  alt="hero"
                />
              </div>
            </div>
          </div>
          <div className={inView ? "hero__content to_animate" : "hero__content"}>
            <span className="hero__title">{props.heroTitle[0]}</span>
            <br />
            <span className="hero__title">{props.heroTitle[1]}</span>
          </div>

          <LinkS to="overview" className="hero__icon">
            <CgArrowLongDown className="hero__icon-arrow-down"/>
          </LinkS>
        </div>
      </div>
    </Fragment>
  );
}

export default HeroSection;
