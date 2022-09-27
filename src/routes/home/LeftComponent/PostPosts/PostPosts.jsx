import React from 'react';
import s from './PostPosts.module.css';

// import Contents
import Contents from '../Contents/Contents';

export default function PostPosts({active, pagesX, pagesY, avatar, name, firstName, lastName}) {
  return (
    <div style={{
        // visibility: active ? 'visible' : 'hidden',
        // opacity: active ? '1' : '0',
        // left: pagesX,
    }} className={s.PostPostsBox}>
        
        {/* Content start */}
        <div className={s.PostPostsContent}>
            <Contents 
                    avatar={avatar} 
                    widths='2.8'
                    displays='none'/>

            <div className={s.ContentTitle}>
                <h4>{name}</h4>
                <div className={s.FullName}>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                </div>
            </div>
        </div>
        {/* Content end */}

    </div>
  )
}
