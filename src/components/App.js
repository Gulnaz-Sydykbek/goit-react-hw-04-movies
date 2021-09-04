import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from './Loader/Loader';
import Container from './Container/Container';
import Navigation from './Navigation/Navigation';

const HomePage = lazy(() => import('../pages/HomePage/HomePage' /* webpackChunkName: "HomePage"*/),);
const MoviePage = lazy(() => import('../pages/MoviePage/MoviePage' /* webpackChunkName: "MoviePage"*/),);
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage"*/),);

function App() {
  return (
    <Container>
      <Navigation />

      <Suspense fallback={<Loader />}>
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
      </Suspense>

      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
