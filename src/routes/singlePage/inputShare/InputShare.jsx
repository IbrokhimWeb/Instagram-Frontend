import { React, useState } from 'react';
import s from "./InputShare.module.css"

// Import Icons 
import { MdSend } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";


function InputShare(props) {

    const [comment, setComment] = useState('');

    return (
        <>
            <div className={s.inputShare} >
                <BsEmojiSmile
                    onClick={() => console.log("Emoji")}
                    className={s.smile}
                />
                <input
                    onChange={e => setComment(e.target.value)}
                    className={s.input}
                    type="text"
                    placeholder="Добавьте комментарий..."
                />
                <MdSend
                    onClick={() => {
                        comment?.length > 0
                            ? console.log(comment.trim())
                            : console.log("Siz Habar Yozmadingiz !!!")
                    }}
                    className={s.share} />
            </div>
        </>
    );
}

export default InputShare;