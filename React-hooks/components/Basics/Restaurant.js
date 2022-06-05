import React, { useState } from 'react'
// importing the external files
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from './MenuCard';
import Navbar from './Navbar';



// list for navbars classification
const uniqueList = [
    ...new Set(
        // Menu = from API
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];
// --------------------------------------------------------
const Restaurant = () => {
    // @--Hook - call to API
    // @--Props - for making it in loop
    const [menuData, setMenuData] = useState(Menu); // Menu from API
    const [menuList, setMenuList] = useState(uniqueList);


    // for all the category sets navbar
    const filterItem = (category) => {
        if (category === "All") {
            // appear all
            setMenuData(Menu);
            return;
        }
        // else return specific classified menu
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}
export default Restaurant