import PropTypes from 'prop-types';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import defaultImages from '../../images/defaultImg.jpg';
import s from '../HomePage/HomePage.module.css';

function MoviePageList(props) {
  const { movies } = props;
  const { url } = useRouteMatch();
  const location = useLocation();
  const { Gallery, GalleryItemIMG, GalleryItemImage, DefaultImg, TitleName } =
    s;

  return (
    <ul className={Gallery}>
      {movies.map(movie => {
        const { id, poster_path, title } = movie;

        return (
          <li key={id} className={GalleryItemIMG}>
            <Link
              to={{
                pathname: `${url}/${id}`,
                state: {
                  search:
                    location && props.locationSearch
                      ? props.locationSearch
                      : '',
                  from: props.location.pathname,
                },
              }}
            >
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                  className={GalleryItemImage}
                />
              ) : (
                <img src={defaultImages} alt={title} className={DefaultImg} />
              )}

              <p className={TitleName}>{title}</p>
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
