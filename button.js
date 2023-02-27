import React from 'react';
export default function button (props){
    const theme = props.theme
    return(
        <>
            <button 
            onClick={props.onClick}
            style={{
                color: theme === 'dark'? '#fff': '#000',
                background:theme === 'dark'? '#000':"#fff"
            }}
            >
                {props.children}
            </button>
        </>
    )
}