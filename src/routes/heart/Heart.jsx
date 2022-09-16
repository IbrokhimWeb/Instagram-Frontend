// @ts-nocheck
import React from 'react';
import s from "./Heart.module.css";

// Import Stattic JS
import {heartedPosts} from '../../static/static';

// Import heartBox Component
import HeartBox from './heartBox/heartBox'; 

const Heart = () => {

  return (
    <div className={s.hearts}>
      {heartedPosts.map((items, index) => <HeartBox key={index} {...items} />)}
    </div>
  )
}

export default Heart;