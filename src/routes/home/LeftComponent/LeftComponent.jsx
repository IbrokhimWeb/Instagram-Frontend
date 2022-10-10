import React, {useState, useEffect, useRef} from 'react';
import s from './LeftComponent.module.css';

// import Shamsiddin Hokks
import { useDispatch, useSelector } from 'react-redux';

// import Shamsiddin functions
import Resize from '../../../hooks/ShamsiddinHoks/Resize';
import Sliders from '../../../hooks/ShamsiddinHoks/Sliders';

// import Components
import Contents from './Contents/Contents';
import LeftCompPosts from './LeftCompPosts/LeftCompPosts';

// import icons
import {HiChevronLeft} from 'react-icons/hi';
import {HiChevronRight} from 'react-icons/hi';

// ============================================================================================================
export default function LeftComponent({posts}) {
  // Responsive
  let responsive = [
    {breakpointer: {width: 298, item: 3}},
    {breakpointer: {width: 376, item: 4}},
    {breakpointer: {width: 464, item: 5}},
    {breakpointer: {width: 540, item: 6}},
  ]

  // Import Resize function
  const [container, target, boxWidth, items] = Resize(responsive);

  let postsInner = posts.map((keys, index) => {
    return <Contents key={index} 
                              username={keys.creator.username} 
                              avatar={keys.creator.avatar}
                              boxWidth={boxWidth}
                              />
  });

  // Import Slider function
  const [BtnsSlider, count] = Sliders(items, postsInner);
  console.log(count);

  // import Redux
  const dispatch = useDispatch();
  const selectSliderCount = useSelector(sliderCount => sliderCount.ReducerForSlider);

  return (
    <div ref={target} className={s.LeftComponents}>

      {/* Content  */} 
      <div ref={container} className={s.LeftCopmContentSlide}>

        <button 
          onClick={() => {
            BtnsSlider({type: 'prev'});
            // dispatch({type: 'prev',})
          }}
          className={s.chevronLeft}> <HiChevronLeft /> </button>

        <div style={{transform: `translateX(${count * -boxWidth}px)`}} className={s.LeftCompContentInner}>
          {postsInner}
        </div>

        <button
          onClick={() => BtnsSlider({type: 'next'})}
          className={s.chevronRight}> <HiChevronRight /> </button>

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
