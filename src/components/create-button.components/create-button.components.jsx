import React from "react";

import "./create-button.styles.scss";


const CreateButton = (props) =>{
    return(
        <button className="button">{ props.tag }</button>
    );
}

export default CreateButton;