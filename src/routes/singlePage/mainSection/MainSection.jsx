import React from 'react';
import s from "./MainSection.module.css";

// Import Image
import avatar from "../../../assets/test.jpg";


// Import Icons 
import { IoIosMore } from "react-icons/io";

function MainSection(props) {
    return (
        <>
            <div className={s.mainSection}>
                <div className={s.admin}>
                    <img className={s.avatar} src={avatar} alt="" />
                    <h4 className={s.username}>ibrokhimweb <span> • Подписаться</span>  </h4>
                </div>
                <IoIosMore className={s.more} />
            </div>
        </>
    );
}

export default MainSection;