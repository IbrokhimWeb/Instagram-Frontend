import React from 'react';
import s from './LeftComponent.module.css';

// import Components
import Contents from './Contents/Contents';
import LeftCompPosts from './LeftCompPosts/LeftCompPosts';

// import icons
import {HiChevronLeft} from 'react-icons/hi';
import {HiChevronRight} from 'react-icons/hi';

export default function LeftComponent({posts}) {

  return (
    <div className={s.LeftComponents}>

      {/* Content  */}
      <div className={s.LeftCopmContentSlide}>

        <button className={s.chevronLeft}> <HiChevronLeft /> </button>

        <div className={s.LeftCompContentInner}>
          {posts.map((keys, index) => {
              return <Contents key={index} 
                                        username={keys.creator.username} 
                                        avatar={keys.creator.avatar}
                                        />
            })}
        </div>

        <button className={s.chevronRight}> <HiChevronRight /> </button>

      </div>
      {/* /Contents  */}

      {/* Post components */}
      <div className={s.PostComponents}>
        {posts.map((postDatet, index) => { 
          return <LeftCompPosts key={index} 
                                            firstName={postDatet.creator.firstName} 
                                            lastName={postDatet.creator.lastName} 
                                            name={postDatet.creator.username} 
                                            avatar={postDatet.creator.avatar}
                                            type={postDatet.selectedFile.type}
                                            urlAdres={postDatet.selectedFile.url}
                                          />
        })}
      </div>
      {/* /Post components */}

    </div>
  )
}
