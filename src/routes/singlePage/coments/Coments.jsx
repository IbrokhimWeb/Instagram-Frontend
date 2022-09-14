import React from 'react';
import s from "./Coments.module.css";

// Import Images
import coments from "../../../assets/coments.png"

function Coments(props) {
    return (
        <>
            <div className={s.coments}>
                {!true
                    ?
                    'Coments'
                    :
                    <>
                        <img className={s.img} src={coments} alt="" />
                        <br />
                        <h1>Нет комментариев.</h1>
                        <p>Начните переписку.</p>
                    </>
                }
            </div>
        </>
    );
}

export default Coments;