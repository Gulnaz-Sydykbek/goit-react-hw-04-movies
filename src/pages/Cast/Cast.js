import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as moviesCast from '../../service/movies-api';
import CastList from './CastList';

function Cast() {
  const { movieId } = useParams();

  const [actors, setActors] = useState(null);

  useEffect(() => {
    moviesCast
      .fetchMoviesCast(movieId)
      .then(actors => {
        setActors(actors.cast);
      })
      .catch(error => {
        toast.error('Something went wrong. Please, try again.');
      });
  }, [movieId]);

  return <div>{actors && <CastList actors={actors} />}</div>;
}

export default Cast;
