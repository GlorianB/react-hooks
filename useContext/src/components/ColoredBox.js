import React, { useContext } from 'react';

import { ThemeContext } from '../App'

function ColoredBox(props) {
  //Il faut recuperer darkTheme
  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2em',
    margin: '2em'
  }

  return (
    <>
      <div style={ themeStyles }>
        ColoredBox
      </div>
    </>
  );
}

export default ColoredBox;
