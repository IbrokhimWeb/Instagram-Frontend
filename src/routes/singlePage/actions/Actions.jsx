import React, { useState } from 'react';
import s from "./Actions.module.css";

// Import Icons 
import { AiOutlineHeart, AiFillEye, AiFillLike, AiOutlineComment } from "react-icons/ai";
import { BsHeartFill, BsFillBookmarkDashFill } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import { MdInsertComment } from "react-icons/md";


function Actions(props) {
    const [like, setLike] = useState(false);
    const [save, setSave] = useState(true);

    return (
        <>
            <div className={s.actions}>
                <div className={s.leftIcons}>

                    {
                        like
                            ? <BsHeartFill
                                className={s.likeRed}
                                onClick={e => { return setLike(like => like = !like), console.log("DisLike") }}
                            />
                            : <AiOutlineHeart
                                className={s.postLike}
                                onClick={e => { return setLike(like => like = !like), console.log("Like") }}
                            />
                    }

                    <AiOutlineComment onClick={() => { console.log("chat bo'limi click bo'ldi"); }} className={s.postCommit} />
                    <RiShareForwardLine onClick={() => { console.log("Forward bo'limi click bo'ldi"); }} className={s.postForward} />

                </div>

                {
                    save
                        ? <BiBookmark
                            className={s.postSave}
                            onClick={e => { return setSave(save => save = !save), console.log("Habar saqlandi") }}
                        />
                        : <BsFillBookmarkDashFill
                            className={s.savedActive}
                            onClick={e => { return setSave(save => save = !save), console.log("Saqlangan Xabar olib tashlandi !!!") }}
                        />
                }

            </div>
            <div className={s.actionsResult}>
                <li><AiFillLike /> 3456</li>
                <li><MdInsertComment /> 765 </li>
                <li><AiFillEye className={s.prasmotr} /> 1234</li>
            </div>
        </>
    );
}

export default Actions;