import React, {useContext} from 'react';
import { ThemeContext } from './App';
export default function Button(props) {
    const {theme }= useContext(ThemeContext)
    // console.log(context)    
    return (
      <>
        <button
          onClick={props.onClick}
          style={{
            color: theme === 'dark' ? '#fff' : '#000',
            background: theme === 'dark' ? '#000' : '#fff'
          }}
        >
          {props.children}
        </button>
      </>
    );
  }
  