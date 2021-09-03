import { useState, useEffect } from 'react';
import { NavLink, Route, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import * as moviesCast from '../../service/movies-api';

function Cast(props) {
  const movieId = Number(props.movieId);
  const {url} = useRouteMatch();
  console.log(url);

  const [actors, setActors] = useState(null);

  useEffect(() => {
    moviesCast.fetchMoviesCast(movieId).then(actors => setActors(actors.cast));
  }, [movieId]);

  console.log(actors);
  return (
    <div>
      <NavLink to={`${url}/cast`}>
        Cast
      </NavLink>

      <Route path={`${url}/:cast`}>

        <NavLink to={`${url}`}>
          Close
        </NavLink>

        <ul>
        {actors && actors.map(actor => {
          return (
            <li key={actor.id}>
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
      </Route>
    </div>
  );
}

export default Cast;
