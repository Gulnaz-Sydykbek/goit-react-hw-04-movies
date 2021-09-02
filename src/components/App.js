import { Switch, Route } from 'react-router-dom';

import Container from './Container/Container';
import Navigation from './Navigation/Navigation';

import HomePage from '../pages/HomePage/HomePage';

function App() {
  return (
    <Container>
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <div>Movies</div>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
