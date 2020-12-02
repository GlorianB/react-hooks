import './App.css';
import { useEffect, useState } from 'react';

import { PersonneInfo } from './components/PersonneInfo';
import Fetch from './components/Fetch';

const URL = 'https://jsonplaceholder.typicode.com/users/';

function App() {
  const [userId, setUserId] = useState(1);

  const handlePlus = (event) => {
    event.preventDefault();
    setUserId(userId + 1)
  };

  const handleMinus = (event) => {
    event.preventDefault();
    setUserId(userId - 1)
  };

  return (
    <div className="App">
      <h1>User ID: { userId }</h1>


      <button onClick={ handlePlus } >+</button>
      <button onClick={ handleMinus }>-</button>
      
      <Fetch url={ URL + userId } rend={ (data) => <PersonneInfo data={data} /> }></Fetch>
    </div>
  );
}

export default App;
