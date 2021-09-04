import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import defaultImages from '../../images/defaultImg.jpg';
import s from './HomePage.module.css';

function HomePageList(props) {
  const { movies } = props;
  const { Gallery, GalleryItemIMG, GalleryItemImage, TitleName } = s;

  return (
    <ul className={Gallery}>
      {movies &&
        movies.map(movie => {
          const { id, poster_path, title } = movie;

          return (
            <li key={id} className={GalleryItemIMG}>
              <Link to={`movies/${id}`}>
                {poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                    className={GalleryItemImage}
                  />
                ) : (
                  <img
                    src={defaultImages}
                    alt={title}
                    width="270"
                    height="410"
                  />
                )}
                <p className={TitleName}>{title}</p>
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
