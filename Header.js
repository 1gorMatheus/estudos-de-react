import React, {useContext} from 'react';
import { ThemeContext } from './App';
import Button from "./button";
export default function Header(props) {
  const {onToggleTheme }= useContext(ThemeContext)
 return (
   <>
   <h1 >{props.title}</h1>
    {props.children}
    <Button onClick={onToggleTheme}>
        Mudar Tema
    </Button>
   </>
  );
}
Header.defaultProps={
  title: 'Blog'
}