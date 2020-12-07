import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, connect } from './actions';

function App() {

  const test = useSelector((state) => console.log(state));
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.isLoggedReducer);
  const dispatch = useDispatch();

  const handleIncrement = (event) => {
    event.preventDefault();
    dispatch(increment());
  }

  const handleDecrement = (event) => {
    event.preventDefault();
    dispatch(decrement());
  }

  const handleConnect = (event) => {
    event.preventDefault();
    dispatch(connect());
  }

  return (
    <div className="App">
      <h1>Counter { counter }</h1>
      { isLogged && <h3>Information necessitant une connexion</h3> }
      <button onClick={handleConnect}>Connexion/Deconnexion</button>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
