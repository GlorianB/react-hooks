import React, { useState, useEffect } from 'react';

function App() {
  const [ressource, setRessource] = useState('posts');
  const [localstate, setLocalstate] = useState([]);

  const getInfos = (resource) => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(response => response.json())
      .then(json => setLocalstate(json))
  }

  useEffect(() => {
      getInfos(ressource);
      console.log('updated');
      return () => {
        console.log('demontage');
      }
  }, [ressource]);

  return (
    <>
      <div>
        <button onClick={ () => setRessource('posts') }>Posts</button>
        <button onClick={ () => setRessource('users') }>Users</button>
        <button onClick={ () => setRessource('comments') }>Comments</button>
      </div>
      <h1>{ ressource }</h1>
  <ul>{ localstate.map((data) => {
    return <li>{JSON.stringify(data)}</li>;
  }) }</ul>
    </>
  );
}

export default App;
