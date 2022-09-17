// @ts-nocheck
import React from "react";
import s from "./Home.module.css";

// Import Components
import LeftComponent from './LeftComponent/LeftComponent';
import RightComponent from './RightComponent/RightComponent';


const Home = () => {
  return (
    <>
      <section className={s.HomeSection}>
        <LeftComponent />
        <RightComponent />
      </section>
    </>
  );
};

export default Home;
