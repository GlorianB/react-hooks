import React, { useState } from 'react';

import CustomInput from './components/CustomInput';

import './App.css';

function App() {
  const [name, setName] = useState('Jean');
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);


  const handleClick = (event) => {
    console.log(event);
    event.preventDefault();
    setName('John');
  }

  const handleOnChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  }


  return (
    <>
      <h1>{ input }</h1>
      <p>{ name }</p>
      <button onClick={ handleClick }>Modifier le nom !</button>
      <input value={ input } onChange={ handleOnChange }></input>
      <CustomInput tasks={ tasks } setTasks={ setTasks }/>
      <ul>
        { tasks.map((task, index) => {
          return <li key={ index }><p>{ task }</p></li>
        }) }
      </ul>
    </>
  );
}

export default App;
