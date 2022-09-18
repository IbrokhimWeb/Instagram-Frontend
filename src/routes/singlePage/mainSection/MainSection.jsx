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
                    <img
                        onClick={()=> console.log("Profil")}
                        className={s.avatar}
                        src={avatar} 
                    />
                    <h4 className={s.username}>ibrokhimweb <span onClick={()=> console.log("Подписаться")} > • Подписаться</span>  
                    </h4>
                </div>
                <IoIosMore
                    onClick={() => console.log("More tugmasi bosildi")}
                    className={s.more} 
                />
            </div>
        </>
    );
}

export default MainSection;