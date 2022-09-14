import React from 'react';
import s from "./Actions.module.css";

// Import Icons 
import { AiOutlineHeart, AiFillEye, AiFillLike, } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import { MdInsertComment } from "react-icons/md";


function Actions(props) {
    return (
        <>
            <div className={s.actions}>
                <div className={s.leftIcons}>
                    <AiOutlineHeart className={s.postLike} />
                    <BsChat className={s.postCommit} />
                    <RiShareForwardLine className={s.postForward} />

                </div>
                <BiBookmark className={s.postSave} />
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