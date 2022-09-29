import React from "react";

import "./menu-item.styles.scss";


const MenuItem = (props) =>{
    return(
        <li><button> {props.title} </button></li>
    );
}

export default MenuItem;