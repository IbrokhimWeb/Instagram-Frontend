import React from 'react';
import s from "./Content.module.css"

//Imposr Images
import test from "../../../assets/test.mp4";
import avatar from "../../../assets/heart-2.jpg";


function Content(props) {
    return (
        <>{
            !false
                ? <video controls autoPlay muted loop className={s.content} src={test} ></video>
                : <img className={s.content} src={avatar} alt="" />
        }
        </>
    );
}

export default Content;