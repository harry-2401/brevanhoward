import React, { Fragment } from "react";
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
    </Fragment>
  );
}

export default Home;
