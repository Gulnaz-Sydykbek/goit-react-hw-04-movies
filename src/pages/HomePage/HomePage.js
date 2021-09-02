import { useState, useEffect } from 'react';

const KEY = 'b1f929257613a8009e6ee3984e7228b9';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}&page=1`,
    )
      .then(responce => responce.json())
      .then(movies => setMovies(movies.results));
  }, []);

  console.log(movies);

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default HomePage;
