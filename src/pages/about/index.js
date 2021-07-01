import React, { Fragment } from "react";
import DetailedRemark from "../../components/About-us/DetailedRemark";
import IntroductionSection from "../../components/About-us/IntroductionSection";
import QuoteSection from "../../components/About-us/QuoteSection";
import aboutData from "./AboutData";

function AboutUs() {
  return (
    <Fragment>
      <IntroductionSection
        title={aboutData.introductionTitle}
        mainTitle={aboutData.introductionMainTitle}
        mainText={aboutData.introductionMainText}
        srcImg={aboutData.srcIntroductionImg}
      />
      <QuoteSection
        firstImg={aboutData.quoteFirstImg}
        firstContent={aboutData.quoteFirstContent}
        secondImg={aboutData.quoteSecondImg}
        secondContent={aboutData.quoteSecondContent}
      />
      <DetailedRemark data={aboutData.detailedRemark}/>
    </Fragment>
  );
}

export default AboutUs;
