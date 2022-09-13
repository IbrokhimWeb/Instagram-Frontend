// @ts-nocheck
import { React } from "react";
import { Link } from "react-router-dom";
import s from "./Navbar.module.css";

// Import Images
import instagramTextLogo from "../../assets/instagram1.png";

// Import Components
import Search from "../search/Search";
import MainNavbar from "./mainNavbar/MainNavbar"


const Navbar = () => {
    return <>
        <section className={s.container}>
            <nav className={s.navbar}>
                <Link to="/">
                    <img className={s.textLogo} src={instagramTextLogo} alt="" />
                </Link>
                <Search />
                <MainNavbar />
            </nav>
        </section>
    </>;
};

export default Navbar;
