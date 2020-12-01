import React, { useState } from 'react';
import PersonneInfo from './components/PersonneInfo';
import Fetch from './components/Fetch';

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <>
      <h1>User ID: { userId }</h1>

      <Fetch url={`https://jsonplaceholder.typicode.com/users/${userId}`}
        render={(data) => <PersonneInfo data={ data } /> }
      />

      <button onClick={ (e) => setUserId(userId + 1) }>+</button>
      <button onClick={ (e) => setUserId(userId - 1) }>-</button>
    </>
  );
}

export default App;
