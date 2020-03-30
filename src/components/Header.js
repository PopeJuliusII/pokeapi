import React from 'react';
import style from './Header.module.css'

const Header = () =>{
    return(
    <nav class={style.hstyle}>
    <ol class={style.gelem}>
        <li class={style.helem}>Lookup</li>
        <li class={style.helem}>My Team</li>
    </ol>
    </nav>
)}

export default Header
