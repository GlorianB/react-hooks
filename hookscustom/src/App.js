import React, { useState, useEffect } from 'react';

import { useTitle } from './customhooks/useTitle';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  useTitle(`Vous avez cliquez ${count} fois`);

  return (
    <>
      <h1> {count} cliques </h1>
      <button onClick={ increment }>+1</button>
    </>
  );
}

export default App;
