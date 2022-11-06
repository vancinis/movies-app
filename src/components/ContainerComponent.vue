<template>
  <div class="w-4/6">
    <div class="grid grid-cols-5 gap-x-4 gap-y-8">
      <ItemComponent
        v-for="(movie, index) in movies"
        :key="index"
        :item="movie"
        @delete-movie="deleteItem"
      />
      <div v-if="!movies.length" class="col-span-5 text-center">
        <h2 class="font-medium text-xl">No hay resultados</h2>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useMovieStore } from "@/stores/movies";

import ItemComponent from "./ItemComponent.vue";

const $route = useRoute();
const movieStore = useMovieStore();

const { getMoviesFilterByCategory, deleteMovie } = movieStore;
const movies = ref(movieStore.movies);

const loadMovies = async () => {
  movies.value = await getMoviesFilterByCategory($route.query.category || "");
};
loadMovies();

const deleteItem = (id) => {
  deleteMovie(id);
  loadMovies();
};

watch(
  () => $route.query.category,
  () => {
    loadMovies();
  }
);
</script>
