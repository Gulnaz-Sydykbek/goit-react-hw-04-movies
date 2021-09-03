import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './MovieDetails.css';
import defaultImages from '../../images/defaultImg.jpg';
import * as movieDetailsAPI from '../../service/movies-api';
import Cast from '../Cast/Cast';

function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieDetailsAPI.fetchMovieDetalsPage(Number(movieId)).then(setMovie);
  }, [movieId]);

  console.log(movie);

  return (
    <>
      <NavLink to="/">
          Close
      </NavLink>
      
      {movie && (
        <div className="DetailsContainer">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="Image"
            />
          ) : (
            <img
              src={defaultImages}
              alt={movie.title}
              width="270"
              height="410"
            />
          )}
          <ul>
            <li>
              <h2>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p>User Score: {movie.vote_average * 10}%</p>
            </li>
            <li>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </li>
            <li>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map(genre => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
            </li>
          </ul>
        </div>
      )}

      <Cast movieId={movieId} />
    </>
  );
}

export default MovieDetailsPage;
