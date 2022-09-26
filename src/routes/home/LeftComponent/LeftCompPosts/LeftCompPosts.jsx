import React, {useRef, useState, useEffect} from 'react';
import s from './LeftCompPosts.module.css';

// import Redux
import {useSelector, useDispatch} from 'react-redux';

// import from Contents
import Contents from '../Contents/Contents';
import PostPosts from '../PostPosts/PostPosts';

// import component from singlePage
import ActionsFromSinglePage from '../../../singlePage/actions/Actions';
import InputShareFromSinglePage from '../../../singlePage/inputShare/InputShare';

export default function LeftCompPosts({firstName, lastName, name, avatar, type, urlAdres}) {

  // LeftCompPostsBox Width start
  let leftCompPostBoxRef = useRef();
  const [boxWidth, setBoxWidth] = useState(0);
  useEffect(() => {
    setBoxWidth(compBoxWidth => compBoxWidth = leftCompPostBoxRef.current.offsetWidth);
  }, []);
  // LeftCompPostsBox Width end

  const dispatch = useDispatch();
  const selector = useSelector(select => select.ReducerActive);

  return (
    <div className={s.LeftCompPostsBox} ref={leftCompPostBoxRef}>
        {/* LeftCompPosts PostsBox */}
        <div className={s.BoxPosts}>

          {/* Hover Content start */}
          <PostPosts active={selector.contentActive} 
                     pagesX={selector.pagesX - boxWidth}
                     avatar={avatar}
                     name={name}
                     firstName={firstName}
                     lastName={lastName}
          />
          {/* Hover Content end */}

          <div onMouseEnter={(elem) => dispatch({
                                        type: 'contentActive',
                                        payloadX: elem.screenX,
                                      })} 
               onMouseLeave={() => dispatch({
                                        type: 'contentActiveRemove'
                                      })}                       
                                      className={s.BoxPostsTitle}>

            <Contents widths='2.2' displays='none' avatar={avatar}/>
            <h4>{name}</h4>
          </div>
          <button onClick={() => dispatch({type: 'chengeActive'})} >...</button>
        </div>
        {/* /LeftCompPosts PostsBox */}

        {/* LeftCompPosts video or Photos */} 
        <div className={s.PostsVideo}>
          {type === 'video' ? 
            <video controls autoPlay muted loop className={s.PostsVideoContent} src={urlAdres} ></video>
            :
            <img src={urlAdres} className={s.PostsVideoContent} />
          } 
        </div>
        {/* /LeftCompPosts video or Photos */}

        <ActionsFromSinglePage />
        <InputShareFromSinglePage />
    </div>
  )
}
