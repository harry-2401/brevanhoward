import React, { Fragment } from 'react';
import HeroSection from '../../components/HeroSection';
import heroImg from "../../img/hero.jpg";
// data hero section
const heroTitle = ["macro & derivatives", "excellence"]; // data title
const srcHeroImg = heroImg; // src image


function Home(props) {
  return (
    <Fragment>
      <HeroSection heroTitle={heroTitle} srcImg={srcHeroImg}/>
    </Fragment>
  );
}

export default Home;