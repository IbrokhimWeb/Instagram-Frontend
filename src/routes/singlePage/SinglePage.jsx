// @ts-nocheck
import React from "react";
import s from "./SinglePage.module.css";

// Import Components
import InputShare from "./inputShare/InputShare";
import Actions from "./actions/Actions";
import MainSection from "./mainSection/MainSection";
import Coments from "./coments/Coments";
import Content from "./content/Content";

const SinglePage = () => {

    return <>
        <section className={s.container}>
            <div className={s.block}>
                <div className={s.content}>
                    <Content />
                </div>
                <div className={s.title}>
                    <MainSection />
                    <div className={s.mediaContent}>
                        <Content />
                    </div>
                    <Coments />
                    <Actions />
                    <InputShare />
                </div>
            </div>
        </section>
    </>;
};

export default SinglePage; 
