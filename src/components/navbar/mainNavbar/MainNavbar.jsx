import { React } from 'react';
import { Link } from "react-router-dom";
import s from "./MainNavbar.module.css";

// Import Icons
import { AiOutlineCompass, AiOutlineHeart } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { TbSquarePlus } from "react-icons/tb";
import { HiHome } from "react-icons/hi";


function mainNavbar(props) {
    return ( 
        <div className={s.navbar__item}>
                    <ul>
                        <li>
                            <Link className={s.link} to="/">
                                <HiHome className={s.icons} />
                            </Link>
                        </li>
                        <li>
                            <Link className={s.link} to="/direct/inbox">
                                <RiMessengerLine className={s.icons} />
                            </Link>
                        </li>
                        <li>
                            <Link className={s.link} to="/">
                                <TbSquarePlus className={s.icons} />
                            </Link>
                        </li>
                        <li>
                            <Link className={s.link} to="/explore">
                                <AiOutlineCompass className={s.icons} />
                            </Link>
                        </li>
                        <li>
                            <Link className={s.link} to="/heart">
                                <AiOutlineHeart className={s.icons} />
                            </Link>
                        </li>
                    </ul>
                </div>
    );
}

export default mainNavbar;