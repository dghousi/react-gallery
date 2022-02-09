import React from "react";

// import "./search-box.style.css";
import { SearchBoxContainer } from "./search-box.styles";

export const SearchBox = ({placeholder, changeHandler}) => {
    return <SearchBoxContainer as='input' type="search" placeholder={placeholder} onChange={changeHandler}/>
};