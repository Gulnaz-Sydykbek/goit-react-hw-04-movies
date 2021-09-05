import { useState, useEffect } from 'react';
import * as searchMovies from '../../service/movies-api';
import SearchBar from '../../components/SearchBar/SearchBar';
import MoviePageList from './MoviePageList';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader';

function MoviePage() {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (!movieName) {
      return;
    }

    setStatus('pending');

    searchMovies
      .fetchMoviesByName(movieName)
      .then(movies => {
        setMovies(movies.results);
        setStatus('resolved');
      })
      .catch(error => {
        toast.error('Something went wrong. Please, try again.');
        setStatus('rejected');
      });
  }, [movieName]);

  const handleFormSubmit = movieName => {
    setMovieName(movieName);
    setStatus('idle');
    setMovies(null);
  };

  return (
    <main>
      <SearchBar onFormSubmit={handleFormSubmit} />

      {status === 'pending' && <Loader />}
      {status === 'resolved' && <MoviePageList movies={movies} />}
    </main>
  );
}

export default MoviePage;
