import React, { Fragment } from "react";
import CareersSection from "../../components/CareersSection";
import ContactSection from "../../components/ContactSection";
import CultureSection from "../../components/CultureSection";
import HeroSection from "../../components/HeroSection";
import InvestmentSection from "../../components/InvestmentSection";
import OverViewSection from "../../components/OverViewSection";
import RemarkSection from "../../components/RemarkSection";
import { homeData } from "./HomeData";

function Home() {
  return (
    <Fragment>
      <HeroSection
        heroTitle={homeData.heroTitle}
        srcImg={homeData.srcHeroImg}
      />
      <OverViewSection
        overviewTitle={homeData.overviewTitle}
        overviewContent={homeData.overviewContent}
        yearHistory={homeData.yearHistory}
        numberOfMembers={homeData.numberOfMembers}
        memberTitle={homeData.memberTitle}
        memberContent={homeData.memberContent}
        numberOfManagers={homeData.numberOfManagers}
        managerTitle={homeData.managerTitle}
        managerContent={homeData.managerContent}
        numberOfOffices={homeData.numberOfOffices}
        officesTitle={homeData.officesTitle}
        officesContent={homeData.officesContent}
        time={homeData.timeOverview}
      />
      <InvestmentSection
        title={homeData.investmentTitle}
        content={homeData.investmentContent}
        srcImg={homeData.srcInvestmentImg}
      />
      <RemarkSection
        title={homeData.remarkTitle}
        mainTitle={homeData.remarkMainTitle}
        mainText={homeData.remarkMainText}
        srcImg={homeData.srcRemarkImg}
      />
      <CultureSection
        title={homeData.cultureTitle}
        mainTitle={homeData.cultureMainTitle}
        mainText={homeData.cultureMainText}
        srcImg={homeData.srcCultureImg}
      />
      <CareersSection
        title={homeData.careersTitle}
        mainTitle={homeData.careersMainTitle}
        mainText={homeData.careersMainText}
        srcImg={homeData.srcCareersImg}
      />
      <ContactSection
        title={homeData.contactTitle}
        mainTitle={homeData.contactMainTitle}
        srcImg={homeData.srcContactImg}
      />
    </Fragment>
  );
}

export default Home;
