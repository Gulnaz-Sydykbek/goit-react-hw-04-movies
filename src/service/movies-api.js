const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'b1f929257613a8009e6ee3984e7228b9';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchPopularMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${KEY}&page=1`,
  );
}

export function fetchMoviesByName(name) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${name}`,
  );
}

export function fetchMovieDetalsPage(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`);
}

export function fetchMoviesCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
  );
}

export function fetchMoviesReviews(movieId) {
  return fetchWithErrorHandling(`
  ${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`);
}
