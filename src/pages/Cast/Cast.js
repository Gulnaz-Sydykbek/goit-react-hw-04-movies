import { useState, useEffect } from 'react';
import * as moviesCast from '../../service/movies-api';

function Cast(props) {
  const movieId = Number(props.movieId);

  const [actors, setActors] = useState(null);

  useEffect(() => {
    moviesCast.fetchMoviesCast(movieId).then(actors => setActors(actors.cast));
  }, [movieId]);

  console.log(actors);
  return (
    <div>
      <ul>
        {actors.map(actor => {
          return (
            <li key={actor}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.original_name}
              />
              <h4>{actor.original_name}</h4>
              <p>{actor.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cast;
