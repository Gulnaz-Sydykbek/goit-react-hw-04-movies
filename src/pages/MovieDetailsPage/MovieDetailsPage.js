import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader';
import s from './MovieDetails.module.css';
import * as movieDetailsAPI from '../../service/movies-api';
import MovieDetailsPageList from './MovieDetailsPageList';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "Cast"*/));
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "Reviews"*/),
);

function MovieDetailsPage(props) {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const {
    MainClose,
    CastRevContainer,
    LinkContainer,
    Link,
    ActiveLink,
    Close,
  } = s;

  const [movie, setMovie] = useState(null);
  const [wayName, setWayName] = useState('');

  useEffect(() => {
    movieDetailsAPI
      .fetchMovieDetalsPage(movieId)
      .then(setMovie)
      .catch(error => {
        toast.error('Something went wrong. Please, try again.');
      });

    setWayName(props.location.state.from.pathname);
  }, [movieId]);

  console.log(location.state.from.pathname === `${wayName}`);
  console.log(location.state.from.pathname);
  console.log(wayName);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  /*const onGoBack = () => {
    if (location.state.from.pathname === `/movies/${movieId}`) {
      if (location.state.from.state.search === 'homePage') {
        history.push('/');
      }

      if (location.state.from.state.search === 'moviePage') {
        history.push('/movies');
      }
    }

    if (
      location.state.from.pathname === '/' ||
      location.state.from.pathname === '/movies'
    ) {
      history.push(location?.state?.from ?? '/');
    }
  };*/

  return (
    <>
      <button type="button" onClick={onGoBack} className={MainClose}>
        Go back
      </button>

      {movie && <MovieDetailsPageList movie={movie} />}

      <div className={CastRevContainer}>
        <h3>Additional information</h3>

        <ul className={LinkContainer}>
          <li>
            <NavLink
              to={{ pathname: `${url}/cast`, state: { from: location } }}
              className={Link}
              activeClassName={ActiveLink}
            >
              Cast
            </NavLink>
          </li>

          <li>
            <NavLink
              to={{ pathname: `${url}/reviews`, state: { from: location } }}
              className={Link}
              activeClassName={ActiveLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Suspense fallback={<Loader />}>
          <Route path={`${path}/cast`}>
            <NavLink
              to={{ pathname: `${url}`, state: { from: location } }}
              className={Close}
            >
              Close
            </NavLink>

            <Cast />
          </Route>

          <Route path={`${path}/reviews`}>
            <NavLink
              to={{ pathname: `${url}`, state: { from: location } }}
              className={Close}
            >
              Close
            </NavLink>

            <Reviews />
          </Route>
        </Suspense>
      </div>
    </>
  );
}

export default MovieDetailsPage;
