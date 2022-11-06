export function useApi() {
  const API_URL = "https://api.themoviedb.org/3/";
  const ACCESS_TOKEN = "15c1f35b15f19859a40a3ad063979cb9";
  const DEFAULT_PARAMS = `?api_key=${ACCESS_TOKEN}&language=es`;

  const getMovies = (extraParams = "") => {
    return useFetch(`${API_URL}discover/movie${DEFAULT_PARAMS}&${extraParams}`);
  };

  const getMovie = (id) => {
    return useFetch(`${API_URL}movie/${id}${DEFAULT_PARAMS}`);
  };

  const getSimilarMovies = (id) => {
    return useFetch(`${API_URL}movie/${id}/similar${DEFAULT_PARAMS}`);
  };

  const getGnreMovie = () => {
    return useFetch(`${API_URL}genre/movie/list${DEFAULT_PARAMS}`);
  };

  return { getMovies, getMovie, getSimilarMovies, getGnreMovie };
}

const useFetch = async (url, options = {}) => {
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json;
  } catch (err) {
    return err;
  }
};
