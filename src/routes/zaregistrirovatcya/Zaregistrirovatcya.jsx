import React, { useEffect } from 'react';
import s from "./Zaregistrirovatcya.module.css";

// Import Images
import img from "../../assets/qwerty.png";
import img1 from "../../assets/qwerty1.png";
import img2 from "../../assets/qwerty2.png";
import img3 from "../../assets/qwerty3.png";




import textLogo from "../../assets/instagram1.png"
import { useState } from 'react';


function Zaregistrirovatcya(props) {
    const [foto, setFoto] = useState(img);

    // useEffect(()=>{
    //     let i = 0;
    //     let arr = [img, img1, img2, img3,]
        
    //     setInterval(()=>{
    //         while(i < arr.length){
    //             if(i === 3){
    //                 setFoto(arr[0]);
    //                 i = 0
    //             }else{
    //                 // setFoto(arr[i]);
    //                 i++;
    //             }
    //         }
        
    // },3000);
    // }, []);

    return (
        <>
            <section className={s.container}>
                <div className={s.block}>
                    <div className={s.style}>
                        <img className={s.img} src={foto} alt="img" />
                    </div>
                    <div className={s.forma}>
                        <img className={s.textLogo} src={textLogo} alt="instagram" />
                        <input className={s.input} placeholder="Tel yoki email" type="email" />
                        <input className={s.input} placeholder="Parol" type="password" />
                        <button className={s.button} > Submit </button>
                        <div className={s.or}>
                            <span className={s.linia} /> OR <span className={s.linia} />
                        </div>
                        <div>Facebook orqli</div>
                        <p>Parol esdan chiqdimi ?</p>
                        <p>Accauntingiz yo'qmi ? <span>Registratsia</span> </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Zaregistrirovatcya;