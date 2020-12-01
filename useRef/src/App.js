import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [name, setName] = useState('');
  const inputRef = useRef();

  const handleOnChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  }

  const handleOnClick = (event) => {
    event.preventDefault();
    const input = inputRef.current;
    input.focus();
  }

  return (
    <>
      <input ref={ inputRef } type='text' value={ name } onChange={ handleOnChange }/>
      <p> My name is { name }</p>
      <button onClick={ handleOnClick }>Focus</button>
    </>
  );
}

export default App;
