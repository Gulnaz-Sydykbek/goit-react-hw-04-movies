import PropTypes from 'prop-types';
import defaultImages from '../../images/defaultImg.jpg';
import './MovieDetails.css';

function MovieDetailsPageList(props) {
  const {
    movie: { poster_path, title, release_date, vote_average, overview, genres },
  } = props;

  return (
    <div className="DetailsContainer">
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className="Image"
        />
      ) : (
        <img src={defaultImages} alt={title} width="270" height="410" />
      )}
      <ul className="DetailsItems">
        <li className="Items">
          <h2 className="Items">
            {title} ({release_date.slice(0, 4)})
          </h2>
          <p>User Score: {vote_average * 10}%</p>
        </li>
        <li className="Items">
          <h3 className="Items">Overview</h3>
          <p>{overview}</p>
        </li>
        <li className="Items">
          <h3 className="Items">Genres</h3>
          <ul className="GenresContainer">
            {genres.map(genre => {
              const { id, name } = genre;

              return (
                <li className="GenresItems" key={id}>
                  {name}
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
}

MovieDetailsPageList.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.node,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  }),
};

export default MovieDetailsPageList;
