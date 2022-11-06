<template>
  <div class="mb-5">
    <div class="bg-slate-700 text-white">
      <div class="px-8 py-10">
        <div class="flex gap-x-8">
          <div class="w-1/5 mx-6">
            <img
              :src="item.poster_path"
              alt="Imagen"
              class="w-full object-contain"
            />
          </div>
          <div class="w-4/5 mx-6">
            <div class="my-4">
              <h1 class="text-4xl text-cyan-500 font-bold">
                {{ item.title }}
              </h1>
              <ul class="flex gap-x-6 list-none">
                <li>{{ item.release_date }}</li>
                <li class="list-disc">{{ formattedGenres.join(", ") }}</li>
              </ul>
            </div>

            <div class="my-10">
              <h2 class="text-2xl font-medium">Descripción</h2>
              <p class="text-justify">
                {{ item.overview }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="otherMovies.length" class="mt-5 w-11/12 mx-auto">
      <h2 class="font-medium text-2xl my-5">Otras peliculas</h2>
      <div class="grid grid-cols-5 gap-x-4 gap-y-8">
        <ItemComponent
          v-for="(item, index) in otherMovies"
          :key="index"
          :item="item"
          :show-delete="false"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMovieStore } from "@/stores/movies";

import ItemComponent from "@/components/ItemComponent.vue";

const movieStore = useMovieStore();
const $route = useRoute();
const $router = useRouter();

const item = ref({
  title: "",
  release_date: "",
  overview: "",
  poster_path: "",
});

const formattedGenres = ref([]);
const otherMovies = ref([]);

const loadMovie = async () => {
  item.value = await movieStore.getMovieById($route.params.id);

  if (!item.value.id) {
    return $router.push("/");
  }

  const categories = movieStore.categories.filter((category) =>
    item.value.genre_ids.includes(category.id)
  );
  formattedGenres.value = categories.map((category) => category.name);

  otherMovies.value = movieStore.movies.filter(
    (movie) => movie.id.toString() !== item.value.id.toString()
  );
};

loadMovie();

watch(
  () => $route.params.id,
  () => {
    loadMovie();
  }
);
</script>
