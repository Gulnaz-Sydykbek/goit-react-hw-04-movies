import { useState, useEffect } from 'react';
import * as searchMovies from '../../service/movies-api';
import SearchBar from '../../components/SearchBar/SearchBar';
import MoviePageList from './MoviePageList';
import { toast } from 'react-toastify';

function MoviePage() {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (!movieName) {
      return;
    }

    searchMovies
      .fetchMoviesByName(movieName)
      .then(movies => setMovies(movies.results))
      .catch(error => {
        toast.error('Something went wrong. Please, try again.');
      });
  }, [movieName]);

  const handleFormSubmit = movieName => {
    setMovieName(movieName);
  };

  return (
    <main>
      <SearchBar onFormSubmit={handleFormSubmit} />

      {movies && <MoviePageList movies={movies} />}
    </main>
  );
}

export default MoviePage;
