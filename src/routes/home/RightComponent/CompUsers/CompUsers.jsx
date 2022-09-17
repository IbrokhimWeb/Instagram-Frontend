import React from 'react';
import s from './CompUsers.module.css';
import fotoUser from '../../../../assets/User.jpg';

export default function CompUsers({firstName, secondName, names,  paddings, heights, sizes}) {
  return (
    <div style={{
      padding: `${paddings}rem 0`,
      height: `${heights}rem`
    }} className={s.rightUsers}>
        <div className={s.rightUsersInner}> 
          <img src={fotoUser} />
          <div className={s.userText}> 
              <h2>{secondName}</h2>
              <p>{firstName}</p>
          </div>
        </div>
        <a style={{
          fontSize: `${sizes}rem`
        }} href='#' >{names}</a>
    </div>
  )
}
