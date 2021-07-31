import srcIntroductionImg from "../../img/introduction.jpg";
import srcQuoteFirstImg from "../../img/quote1.jpg";
import srcQuoteSecondImg from "../../img/quote2.jpg";
import srcDetailedRemarkImg from "../../img/remarkBackground.jpg";
import srcOpproachImg from "../../img/opproach.jpg";
import srcThinkImg from "../../img/think.jpg";
import firstStructuring from "../../img/firstStructuring.jpg";
import secondStructuring from "../../img/secondStructuring.jpg";
import firstManagement from "../../img/firstManagement.jpg";
import secondManagement from "../../img/secondManagement.jpg";
import srcNextCultureImg from "../../img/nextculture.jpg";

const aboutData = {
  //introduction data
  introductionTitle: "introduction",
  introductionMainTitle: "About Us",
  introductionMainText: [
    "Founded in 2002, we are a leading global alternative investment management platform, specialising in global macro. We manage assets for institutional investors around the world including sovereign wealth funds, corporate and public pension plans, foundations and endowments.",
    "We have over 200 team members and 60 portfolio managers with offices in London, New York, Geneva, Jersey, Hong Kong, Edinburgh and Singapore.",
    "The firm is led by CEO, Aron Landy.",
  ],
  srcIntroductionImg: srcIntroductionImg,
  //quote data
  quoteFirstImg: srcQuoteFirstImg,
  quoteFirstContent: [
    "My goal for Brevan Howard is clear: to be the industry leader in macro, macro-RV and derivative trading strategies in terms of performance delivered, client experience and culture.",
    "Aron Landy",
    "CHIEF EXECUTIVE OFFICER",
  ],
  quoteSecondImg: srcQuoteSecondImg,
  quoteSecondContent: [
    "By utilising our exceptional talent base, innovative technology and tenured institutional infrastructure, we seek to deliver the best results possible for our clients whilst staying at the forefront of our evolving industry.",
  ],
  //detailed remark
  detailedRemark: {
    srcImg: srcDetailedRemarkImg,
    title: "Hallmarks of Brevan Howard",
    mainData: [
      {
        id: "detailedRemark1",
        icon: (
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
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
        ),
        title: "Extraordinary People",
        text: "Our deep and diverse talent pool is supported by a collaborative culture where we nurture talent and grow as a community of unique, creative and independent thinkers.",
      },
      {
        id: "detailedRemark2",
        icon: (
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
            <path
              d="M4 2H22V0H4C2.9 0 2 0.9 2 2V13H0V16H14V13H4V2ZM23 4H17C16.45 4 16 4.45 16 5V15C16 15.55 16.45 16 17 16H23C23.55 16 24 15.55 24 15V5C24 4.45 23.55 4 23 4ZM22 13H18V6H22V13Z"
              fill="white"
            ></path>
          </svg>
        ),
        title: "Best-in-Class Technology",
        text: "Heavy investment and ongoing development ensures our team members have the best tools possible to succeed.",
      },
      {
        id: "detailedRemark3",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
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
            <path d="M20 18.4961H0V20.0001H20V18.4961Z" fill="white"></path>
            <path
              d="M8.02437 6.752H11.8824L15.0614 3.456L16.1725 4.608L17.3454 0L12.9009 1.248L14.012 2.4L11.2651 5.248H7.40708L3.33301 9.472L4.38239 10.528L8.02437 6.752Z"
              fill="white"
            ></path>
          </svg>
        ),
        title: "Diversified Investment Products",
        text: "Our broad range of diversified investment products are distinct yet complementary to one another and solve for a wide range of portfolio needs.",
      },
      {
        id: "detailedRemark4",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M22 5V7H19V10H17V7H14V5H17V2H19V5H22ZM19 19H5V5H11V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13H19V19ZM15 13V17H17V13H15ZM11 17H13V9H11V17ZM9 17V11H7V17H9Z"
              fill="white"
            ></path>
          </svg>
        ),
        title: "Outstanding Macro Analysis",
        text: "Our macro analysis & research is our critical differentiator, driving our investment philosophy regardless of investment strategy.",
      },
      {
        id: "detailedRemark5",
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 1H3C1.9 1 1 2 1 3.22222V16.5556C1 17.7778 1.9 18.7778 3 18.7778H8V21H16V18.7778H21C22.1 18.7778 22.99 17.7778 22.99 16.5556L23 3.22222C23 2 22.1 1 21 1ZM21 16.5556H3V3.22222H21V16.5556Z"
              fill="white"
            ></path>
            <g clipPath="url(#clip0)">
              <path
                d="M18.3057 6C17.9249 6 17.6113 6.28488 17.6113 6.63081C17.6113 6.75291 17.6561 6.85465 17.7233 6.97674L15.4833 10.8023C15.4161 10.8023 15.3713 10.8023 15.3489 10.843L13.3553 9.05233C13.3553 8.99128 13.4001 8.95058 13.4001 8.88953C13.4001 8.5436 13.0865 8.25872 12.7057 8.25872C12.3249 8.25872 12.0113 8.5436 12.0113 8.88953C12.0113 8.95058 12.0113 8.99128 12.0561 9.05233L10.0849 10.843C10.0177 10.782 9.97292 10.782 9.90572 10.782C9.79372 10.782 9.70412 10.8227 9.59212 10.843L8.51692 10.1715V10.1308C8.51692 9.78488 8.20332 9.5 7.82252 9.5C7.44172 9.5 7.12812 9.78488 7.12812 10.1308C7.12812 10.1919 7.12812 10.2936 7.17292 10.3547L5.87372 11.718C5.82892 11.718 5.80652 11.718 5.73932 11.718C5.35852 11.718 5.04492 12.0029 5.04492 12.3488C5.04492 12.6948 5.35852 12.9797 5.73932 12.9797C6.12012 12.9797 6.43372 12.6948 6.43372 12.3488C6.43372 12.2878 6.43372 12.186 6.38892 12.125L7.71052 10.7209C7.75532 10.7209 7.77772 10.7209 7.84492 10.7209C7.95692 10.7209 8.04652 10.6802 8.15852 10.6599L9.23372 11.3314V11.3721C9.23372 11.718 9.54732 12.0029 9.92812 12.0029C10.3089 12.0029 10.6225 11.718 10.6225 11.3721C10.6225 11.311 10.6225 11.2703 10.5777 11.2093L12.5489 9.4186C12.6161 9.4186 12.6609 9.4593 12.7281 9.4593C12.7953 9.4593 12.8401 9.4593 12.9073 9.4186L14.8785 11.2093C14.8785 11.2703 14.8337 11.311 14.8337 11.3721C14.8337 11.718 15.1473 12.0029 15.5281 12.0029C15.9089 12.0029 16.2225 11.718 16.2225 11.3721C16.2225 11.25 16.1777 11.1483 16.1105 11.0262L18.3505 7.20058C18.6641 7.26163 18.9777 6.97674 18.9777 6.63081C18.9777 6.28488 18.6865 6 18.3057 6Z"
                fill="white"
              ></path>
              <path d="M9.9056 6H5V6.63081H9.9056V6Z" fill="white"></path>
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
        ),
        title: "Structuring Expertise",
        text: "We leverage our structuring expertise to optimise the investment outcomes of our research ideas.",
      },
      {
        id: "detailedRemark6",
        icon: (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
              fill="white"
            ></path>
          </svg>
        ),
        title: "Excellence in Risk Management",
        text: "Extensive use and continual development of stress testing allows us to examine tail risks and mitigate potential loss scenarios.",
      },
    ],
  },
  // approach data section
  approach: {
    title: "investment approach",
    mainTitle: ["Three Pillars", "of Expertise"],
    mainText: [
      "Our investment approach combines directional, relative value and derivative trading strategies designed to deliver orthogonal but complementary return streams across a broad range of investment solutions.",
      "We differentiate our investment process via our three core pillars of expertise in macro thinking, trade structuring and risk management.",
    ],
    desc: {
      srcImg: srcOpproachImg,
      data: [
        {
          number: "1",
          title: "Macro Thinking",
          text: "Global macro research serves as the backbone of our investment process.",
        },
        {
          number: "2",
          title: "Trade Structuring",
          text: "We seek to structure convex trades, where the upside potential significantly outweighs the downside.",
        },
        {
          number: "3",
          title: "Risk Management",
          text: "Our risk management process focuses on maximising potential returns while protecting capital invested.",
        },
      ],
    },
  },
  //think section
  think: {
    titleNumber: "01",
    title: ["Macro", "Thinking"],
    srcImg: srcThinkImg,
    mainData: [
      {
        id: "thinkSection1",
        title: "Research & Analysis",
        text: "We leverage our global network of independent and critical thinkers to support our research process.",
      },
      {
        id: "thinkSection2",
        title: "Debate & Challenge",
        text: "We encourage information flow and transparency throughout the firm, maintaining a community of creative, free-thinking investment professionals where original and differentiated thought is encouraged, and views are challenged.",
      },
      {
        id: "thinkSection3",
        title: "Non-Consensus",
        text: "We believe in the power and value of contrarian thought. Intellectual humility, flexibility and imagination are critical to long term success.",
      },
    ],
  },
  //structuring data section
  structuring: {
    titleNumber: "02",
    title: ["Trade", "Structuring"],
    srcImg: [firstStructuring, secondStructuring],
    text: [
      {
        id: "text01",
        content:
          "Structuring trades with inherent asymmetric P&L potential allows us to better understand the probabilities of different outcomes as priced by the markets and create attractive risk-reward outcomes.",
      },
      {
        id: "text02",
        content:
          "We create asymmetry using options and option-like trading structures, as well as through the disciplined use of stop losses.",
      },
      {
        id: "text03",
        content:
          "Views on optimal trade structuring are discussed and debated alongside market views. Team members are encouraged to leverage each other’s particular skills in trade structuring across various markets in order to enhance outcomes.",
      },
    ],
  },

  //management data section
  management: {
    titleNumber: "03",
    title: ["Risk", "Management"],
    srcImg: [firstManagement, secondManagement],
    mainData: [
      {
        id: "management1",
        title: "Art & Science",
        text: "Risk management is a combination of art and science that is managed both quantitatively and qualitatively. We apply a rigorous, and often forensic, focus on detail.",
      },
      {
        id: "management2",
        title: "Not Simply a Control Function",
        text: "Risk does not act in a silo and is instead integral to each portfolio manager's investment process and portfolio construction. Each portfolio manager has a bespoke risk mandate and a designated risk manager, assigned to work in close collaboration.",
      },
      {
        id: "management3",
        title: "Focus on Stress Tests & Scenario Analysis",
        text: "Our proprietary bank of stress tests have been developed over almost two decades and is continuously updated. These tools allow us to examine tail risks and mitigate potential loss scenarios.",
      },
    ],
  },
  //strate data section
  strate: {
    title: "investment strategies",
    mainTitle: "Investment Opportunities",
    mainText: [
      "Our investment strategies address a wide range of portfolio needs, actively investing and pursuing opportunities across a broad range of asset classes, instruments, and geographies globally.",
      "The product suite includes multi-portfolio manager strategies, single-portfolio manager strategies and thematic co-investment opportunities.",
      "For further information on all of our strategies, please log in below or ",
    ],
  },

  //culture data section
  culture: {
    title: "Culture",
    srcImg: srcNextCultureImg,
  },
};

export default aboutData;
