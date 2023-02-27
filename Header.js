import React from 'react';
import Button from "./button";
export default function Header(props) {
 return (
   <>
   <h1 >{props.title}</h1>
    {props.children}
    <Button theme={props.theme} onClick={props.onToggleTheme}>
        Mudar Tema
    </Button>
   </>
  );
}
Header.defaultProps={
  title: 'Blog'
}