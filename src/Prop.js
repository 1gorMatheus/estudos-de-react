import React from 'react'
import Button from './button'
export default function App(props) {
  return (
    <div>
      <p>{props.children}</p>
      <Button backgroundColor="red" text="Clique aqui" />
      <Button backgroundColor="blue" text="Clique aqui também" />
    </div>
  );
}