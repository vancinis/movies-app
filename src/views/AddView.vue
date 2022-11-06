<template>
  <div class="w-2/3 mx-auto my-5">
    <div
      class="bg-white p-6 rounded-md border border-slate-200 shadow-lg shadow-slate-200"
    >
      <form @submit.prevent="createMovie">
        <div class="">
          <label
            for="name"
            class="block mb-1 text-slate-800 text-sm font-medium"
            >Nombre</label
          >
          <input
            id="name"
            v-model="formData.title"
            required
            type="text"
            class="text-sm w-full border-2 border-slate-200 shadow-md shadow-slate-100 rounded-md p-4 h-9 focus:border-cyan-500 outline-none"
            placeholder="Nombre de la pelicula"
          />
        </div>
        <div class="mt-4">
          <label
            for="description"
            class="block mb-1 text-slate-800 text-sm font-medium"
            >Descripción</label
          >
          <textarea
            id="description"
            v-model="formData.overview"
            required
            class="text-sm w-full border-2 border-slate-200 shadow-md shadow-slate-100 rounded-md p-4 focus:border-cyan-500 outline-none"
            name="description"
            cols="30"
            rows="3"
            placeholder="Descripción de la pelicula"
          ></textarea>
        </div>
        <div class="mt-4">
          <label
            for="image"
            class="block mb-1 text-slate-800 text-sm font-medium"
            >Imagen</label
          >
          <input
            id="image"
            type="text"
            v-model="formData.poster_path"
            required
            class="text-sm w-full border-2 border-slate-200 shadow-md shadow-slate-100 rounded-md p-4 h-9 focus:border-cyan-500 outline-none"
            placeholder="URL de la portada"
          />
        </div>
        <div class="mt-4">
          <label
            for="date"
            class="block mb-1 text-slate-800 text-sm font-medium"
            >Fecha de estreno</label
          >
          <input
            id="date"
            type="date"
            v-model="formData.release_date"
            required
            class="text-sm w-full border-2 border-slate-200 shadow-md shadow-slate-100 rounded-md p-4 h-9 focus:border-cyan-500 outline-none"
            placeholder="Fecha de estreno de la pelicula"
          />
        </div>
        <div class="mt-4 text-right">
          <button
            class="rounded-md font-medium bg-cyan-500 text-white px-6 py-2"
            type="submit"
          >
            Crear nuevo
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useMovieStore } from "@/stores/movies";

const movieStore = useMovieStore();
const $router = useRouter();

const formData = ref({
  title: "",
  overview: "",
  poster_path: "",
  release_date: "",
});

const createMovie = () => {
  const movie = movieStore.addMovie(formData.value);
  $router.push("/details/" + movie.id);
};
</script>
