import React, { Fragment } from "react";
import HeroSection from "../../components/HeroSection";
import Investment from "../../components/Investment";
import OverView from "../../components/OverView";
import { homeData } from "./HomeData";

function Home() {
  return (
    <Fragment>
      <HeroSection
        heroTitle={homeData.heroTitle}
        srcImg={homeData.srcHeroImg}
      />
      <OverView
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
      <Investment
        title={homeData.investmentTitle}
        content={homeData.investmentContent}
        srcImg={homeData.srcInvestmentImg}
      />
      
    </Fragment>
  );
}

export default Home;
