import React from 'react';

export default function Button(props) {
  const { backgroundColor, text } = props;

  return (
    <button style={{ backgroundColor }}>{text}</button>
  );
}