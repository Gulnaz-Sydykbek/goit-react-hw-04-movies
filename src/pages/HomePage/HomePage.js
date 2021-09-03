import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import * as popularMoviesAPI from '../../service/movies-api';
import defaultImages from '../../images/defaultImg.jpg';

function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    popularMoviesAPI
      .fetchPopularMovies()
      .then(movies => setMovies(movies.results));
  }, []);

  return (
    <ul className="ImageGallery">
      {movies &&
        movies.map(movie => {
          return (
            <li key={movie.id} className="ImageGalleryItemIMG">
              <Link to={`movies/${movie.id}`}>
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
  );
}

export default HomePage;
