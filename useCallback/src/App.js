import React, { useEffect, useState, useMemo, useCallback } from 'react';

import Enfant from './components/Enfant';

function App() {
  const [dark, setDark] = useState(true);
  const [number, setNumber] = useState(2);

  const [name, setName] = useState('');

  // const doubleNumber = () => {
  //   const result = fonctionLente(number);
  //   return result;
  // }
  const doubleNumber = useMemo(() => {
    return fonctionLente(number);
  }, [number])


  const callback = useCallback(() => {
    console.log(name);
  }, [name])

  const themeStyles = {
    backgroundColor: dark ? '#333' : '#CCC',
    color: dark ? '#CCC' : '#333'
  };

  const handleChangeTheme = (event) => {
    event.preventDefault();
    setDark(!dark);
  }

  const handleChangeNumber = (event) => {
    event.preventDefault();
    setNumber(parseInt(event.target.value));
  }

  return (
    <div className="App">
      <input type='number' value={ number } onChange={ handleChangeNumber }></input>
      <input value={ name } onChange={ (e) => setName(e.target.value) }></input>
      <button onClick={ handleChangeTheme }>Change theme</button>
  <div style={ themeStyles }>{ doubleNumber }</div>
    <Enfant callback={ callback }/>
    </div>
  );
}

const fonctionLente = (number) => {
  console.log('fonction lente');
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
}

export default App;
