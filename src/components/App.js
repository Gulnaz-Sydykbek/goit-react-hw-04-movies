import { useState, useEffect } from 'react';

const KEY = 'b1f929257613a8009e6ee3984e7228b9';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`)
      .then(responce => responce.json())
      .then(movies => setMovies(movies.results));
  }, []);

  console.log(movies);
  return <div>Hi</div>;
}

export default App;
