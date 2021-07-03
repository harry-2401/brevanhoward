import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./Remark.scss";
import { useInView } from "react-intersection-observer";
import { THRESHOLD } from "../../OptionAnimation";
import BoxTitle from "../BoxTitle";

RemarkSection.propTypes = {
  title: PropTypes.string,
  mainTitle: PropTypes.string,
  mainText: PropTypes.array,
};

RemarkSection.PropsDefault = {
  title: "",
  mainTitle: "",
  mainText: [],
};

function RemarkSection(props) {
  const [ref, inView] = useInView({
    threshold: THRESHOLD,
  });

  return (
    <Fragment>
      <section id="remark" ref={ref}>
        <div className="remark__background">
          <img
            className="remark__background-img"
            src={props.srcImg}
            alt="background"
          />
        </div>

        <div className="remark__container">
          <BoxTitle
            number={"02"}
            title={props.title}
            refValue={ref}
            inViewValue={inView}
          />

          <div className="remark__main">
            <div className="remark__main-title">
              <span className={inView ? "to_animate" : ""}>
                {props.mainTitle}
              </span>
            </div>

            <div className="remark__main-box-wrap">
              <div className="remark__main-box-wrapper">
                <div className="remark__main-box">
                  <svg
                    className={inView ? "to_animate" : ""}
                    width="110"
                    height="110"
                    viewBox="0 0 110 110"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M34.1695 34.1695L55 25.5412L75.8305 34.1695L84.4588 55L75.8305 75.8305L55 84.4588L34.1695 75.8305L25.5412 55L34.1695 34.1695Z"
                      stroke="#ECE9E5"
                    />
                    <path
                      opacity="0.2"
                      d="M30.6339 30.6339L55 20.5412L79.3661 30.6339L89.4588 55L79.3661 79.3661L55 89.4588L30.6339 79.3661L20.5412 55L30.6339 30.6339Z"
                      stroke="#ECE9E5"
                    />
                    <path
                      opacity="0.2"
                      d="M16.4918 16.4918L55 0.541196L93.5082 16.4918L109.459 55L93.5082 93.5082L55 109.459L16.4918 93.5082L0.541196 55L16.4918 16.4918Z"
                      stroke="#ECE9E5"
                    />
                  </svg>
                  <div className="remark__main-box-icon">
                    <svg
                      className={inView ? "to_animate" : ""}
                      width="22"
                      height="16"
                      viewBox="0 0 22 16"
                      fill="none"
                    >
                      <path
                        d="M15.6699 9.12891C17.0399 10.0589 17.9999 11.3189 17.9999 12.9989V15.9989H21.9999V12.9989C21.9999 10.8189 18.4299 9.52891 15.6699 9.12891Z"
                        fill="white"
                      ></path>
                      <path
                        d="M13.9999 8C16.2099 8 17.9999 6.21 17.9999 4C17.9999 1.79 16.2099 0 13.9999 0C13.5299 0 13.0899 0.0999998 12.6699 0.24C13.4999 1.27 13.9999 2.58 13.9999 4C13.9999 5.42 13.4999 6.73 12.6699 7.76C13.0899 7.9 13.5299 8 13.9999 8Z"
                        fill="white"
                      ></path>
                      <path
                        d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2Z"
                        fill="white"
                      ></path>
                      <path
                        d="M8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9ZM14 14H2V13.01C2.2 12.29 5.3 11 8 11C10.7 11 13.8 12.29 14 13V14Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div
                  className={
                    inView
                      ? "remark__main-box-text-wrap to_animate"
                      : "remark__main-box-text-wrap"
                  }
                >
                  <div className="remark__main-box-text">
                    {props.mainText[0][0]}
                  </div>

                  <div className="remark__main-box-text">
                    {props.mainText[0][1]}
                  </div>
                </div>
              </div>

              <div className="remark__main-box-wrapper">
                <div className="remark__main-box">
                  <svg
                    className={inView ? "to_animate" : ""}
                    width="110"
                    height="110"
                    viewBox="0 0 110 110"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M34.1695 34.1695L55 25.5412L75.8305 34.1695L84.4588 55L75.8305 75.8305L55 84.4588L34.1695 75.8305L25.5412 55L34.1695 34.1695Z"
                      stroke="#ECE9E5"
                    />
                    <path
                      opacity="0.2"
                      d="M30.6339 30.6339L55 20.5412L79.3661 30.6339L89.4588 55L79.3661 79.3661L55 89.4588L30.6339 79.3661L20.5412 55L30.6339 30.6339Z"
                      stroke="#ECE9E5"
                    />
                    <path
                      opacity="0.2"
                      d="M16.4918 16.4918L55 0.541196L93.5082 16.4918L109.459 55L93.5082 93.5082L55 109.459L16.4918 93.5082L0.541196 55L16.4918 16.4918Z"
                      stroke="#ECE9E5"
                    />
                  </svg>
                  <div className="remark__main-box-icon">
                    <svg
                      className={inView ? "to_animate" : ""}
                      width="24"
                      height="16"
                      viewBox="0 0 24 16"
                      fill="none"
                    >
                      <path
                        d="M4 2H22V0H4C2.9 0 2 0.9 2 2V13H0V16H14V13H4V2ZM23 4H17C16.45 4 16 4.45 16 5V15C16 15.55 16.45 16 17 16H23C23.55 16 24 15.55 24 15V5C24 4.45 23.55 4 23 4ZM22 13H18V6H22V13Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div
                  className={
                    inView
                      ? "remark__main-box-text-wrap to_animate"
                      : "remark__main-box-text-wrap"
                  }
                >
                  <div className="remark__main-box-text">
                    {props.mainText[1][0]}
                  </div>

                  <div className="remark__main-box-text">
                    {props.mainText[1][1]}
                  </div>
                </div>
              </div>

              <div className="remark__main-box-wrapper">
                <div className="remark__main-box">
                  <svg
                    className={inView ? "to_animate" : ""}
                    width="110"
                    height="110"
                    viewBox="0 0 110 110"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M34.1695 34.1695L55 25.5412L75.8305 34.1695L84.4588 55L75.8305 75.8305L55 84.4588L34.1695 75.8305L25.5412 55L34.1695 34.1695Z"
                      stroke="#ECE9E5"
                    />
                    <path
                      opacity="0.2"
                      d="M30.6339 30.6339L55 20.5412L79.3661 30.6339L89.4588 55L79.3661 79.3661L55 89.4588L30.6339 79.3661L20.5412 55L30.6339 30.6339Z"
                      stroke="#ECE9E5"
                    />
                    <path
                      opacity="0.2"
                      d="M16.4918 16.4918L55 0.541196L93.5082 16.4918L109.459 55L93.5082 93.5082L55 109.459L16.4918 93.5082L0.541196 55L16.4918 16.4918Z"
                      stroke="#ECE9E5"
                    />
                  </svg>
                  <div className="remark__main-box-icon">
                    <svg
                      className={inView ? "to_animate" : ""}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5.55553 12.2539H2.6543V17.2459H5.55553V12.2539Z"
                        fill="white"
                      ></path>
                      <path
                        d="M9.41393 9.24609H6.5127V17.2461H9.41393V9.24609Z"
                        fill="white"
                      ></path>
                      <path
                        d="M13.2714 9.24609H10.3701V17.2461H13.2714V9.24609Z"
                        fill="white"
                      ></path>
                      <path
                        d="M17.1297 6.23828H14.2285V17.2463H17.1297V6.23828Z"
                        fill="white"
                      ></path>
                      <path
                        d="M20 18.4961H0V20.0001H20V18.4961Z"
                        fill="white"
                      ></path>
                      <path
                        d="M8.02437 6.752H11.8824L15.0614 3.456L16.1725 4.608L17.3454 0L12.9009 1.248L14.012 2.4L11.2651 5.248H7.40708L3.33301 9.472L4.38239 10.528L8.02437 6.752Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div
                  className={
                    inView
                      ? "remark__main-box-text-wrap to_animate"
                      : "remark__main-box-text-wrap"
                  }
                >
                  <div className="remark__main-box-text">
                    {props.mainText[2][0]}
                  </div>

                  <div className="remark__main-box-text">
                    {props.mainText[2][1]}
                  </div>
                </div>
              </div>

              <div className="remark__main-box-wrapper">
                <div className="remark__main-box">
                  <svg
                    className={inView ? "to_animate" : ""}
                    width="110"
                    height="110"
                    viewBox="0 0 110 110"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M34.1695 34.1695L55 25.5412L75.8305 34.1695L84.4588 55L75.8305 75.8305L55 84.4588L34.1695 75.8305L25.5412 55L34.1695 34.1695Z"
                      stroke="#ECE9E5"
                    />
                    <path
                      opacity="0.2"
                      d="M30.6339 30.6339L55 20.5412L79.3661 30.6339L89.4588 55L79.3661 79.3661L55 89.4588L30.6339 79.3661L20.5412 55L30.6339 30.6339Z"
                      stroke="#ECE9E5"
                    />
                    <path
                      opacity="0.2"
                      d="M16.4918 16.4918L55 0.541196L93.5082 16.4918L109.459 55L93.5082 93.5082L55 109.459L16.4918 93.5082L0.541196 55L16.4918 16.4918Z"
                      stroke="#ECE9E5"
                    />
                  </svg>
                  <div className="remark__main-box-icon">
                    <svg
                      className={inView ? "to_animate" : ""}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22 5V7H19V10H17V7H14V5H17V2H19V5H22ZM19 19H5V5H11V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13H19V19ZM15 13V17H17V13H15ZM11 17H13V9H11V17ZM9 17V11H7V17H9Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div
                  className={
                    inView
                      ? "remark__main-box-text-wrap to_animate"
                      : "remark__main-box-text-wrap"
                  }
                >
                  <div className="remark__main-box-text">
                    {props.mainText[3][0]}
                  </div>

                  <div className="remark__main-box-text">
                    {props.mainText[3][1]}
                  </div>
                </div>
              </div>

              <div className="remark__main-box-wrapper">
                <div className="remark__main-box">
                  <svg
                    className={inView ? "to_animate" : ""}
                    width="110"
                    height="110"
                    viewBox="0 0 110 110"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M34.1695 34.1695L55 25.5412L75.8305 34.1695L84.4588 55L75.8305 75.8305L55 84.4588L34.1695 75.8305L25.5412 55L34.1695 34.1695Z"
                      stroke="#ECE9E5"
                    />
                    <path
                      opacity="0.2"
                      d="M30.6339 30.6339L55 20.5412L79.3661 30.6339L89.4588 55L79.3661 79.3661L55 89.4588L30.6339 79.3661L20.5412 55L30.6339 30.6339Z"
                      stroke="#ECE9E5"
                    />
                    <path
                      opacity="0.2"
                      d="M16.4918 16.4918L55 0.541196L93.5082 16.4918L109.459 55L93.5082 93.5082L55 109.459L16.4918 93.5082L0.541196 55L16.4918 16.4918Z"
                      stroke="#ECE9E5"
                    />
                  </svg>
                  <div className="remark__main-box-icon">
                    <svg
                      className={inView ? "to_animate" : ""}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 1H3C1.9 1 1 2 1 3.22222V16.5556C1 17.7778 1.9 18.7778 3 18.7778H8V21H16V18.7778H21C22.1 18.7778 22.99 17.7778 22.99 16.5556L23 3.22222C23 2 22.1 1 21 1ZM21 16.5556H3V3.22222H21V16.5556Z"
                        fill="white"
                      ></path>
                      <g clipPath="url(#clip0)">
                        <path
                          d="M18.3057 6C17.9249 6 17.6113 6.28488 17.6113 6.63081C17.6113 6.75291 17.6561 6.85465 17.7233 6.97674L15.4833 10.8023C15.4161 10.8023 15.3713 10.8023 15.3489 10.843L13.3553 9.05233C13.3553 8.99128 13.4001 8.95058 13.4001 8.88953C13.4001 8.5436 13.0865 8.25872 12.7057 8.25872C12.3249 8.25872 12.0113 8.5436 12.0113 8.88953C12.0113 8.95058 12.0113 8.99128 12.0561 9.05233L10.0849 10.843C10.0177 10.782 9.97292 10.782 9.90572 10.782C9.79372 10.782 9.70412 10.8227 9.59212 10.843L8.51692 10.1715V10.1308C8.51692 9.78488 8.20332 9.5 7.82252 9.5C7.44172 9.5 7.12812 9.78488 7.12812 10.1308C7.12812 10.1919 7.12812 10.2936 7.17292 10.3547L5.87372 11.718C5.82892 11.718 5.80652 11.718 5.73932 11.718C5.35852 11.718 5.04492 12.0029 5.04492 12.3488C5.04492 12.6948 5.35852 12.9797 5.73932 12.9797C6.12012 12.9797 6.43372 12.6948 6.43372 12.3488C6.43372 12.2878 6.43372 12.186 6.38892 12.125L7.71052 10.7209C7.75532 10.7209 7.77772 10.7209 7.84492 10.7209C7.95692 10.7209 8.04652 10.6802 8.15852 10.6599L9.23372 11.3314V11.3721C9.23372 11.718 9.54732 12.0029 9.92812 12.0029C10.3089 12.0029 10.6225 11.718 10.6225 11.3721C10.6225 11.311 10.6225 11.2703 10.5777 11.2093L12.5489 9.4186C12.6161 9.4186 12.6609 9.4593 12.7281 9.4593C12.7953 9.4593 12.8401 9.4593 12.9073 9.4186L14.8785 11.2093C14.8785 11.2703 14.8337 11.311 14.8337 11.3721C14.8337 11.718 15.1473 12.0029 15.5281 12.0029C15.9089 12.0029 16.2225 11.718 16.2225 11.3721C16.2225 11.25 16.1777 11.1483 16.1105 11.0262L18.3505 7.20058C18.6641 7.26163 18.9777 6.97674 18.9777 6.63081C18.9777 6.28488 18.6865 6 18.3057 6Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.9056 6H5V6.63081H9.9056V6Z"
                          fill="white"
                        ></path>
                        <path
                          d="M10.6 7.26172H5V7.89253H10.6V7.26172Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="14"
                            height="7"
                            fill="white"
                            transform="translate(5 6)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div
                  className={
                    inView
                      ? "remark__main-box-text-wrap to_animate"
                      : "remark__main-box-text-wrap"
                  }
                >
                  <div className="remark__main-box-text">
                    {props.mainText[4][0]}
                  </div>

                  <div className="remark__main-box-text">
                    {props.mainText[4][1]}
                  </div>
                </div>
              </div>

              <div className="remark__main-box-wrapper">
                <div className="remark__main-box">
                  <svg
                    className={inView ? "to_animate" : ""}
                    width="110"
                    height="110"
                    viewBox="0 0 110 110"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M34.1695 34.1695L55 25.5412L75.8305 34.1695L84.4588 55L75.8305 75.8305L55 84.4588L34.1695 75.8305L25.5412 55L34.1695 34.1695Z"
                      stroke="#ECE9E5"
                    />
                    <path
                      opacity="0.2"
                      d="M30.6339 30.6339L55 20.5412L79.3661 30.6339L89.4588 55L79.3661 79.3661L55 89.4588L30.6339 79.3661L20.5412 55L30.6339 30.6339Z"
                      stroke="#ECE9E5"
                    />
                    <path
                      opacity="0.2"
                      d="M16.4918 16.4918L55 0.541196L93.5082 16.4918L109.459 55L93.5082 93.5082L55 109.459L16.4918 93.5082L0.541196 55L16.4918 16.4918Z"
                      stroke="#ECE9E5"
                    />
                  </svg>
                  <div className="remark__main-box-icon">
                    <svg
                      className={inView ? "to_animate" : ""}
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div
                  className={
                    inView
                      ? "remark__main-box-text-wrap to_animate"
                      : "remark__main-box-text-wrap"
                  }
                >
                  <div className="remark__main-box-text">
                    {props.mainText[5][0]}
                  </div>

                  <div className="remark__main-box-text">
                    {props.mainText[5][1]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default RemarkSection;
