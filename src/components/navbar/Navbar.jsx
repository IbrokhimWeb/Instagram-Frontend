// @ts-nocheck
import { React } from "react";
import { Link } from "react-router-dom";
import s from "./Navbar.module.css";

// Import Images
import instagramTextLogo from "../../assets/instagram1.png";

// Import Components
import Search from "../search/Search";
import MainNavbar from "./mainNavbar/MainNavbar";

// Import Icons 
import { FiSearch } from "react-icons/fi"


const Navbar = () => {
    return <>
        <section className={s.container}>
            <nav className={s.navbar}>
                <Link to="/">
                    <img className={s.textLogo} src={instagramTextLogo} alt="" />
                </Link>
                <div className={s.actions}>
                    <Search />
                    <MainNavbar />
                </div>
                <div className={s.actionsItem}>
                <FiSearch className={s.search}/>
                <Link className={s.link} to="/">
                    <span className={s.avatar}></span>
                </Link>
                </div>
            </nav>
        </section>
    </>;
};

export default Navbar;
