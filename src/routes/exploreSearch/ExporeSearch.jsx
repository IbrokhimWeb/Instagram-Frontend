// @ts-nocheck   
import React from "react";
import { recommendedPosts } from "../../static/static";
import s from "./ExploreSearch.module.css";

// import { BsPlayFill } from 'react-icons/bs';
import { FcLike } from 'react-icons/fc';

const ExporeSearch = () => {

    return <div className={s.container}>
        {recommendedPosts?.length > 0
            ? recommendedPosts.map((e, i) =>
                <div key={i} onMouseEnter={() => { }} className={s.item}>
                    {
                        e.type === 'foto'
                            ? <img src={e.url.foto} alt="" />
                            : <video controls autoPlay muted loop className={s.video} src={e.url.video} />
                    }
                    <div className={s.hover}>
                        {/* <FcLike className={s.like} /> {'10k'} */}
                    </div>
                </div>)
            : <h1>Postlar Yo'q</h1>}
    </div>;
};
export default ExporeSearch;