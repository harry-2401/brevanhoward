import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { RiArrowDropRightFill } from "react-icons/ri";
import "./OverView.scss";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../OptionAnimation";
import CountUp from "react-countup";

OverView.propTypes = {
  overviewTitle: PropTypes.string,
  overviewContent: PropTypes.string,
  yearHistory: PropTypes.number,
  numberOfMembers: PropTypes.number,
  memberTitle: PropTypes.string,
  memberContent: PropTypes.string,
  numberOfManagers: PropTypes.number,
  managerTitle: PropTypes.string,
  managerContent: PropTypes.string,
  numberOfOffices: PropTypes.number,
  officesTitle: PropTypes.string,
  officesContent: PropTypes.string,
  time: PropTypes.string,
};

OverView.PropsDefault = {
  overviewTitle: "",
  overviewContent: "",
  yearHistory: 0,
  numberOfMembers: 0,
  memberTitle: "",
  memberContent: "",
  numberOfManagers: 0,
  managerTitle: "",
  managerContent: "",
  numberOfOffices: 0,
  officesTitle: "",
  officesContent: "",
  time: "",
};

function OverView(props) {
  const [ref, inView] = useInView({
    threshold: THRESHOLD,
  });

  return (
    <Fragment>
      <section id="overview" ref={ref}>
        <div className="overview__container">
          <div className="overview__text">
            <div className="overview__about-us">
              <div className="overview__about-us-box">
                <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                  <path
                    d="M13.5629 13.5629L45 0.541196L76.4371 13.5629L89.4588 45L76.4371 76.4371L45 89.4588L13.5629 76.4371L0.541196 45L13.5629 13.5629Z"
                    stroke="#ECE9E5"
                  ></path>
                </svg>

                <span className="overview__number">01</span>
              </div>

              <span className="overview__about-us-title">About us</span>
            </div>

            <div className="overview__title">
              <h1 className={inView ? "to_animate" : ""}>{props.overviewTitle}</h1>
            </div>

            <div className="overview__content">
              <p className={inView ? "to_animate" : ""}>{props.overviewContent}</p>
            </div>

            <div className="overview__to-about-us">
              <Link to="/about-us" className="overview__to-about-us">
                More Details
                <RiArrowDropRightFill className="overview__to-about-us-icon" />
              </Link>
            </div>
          </div>

          <div className="overview__desc">
            <div className="overview__desc-his-year">
              <span className={inView ? "to_animate" : ""}>
                {inView ? (
                  <CountUp start={0} end={props.yearHistory} duration={3} />
                ) : (
                  props.yearHistory
                )}
              </span>
              <div className="overview__desc-his-content">
                <p className={inView ? "overview__desc-his-year-title to_animate" : "overview__desc-his-year-title"}>Year History</p>
                <p className={inView ? "overview__desc-his-year-text to_animate" : "overview__desc-his-year-text"}>
                  Investing in global markets, refining and improving our
                  investment processes and delivering results for our clients.
                </p>
              </div>
            </div>

            <div className="overview__desc-info">
              <div className="overview__members">
                <span className="overview__number-members">
                  <p className={inView ? "to_animate" : ""}>
                    {inView ? (
                      <CountUp
                        start={0}
                        end={props.numberOfMembers}
                        duration={3}
                      />
                    ) : (
                      props.numberOfMembers
                    )}
                    +
                  </p>
                </span>

                <span className="overview__title-members">
                  <p className={inView ? "to_animate" : ""}> {props.memberTitle}</p>
                </span>

                <span className="overview__info-members">
                  <p className={inView ? "to_animate" : ""}>{props.memberContent}</p>
                </span>
              </div>

              <div className="overview__managers">
                <span className="overview__number-managers">
                  <p className={inView ? "to_animate" : ""}>
                    {inView ? (
                      <CountUp
                        start={0}
                        end={props.numberOfManagers}
                        duration={3}
                      />
                    ) : (
                      props.numberOfManagers
                    )}
                    +
                  </p>
                </span>

                <span className="overview__title-managers">
                  <p className={inView ? "to_animate" : ""}>{props.managerTitle}</p>
                </span>

                <span className="overview__info-managers">
                  <p className={inView ? "to_animate" : ""}>{props.managerContent}</p>
                </span>
              </div>

              <div className="overview__offices">
                <span className="overview__number-offices">
                  <p className={inView ? "to_animate" : ""}>
                    {inView ? (
                      <CountUp
                        start={0}
                        end={props.numberOfOffices}
                        duration={3}
                      />
                    ) : (
                      props.numberOfOffices
                    )}
                    +
                  </p>
                </span>

                <span className="overview__title-offices">
                  <p className={inView ? "to_animate" : ""}>{props.officesTitle}</p>
                </span>

                <span className="overview__info-offices">
                  <p className={inView ? "to_animate" : ""}>{props.officesContent}</p>
                </span>
              </div>

              <span className="overview__desc-time">{props.time}</span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default OverView;
