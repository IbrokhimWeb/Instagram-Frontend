import React from 'react';
import s from './CompUsers.module.css';
import fotoUser from '../../../../assets/User.jpg';

// import ShamsiddinFunctions for userName
import {LengthFunctions} from '../../../../hooks/ShamsiddinHoks/LengthFunction';

export default function CompUsers({lastName, userName, paddings, heights, sizes}) { 
  
  const [authorTitle, nameLength] = LengthFunctions(lastName, 20, 19);

  return (
    <div style={{
      padding: `${paddings}rem 0`, 
      height: `${heights}rem`
    }} className={s.rightUsers}>
        <div className={s.rightUsersInner}>  
          <img src={fotoUser} />
          <div className={s.userText}>  
              <h2>{userName}</h2>
              <p>{authorTitle}<span style={{display: nameLength ? 'inline' : 'none'}}>...</span></p>
          </div>
        </div>
        <a style={{
          fontSize: `${sizes}rem`
        }} href='#' >Переключиться</a>
    </div>
  )
}
