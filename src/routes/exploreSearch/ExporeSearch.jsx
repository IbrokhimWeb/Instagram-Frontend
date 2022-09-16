// @ts-nocheck
import React from "react";
import { recommendedPosts } from "../../static/static";
import s from "./ExploreSearch.module.scss";

import {BsPlayFill} from 'react-icons/bs'
import {FcLike} from 'react-icons/fc'

const ExporeSearch = () => {
  return <div className={s.container}>
    {recommendedPosts.map((index, data) => {
        if(recommendedPosts[data].type == 'foto'){
          return <div key={index} onMouseEnter={()=>{}} className={s.item}>
            <img className="" src={recommendedPosts[data].url.foto} alt="" />
            <div className={s.hover}>
              <FcLike className={s.like}/>
              100k
            </div>
        </div>
        }
        else{
          return <div key={index} className={s.item}>
            <BsPlayFill className={s.icon}/>
            <video className="" src={recommendedPosts[data].url.video}/>
            <div className={s.hover}>
              <FcLike className={s.like}/>
              100k
            </div>
          </div>
        }
      })}
  </div>;
};

export default ExporeSearch;
