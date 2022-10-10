import React from 'react';
import s from './PostAction.module.css';

// import Redux
import {useSelector, useDispatch} from 'react-redux';

export default function PostAction() {
  const dispatch = useDispatch();
  const selector = useSelector(select => select.ReducerActive.chengeActive);
  let activeArray = [s.PostActions];
  if(selector){
    activeArray.push(s.actives);
  }
  
  return (
    <div className={activeArray.join(' ')}>
      <a href="#">Пожловаться</a>
      <a href="#">Отменить подписку</a>
      <a href="#">Добавит в избрфнное</a>
      <a href="#">Перейти к публикации</a>
      <a href="#">Поделиться</a>
      <a href="#">Копировать ссылку</a>
      <a href="#">Вставить насайт</a> 
      <a href="#" onClick={() => dispatch({type: 'chengeActive'})}>Отмени</a>
    </div>
  )
}
