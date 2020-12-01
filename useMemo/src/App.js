import React, { useState, useMemo } from 'react';

function App() {
  const [number, setNumber] = useState(2);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    console.log('update')
    return slowFunction(number)
  }, [number]);
  // const doubleNumber = slowFunction(number);

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'gray',
    color: dark ? 'gray' : 'black'
  };

  return (
    <>
      <input type='number' value={ number } onChange={ (e) => setNumber(parseInt(e.target.value)) }/>
      <button onClick={() => setDark(!dark)}>Change la couleur</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

const slowFunction = (number) => {
  console.log('fonction lente');
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
}

export default App;
