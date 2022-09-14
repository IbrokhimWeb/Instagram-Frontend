import React from 'react';
import s from "./InputShare.module.css"

// Import Icons 
import { GiFastForwardButton } from "react-icons/gi";
import { BsEmojiSmile } from "react-icons/bs";


function InputShare(props) {
    return (
        <>
            <div className={s.inputShare}>
                <BsEmojiSmile className={s.smile}/>
                <input type="text" placeholder="Добавьте комментарий..." />
                <GiFastForwardButton className={s.share}/>
            </div>
        </>
    );
}

export default InputShare;