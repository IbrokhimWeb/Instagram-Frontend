import React, {useState} from 'react';
import s from './heartBox.module.css';

// Import Icon
import {BsHeartFill} from 'react-icons/bs';

export default function HeartBox({img, author, title1, title2}) {
  const [state, setState] = useState(false);
   
  return (
    <div className={s.heartBoxes}>
        <BsHeartFill className={s.heartIcon} 
          style={{
            fill: state ? 'crimson' : '#fff'
          }}
          onClick={() => setState(activ => activ = !activ)}
        />
        <img src={img} />
        <div className={s.titles}> 
            <h1>{author}</h1>
            <p>{title1} </p>
            <p>{title2} </p>
        </div>
    </div>
  )
}
