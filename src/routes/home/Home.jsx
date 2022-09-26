// @ts-nocheck
import React from "react";
import s from "./Home.module.css";

// Import Components
import LeftComponent from './LeftComponent/LeftComponent';
import RightComponent from './RightComponent/RightComponent';
import PostAction from './PostAction/PostAction';

// import Back component
import Back from './Back/Back';

// Import Posts from Static-date
import {posts} from '../../static/data/home.js';

const Home = () => {
  
  return (
    <>
      <section className={s.HomeSection}>
        <PostAction />
        <Back  />
        <LeftComponent  posts={posts} />
        <RightComponent  posts={posts} />
      </section>
    </>
  );
};

export default Home;
