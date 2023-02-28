import React, {useContext} from 'react';
import { ThemeContext } from './App';
import Button from "./button";
import './Header.css';
export default function Header(props) {
  const {onToggleTheme }= useContext(ThemeContext)
  console.log("tittle1")
 return (
   <>

    <div className="tittle1"><h1>{props.title}</h1>
    {props.children}
    <Button onClick={onToggleTheme}>
        Mudar Tema
    </Button></div>
   </>
  );
}
Header.defaultProps={
  title: 'Blog'
}