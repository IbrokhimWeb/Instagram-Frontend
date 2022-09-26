import React, {useState, useEffect} from 'react';
import s from './Contents.module.css';

// import ShimsiddinFunctions
import {LengthFunctions} from '../../../../hooks/ShamsiddinHoks/LengthFunction';

export default function Contents({ 
  displays, 
  widths, 
  avatar, 
  username
}){

  // Function for length userName
  const [authorTitle, nameLength] = LengthFunctions(username, 10, 9);

  return (
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
  )
}
