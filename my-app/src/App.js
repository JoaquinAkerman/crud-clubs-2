import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import ClubList from './components/ClubList';
import ClubDetail from './components/ClubDetail';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Lista de Clubes</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route
          exact
          path='/'
          component={ClubList}
        />
        <Route
          path='/clubs/:id'
          component={ClubDetail}
        />
      </Switch>
    </Router>
  );
}

export default App;
