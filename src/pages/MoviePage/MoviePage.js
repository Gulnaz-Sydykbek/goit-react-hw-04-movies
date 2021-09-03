import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import '../HomePage/HomePage.css';
import * as searchMovies from '../../service/movies-api';
import SearchBar from '../../components/SearchBar/SearchBar';
import defaultImages from '../../images/defaultImg.jpg';

function MoviePage() {
  const { url } = useRouteMatch();

  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (!movieName) {
      return;
    }

    searchMovies
      .fetchMoviesByName(movieName)
      .then(movies => setMovies(movies.results));
  }, [movieName]);

  const handleFormSubmit = movieName => {
    setMovieName(movieName);
  };

  console.log(movieName);
  console.log(movies);

  return (
    <main>
      <SearchBar onFormSubmit={handleFormSubmit} />

      <ul className="ImageGallery">
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id} className="ImageGalleryItemIMG">
                <Link to={`${url}/${movie.id}`}>
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                      className="ImageGalleryItemImage"
                    />
                  ) : (
                    <img
                      src={defaultImages}
                      alt={movie.title}
                      width="270"
                      height="410"
                    />
                  )}

                  <p>{movie.title}</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </main>
  );
}

export default MoviePage;
