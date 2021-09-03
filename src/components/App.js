import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from './Container/Container';
import Navigation from './Navigation/Navigation';

import HomePage from '../pages/HomePage/HomePage';
import MoviePage from '../pages/MoviePage/MoviePage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';

function App() {
  return (
    <Container>
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviePage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Redirect to="/" />
      </Switch>

      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
