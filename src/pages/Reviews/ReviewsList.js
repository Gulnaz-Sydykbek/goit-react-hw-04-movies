import './Reviews.css';

function ReviewsList(props) {
  const { reviews } = props;

  return (
    <ul>
      {reviews.length !== 0 ? (
        reviews.map(review => {
          return (
            <li key={review.id}>
              <h4 className="Author">Author: {review.author}</h4>
              <p className="Review">{review.content}</p>
            </li>
          );
        })
      ) : (
        <h4>We don't have any reviews for this movie.</h4>
      )}
    </ul>
  );
}

export default ReviewsList;
