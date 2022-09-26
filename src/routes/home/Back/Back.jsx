import React from 'react';
import s from './Back.module.css';

// import Redux
import {useDispatch, useSelector} from 'react-redux';

export default function Back() {
  const dispatch = useDispatch();
  const selector = useSelector(select => select.ReducerActive.chengeActive);

  return (
    <div 
        style={{display: selector ? '' : 'none'}} 
        className={s.Back}
        onClick={() => dispatch({type: 'chengeActive'})}
        ></div>
  )
}
