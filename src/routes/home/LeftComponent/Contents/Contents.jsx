import React from 'react';
import s from './Contents.module.css';

// import ShimsiddinFunctions
import {LengthFunctions} from '../../../../hooks/ShamsiddinHoks/LengthFunction';

export default function Contents({ 
  displays, 
  widths, 
  avatar, 
  username,
  boxWidth
}){

  // Function for length userName
  const [authorTitle, nameLength] = LengthFunctions(username, 10, 9);

  return (
    <div style={{
      width: `${boxWidth}px`
    }}
     className={s.resizeContentBox}
    >
      <div className={s.LeftCompmContent} style={{pointerEvents: displays}} > 
        <div className={s.LeftCopmFotos} style={{
                                                width: `${widths}rem`,
                                                height: `${widths}rem`
                                               }}>
          <img src={avatar} />
        </div>
        <p style={{display: displays}} >{authorTitle}<span style={{
                                display: nameLength ? 'inline' : 'none' 
                              }}>...</span></p> 
      </div>
    </div>
  )
}
