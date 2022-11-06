import { ref } from "vue";
import { defineStore } from "pinia";
import { useApi } from "../composables/useApi";

export const useMovieStore = defineStore("movies", () => {
  const movies = ref(
    localStorage.getItem("movies")
      ? JSON.parse(localStorage.getItem("movies"))
      : []
  );
  const categories = ref(
    localStorage.getItem("categories")
      ? JSON.parse(localStorage.getItem("categories"))
      : []
  );

  const getMovies = async (extraParams = "") => {
    if (!movies.value.length) {
      const { results } = await useApi().getMovies(extraParams);
      movies.value = results
        ? results.map((item) => {
            return {
              ...item,
              poster_path:
                "https://www.themoviedb.org/t/p/w300_and_h450_face" +
                item.poster_path,
              isFavorite: false,
            };
          })
        : [];
      localStorage.setItem("movies", JSON.stringify(movies.value));
    }

    return movies.value;
  };

  const getCategories = async () => {
    if (!categories.value.length) {
      const result = await useApi().getGnreMovie();
      categories.value = result?.genres || [];

      localStorage.setItem("categories", JSON.stringify(categories.value));
    }

    return categories;
  };

  const getMoviesFilterByCategory = (id = "") => {
    if (!movies.value.length) {
      return getMovies();
    }

    if (!id) {
      return movies.value;
    }

    return movies.value.filter(
      (item) =>
        (id === "favorites" && item.isFavorite) ||
        item.genre_ids.includes(Number(id))
    );
  };

  const getMovieById = async (id) => {
    if (!movies.value.length) {
      await getMovies();
    }

    return movies.value.find((item) => item.id.toString() === id.toString());
  };

  const addMovie = (data) => {
    const movie = {
      ...data,
      id: movies.value.length + 1,
      genre_ids: [],
      isFavorite: false,
    };

    movies.value.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies.value));

    return movie;
  };

  const deleteMovie = (id) => {
    movies.value = movies.value.filter(
      (item) => item.id.toString() !== id.toString()
    );
    localStorage.setItem("movies", JSON.stringify(movies.value));

    return movies.value;
  };

  const addMovieToFavorite = (id) => {
    const findIndex = movies.value.findIndex(
      (item) => item.id.toString() === id.toString()
    );
    if (findIndex === -1) {
      return null;
    }

    movies.value[findIndex].isFavorite = !movies.value[findIndex].isFavorite;
    localStorage.setItem("movies", JSON.stringify(movies.value));
  };

  return {
    movies,
    getMovies,
    categories,
    getCategories,
    getMoviesFilterByCategory,
    getMovieById,
    addMovie,
    deleteMovie,
    addMovieToFavorite,
  };
});
