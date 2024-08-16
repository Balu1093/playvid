import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = ({toggleDark}) => {
    const seletedTheme = localStorage.getItem('seletedTheme')
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                defaultChecked ={seletedTheme === 'dark'}
            />
            <label className='dark_mode_label' for='darkmode-toggle' onClick={toggleDark}>
                <Moon />
                <Sun />
            </label>
        </div>
    );
};

export default DarkMode;
