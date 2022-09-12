// @ts-nocheck
import React from "react";
import s from "./MainLoader.module.css";

const MainLoader = () => {
  return (
    <div className={s.loader_content}>
      <div role="main">
        <div className={[s.loader, s.loader6].join(" ")}></div>
      </div>
    </div>
  );
};

export default MainLoader;
