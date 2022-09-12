// @ts-nocheck
import React from "react";
import s from "Home.module.css";

// import from innerComponent
import Post from "./innerComp/Post";

const Home = () => {
  return <div>Home{<Post />}</div>;
};

export default Home;
