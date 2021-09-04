import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import defaultImages from '../../images/defaultImg.jpg';
import '../HomePage/HomePage.css';

function MoviePageList(props) {
  const { movies } = props;
  const { url } = useRouteMatch();

  return (
    <ul className="ImageGallery">
      {movies.map(movie => {
        const { id, poster_path, title } = movie;

        return (
          <li key={id} className="ImageGalleryItemIMG">
            <Link to={`${url}/${id}`}>
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                  className="ImageGalleryItemImage"
                />
              ) : (
                <img src={defaultImages} alt={title} className="DefaultImg" />
              )}

              <p className="TitleName">{title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

MoviePageList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.node,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default MoviePageList;
