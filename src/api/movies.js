const API_KEY = "c4726217";
const BASE_URL = "https://www.omdbapi.com/";

// SEARCH FUNCTION 
const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  const data = await res.json();
  return data.Search || [];
};

// DIFFERENT CATEGORIES
export const getTrendingMovies = () => searchMovies("batman");
export const getPopularMovies = () => searchMovies("avengers");
export const getTopRatedMovies = () => searchMovies("star");
export const getUpcomingMovies = () => searchMovies("mission");

// REMOVE DUPLICATE POSTERS
export const uniqueMovies = (movies) => {
  const seen = new Set();
  return movies.filter((m) => {
    if (seen.has(m.Poster)) return false;
    seen.add(m.Poster);
    return true;
  });
};