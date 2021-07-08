import React, { Fragment } from "react";
import ApproachSection from "../../components/About-us/ApproachSection";
import DetailedRemark from "../../components/About-us/DetailedRemark";
import IntroductionSection from "../../components/About-us/IntroductionSection";
import ManagementSection from "../../components/About-us/ManagementSection";
import QuoteSection from "../../components/About-us/QuoteSection";
import StrateSection from "../../components/About-us/StrateSection";
import StructuringSection from "../../components/About-us/StructuringSection";
import ThinkSection from "../../components/About-us/ThinkSection";
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
      <ApproachSection data={aboutData.approach}/>
      <ThinkSection data={aboutData.think}/>
      <StructuringSection data={aboutData.structuring}/>
      <ManagementSection data={aboutData.management}/>
      <StrateSection data={aboutData.strate}/>
    </Fragment>
  );
}

export default AboutUs;
