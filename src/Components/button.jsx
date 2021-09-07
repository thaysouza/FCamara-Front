import "../styles/buttonIndex.css"

import React from 'react';

const Button = (props) => {
    return (
        <>
            <button className="button-style">
                {props.children}
            </button>


        </>
    );
};

export default Button;