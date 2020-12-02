import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Profile from './components/Profile';

import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/' exact><Home /></Route>

          <Route path='/profile/:id'><Profile name='name'/></Route>
          <Route path='/profile'><Profile name='name'/></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
