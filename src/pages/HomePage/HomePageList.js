import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import defaultImages from '../../images/defaultImg.jpg';
import './HomePage.css';

function HomePageList(props) {
  const { movies } = props;

  return (
    <ul className="ImageGallery">
      {movies &&
        movies.map(movie => {
          const { id, poster_path, title } = movie;

          return (
            <li key={id} className="ImageGalleryItemIMG">
              <Link to={`movies/${id}`}>
                {poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                    className="ImageGalleryItemImage"
                  />
                ) : (
                  <img
                    src={defaultImages}
                    alt={title}
                    width="270"
                    height="410"
                  />
                )}
                <p className="TitleName">{title}</p>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

HomePageList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.node,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default HomePageList;
