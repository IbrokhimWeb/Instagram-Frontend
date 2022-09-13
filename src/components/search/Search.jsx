// @ts-nocheck
import React from 'react';
import s from "./Search.module.css";

// Import Icons 
import { BiSearch } from "react-icons/bi";


const Search = () => {
  return (
    <div className={s.search}>
      <BiSearch className={s.search__icon}/><input type="search" placeholder="Поиск" />
    </div>
  )
}

export default Search