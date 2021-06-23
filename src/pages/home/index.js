import React, { Fragment } from "react";
import HeroSection from "../../components/HeroSection";
import OverView from "../../components/OverView";
import { homeData } from "./HomeData";

function Home(props) {
  return (
    <Fragment>
      <HeroSection heroTitle={homeData.heroTitle} srcImg={homeData.srcHeroImg} />
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

    </Fragment>
  );
}

export default Home;
