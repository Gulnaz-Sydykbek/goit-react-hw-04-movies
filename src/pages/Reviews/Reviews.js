import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as moviesRevies from '../../service/movies-api';
import ReviewsList from './ReviewsList';

function Reviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesRevies
      .fetchMoviesReviews(movieId)
      .then(reviews => setReviews(reviews.results))
      .catch(error => {
        toast.error('Something went wrong. Please, try again.');
      });
  }, [movieId]);

  return <div>{reviews && <ReviewsList reviews={reviews} />}</div>;
}

export default Reviews;
