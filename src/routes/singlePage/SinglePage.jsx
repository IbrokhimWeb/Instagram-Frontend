// @ts-nocheck
import React from "react";
import s from "./SinglePage.module.css";

//Imposr Images
import test from "../../assets/test.mp4";
import avatar from "../../assets/test.jpg";

// Import Icons 
import { IoIosMore } from "react-icons/io";

const SinglePage = () => {
    return <>
        <section className={s.container}>
            <div className={s.block}>
                <video controls autoPlay muted loop className={s.content} src={test} ></video>
                {/* <img className={s.content} src={test} alt="" /> */}
                <div className={s.title}>
                    <div className={s.mainSection}>
                        <div className={s.admin}>
                            <img className={s.avatar} src={avatar} alt="" />
                            <h4 className={s.username}>ibrokhimweb <span> • Подписаться</span>  </h4>
                        </div>
                        <IoIosMore className={s.more} />
                    </div>
                    <div className={s.coments}>
                        <h1>Нет комментариев.</h1>
                        <p>Начните переписку.</p>
                    </div>
                    <div className={s}>

                    </div>
                </div>
            </div>
        </section>
    </>;
};

export default SinglePage; 
