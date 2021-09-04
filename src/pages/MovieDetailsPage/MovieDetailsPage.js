import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, NavLink, useRouteMatch, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader';
import s from './MovieDetails.module.css';
import * as movieDetailsAPI from '../../service/movies-api';
import MovieDetailsPageList from './MovieDetailsPageList';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "Cast"*/),);
const Reviews = lazy(() => import('../Reviews/Reviews' /* webpackChunkName: "Reviews"*/),);

function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const { MainClose, CastRevContainer, LinkContainer, Link, ActiveLink, Close } = s;

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieDetailsAPI
      .fetchMovieDetalsPage(movieId)
      .then(setMovie)
      .catch(error => {
        toast.error('Something went wrong. Please, try again.');
      });
  }, [movieId]);

  return (
    <>
      <NavLink to="/" className={MainClose}>
        Go back
      </NavLink>

      {movie && <MovieDetailsPageList movie={movie} />}

      <div className={CastRevContainer}>
        <h3>Additional information</h3>

        <ul className={LinkContainer}>
          <li>
            <NavLink
              to={`${url}/cast`}
              className={Link}
              activeClassName={ActiveLink}
            >
              Cast
            </NavLink>
          </li>

          <li>
            <NavLink
              to={`${url}/reviews`}
              className={Link}
              activeClassName={ActiveLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Suspense fallback={<Loader />}>
          <Route path={`${path}/cast`}>
            <NavLink to={`${url}`} className={Close}>
              Close
            </NavLink>

            <Cast />
          </Route>

          <Route path={`${path}/reviews`}>
            <NavLink to={`${url}`} className={Close}>
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
